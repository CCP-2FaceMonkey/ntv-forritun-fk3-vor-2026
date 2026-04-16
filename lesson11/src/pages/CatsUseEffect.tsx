import { useState, useEffect, useCallback } from "react";

const API_URL = "https://catfact.ninja/facts?limit=5";

type CatFact = {
  fact: string;
  length: number;
};

export function CatsUseEffect() {
  const [data, setData] = useState<CatFact[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)


  const fetchData = useCallback(async () => {
    const abortController = new AbortController()
    setIsLoading(true)


    try {
      const res = await fetch(API_URL, {
        signal: abortController.signal,
      })
      if (!res.ok) {
        throw new Error("Netowrk response was not okay!")
      }
      const json = await res.json()
      setData(json)
      setError(null)
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        if (retryCount < 3) {
          setRetryCount(c => c + 1)
        } else {
          setError(err)
        }
      }
    } finally {
      setIsLoading(false)
    }

    fetch(API_URL)
      .then(res => res.json())
      .then((data) => {
        setData(data.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError('There was an error')
        setIsLoading(false)
      })

  }, [retryCount])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData()
  }, [fetchData])



  if (error) {
    return <p>{error}</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  console.log(data)
  return null
  return (
    <div>
      {data.data.map(catData => <p key={catData.length}>{catData.fact}</p>)}
    </div >
  );
}

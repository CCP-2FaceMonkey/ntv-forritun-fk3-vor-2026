import { queryClient } from "@/App";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://catfact.ninja/facts?limit=5";

type CatFact = {
  fact: string;
  length: number;
};

// const fetchCatFacts = (): Promise<{ data: CatFact[] }> => fetch(API_URL).then((res) => res.json())

const useCatFactsQuery = () =>
  useQuery<{ data: CatFact[] }>({
    queryKey: ['catfacts'],
    queryFn: () => fetch(API_URL).then((res) => res.json()),
  })


export function CatsReactQuery() {
  const { data, error, isLoading, refetch } = useCatFactsQuery()

  const invalidateQuery = () => {
    // console.log('invalidating')
    // queryClient.invalidateQueries({ queryKey: ['catfacts'] })
    refetch()
  }




  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading || !data) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <button onClick={invalidateQuery}>Invalidate</button>
      {data.data.map(catData => <p key={catData.length}>{catData.fact}</p>)}
    </div >
  );
}



// ( image ) - Gunnsteinn Aron Skúlason
// 32 years old


/*
  - posts
  - 10 images
  - phone number
  ...

*/
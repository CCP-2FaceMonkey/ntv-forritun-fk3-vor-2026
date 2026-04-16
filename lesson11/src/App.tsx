import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '@/components/Layout';
import { IndexPage } from './pages/IndexPage';
import { CatsUseEffect } from './pages/CatsUseEffect';
import { CatsReactQuery } from './pages/CatsReactQuery';
// import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random()
    setTimeout(() => {
      if (true) {
        resolve("resolved");
      } else {
        reject('rejected')
      }
    }, 2000);
  });
}

const asyncCall = async () => {
  // console.log("calling");
  try {
    const result = resolveAfter2Seconds();
    const one = resolveAfter2Seconds();
    const two = resolveAfter2Seconds();
    const three = resolveAfter2Seconds();
    const four = resolveAfter2Seconds();


    const allREady = await Promise.all([result, one, two, three, four])
    console.log('all ready!', allREady)

    console.log({ result, one, two, three, four })

    console.log('got result!', result)
  } catch (error) {
    console.log(error)
  }
  return 10
  // Expected output: "resolved"
}


export const queryClient = new QueryClient()

function App() {



  // const [state, setState] = useState(0)

  // useEffect(() => {
  //   const doAfterAsync = async () => {
  //     const result = await asyncCall()
  //     setState(result)
  //   }

  //   doAfterAsync()
  // }, [])
  // if (state === 0) {
  //   return <div><p>Loading...</p></div>
  // }


  return (

    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="use-effect" element={<CatsUseEffect />} />
          <Route path="react-query" element={<CatsReactQuery />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

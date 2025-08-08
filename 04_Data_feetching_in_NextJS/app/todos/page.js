import SlowResponse1s from "@/components/SlowResponse1s"; 
import SlowResponse2s from "@/components/SlowResponse2s";
import TodosData from "@/components/TodosData";
import { Suspense } from "react";

const Todos = async () => {

  return (
    <>
      <h1>Todos</h1>
      <Suspense fallback={<div>Loading Todos...</div>}>
        <TodosData />
      </Suspense>
      <Suspense fallback={<div>Loading Slow Response 1s...</div>}>
        <SlowResponse1s  />
      </Suspense>
      <Suspense fallback={<div>Loading Slow Response 2s...</div>}>
        <SlowResponse2s />
      </Suspense>
    </>
  );
};

export default Todos;

//Note:- fetch of server side is different from client side , it gives us extra features like caching , prefetching , etc.You can read about them in detail in nextJS documentation

//Note:- Suspense is used to handle loading states in React, especially when dealing with asynchronous data fetching. It allows you to show a fallback UI while the data is being loaded, improving user experience by preventing blank screens during data fetches.

// Also suspense do parallel fetching of data, so it will not wait for one to finish before starting the next one. This is useful when you have multiple data sources that can be fetched independently, as it can significantly reduce the overall loading time of your application.
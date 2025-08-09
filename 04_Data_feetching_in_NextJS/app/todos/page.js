// const Todos = async () => {
//   const todos = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
//   const todosData = await todos.json();
//   //   console.log(todosData);

//   const slowResponse1 = await fetch("https://procodrr.vercel.app/?sleep=1000");
//   const slowResponseData1 = await slowResponse1.json();
//   console.log(slowResponseData1.message);

//   const slowResponse2 = await fetch('https://procodrr.vercel.app/?sleep=3000')
//   const slowResponseData2 = await slowResponse2.json();

//   return (
//     <>
//       <h1>Todos</h1>
//       <div className="todos-container">
//         {todosData.map(({ id, title, completed }) => (
//           <div className="post-card" key={id}>
//             <input type="checkbox" checked={completed} readOnly></input>
//             <p>{title}</p>
//           </div>
//         ))}
//       </div>
//       <div>{slowResponseData1.message}</div>
//       <div>{slowResponseData2.message}</div>
//     </>
//   );
// };

// export default Todos;

// //Note:- fetch of server side is different from client side , it gives us extra features like caching , prefetching , etc.You can read about them in detail in nextJS documentation

const Todos = async () => {
  
  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const [todosData, slowResponseData1, slowResponseData2] = await Promise.all([
    fetchData("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    fetchData("https://procodrr.vercel.app/?sleep=1000"),
    fetchData("https://procodrr.vercel.app/?sleep=3000"),
  ]);

  // const [todosData, slowResponseData1, slowResponseData2] = await Promise.all([
  //   todos.json(),
  //   slowResponse1.json(),
  //   slowResponse2.json()
  // ])

  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {todosData.map(({ id, title, completed }) => (
          <div className="post-card" key={id}>
            <input type="checkbox" checked={completed} readOnly></input>
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div>{slowResponseData1.message}</div>
      <div>{slowResponseData2.message}</div>
    </>
  );
};

export default Todos;

// By using Promise.all, we can fetch multiple resources concurrently, which can significantly reduce the total loading time compared to fetching them sequentially. This is especially useful when the requests are independent of each other.

const Todos = async () => {

    const slowResponse = await fetch('https://procodrr.vercel.app/?sleep=1000')
    const slowResponseData = await slowResponse.json();

  const todos = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const todosData = await todos.json();
//   console.log(todosData);

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
    </>
  );
};

export default Todos;


//Note:- fetch of server side is different from client side , it gives us extra features like caching , prefetching , etc.You can read about them in detail in nextJS documentation

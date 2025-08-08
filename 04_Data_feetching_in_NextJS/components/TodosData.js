export default async function TodosData() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const todosData = await todos.json();
  // console.log(todosData);

  return (
    <div className="todos-container">
      {todosData.map(({ id, title, completed }) => (
        <div className="post-card" key={id}>
          <input type="checkbox" checked={completed} readOnly></input>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

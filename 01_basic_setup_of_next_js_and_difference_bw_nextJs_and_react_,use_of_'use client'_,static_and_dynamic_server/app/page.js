"use client"
/*
By default, components in the app/ directory are server components, which cannot use React client-side hooks like useState, useEffect, etc.
To use these hooks, you need to mark the component as a client component with the "use client" directive.
*/

//Next.js server is a dynamic server because it executes code both i server side as well as client side. babble converts jsx into javascript and then it is converted into HTML. (that's why search engine optimisation of those apps that are created by Next.js , render speed of these apps are also greater than other)

//Vite React uses a static server(only serves files to the browser) => babble converts jsx into javascript then it is sended to the client side.
export default function Home() {
  return (
    <div>
      <button onClick={() => {console.log("button is clicked")}}>
        Click me
      </button>
    </div>
  );
}

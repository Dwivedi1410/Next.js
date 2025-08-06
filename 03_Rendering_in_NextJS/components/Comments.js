export default async function Comments() {
    return(
        <div>2k Comments</div>
    )
}

//Hydration is the process of adding interactivity to the pre rendered pages.

//Hydration errors aree not shown in the production build.

//Hydration error are shown when the HTML send by the server dosn't match with the HTML shown in the browser.
// Means component rendered on the serveer and component rerendered on the client side not differnt.

//Methods likee Math.random() and Date.now() give hydration error becuase when Math.random() execute on server it gives some other vale and when it execute on the client side it gives some other vale. so it gives Hydration error.

// Hydration error are given so that developer can improvee the user experieence.
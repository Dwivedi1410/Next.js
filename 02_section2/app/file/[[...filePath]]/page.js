export const metadata = {
    title: "File",
}

export default async function FilePath({params}) {
    const {filePath} = await params;
    // console.log(filePath);
    return(
        <div>
            <h1>FilePath : /{filePath?.join('/')}</h1>  
            {/* if we type this "http://localhost:3000/a/b/c/d/e" in the url then it will show the path of the file which is entered by the user in the url */}
        </div>
    )
}


// Note :- we can use [..filePath] to catch all the routes directly in the root folder. but it is recommended to use [...filePath] inside the file folder so that it become easy to understand that user is trying to see some files.
// we insert the [...filePath] in the file folder so that it become easy to understand that user is trying to see some files.
// but now if you try to type "http://localhost:3000/a/b/c/d/e" in the url then it will show the error because before typing the location of file in the url, user first of all have to enter the /file/ in the url then only it will show the path of the file which is entered by the user in the url.
// when you enter only "http://localhost:3000/file" in the url shows an error because there is no file in the file folder to handle this route.
// to handle this we can either make a page.js file in the file folder or we can handle this by using optional catch all routes.
// to handle catch all routes we can use [[...filePath]] instead of [...filePath] in the file folder.
// Note : but we can't use catch all routes in the root folder. becuase then it become confusing for the server which file to serve([[...filePath]] or root folder page.js), but if we remove root folder page.js file then it will work.
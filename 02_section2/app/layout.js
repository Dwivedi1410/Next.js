/*
export const metadata = {
  title: "Tech Company",
  description: "This is a description of Tech Company",
}
*/
// metadata is a special object that is used to set the metadata for the page. if you set the metadata in the root layout then it will be applied to all the pages in the app.

export const metadata = {
  title: {
    template: "%s | Tech Company",
    default: "Tech Company",
  },
  description: "This is a description of Tech Company",
}
// By using this method we can get the metadata from the pages and also add name of the company after that and we can also set default name if no metadata is coming from the pages.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: "teal"}}>Header</header>
        {children}
        <footer style={{backgroundColor: "brown"}}>Footer</footer>
      </body>
    </html>
  );
}

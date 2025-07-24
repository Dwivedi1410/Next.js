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

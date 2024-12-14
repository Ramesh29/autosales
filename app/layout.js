import  "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Link from 'next/link'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container-md">
      <div className="container-md bg-light my-5">
          <Link href={'/cars'} className="display-4">AutoSales</Link>
          <p className="lead">One-stop Auto Sales Manager</p>
        </div>        
        {children}
      </body>
    </html>
  );
}

import '../../styles/globals.css'
import { Poppins } from 'next/font/google'
import Header from "../../pages/header";

const inter = Poppins ({
  weight: ["300","400","500","600","700","800"],
  style: ["normal"],
  subsets: ["latin"]
})

export const metadata = {
  title: 'Evolugi',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="icon" href="/fav-icon2.png "/> 
      </head>

      <body className={inter.className}> 
        <Header />    
        {children}</body>
    </html>
  )
}

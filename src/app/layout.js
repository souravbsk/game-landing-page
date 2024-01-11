import Header from '@/Shared/Header/Header'
import './globals.css'
import {Chakra_Petch} from "next/font/google"
import Footer from '@/Shared/Footer/Footer'
const chakra = Chakra_Petch({subsets: ['latin'], weight: ['300', '400', '700'],})
export const metadata = {
  title: 'TrustX Gaming',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">

      <body className="bg-white" style={chakra.style}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}

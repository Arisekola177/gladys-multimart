import "slick-carousel/slick/slick.css"
import Navbar from '../components/Navbar'
import './globals.css'
import Layout from "@/components/Layout"
import Footer from "@/components/Footer"


export const metadata = {
  title: 'Gladys-Multimart',
  description: 'The only store you need',
}

export default function RootLayout({ children }) {
  return (
      <html lang='en'>
          <body>
              <main className='text-darkText'>
                  
                 <Layout>
                 <Navbar />
                  {children}
                  <Footer />
                 </Layout>
                  
              </main>
          </body>
      </html>
  )
}

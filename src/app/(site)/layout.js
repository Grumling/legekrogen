import Footer from '@/components/footer/footer'
import NavBar from '@/components/navigation/navBar/navBar'
import NavTop from '@/components/navigation/navTop/navTop'

export default function siteLayout({ children }) {
  return (
    <div>
      <NavTop />
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

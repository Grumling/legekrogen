import NavBar from '@/components/navigation/backOffice/navBar/navBar'

export default function backofficeLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

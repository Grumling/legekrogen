import { BasketContextProvider } from '@/context/basket'
import './globals.css'
import { QuicksandFont, SquarePegFont } from '@/utils/fonts'

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${QuicksandFont.className} ${SquarePegFont.variable}`}>
        <BasketContextProvider>{children}</BasketContextProvider>
      </body>
    </html>
  )
}

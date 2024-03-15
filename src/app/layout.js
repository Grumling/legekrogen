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
        {children}
      </body>
    </html>
  )
}

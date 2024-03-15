import { Quicksand, Square_Peg } from 'next/font/google'

export const QuicksandFont = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const SquarePegFont = Square_Peg({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-square-peg',
})

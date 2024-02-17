import "./ui/globals.css";
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700',],
})

export const metadata = {
  title: "Hardware Store",
  description: "Created using Next14 App router",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={roboto_mono.className}>
      <body>{children}</body>
    </html>
  )
}

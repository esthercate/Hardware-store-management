import "./ui/globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: "Hardware Store",
  description: "Created using Next14 App router",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}

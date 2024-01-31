import "./ui/globals.css";
import { Josefin_Sans} from 'next/font/google'

const josefin_sans = Josefin_Sans({
  weight: ['100', '300', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Hardware Store",
  description: "Created using Next14 App router",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={josefin_sans.className}>
      <body>{children}</body>
    </html>
  )
}

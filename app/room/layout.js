import "../layout/css/globals.css"
import { vazir } from "../fonts/font";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className}`}>
        {children}
      </body>
    </html >
  )
}
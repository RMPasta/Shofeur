import './globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeContextProvider } from './context/theme';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shofeur Challenge',
  description: 'Next JS, Tailwind CSS, Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import { DataProvider } from '@/contexts/DataContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Food Ordering App',
  description: 'Food Ordering App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <DataProvider>
          <body className={inter.className}> <Header />{children}</body>
        </DataProvider>
      </AuthProvider>
    </html>
  )
}

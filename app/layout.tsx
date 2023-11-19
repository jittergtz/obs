import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
import Provider from '@/components/Provider'
import { CommandMenu } from '@/components/CommandMenu'



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Saphir take Notes',
  description: 'Secure privat notes',
  icons: [
    {
      url: "./img/logo-metal.jpg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={roboto.className}>
      <ClerkProvider>
        <Provider>
          {children}
          <CommandMenu/>
        </Provider>
      <Toaster/>
      </ClerkProvider>


      </body>
     
    </html>



  
  )
}

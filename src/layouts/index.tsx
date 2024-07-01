import AppHeader from '@/components/app-header'
import React from 'react'

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <AppHeader />
      {children}
    </main>
  )
}

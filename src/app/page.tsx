import IndexLayout from '@/layouts'
import React from 'react'

export default function Home() {
  return (
    <IndexLayout>
      <section className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to my profile site</h1>
          <p className="text-lg">
            This is a personal website where I can share my thoughts and
            experiences with the world.
          </p>
        </div>
      </section>
    </IndexLayout>
  )
}

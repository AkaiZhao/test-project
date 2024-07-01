import Counter from '@/components/counter'
import IndexLayout from '@/layouts'
import React from 'react'

export default function About() {
  return (
    <IndexLayout>
      <div className="flex flex-col p-24">
        <div className="mb-3 text-center text-3xl uppercase">about page</div>
        this is client component a counter
        <div className="flex items-center justify-center rounded-lg border-2 border-white p-3">
          <Counter />
        </div>
      </div>
    </IndexLayout>
  )
}

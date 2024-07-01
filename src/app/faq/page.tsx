'use client'

import IndexLayout from '@/layouts'
import Image from 'next/image'
import React from 'react'

export default function FAQ() {
  const randomNum = () => Math.floor(Math.random() * 800)
  const arr = new Array(5).fill(0).map(() => randomNum())

  return (
    <IndexLayout>
      <div className="flex flex-col p-24">
        <div className="mb-4 text-center text-3xl font-bold uppercase">
          FAQ page
        </div>
        {arr.map((k, i) => (
          <div
            key={k}
            className={`align-center mb-8 flex max-w-screen-md justify-center gap-8 ${i % 2 ? 'flex-row-reverse' : ''}`}
          >
            <Image
              className="flex-1"
              src={`https://picsum.photos/seed/${k}/300/200`}
              alt="placeholder"
              width={300}
              height={200}
            />
            <div className="flex-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              fugit repellat harum qui consequuntur voluptas provident quaerat,
              voluptate eveniet laboriosam, fuga incidunt aut iure
              exercitationem minus, numquam corporis officia ratione!
            </div>
          </div>
        ))}
      </div>
    </IndexLayout>
  )
}

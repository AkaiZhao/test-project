'use client'

import { create } from 'zustand'

const useStore = create<{ count: number; inc: () => void; dec: () => void }>(
  (set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
  }),
)

export default function Counter() {
  const { count, inc, dec } = useStore()

  return (
    <div className="m-auto flex items-center gap-2">
      <button
        className="rounded px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={dec}
      >
        -
      </button>
      <div className="text-3xl font-bold">{count}</div>
      <button
        className="rounded px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={inc}
      >
        +
      </button>
    </div>
  )
}

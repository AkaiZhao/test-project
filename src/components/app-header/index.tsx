'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AppHeader = () => {
  const title = 'akaisite'

  const nav = [
    { path: '/', title: 'home' },
    { path: '/about', title: 'about' },
    { path: '/faq', title: 'faq' },
  ]

  const pathname = usePathname()
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <header className="flex items-center justify-between gap-2">
        <h1 className="flex items-end gap-1 text-2xl font-bold uppercase">
          {title}
          <div className="text-sm lowercase">with</div>
        </h1>
        <Image
          className="relative mr-4 object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          width={100}
          height={20.3}
          style={{ height: 'auto' }}
          sizes="(max-width: 768px) 100vw, 192px"
          src="/next.svg"
          alt="Next.js Logo"
          priority
        />
      </header>
      <nav>
        <ul className="align-center flex gap-2">
          {nav.map((k) => (
            <li key={k.path} className="flex items-center">
              <Link
                className={`text-sm uppercase ${k.path === pathname && 'text-lg font-bold'}`}
                href={k.path}
              >
                {k.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default AppHeader

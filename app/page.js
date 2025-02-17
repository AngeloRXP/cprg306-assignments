import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">CPRG 306: Web Development 2</h1>
        <ul className="text-xl">
          <li className="hover:text-blue-500">
            <Link href="/week-2">Week 2</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/week-3">Week 3</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/week-4">Week 4</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/week-5">Week 5</Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
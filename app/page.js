import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen py-4">
      <h1 className="text-4xl font-bold text-white mb-8">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="text-xl">
        <li className="mb-4">
          <Link href="/week-2" className="text-blue-500 hover:text-blue-600">Week 2</Link>
        </li>
        <li className="mb-4">
          <Link href="/week-3" className="text-blue-500 hover:text-blue-600">Week 3</Link>
        </li>
        <li className="hover:text-blue-500">
            <Link href="/week-4" className="text-blue-500 hover:text-blue-600">Week 4</Link>
          </li>
        </ul>      
    </main>
  )
}
import StudentInfo from './student-info'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-4xl font-bold mb-5">My Profile</h1>
      <StudentInfo />
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
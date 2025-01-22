import Link from 'next/link'

export default function StudentInfo() {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">AngeloRXP</h2>
      <Link 
        href="https://github.com/AngeloRXP"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </Link>
    </div>
  )
}
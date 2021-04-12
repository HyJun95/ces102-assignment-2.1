import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>(I'm HyeongJun Jang.) If you want to Back to home, click this ! </a>
        </Link>
      </h2>
    </>
  )
}
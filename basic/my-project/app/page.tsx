import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-blue-500">Next.js 14 - App Router 연습</h1>
      <p className="mt-4">아래 페이지로 이동할 수 있습니다.</p>
      <div className="mt-4 space-x-4">
        <Link href="/about" className="px-4 py-2 bg-blue-500 text-white rounded">
          About 페이지 이동
        </Link>
        <Link href="/users/1" className="px-4 py-2 bg-green-500 text-white rounded">
          User 1 페이지 이동
        </Link>
      </div>
    </div>
  );
}

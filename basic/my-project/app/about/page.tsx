import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-purple-500">📌 About 페이지</h1>
            <p className="mt-4">App Router 테스트 페이지</p>      
            <Link href="/" className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
                홈으로 돌아가기
            </Link>  
        </div>
    );
};
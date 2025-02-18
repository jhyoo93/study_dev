import { notFound } from "next/navigation";

// 특정 id의 유저 정보를 가져오는 함수
async function getUser(id: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return null;
        }

        return res.json();
    } catch (error) {
        console.log("API 요청 실패:", error);
        return null;
    }
}

//Next.js 14 App Router에서 async/await 방식으로 동적 데이터 로딩
export default async function UserPage({ params }: { params: { id?: string } }) {
    if (!params || !params.id) {
        return notFound(); // params가 없으면 404 반환
    }

    // params.id를 안전하게 처리
    const userId = decodeURIComponent(params.id);

    // API에서 데이터 가져오기
    const user = await getUser(userId);

    if (!user) {
        return notFound(); // 유저가 없으면 404 페이지
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-blue-500">👤 사용자 정보</h1>
            <p className="mt-4 text-xl">이름: {user.name}</p>
            <p className="text-lg text-gray-600">이메일: {user.email}</p>
        </div>
    );
}

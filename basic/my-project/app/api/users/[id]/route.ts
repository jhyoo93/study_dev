import { NextResponse } from "next/server";

// 가짜 유저 데이터
const users = [
  { id: "1", name: "김철수", email: "chulsoo@example.com" },
  { id: "2", name: "이영희", email: "younghee@example.com" },
];

//특정 유저 정보를 가져오는 API
export async function GET(_: Request, { params }: { params: { id: string } }) {
  if (!params?.id) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  const user = users.find((u) => u.id === params.id);
  
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

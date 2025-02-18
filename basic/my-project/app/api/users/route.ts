import { NextResponse } from "next/server";

// 가짜 유저 데이터
const users = [
  { id: "1", name: "김철수", email: "chulsoo@example.com" },
  { id: "2", name: "이영희", email: "younghee@example.com" },
];

// 전체 유저 목록 반환 API
export async function GET() {
  return NextResponse.json(users);
}

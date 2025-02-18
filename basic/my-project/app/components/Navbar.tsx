import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between px-4">
                <h1 className="text-xl font-bold">App Router</h1>
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">홈</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/users/1" className="hover:underline">User 1</Link>
                    <Link href="/users/2" className="hover:underline">User 2</Link>
                </div>
            </div>
        </nav>

    );
}
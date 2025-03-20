import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-400 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Book Store
      </Link>
      <Link className="bg-white p-2" href={"/addBook"}>
        Add Book
      </Link>
    </nav>
  );
}

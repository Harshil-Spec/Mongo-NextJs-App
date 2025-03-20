// import BooksList from "@/components/BooksList";

// export default function Home() {
//   return <BooksList />;
// }

"use client";

import { useEffect } from "react";
import BooksList from "@/components/BooksList";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    if (params.get("added")) {
      console.log("A new book was added!");
      router.replace("/");
    }
  }, [router]);

  return <BooksList />;
}
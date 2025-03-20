"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBookForm({ id, title, author }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newAuthor, setNewAuthor] = useState(author);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newAuthor }),
      });

      if (!res.ok) {
        throw new Error("Failed to update book");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Book Title"
      />

      <input
        onChange={(e) => setNewAuthor(e.target.value)}
        value={newAuthor}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Book Author"
      />

      <button className="bg-blue-400 hover:bg-blue-600 font-bold text-white py-3 px-6 w-fit">
        Update Book
      </button>
    </form>
  );
}

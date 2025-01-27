"use client"; // Bileşenin client bileşeni olduğunu belirtmek için.

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Content {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function DetailPage() {
  const { id } = useParams();
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const fetchContent = async () => {
      setLoading(true);
      const res = await fetch('/dummy.json'); // Gerçek API endpointi ile değiştirin
      const data: Content[] = await res.json();
      const selectedContent = data.find((item) => item.id.toString() === id);
      setContent(selectedContent || null);
      setLoading(false);
    };

    fetchContent();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-700">Content not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl container mx-auto p-6 bg-white my-8">
      {/* "Back to List" Butonu */}
      <button
        onClick={() => router.push("/")} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        Back to List
      </button>
      
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">{content.title}</h1>
      <p className="text-lg text-gray-600 mb-4">{content.description}</p>
      <span className="text-sm text-blue-500 font-semibold uppercase tracking-wide">{content.category}</span>
    </div>
  );
}

import { Content } from "../types/content";

interface ContentCardProps {
  content: Content;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <div className="border h-full flex justify-between flex-col p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
      <h2 className="text-xl font-bold text-red-800">{content.title}</h2>
      <p className="text-gray-600">{content.description}</p>
      <span className="text-sm font-semibold text-red-900">{content.category}</span>
    </div>
  );
}

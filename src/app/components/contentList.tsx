import Link from "next/link";
import ContentCard from "./contentCard";
import { Content } from "../types/content";

interface ContentListProps {
  contents: Content[];
}

export default function ContentList({ contents }: ContentListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contents.map((content) => (
        <Link href={`/${content.id}/detail`} key={content.id}>
          <ContentCard content={content} />
        </Link>
      ))}
    </div>
  );
}

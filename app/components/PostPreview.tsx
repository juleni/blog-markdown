import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

function PostPreview(props: PostMetadata) {
  return (
    <div className="border border-slate-200 p-4 rounded-md shadow-sm bg-white">
      <Link href={`/posts/${props.filename}`}>
        <h2 className="font-bold text-green-700 hover:underline">
          {props.title}
        </h2>
        <p className="text-xs text-slate-400">{props.date}</p>
        <p className="text-slate-700">{props.subtitle}</p>
      </Link>
    </div>
  );
}

export default PostPreview;

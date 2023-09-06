import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

function PostPreview(props: PostMetadata) {
  return (
    <div key={props.filename}>
      <Link href={`/posts/${props.filename}`}>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
      </Link>
    </div>
  );
}

export default PostPreview;

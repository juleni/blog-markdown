import getPostMetadata from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.filename} {...post} />
  ));

  return <main>{postPreviews}</main>;
}

import getPostMetadata from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.filename} {...post} />
  ));

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {postPreviews}
    </main>
  );
}

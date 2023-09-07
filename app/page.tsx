import getPostMetadata from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  const message = (
    <div className="text-xs sm:text-sm text-center">
      <p className="text-red-600 ">No markdown files found</p>
    </div>
  );

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.filename} {...post} />
  ));

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {postPreviews.length > 0 && postPreviews ? postPreviews : message}
    </main>
  );
}

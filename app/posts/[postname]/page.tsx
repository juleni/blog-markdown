import getPostMetadata from "@/app/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (postName: string) => {
  const folder = "posts/";
  const file = `${folder}/${postName}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

// Generate static page for each markdown file post
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  if (posts.length > 0) {
    return posts.map((post) => ({ postname: post.filename }));
  } else return [];
};

export default function postPage(props: any) {
  const postName = props.params.postname;
  const post = getPostContent(postName);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-green-700 text-center">
          Post {post.data.title}
        </h1>
        <p className="text-slate-400 text-xs mt-2">{post.data.date}</p>
      </div>

      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}

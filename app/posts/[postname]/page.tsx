import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (postName: string) => {
  const folder = "posts/";
  const file = `${folder}/${postName}.md`;
  const content = fs.readFileSync(file, "utf8");

  return content;
};

export default function postPage(props: any) {
  const postName = props.params.postname;
  const postContent = getPostContent(postName);
  return (
    <div>
      <h1>Post {postName}</h1>
      <Markdown>{postContent}</Markdown>
    </div>
  );
}

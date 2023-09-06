import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) =>
    file.toLowerCase().endsWith(".md")
  );

  //const fileNames = markdownPosts.map((file) => file.replace(".md", ""));
  // Get gray-matter metadata from each file
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      filename: fileName.toLowerCase().replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;

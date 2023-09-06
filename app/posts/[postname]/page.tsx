export default function postPage(props: any) {
  const postName = props.params.postname;
  return (
    <p>
      <h1>Post {postName}</h1>
    </p>
  );
}

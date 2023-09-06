import Link from "@/node_modules/next/link";

function Header() {
  return (
    <header>
      <div className="text-center bg-slate-800 p-2 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-3xl text-green-600 mt-2 font-medium">
            My MarkDown Blog
          </h1>
        </Link>
        <p className="text-slate-300 m-2">🔰 Welcome to my personal blog 🔰</p>
      </div>
    </header>
  );
}

export default Header;

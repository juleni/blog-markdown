import Link from "@/node_modules/next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="text-center bg-slate-800 p-2 my-6 rounded-md">
        <div className="">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <div className="">
            <Link href="/">
              <h1 className="text-3xl text-green-600 mt-2 font-medium">
                My MarkDown Blog
              </h1>
            </Link>
            <p className="text-slate-300 m-2">
              🔰 Welcome to my personal blog 🔰
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

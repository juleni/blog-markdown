import Link from "@/node_modules/next/link";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <h1>JULENI&apos;s MD Blog</h1>
        </Link>
        <br />
      </div>
    </header>
  );
}

export default Header;

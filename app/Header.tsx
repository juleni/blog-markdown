import Link from "@/node_modules/next/link";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <h1>JULENIs MD Blog</h1>
        </Link>
        <br />
      </div>
    </header>
  );
}

export default Header;

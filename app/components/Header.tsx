"use client";

import Link from "@/node_modules/next/link";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

function Header() {
  return (
    <header>
      <div className="text-center bg-slate-700 p-2 my-6 rounded-md">
        <div className="flex flex-no-wrap justify-center items-center">
          <div className="">
            <a
              target="_blank"
              href="https://dillinger.io/"
              rel="noopener"
              data-tooltip-id="img-tooltip"
              data-tooltip-content="Run Dillinger to edit markdown file online"
            >
              <Image
                src="/logo.png"
                alt="Run Dillinger to edit markdown file online"
                width={70}
                height={70}
                className="mx-auto sm:w-[100px]"
              />
            </a>
            <Tooltip id="img-tooltip" />
          </div>

          <div className="pl-2 sm:pl-6">
            <Link href="/">
              <h1 className="text-xl sm:text-3xl text-green-600 mt-2 font-medium">
                My MarkDown Blog
              </h1>
            </Link>
            <p className="text-xs sm:text-lg text-slate-300 m-2">
              🔰 Welcome to my personal blog 🔰
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

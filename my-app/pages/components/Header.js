/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {useState} from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import ThemeToggler from "../../src/ThemeToggler";

function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false)


  const handleChildClick = event => {
    // 👇️ stop event propagation (won't trigger parent's onClick)
    event.stopPropagation();

    console.log('child clicked');
  };
  return (
    <>
      <nav className="flex justify-between md:justify-evenly dark:text-white items-center lg:px-4 px-2">
        <div className="flex mx-1 my-3 sm:m-3 gap-5 items-center">
          {/* <ThemeToggler /> */}
          <button onClick={() => router.push("/")}>
            <img
              src="img/main-logo.svg"
              className="sm:w-[70px] w-[45px] h-[45px] sm:h-[70px]  dark:hidden"
            />
            <img
              src="img/white-logo2.svg"
              className="sm:w-[70px] w-[45px] h-[45px] sm:h-[70px]  hidden dark:block"
            />
          </button>
          <button className="border  dark:text-white dark:border-gray-200 text-[11px] sm:text-[15px]  rounded-full px-3 py-1">
            Treasury <i className="ri-bar-chart-horizontal-line bg-inherit"></i>{" "}
            Ξ42,000
          </button>
        </div>
        <script defer src="app.js"></script>
        <div className="md:flex gap-16 hidden ">
          <button onClick={() => router.push("/components/Dao", "/Dao")}>
            DAO
          </button>
          <a target="blank" href="https://founderz-dao.gitbook.io/founderz/">
            Docs
          </a>
          <button onClick={() => router.push("/components/Proposal", "/p")}>
            Capsule
          </button>
        </div>
        <div className="flex gap-4">
          <ThemeToggler />
          <div
            className="p-2 space-y-[5px] border border-gray-900 dark:border-gray-100 rounded-xl shadow md:hidden"
            onClick={() => setShowMenu(true)}
          >
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 animate-pulse"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 animate-pulse"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 animate-pulse"></span>
          </div>
          <div className="hidden md:block">
            <ConnectButton />
          </div>
        </div>
      </nav>
      {showMenu && (
        <div
          className=" fixed overflow-hidden top-0 z-50 h-[100vh] w-[100vw] flex items-center justify-center"
          onClick={() => setShowMenu(false)}
        >
          <div
            className="rounded-2xl w-10/12 h-4/6 bg-black flex flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-3 flex flex-col gap-4 items-center">
              <button
                className="text-white"
                onClick={() => router.push("/components/Dao", "/Dao")}
              >
                DAO
              </button>
              <a
                className="text-white"
                target="blank"
                href="https://founderz-dao.gitbook.io/founderz/"
              >
                Docs
              </a>
              <button
                className="text-white"
                onClick={() => router.push("/components/Proposal", "/p")}
              >
                Capsule
              </button>
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {useState, useRef} from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import ThemeToggler from "../../src/ThemeToggler";
import disableScroll from 'disable-scroll';

function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false)
  const openMenu = useRef();
  const closeMenu = useRef();
  const menu = useRef();

  const handleOpenMenu = () => {
    menu.current.style.width = '100vw';
    disableScroll.on();
  };
  const handleCloseMenu = () => {
    menu.current.style.width = '0px';
    disableScroll.off();
  };

  const handleChildClick = event => {
    // 👇️ stop event propagation (won't trigger parent's onClick)
    event.stopPropagation();

    console.log('child clicked');
  };
  return (
    <>
      <nav className="flex justify-between md:justify-evenly dark:text-white items-center lg:px-4 pt-[10px] md:pt-[31px] lg:pt-[61px] px-2">
        <div className="flex mx-1 my-3 sm:m-3 gap-5 items-center">
          {/* <ThemeToggler /> */}
          <button onClick={ () => { router.push("/")}}>
          {/* fd_footerlogo.png */}
            <img src="img/fd_footerlogo.png" className=" h-[20px] sm:h-[30px] dark:hidden"  />
            {/* <img src="img/main-logo.svg" className="sm:w-[70px] w-[45px] h-[45px] sm:h-[70px]  dark:hidden"  /> */}
            <img src="img/logo2.svg" className=" h-[20px] sm:h-[30px]  hidden dark:block"  />
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
          <div className="p-2 space-y-[5px] border border-gray-900 dark:border-gray-100 rounded-xl shadow md:hidden" ref={openMenu} onClick={handleOpenMenu} /*onClick={() => setShowMenu(true)}*/>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 animate-pulse"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 animate-pulse"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 animate-pulse"></span>
          </div>
          <div className="hidden md:block">
            <ConnectButton />
          </div>
        </div>    
      </nav>  
      {/*showMenu &&*/<div ref={menu} className=" fixed transition-all delay-500 ease-in-out overflow-hidden top-0 z-50 h-[100vh] w-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6D87F2] via-[#4965D8] to-[#4965D8]  flex-col " /*onClick={() => setShowMenu(false)}*/>
          <div className="flex  items-center justify-between pr-3">
            <div className="flex mx-1 my-3 sm:m-3 gap-5 items-center">
              <button onClick={ () => {disableScroll.off(); router.push("/")}}>
                <img src="img/main-logo.svg" className="sm:w-[70px] w-[45px] h-[45px] sm:h-[70px]  shadow bg-white rounded-2xl"  />
              </button>
              <button className="border  dark:text-white dark:border-gray-200 text-[11px] sm:text-[15px]  rounded-full px-3 py-1">
                Treasury <i className="ri-bar-chart-horizontal-line bg-inherit"></i>{" "}
                Ξ42,000
              </button>
            </div>
            <div className="p-2 space-y-[5px] border border-gray-900 dark:border-gray-100 rounded-xl shadow" ref={closeMenu} onClick={handleCloseMenu}>
              <img src="img/close_icon.png"  className="h-5"  />
            </div>
          </div>
          <div className="mt-32 p-3 flex flex-col gap-10 items-center">
            <button className="text-white" onClick={ () => {disableScroll.off(); router.push("/components/Dao", "/Dao")} }>
              DAO
            </button>
            <a className="text-white" target="blank" href="https://founderz-dao.gitbook.io/founderz/">
              Docs
            </a>
            <button className="text-white" onClick={() => {disableScroll.off(); router.push("/components/Proposal", "/p")}}>
              Capsule
            </button>
            <ConnectButton />
            {/* <button className="text-white" ref={closeMenu} onClick={handleCloseMenu}>
              close
            </button> */}
          </div>
        
      </div>}
    </>
  );
}

export default Header;

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import ThemeToggler from "../../src/ThemeToggler";

function Header() {
  const router = useRouter();

  return (
    // <nav className="flex mt-3 justify-between">
    <nav className="flex justify-between md:justify-evenly dark:text-white items-center lg:px-4 px-2">
      <div className="flex m-3 gap-5 items-center">
        {/* <ThemeToggler /> */}
        <button onClick={ () => router.push("/")}>
          <img src="img/main-logo.svg" className="w-[70px] h-[70px] dark:hidden"  />
          <img src="img/white-logo2.svg" className="w-[70px] h-[70px] hidden dark:block"  />
        </button>
        <button className="border  dark:text-white dark:border-gray-200 rounded-full px-3 py-1">
          Treasury <i className="ri-bar-chart-horizontal-line bg-inherit"></i>{" "}
          Ξ42,000
        </button>
      </div>
      <script defer src="app.js"></script>
      <div className="md:flex gap-16 hidden ">
        <button onClick={ () => router.push("/components/Dao", "/Dao")}>
          DAO
        </button>
        <a target="blank" href="https://founderz-dao.gitbook.io/founderz/">
          Docs
        </a>
        <button onClick={() => router.push("/components/Proposal", "/p")}>Capsule</button>
      </div>
      <div className="flex gap-4">
        <ThemeToggler />
        <div className="hidden md:block">
          <ConnectButton />
        </div>
      </div>    
    </nav>
  );
}

export default Header;

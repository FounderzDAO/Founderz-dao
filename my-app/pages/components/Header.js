import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import ThemeToggler from "../../src/ThemeToggler";

function Header() {
  const router = useRouter();

  return (
    // <nav className="flex mt-3 justify-between">
    <nav className="flex justify-evenly dark:text-white items-center px-4">
      <div className="flex m-3 gap-5 items-center">
        {/* <ThemeToggler /> */}
        <button onClick={ () => router.push("/")}>
          <img src="img/main-logo.svg" className="w-[70px] h-[70px] dark:hidden"  />
          <img src="img/logo-white2.svg" className="w-[70px] h-[70px] hidden dark:block"  />
        </button>
        <button className="border  dark:text-white dark:border-gray-200 rounded-full p-3">
          Treasury <i className="ri-bar-chart-horizontal-line bg-inherit"></i>{" "}
          42,000
        </button>
      </div>
      <script defer src="app.js"></script>
      <div className="flex gap-16">
        <button onClick={ () => router.push("/components/Dao", "/Dao")}>
          DAO
        </button>
        <a target="_blank" href="https://founderz-dao.gitbook.io/founderz/">
          Docs
        </a>
        <button onClick={() => router.push("/")}>Capsule</button>
      </div>
      <div className="flex gap-4">
        <ThemeToggler />
        <ConnectButton />
      </div>    
    </nav>
  );
}

export default Header;

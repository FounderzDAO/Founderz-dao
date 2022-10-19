import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import ThemeToggler from "../../src/ThemeToggler";

function Header() {
  const router = useRouter();

  return (
    // <nav className="flex mt-3 justify-between">
    <nav className="flex justify-between items-center px-4">
      <div className="flex m-3 gap-5">
        <ThemeToggler />
        <button className="border rounded-full p-3">
          Treasury <i className="ri-bar-chart-horizontal-line bg-inherit"></i>{" "}
          42,000
        </button>
      </div>
      <script defer src="app.js"></script>
      <div className="flex gap-4">
        <button onClick={() => router.push("/components/Dao", "/Dao")}>
          DAO
        </button>
        <button
          onClick={() =>
            router.push("https://founderz-dao.gitbook.io/founderz/")
          }
        >
          Docs
        </button>
        <button onClick={() => router.push("/")}>Capsule</button>
        <ConnectButton />
      </div>
    </nav>
  );
}

export default Header;

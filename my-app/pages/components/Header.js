import React from 'react'
import logo from '../assets/logo2.JPG';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import Image from 'next/image';
import ThemeToggler from '../../src/ThemeToggler';

function Header() {

  const router = useRouter();
 
  return (
    // <nav className="flex mt-3 justify-between">
    <nav className="flex justify-between">
      <div className="flex m-3 gap-5">
        <Image src={logo} width={60} height={60} />
        <button className="border rounded-full p-3">
          Treasury <i className="ri-bar-chart-horizontal-line bg-inherit"></i>{" "}
          42,000
        </button>
      </div>
      <script defer src = "app.js"></script>
      <div className="flex gap-4">
        <button onClick={() => router.push("/components/Dao", "/Dao")}>DAO</button>
        <button onClick={() => router.push("/")}>Docs</button>
        <button onClick={() => router.push("/")}>Raffle</button>
        <button onClick={() => router.push("/")}>Capsule</button>
        <ThemeToggler />
        <ConnectButton />
      </div>
    </nav>
  )
}

export default Header
import Image from "next/image";
import { router } from "next/router";
import CapsuleImage from "../assets/capsule-bg.svg";

export default function CapsuleStatic() {
  return (
    // <div
    //   className="pt-2"
    //   style={{ position: "relative", width: "100vw", height: "60vw" }}
    // >
    <div
      className="pt-2 flex items-center justify-center bg-black"
      style={{ position: "relative", width: "100vw", height: "60vw" }}
    >
      <Image src={CapsuleImage} layout="fill" objectFit="cover" />
      <button style={{ position: "absolute"}} className="text-2xl text-white"  onClick={() => router.push("/")}>
      Customize your Founderz Pass in the Capsule and join the first decentralized web3 startup factory.
      </button>
    </div>
  );
}

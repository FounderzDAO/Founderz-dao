import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CapsuleImage from "../assets/capsule-bg.svg";

export default function CapsuleStatic() {
  return (
    <div
      className="pt-2"
      style={{ position: "relative", width: "100vw", height: "60vw" }}
    >
      <Image src={CapsuleImage} layout="fill" objectFit="cover" />
    </div>
  );
}

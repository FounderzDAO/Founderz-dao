import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import capsule from '../assets/founderz-prequel 1.svg';
import Header from './Header';



const Intro = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200 dark:bg-black">
      <Header />
      <div className="grid grid-cols-2 mx-32 mt-32 gap-10 overflow-hidden">
        <div className="w-[500px] h-[500px] p-5">
          <Image src={capsule} width={442} height={442} />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-6">
            <div className="flex gap-2">
              <button className="bg-white rounded-full p-2">
                <i className="ri-arrow-left-line bg-inherit"></i>
              </button>
              <button className="bg-white rounded-full p-2">
                <i className="ri-arrow-right-line bg-inherit"></i>
              </button>
            </div>
            <h1 className="text-gray-500 text-2xl">September 23, 2022</h1>
          </div>
          <div className="mt-5">
            <h1 className="text-7xl">Founderz Pass 01</h1>
          </div>
          <div className="flex gap-8 mt-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-gray-700"> Winning bid</h2>
              <h3 className="text-4xl">
                <i className="text-3xl ri-bar-chart-horizontal-line bg-inherit"></i>
                77.40 ETH
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-gray-700">Held by</h2>
              <div className="flex">
                <h3 className="text-3xl">0x42...c7e9</h3>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2>
              <i className="ri-cake-2-fill bg-inherit text-2xl p-2"></i>Born{" "}
              <b>August 23, 2022</b>
            </h2>
            <h3>
              <i className="ri-heart-fill bg-inherit text-2xl p-2"></i>
              🌌 Winner 🌌 <b className="text-red-600">0x47...c7e9</b>{" "}
              <i className="ri-edit-box-line bg-inherit text-gray-700"></i>
            </h3>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="bg-white text-black p-3 border rounded-3xl">
              <i className="ri-folders-fill bg-inherit p-2"></i>Bid history
            </button>
            <button className="bg-white text-black p-3 border rounded-3xl">
              <i className="ri-checkbox-circle-fill bg-inherit p-2"></i>
              Etherscan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

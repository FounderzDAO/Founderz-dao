/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Footer from "../Footer";

const MidSection = () => {
  const [open, setOpen] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  const [showDiscover, setShowDiscover] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const summary = [
    "Founderz artwork is a progressive modular NFT collection.",
    "One Founderz is trustlessly auctioned every 24 hours, until climate doomsday.",
    "Winner of the auction will get access to the Capsule",
    "The Capsule will allow the user to forge his NFT by selecting his favorite trait for each layer.",
    "100% of Founderz auction proceeds are trustlessly sent to the community treasury, plus a 5% on secondary sales fee.",
    "Settlement of one auction kicks off the next.",
    "All Founderz are members of Founderz DAO.",
    "Founderz DAO uses a fork of Compound Governance.",
    "One Founderz is equal to one vote.",
    "The treasury is controlled exclusively by Founderz via governance.",
    "Artwork is generative and stored on IPFS.",
    "No explicit rules exist for attribute scarcity; all Founderz are equally rare.",
    "Co-Founderz receive rewards in the form of Founderz, one every seven auctions (~14% of supply).",
  ];

  return (
    <div className="flex flex-col  items-center pt-14 bg-[#F7F9FC] dark:bg-[#160744] w-full " >
      {/* <div className="h-[450px]   bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6D87F2] via-[#4965D8] to-[#4965D8]  rotate-[-3deg] w-[130%] mt-8 mx-[-100px] overflow-hidden absolute" /> */}
      {/* <div className=" flex flex-col items-center mb-[100px] py-10 rounded-3xl justify-center  w-10/12 sm:w-9/12 lg:w-11/12 max-w-[900px]  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6D87F2] via-[#4965D8] to-[#4965D8] "> */}
      <div className=" flex flex-col items-center mb-[100px] py-10 rounded-3xl justify-center  w-10/12 sm:w-9/12 lg:w-11/12 max-w-[1140px]  ">
        <h2 className=" font-bold text-center text-[30px] mx-2  font-[all-round-gothic]">How it works in <spam className='text-[#4965D8] font-[500]' >3 steps</spam></h2>
        <button className="my-5 text-[12px] font-[all-round-gothic] text-[#4965D8] flex items-center gap-1">FIND HOW<img src="img/icon-arrow-R.svg" className="h-4" /></button>
        <div className="flex lg:flex-row flex-col gap-3 mt-5">

          <div className="border h-[260px] rounded-3xl p-5 max-w-[300px] flex flex-col items-center justify-evenly  text-[#F7F9FC] bg-[#4965D8] border-[#4965D8] ">
            <img className="h-[70px]" src="img/icon-get-your-pass.png" />
            <div className="flex gap-4 items-center">
              <p className="bg-[#F7F9FC] text-[12px] text-[#4965D8] py-[2px] px-2 rounded-lg">
                1
              </p>
              <p className="text-[12px]  font-[all-round-gothic]">
                GET YOUR FOUNDER PASS
              </p>
            </div>
            <p className="text-[12px] text-center font-[200]">
              Win the daily auction to receive the Founderz pass and have access
              to the capsule.
            </p>
          </div>

          <div className="border h-[260px] rounded-3xl p-5 max-w-[300px] flex flex-col items-center justify-evenly  text-[#F7F9FC] bg-[#4965D8] border-[#4965D8]">
            <img className="h-[70px]" src="img/icon-create-your-nft.png" />
            <div className="flex gap-4 items-center">
              <p className="bg-[#F7F9FC] text-[12px] text-[#4965D8] py-[2px] px-2 rounded-lg">
                2
              </p>
              <p className="text-[12px] font-[all-round-gothic]">
                CUSTOMIZE YOUR NFT
              </p>
            </div>
            <p className="text-[12px] text-center font-[200]">
              Access the capsule, the restricted area where you can customize
              your 2D avatar NFT.
            </p>
          </div>

          <div className="border h-[260px] rounded-3xl p-5 max-w-[300px] flex flex-col items-center justify-evenly  text-[#F7F9FC] bg-[#4965D8] border-[#4965D8]">
            <img className="h-[70px]" src="img/icon-become-a-founderz.png" />
            <div className="flex gap-4 items-center">
              <p className="bg-[#F7F9FC] text-[12px] text-[#4965D8] py-[2px] px-2 rounded-lg">
                3
              </p>
              <p className="text-[12px] font-[all-round-gothic]">
                BECOME A FOUNDERZ
              </p>
            </div>
            <p className="text-[12px] text-center font-[200]">
              Acquire voting and proposal power of the community treasury pool
              by holding the NFT.
            </p>
          </div>
        </div>
      </div>

      <div className="my-48 lg:mx-52 mx-10 sm:mx-20 max-w-[1140px]">
        <div className="mb-28">
          <h2 className="text-center my-9 text-3xl font-bold text-[#160744] dark:text-white font-[all-round-gothic]">
            FAQ
          </h2>
          <p className="text-[#4965D8] mb-3 font-[all-round-gothic]">SUMMARY</p>
          <ul className="grid lg:grid-cols-2 grid-cols-1 gap-2 ">
            {summary.map((i) => (
              <li
                key={i}
                className="flex  text-[#8094B7] dark:text-[#F7F9FC] font-[200]"
              >
                <div className="w-4 pt-[10px]">
                  <div className="h-[5px] w-[5px]  rounded-full mr-2 bg-[#4965D8]" />
                </div>{" "}
                {i}
              </li>
            ))}
          </ul>
        </div>

        <Accordion
          open={open === 1}
          className="border border-[#4965D8] rounded-lg rounded-t-2xl my-[1px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="dark:text-white p-3 border-none font-[all-round-gothic]"
          >
            Daily Mint
          </AccordionHeader>
          <AccordionBody className="dark:text-white p-3">
            The Founderz Auction Contract will act as a self-sufficient Founderz
            generation and distribution mechanism, auctioning one FounderzPass
            every 24 hours, forever.
            <br />
            <br />
            100% of auction proceeds (ETH) are automatically deposited in the
            Founderz DAO treasury, where they are governed by Noun owners.
            <br />
            <br />
            Each time an auction is settled, the settlement transaction will
            also cause a new Noun to be minted and a new 24 hour auction to
            begin.
            <br />
            <br />
            While settlement is most heavily incentivized for the winning
            bidder, it can be triggered by anyone, allowing the system to
            trustlessly auction Founderz as long as Ethereum is operational and
            there are interested bidders.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className="border border-[#4965D8] rounded-lg my-[1px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="dark:text-white p-3 border-none font-[all-round-gothic]"
          >
            Founderz Dao
          </AccordionHeader>
          <AccordionBody className="dark:text-white p-3">
            Founderz DAO utilizes a fork of Compound Governance and is the main
            governing body of the Founderz Web3 Startup Factory.
            <br />
            <br />
            The Founderz DAO treasury receives 100% of ETH proceeds from daily
            Founderz auctions. Each Founderz is an irrevocable member of
            Founderz DAO and entitled to one vote in all governance matters.
            Founderz votes are non-transferable (if you sell your Founderz the
            vote goes with it) but delegatable, which means you can assign your
            vote to someone else as long as you own your Founderz.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className="border border-[#4965D8] rounded-lg my-[1px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="dark:text-white p-3 border-none font-[all-round-gothic]"
          >
            Daily Actions
          </AccordionHeader>
          <AccordionBody className="dark:text-white p-3">
            The Founderz Auction Contract will act as a self-sufficient Founderz
            generation and distribution mechanism, auctioning one Founderz every
            24 hours, forever. 100% of auction proceeds (ETH) are automatically
            deposited in the Founderz DAO treasury, where they are governed by
            Founderz owners.
            <br />
            <br />
            Each time an auction is settled, the settlement transaction will
            also cause a new Founderz to be minted and a new 24 hour auction to
            begin.
            <br />
            <br />
            The winner of the auction will have access to the Capsule: a place
            where you can create your own NFT with your favorite features for
            each layer. That combination will no longer be mintable by other
            users.
            <br />
            <br />
            While settlement is most heavily incentivized for the winning
            bidder, it can be triggered by anyone, allowing the system to
            trustlessly auction Founderz as long as Ethereum is operational and
            there are interested bidders.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          className="border border-[#4965D8] rounded-lg my-[1px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="dark:text-white p-3 border-none font-[all-round-gothic]"
          >
            Governance “slow start”
          </AccordionHeader>
          <AccordionBody className="dark:text-white p-3">
            The Co-Founderz will veto proposals that introduce non-trivial legal
            or existential risks to the Founderz DAO, including (but not
            necessarily limited to) proposals that:
            <br />
            unequally withdraw the treasury for personal gain
            <br />
            bribe voters to facilitate withdrawal of the treasury for personal
            gain
            <br />
            attempt to alter Founderz auction cadence for the purpose of
            maintaining or acquiring a voting majority
            <br />
            make upgrades to critical smart contracts without undergoing an
            audit
            <br />
            <br />
            There are unfortunately no algorithmic solutions for making these
            determinations in advance (if there were, the veto would not be
            required), and proposals must be considered on a case-by-case basis.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          className="border border-[#4965D8] rounded-lg my-[1px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="dark:text-white p-3 border-none font-[all-round-gothic]"
          >
            Co-Founderz Reward
          </AccordionHeader>
          <AccordionBody className="dark:text-white p-3">
            'Co-Founderz' are the group of 6 builders that initiated Founderz.
            Here are the Founderz:
            <br />
            <br />
            Because 100% of Noun auction proceeds are sent to Founderz DAO,
            Co-Founderz have chosen to compensate themselves with Founderz.
            Every 7th of the project (Founderz ids #0, #7, #14, #21 and so on)
            will be automatically sent to the Co-Founderz's multisig to be
            vested and shared among the founding members of the project.
            <br />
            <br />
            Co-Founderz distributions don't interfere with the cadence of 24
            hour auctions. Founderz are sent directly to the Co-Founderz's
            Multisig, and auctions continue on schedule with the next available
            Founderz NFT.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 6}
          className="border border-[#4965D8] rounded-lg rounded-b-2xl my-[1px]"
        >
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className="dark:text-white p-3 border-none font-[all-round-gothic]"
          >
            Founderz Traits
          </AccordionHeader>
          <AccordionBody className="dark:text-white p-3">
            The Founderz DAO NFT collection will be the first progressive
            modular collection ever.
            <br />
            <br />
            Modular because you can forge your NFT by selecting your favorite
            trait for each layer Progressive because we will release new batches
            of traits as time goes on, with new artists or brands. The chosen
            combination of traits will not be mintable from other wallets, enjoy
            your new PFP 1/1. The image size will be 640 x 960, a new phone
            wallpaper or PFP for Twitter.
          </AccordionBody>
        </Accordion>
      </div>

      { showDiscover && <div className="sm:mb-36 mb-12 w-full max-w-[1000px] flex justify-center font-[all-round-gothic]">
        <div className="border flex flex-col  sm:flex-row justify-between overflow-hidden relative bg-[#4966d8e2]   border-[#4965D8] rounded-2xl w-10/12  lg:w-full  h-fit sm:h-[400px] lg:h-[510px]">
          <div className=" w-full sm:w-5/12 lg:w-7/12 sm:h-full bg-gradient-to-r z-20 flex flex-col justify-center  from-[#4965D8]  via-[#4966d8]">
            <div className="ml-8 my-4">
              <p className="font-bold text-black text-4xl md:text-5xl">Discover</p>
              <p className="text-white text-4xl md:text-5xl">the capsule</p>
              <button className='rounded-xl my-6 text-black text-[11px] w-fit px-3 flex items-center py-2 bg-[#1BEDA4]'>ENTER THE CAPSULE <img className='h-5 ml-1' src='img/icon-arrow.svg' /></button>
            </div>
            <img
              className="sm:h-full   sm:absolute right-0 animate-pulse"
              src="img/capsulereal.png"
            />
          </div>
        </div>
      </div>}

      <Footer />
      {showBanner && (
        <div className="w-11/12 p-2 hidden  max-w-[1200px] gap-8 font-[all-round-gothic] items-center h-20 bg-gradient-to-r md:flex justify-center from-[#4965D8] via-[#F7F9FC] to-[#4965D8] fixed bottom-4 z-[100] rounded-2xl">
          <img
            src="img/close_icon.png"
            className=" absolute h-4 right-4 top-3"
            alt="close"
            onClick={() => setShowBanner(false)}
          />
          <p className="w-[250px] text-[#17055E] text-xl font-[800]">
            <span className="text-[#F7F9FC]">The final version</span> of
            FounderzDAO is coming!
          </p>
          <div className="text-[#160744]">
            <p className="text-[12px] font-[500]  text-center">
              The update will arrive within:
            </p>
            <div className="border rounded-3xl border-[#4965D8] py-2 px-3 font-[700]">
              32<span className="text-[12px]"> Days</span> | 10
              <span className="text-[12px]"> Hours</span> | 30
              <span className="text-[12px]"> Minutes</span>
            </div>
          </div>
          <p className="w-[250px] text-[#4965D8] font-[500] text-sm">
            Learn more about the update
          </p>
        </div>
      )}
    </div>
  );
};

export default MidSection;

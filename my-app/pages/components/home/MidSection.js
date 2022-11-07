
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Footer from "../Footer";

const MidSection = () => {

  const [open, setOpen] = useState(1);
 
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
  ]

  return (
    <div className="overflow-x-hidden bg-[#F7F9FC] dark:bg-[#160744] relative" >
      <div className="h-[450px]   bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6D87F2] via-[#4965D8] to-[#4965D8]  rotate-[-3deg] w-[130%] mt-8 mx-[-100px] overflow-hidden absolute" />
      <div className=" flex flex-col items-center mb-[200px] justify-center h-[480px]  z-10  relative ">
        <h2 className=" font-bold text-[30px] mb-11 dark:text-black">How it works in <spam className='text-[#F7F9FC]' >3 steps</spam></h2>
        <div className="flex">
          <div className="border dark:border-black border-r-0 rounded-l-xl  p-5 w-[260px]     text-[#F7F9FC]">
            <div className="flex gap-4 items-center">
              <p className="bg-[#F7F9FC] text-[12px] text-[#4965D8] dark:text-white dark:bg-black py-[2px] px-2 rounded-lg">1</p>
              <p className="text-[12px]  dark:text-black">GET YOUR FOUNDER PASS</p>
            </div>
            <img className="h-[70px] mt-7 mb-4" src="img/icon-get-your-pass.png" />
            <p className="text-[12px]">Win the daily auction to receive the Founderz pass and have access to the capsule.</p>
          </div>
          <div className="border dark:border-black border-r-0 ml-[-10px]  rounded-l-xl p-5 w-[260px]    text-[#F7F9FC]">
            <div className="flex gap-4 items-center">
              <p className="bg-[#F7F9FC] text-[12px] text-[#4965D8] dark:text-white dark:bg-black py-[2px] px-2 rounded-lg">2</p>
              <p className="text-[12px] dark:text-black">CUSTOMIZE YOUR NFT</p>
            </div>
            <img className="h-[70px] mt-7 mb-4" src="img/icon-create-your-nft.png" />
            <p className="text-[12px]">Access the capsule, the restricted area where you can customize your 2D avatar NFT.</p>
          </div>
          <div className="border dark:border-black  ml-[-10px] rounded-xl p-5 w-[260px]    text-[#F7F9FC]">
            <div className="flex gap-4 items-center">
              <p className="bg-[#F7F9FC] text-[12px] text-[#4965D8] dark:text-white dark:bg-black py-[2px] px-2 rounded-lg">3</p>
              <p className="text-[12px] dark:text-black">BECOME A FOUNDERZ</p>
            </div>
            <img className="h-[70px] mt-7 mb-4" src="img/icon-become-a-founderz.png" />
            <p className="text-[12px]">Acquire voting and proposal power of the community treasury pool by holding the NFT.</p>
          </div>

        </div>
      </div>




      <div className="m-48">

        <div className="mb-28">
          <h2 className="text-center my-5 text-3xl font-bold text-[#160744] dark:text-white">FAQ</h2>
          <p className="text-[#4965D8]">SUMMARY</p>
          <ul className="grid grid-cols-2 gap-2 ">
            {summary.map((i) => (
              <li className="flex  text-[#8094B7] font-[200]">
                <div className="w-4 pt-[10px]"><div className="h-[5px] w-[5px]  rounded-full mr-2 bg-[#4965D8]" /></div> {i}
              </li>
            ))}
          </ul>
        </div>


        <Accordion open={open === 1} className="border border-[#4965D8] rounded-lg rounded-t-2xl my-[1px]" >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="dark:text-white p-3 border-none"
          >
            Daily Mint
          </AccordionHeader>
          <AccordionBody className="dark:text-white p-3">
            The Founderz Auction Contract will act as a self-sufficient Founderz generation and distribution mechanism, 
            auctioning one FounderzPass every 24 hours, forever. 
            <br />
            <br />
            100% of auction proceeds (ETH) are automatically deposited 
            in the Founderz DAO treasury, where they are governed by Noun owners. 
            <br />
            <br />
            Each time an auction is settled, the settlement 
            transaction will also cause a new Noun to be minted and a new 24 hour auction to begin. 
            <br />
            <br />
            While settlement is most heavily 
            incentivized for the winning bidder, it can be triggered by anyone, allowing the system to trustlessly auction Founderz 
            as long as Ethereum is operational and there are interested bidders.

          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} className="border border-[#4965D8] rounded-lg my-[1px]">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="dark:text-white p-3 border-none"
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
        <Accordion open={open === 3} className="border border-[#4965D8] rounded-lg my-[1px]">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="dark:text-white p-3 border-none"
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
        <Accordion open={open === 4} className="border border-[#4965D8] rounded-lg my-[1px]">
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="dark:text-white p-3 border-none"
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
        <Accordion open={open === 5} className="border border-[#4965D8] rounded-lg my-[1px]">
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="dark:text-white p-3 border-none"
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
        <Accordion open={open === 6} className="border border-[#4965D8] rounded-lg rounded-b-2xl my-[1px]">
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className="dark:text-white p-3 border-none"
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

      <div className="flex flex-col items-center m-36">
        <div className="border flex justify-between overflow-hidden relative bg-[#4966d8e2]   border-[#4965D8] rounded-2xl w-[1200px] h-[510px]">
          <div className="w-7/12 h-full bg-gradient-to-r z-20 flex flex-col justify-center  from-[#4965D8]  via-[#4966d8]">
            <div className="ml-8">
              <p className="font-bold text-black text-5xl">Discover</p>
              <p className="text-white text-5xl">the capsule</p>
              <button className='rounded-xl my-6 text-black text-[11px] w-fit px-3 flex items-center py-2 bg-[#1BEDA4]'>ENTER THE CAPSULE <img className='h-5 ml-1' src='img/icon-arrow.svg' /></button>
            </div>
          </div>
          <img className="h-full absolute right-0 animate-pulse" src="img/capsulereal.png" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MidSection;

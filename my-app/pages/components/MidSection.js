import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const MidSection = () => {

  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="m-32">
      {/* <h1 className="text-black dark:text-white text-3xl font-semibold">
        Activity
      </h1>
      <hr className="text-gray-700 mt-2" /> */}
      {/* <div className="flex justify-between mt-2">
        <h2 className="text-black dark:text-white mt-4 text-2xl">
          <i className="ri-cake-2-fill p-5 text-2xl"></i>
          <b>Founder 42</b> won by <b>0x47...c7e9</b>
        </h2>
        <button className="bg-gray-300 text-white p-3 rounded-3xl">
          <i className="ri-edit-box-line bg-inherit p-2"></i>0x11...a0c0
        </button>
      </div>
      <hr className="text-gray-700 mt-2" />
      <h3 className="text-black text-6xl mt-10 font-semibold dark:text-white">
        WTF?
      </h3>
      <p className="mt-7 text-2xl">
        Founderz are an adjacent creation, inspired by Nouns Dao; with a focus
        on creating a 🌊 of Web3 builders, creators and dooers. Projects like{" "}
        <b className="text-red-700">
          Cryptopunks, and many other founderz of Web3 projects{" "}
        </b>
        have attempted to bootstrap digital community and identity, enabling
        signalling of idenitifed value, with a shared vision. Founderz DAO
        attempts and aims to bootstrap teams, actualize ideas, and startups with
        a shared treasury pool, for all Founderz in this realm, that can be used
        by the our commnunity to fund best-performing projects, or take us to a
        new realm. let us build together 🚀 Where will this new DAO take us?
      </p>
      <p className="mt-4 text-2xl">
        Find out our road-map and values below, or enter the magical capsule ⌛️
        Begin by talking to the peculiar scientist, what will you find I wonder?
        As a Founder <b className="text-red-700">☢️ Enter ☢️</b>.
      </p> */}
      <div className="mt-5">
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="dark:text-white"
          >
            Summary
          </AccordionHeader>
          <AccordionBody className="dark:text-white">
            Founderz artwork is a progressive modular NFT collection.
            <br />
            <br />
            One Founderz is trustlessly auctioned every 24 hours, until climate
            doomsday.
            <br />
            Winner of the auction will get access to the Capsule
            <br />
            The Capsule will allow the user to forge his NFT by selecting his
            favorite trait for each layer.
            <br />
            100% of Founderz auction proceeds are trustlessly sent to the
            community treasury, plus a 5% on secondary sales fee.
            <br />
            Settlement of one auction kicks off the next.
            <br />
            All Founderz are members of Founderz DAO.
            <br />
            Founderz DAO uses a fork of Compound Governance.
            <br />
            One Founderz is equal to one vote.
            <br />
            The treasury is controlled exclusively by Founderz via governance.
            <br />
            Artwork is generative and stored on IPFS.
            <br />
            No explicit rules exist for attribute scarcity; all Founderz are
            equally rare.
            <br />
            Co-Founderz receive rewards in the form of Founderz, one every seven
            auctions (~14% of supply).
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="dark:text-white"
          >
            Founderz Dao
          </AccordionHeader>
          <AccordionBody className="dark:text-white">
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
        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="dark:text-white"
          >
            Daily Actions
          </AccordionHeader>
          <AccordionBody className="dark:text-white">
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
        <Accordion open={open === 4}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="dark:text-white"
          >
            Governance “slow start”
          </AccordionHeader>
          <AccordionBody className="dark:text-white">
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
        <Accordion open={open === 5}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="dark:text-white"
          >
            Co-Founderz Reward
          </AccordionHeader>
          <AccordionBody className="dark:text-white">
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
        <Accordion open={open === 6}>
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className="dark:text-white"
          >
            Founderz Traits
          </AccordionHeader>
          <AccordionBody className="dark:text-white">
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
    </div>
  );
}

export default MidSection;

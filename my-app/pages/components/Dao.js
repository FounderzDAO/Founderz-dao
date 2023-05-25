/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Header from './Header'
import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import {
  useAccount,
  useProvider,
  useSigner,
  useContract,
  useBalance,
} from "wagmi";
// import {
//   DAO_Executor_CONTRACT_ADDRESS,
//   DAO_Executor_ABI,
//   Founderz_DAO_Logic_CONTRACT_ADDRESS,
//   Founderz_DAO_Logic_ABI,
// } from "../constants";
import { useRouter } from "next/router";
import Footer from './Footer';

function Dao() {

  const router = useRouter();

  return (
    <div className="bg-[#F7F9FC] dark:bg-[#160744]">
      <Header />
      <div className="lg:mx-32 md:mx-14 mx-6 mt-24">
        <h2 className=" text-[#4965D8] text-xl font-[all-round-gothic]">
          Governance
        </h2>
        <h1 className="text-3xl md:text-5xl my-4 font-bold text-[#160744] font-[all-round-gothic] dark:text-white">
          Founderz DAO
        </h1>
        <p className="text-[#8094B7] font-[200] text-[15px] sm:text-lg">
          Founderz govern <b>Founderz DAO</b>. Founderz can vote on proposals or
          delegate their vote to a third party. A minimum of <b>2 Founderz</b>{" "}
          is required to submit proposals.
        </p>
        <div className="border border-[#4965D8] rounded-2xl p-7 my-5 flex flex-col sm:flex-row gap-6 sm:gap-1 justify-between">
          <div className="">
            <p className="text-xl sm:text-2xl font-bold text-[#8094B7] font-[all-round-gothic]">
              Treasury
            </p>
            <p className="text-2xl sm:text-4xl">
              <span className="text-[#4965D8] font-bold">Ξ 28,597 </span>
              <span className="text-[#8094B7]">$45,497,892.00</span>
            </p>
          </div>
          <p className="text-[15px] sm:w-2/5">
            This treasury exists for Founderz DAO participants to allocate
            resources for the long-term growth and prosperity of the Nouns
            project.
          </p>
        </div>
        <div className="rounded-2xl bg-white dark:bg-[#17055E] sm:flex items-center justify-between p-5 mb-11">
          <div className="">
            <p className="text-[#160744] dark:text-white font-bold text-2xl font-[all-round-gothic]">
              Join our discord to meet other founderz.
            </p>
            <p className="text-[#8094B7]">
              You will be able to discuss all the ideas proposed by users.
            </p>
          </div>
          <button className="text-[#4965D8] flex items-center gap-1 underline underline-offset-2">
            Join our Discord here{" "}
            <a href="https://discord.gg/FWJ32yHckd" target="blank">
            </a>
            <img src="img/icon-arrow-R.svg" className="h-6" />
          </button>
        </div>

        <div className="sm:flex justify-between">
          <h3 className=" text-2xl sm:text-3xl font-[all-round-gothic]">
            Proposal
          </h3>
          <div className="md:flex gap-4 items-center">
            <span className="text-[#8094B7]">
              Connect wallet to make a proposal.
            </span>
            <button className="bordered border-[#8094B7] rounded-xl bg-[#8094B766] p-2 text-[#8094B7]  font-[all-round-gothic]">
              Submit proposal
            </button>
          </div>
        </div>
        <div className="my-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            // eslint-disable-next-line react/jsx-key
            <button
              onClick={() => router.push("/components/Proposal", `/Proposal`)}
              className=" border w-full rounded-xl p-3 my-5 flex justify-between items-center border-[#8094B7] bg-[#8094B71A] "
            >
              {/* <button onClick={() => router.push("/")} className=' bordered w-full rounded-xl p-3 my-5 flex justify-between items-center bg-gray-200'> */}
              <div className="flex">
                <p className=" text-[#8094B7] dark:text-[#4965D8] mr-2">141</p>
                <p className="text-[#160744] dark:text-white">
                  Founderz Proposal - Stage 2
                </p>
              </div>
              <div className="flex flex-col items-end  sm:flex-row ">
                <button className="bordered rounded-xl sm:mx-2 bg-gray-300 p-2 text-[10px] md:text-[15px] text-gray-500 my-1">
                  Start in a day
                </button>
                <button className="rounded-xl bg-green-500 flex items-center text-[11px] md:text-[15px]  content-center p-2 text-white my-1 ">
                  Pending
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dao
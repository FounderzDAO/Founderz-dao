import React from 'react';

const MidSection = () => {
  return (
    <div className="m-32">
      <h1 className="text-black text-3xl font-semibold">Activity</h1>
      <hr className="text-gray-700 mt-2" />
      <div className="flex justify-between mt-2">
        <h2 className="text-black mt-4 text-2xl">
          <i className="ri-cake-2-fill p-5 text-2xl"></i>
          <b>Founder 42</b> won by <b>0x47...c7e9</b>
        </h2>
        <button className="bg-gray-300 text-white p-3 rounded-3xl">
          <i className="ri-edit-box-line bg-inherit p-2"></i>0x11...a0c0
        </button>
      </div>
      <hr className="text-gray-700 mt-2" />
      <h3 className="text-black text-6xl mt-10 font-semibold">WTF?</h3>
      <p className="mt-7 text-2xl">
        Founderz are an adjacent creation, inspiried by Nouns Dao; with a focus on
        creating a community of Web3 builders. While projects such as{" "}
        <b className="text-red-700">Cryptopunks </b>
        have attempted to bootstrap digital community and identity, Founderz
        attempt to bootstrap teams, ideas, and startups with a shared treasury
        pool that can be used by the community to fund best-performing projects
      </p>
      <p className="mt-4 text-2xl">
        Learn more below, or start creating Founderz off-chain using the{" "}
        <b className="text-red-700">??CAPSULE??</b>.
      </p>
    </div>
  );
}

export default MidSection;

import React from 'react';

const MidSection = () => {
  return (
    <div className="m-32">
      <h1 className="text-black dark:text-white text-3xl font-semibold">Activity</h1>
      <hr className="text-gray-700 mt-2" />
      <div className="flex justify-between mt-2">
        <h2 className="text-black dark:text-white mt-4 text-2xl">
          <i className="ri-cake-2-fill p-5 text-2xl"></i>
          <b>Founder 42</b> won by <b>0x47...c7e9</b>
        </h2>
        <button className="bg-gray-300 text-white p-3 rounded-3xl">
          <i className="ri-edit-box-line bg-inherit p-2"></i>0x11...a0c0
        </button>
      </div>
      <hr className="text-gray-700 mt-2" />
      <h3 className="text-black text-6xl mt-10 font-semibold dark:text-white">WTF?</h3>
      <p className="mt-7 text-2xl">
        Founderz are an adjacent creation, inspired by Nouns Dao; with a focus
        on creating a 🌊 of Web3 builders, creators and dooers. Projects like{" "}
        <b className="text-red-700">
          Cryptopunks, and many other founderz of Web3 projects{" "}
        </b>
        have attempted to bootstrap digital community and identity, enabling
        signalling of idenitifed value, with a shared vision. Founderz DAO attempts and aims to
        bootstrap teams, actualize ideas, and startups with a shared treasury
        pool, for all Founderz in this realm, that can be used by the our commnunity to fund best-performing
        projects, or take us to a new realm. let us build together 🚀 Where will this new DAO take us?
      </p>
      <p className="mt-4 text-2xl">
        Find out our road-map and values below, or enter the magical capsule
        ⌛️ Begin by talking to the peculiar scientist, what will you find I wonder? As a
        Founder <b className="text-red-700">☢️ Enter ☢️</b>.
      </p>
      <div>
      </div>
    </div>
  );
}

export default MidSection;

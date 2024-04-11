import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu, IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <header className=" w-full px-4 py-3 bg-[fff] flex justify-between">
      <div className="grid grid-flow-col gap-4">
        <article className=" flex gap-4">
          <figure className="grid place-items-center">
            <IoIosMenu />
          </figure>
          <figure className="grid place-items-center">
            <img
              src="./src/assets/youtube-logo.png"
              alt="Youtube logo"
              className=" h-8"
            />
          </figure>
        </article>
      </div>
      <div className="flex min-w-32 w-[500px]">
        <input
          type="text"
          className="  py-2 px-6 w-full rounded-l-full border border-neutral-200 outline-none"
          placeholder="search"
        />
        <figure className=" bg-neutral-200 px-6 grid place-items-center rounded-r-full">
          <IoIosSearch />
        </figure>
      </div>
      <div>
        <article className=" border rounded-full p-3 flex gap-2">
          <h4>Login</h4>
          <figure className="flex items-center">
            <FaRegCircleUser />
          </figure>
        </article>
      </div>
    </header>
  );
}

export default Header;

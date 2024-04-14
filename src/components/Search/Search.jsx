import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io';

const Search = () => {
      const [search, setSearch] = useState("");

      const searchInputValue = (value) => {
        setSearch(value);
      };
      
      const onSubmit=(event)=>{
        event.preventDefault();
        console.log(search)
      }
      
  return (
    <form onSubmit={onSubmit} className="flex min-w-32 w-[500px]">
      <input
        type="text"
        className="  py-2 px-6 w-full rounded-l-full border border-neutral-200 outline-none"
        placeholder="search"
        value={search}
        onChange={(e) => {
          searchInputValue(e.target.value);
          console.log(search);
        }}
      />
      <button type='submit' className="bg-neutral-200 px-6 grid place-items-center rounded-r-full">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default Search;
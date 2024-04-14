import React from "react";
import { categories } from "./../../utils/constant";

export const Sidebar = () => {
  return (
    <section className=" w-44 w-full ">
      <article className="grid grid-flow-col lg:grid-flow-row">
        {categories.map((category, i) => (
          <button key={i} className="   px-4 py-3 border-b lg:hover:bg-slate-200">
            <figure>{/* {category.icon} */}</figure>
            <p>{category.name}</p>
          </button>
        ))}
      </article>
    </section>
  );
};

export default Sidebar;

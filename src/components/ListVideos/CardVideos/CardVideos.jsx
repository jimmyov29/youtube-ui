import React from "react";

export const CardVideos = () => {
  return (
    <section className="grid w-full min-w-[315px] max-w-[465px] ">
      <article className=" w-full">
        <img
          src={"./src/assets/test-image.png"}
          alt="imagen de prueba"
          className=" w-full"
        />
      </article>
      <figure>
        <img src="" alt="" className=" w-8 rounded-full" />
      </figure>
      <figure>
        <h2 className=" font-semibold text-lg">
          Titulo del video en especifico
        </h2>
        <h3 className=" font-semibold text-base">User name</h3>
        <h4 className=" font-semibold text-base">54 k vistas ● Hace 1 dia</h4>
      </figure>
    </section>
  );
};

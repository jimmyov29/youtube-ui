import React from "react";
import { CardVideos } from "./CardVideos/CardVideos";

export const ListVideos = () => {
  const videos = [];
  for (let i = 1; i < 10; i++) {
    videos.push(<CardVideos key={i} />);
  }

  return (
    <body className="px-4 grid place-items-center gap-y-6 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 max-w-fit ">
      {videos}
    </body>
  );
};

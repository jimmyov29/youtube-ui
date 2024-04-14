import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
// import { Search } from "./Search/Search";
// import youtubeApi from "../../API/fetchData"

export default class Header extends React.Component{
  state = {
    videoMetaInfo:[],
    selectedVideoId: null
  }

  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    console.log(response)
  };
  
  render(){


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
         <div className="">
           {/* <Search onSearch={this.onSearch} /> */}
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

    

 
}



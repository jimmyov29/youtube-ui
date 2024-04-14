// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import Header from './components/Header/Header'
// import { ListVideos } from './components/ListVideos/ListVideos'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Header />
//     <ListVideos/>
//   </React.StrictMode>,
// )

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, Navbar, SearchFeed, VideoDetail, ChannelDetail } from "./components";

const App = () => (

  <BrowserRouter>
    <div className=" bg-[#fff]">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </div>
  </BrowserRouter>
)


export default App;

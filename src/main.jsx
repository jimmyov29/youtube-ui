import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import { ListVideos } from './components/ListVideos/ListVideos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ListVideos/>
  </React.StrictMode>,
)

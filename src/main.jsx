import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import { ListVideos } from './components/ListVideos/ListVideos'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App/>
    {/* <Header />
    <ListVideos/> */}
  </React.StrictMode>,
)

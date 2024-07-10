import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
const Home = ({sidebar}) => {
  const [categary, setCategary] = useState(0);
  return (
    <>
      <Sidebar sidebar ={sidebar}  categary ={categary} setCategary={setCategary}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed categary ={categary}/>
      </div>
    </>
  )
}

export default Home

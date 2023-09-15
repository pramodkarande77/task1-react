
import { Component, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Table from './Table';
function App() {
  const [proData,setProData] = useState([])
  const [shop,setShop] = useState([])
  // console.log(shop)
 
  return (
  <div>


    <Navbar proData={proData} setProData={setProData} />
   <Cards proData={proData} shop={shop} setShop={setShop}/>
   <Table shop={shop} />
   

    </div>
  );
}

export default App;

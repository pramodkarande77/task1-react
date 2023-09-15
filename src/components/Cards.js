import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {data} from "./db.js"
import Counter from '../Counter.js';



function Cards({proData ,setShop,shop}) {

    // const[card,setCards]=useState([])

    // useEffect(()=>{
    //     setCards(JSON.parse(localStorage.getItem("keyValue"))|| [])

    // },[])

    

    // console.log(card);
    // console.log(data);

  return (
    <>  

    {/* <div style={{width:'90%',height:'40%',margin:'100px auto 0px',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}> */}
    <div className='container my-5'>
    <div className='row'>

    {data.map((item,i)=>{
            return(
               <Counter key={i} item={item} i={i} shop={shop} setShop={setShop}/>
            )
        })}
        {proData.map((item,i)=>{
            return(
                <Counter key={i} item={item} i={i} shop={shop} setShop={setShop}/>
            )
        })}
    </div>
    </div>

     
    </>
  )
}

export default Cards
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Cards() {

    const[card,setCards]=useState([])

    useEffect(()=>{
        setCards(JSON.parse(localStorage.getItem("keyValue")))

    },[])

    console.log(card);

  return (
    <>
    
    <div style={{width:'80%',margin:'100px auto 0px',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
        {card.map((item)=>{
            return(
                <div style={{border:'1px solid red',marginBottom:'40px',gap:'20px', display:'flex',flexDirection:'column',alignItems:'center' ,width:'30%',padding:'30px 20px'}}>
                    <img src={item.productImage} alt='ProductImage'/>
                    <h3>ProductName : {item.productName}</h3>
                    <h4>Price : {item.price}</h4>
                    <Button style={{marginBottom:'20px'}} variant="contained">Add To Bag</Button>
                </div>
            )
        })}
    </div>
    
    </>
  )
}

export default Cards
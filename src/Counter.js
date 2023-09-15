import { Button } from '@mui/material'
import React, { useState } from 'react'
import ImgData from './ImgData'

function Counter({ item, i, setShop, shop}) {

  const [quantity, setQuantity] = useState(0)

  const CountIncrement = () => {
    setQuantity(quantity + 1)
    const abc= shop.find((x)=>{x.id===item.id})
    const xyz= shop.filter((x)=>{x.id!==item.id})
    if(abc){
    setShop([...xyz, { ...item, quantity: quantity }])
      
    }else{

      setShop([...shop, { ...item, quantity: quantity }])
    }

  }
  const CountDecrement = () => {
    if(quantity>0){
      setQuantity(quantity - 1)
    }
  }

  console.log(item);  


  

 
console.log(shop);

  // const addProduct = ()=>{
  //   setShop([...shop,{...item,quantity:quantity}])
  // }


  return (
    <>
      {/* <div key={i} style={{border:'1px solid red',backgroundColor:"lightgrey",marginBottom:'40px',gap:'13px', display:'flex',flexDirection:'column',alignItems:'center' ,width:'30%',padding:'30px 20px'}}>

                 {typeof item.thumbnail === "string" ? <img style={{width:'250px',height:'200px'}} src={item.thumbnail}/> :<ImgData file={item.thumbnail}/>}
                    <h3> {item.title}</h3>
                    <h4>$ {item.price}.00</h4>
                    <div>
                         <button className=' btn btn-secondary mr-3' onClick={CountDecrement}>-</button>
                        <span>{quantity}</span>
                        <button className='btn btn-secondary ml-3' onClick={CountIncrement}>+</button>
                    </div>
                </div> */}

     
          <div className='col-sm-4 mt-5 ' key={i}  >
            <div className='card bg-light shadow'>
              {typeof item.thumbnail === "string" ? <img className='w-75 mx-auto mt-3' src={item.thumbnail} /> : <ImgData file={item.thumbnail} />}
              <div className='card-body mx-auto '>
                <h3> {item.title}</h3>
                <h4>$ {item.price}.00</h4>
                <div>
                  <button className=' btn btn-secondary mr-3' onClick={CountDecrement}>-</button>
                  <span>{quantity}</span>
                  <button className='btn btn-secondary ml-3' onClick={CountIncrement}>+</button>
                </div>
              </div>
            </div>
          </div>
       


     

    </>
  )
}

export default Counter
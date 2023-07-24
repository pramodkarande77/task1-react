import React, { useEffect, useState } from 'react'

import { AppBar, Box, Button, Dialog, DialogContent, DialogTitle, TextField, Toolbar } from '@mui/material'

function Navbar() {

  const [open,setOpen]=useState(false)
  const [data,setData]=useState({
    productName:"",
    price:"",
    productImage:""

  })

  const [product,setProduct]=useState("")
  const [newData,setNewData]=useState([])
  

  const handleOpen=()=>{
    setOpen(true)
  }

  const handleImageChange=(e)=>{
        const fileData= e.target.files[0]
        console.log(fileData);
        if(fileData && fileData.size <= 100*1024){
          const abc=URL.createObjectURL(fileData)
          setData((prev)=>({
            ...prev,productImage:abc
          }))
          setProduct(abc)
        }else{
          alert("File size should be less than or equal to  100KB")
        }
        
  }

  const handleAddProduct=()=>{
    if(data.productImage && data.price && data.productName){

      setNewData(JSON.parse(localStorage.getItem("keyValue")))
      localStorage.setItem("keyValue",JSON.stringify([...newData,data]))
      setData({
        productName:"",
        price:"",
        productImage:""
        
      })
    }else{
      alert('Please fill all fields')
    }

  }

  const handleChange=(e)=>{

      setData((a)=>({
          ...a,[e.target.name]:e.target.value
      })
      )

  }


  return (
    <div className='MainDiv'>

     
          <AppBar>
            <Toolbar>
              <Button onClick={handleOpen} sx={{ background:"white",":hover":{bgcolor:"white"}}}>Buy Now</Button>
            </Toolbar>
          </AppBar>

          <Dialog open={open}>
        <DialogTitle>
          Add Product
        </DialogTitle>
        <DialogContent>
          <Box>
            <input name='productImage' type='file' accept='image/*' onChange={handleImageChange} />
            <Box sx={{margin:'30px 0px'}}>
          
            <TextField sx={{marginRight:'15px'}} name='productName' type='text' label='productname' onChange={handleChange} value={data.productName}/>
            <TextField name='price' type='number' label='price' onChange={handleChange} value={data.price}/>
                
            </Box>
            <Button sx={{width:'100%'}} variant="contained" onClick={handleAddProduct}>Add Product</Button>
          </Box>
        </DialogContent>
          </Dialog>


    </div>
  )
}

export default Navbar
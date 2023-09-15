import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AppBar, Box, Button, Dialog, DialogContent, DialogTitle, TextField, Toolbar } from '@mui/material'

function Navbar({ setProData, proData }) {

 
  const [data, setData] = useState({
    title: "",
    price: "",
    thumbnail: "",
    quantity:''

  })

  // const [product, setProduct] = useState("")
  const [open, setOpen] = useState(false);



  const handleImageChange = (e) => {
    const fileData = e.target.files[0]
    console.log(fileData);
    if (fileData && fileData.size <= 100 * 1024) {
      // const abc = URL.createObjectURL(fileData)
      setData((prev) => ({
        ...prev, thumbnail: fileData
      }))
      // setProduct(abc)
    } else {
      alert("File size should be less than or equal to  100KB")
    }

  }
  const handleChange = (e) => {
    console.log(data)
    setData((a) => ({
      ...a, [e.target.name]: e.target.value
    })
    )

  }

  const handleAddProduct = () => {
    console.log(data)
    if (data.thumbnail && data.price && data.title) {
      setProData([...proData, {...data ,id:uuidv4()}])
      // const productData = JSON.parse(localStorage.getItem("keyValue"))
      // localStorage.setItem("keyValue", JSON.stringify([...productData, data]))
      setData({
        title: "",
        price: "",
        thumbnail: ""

      })
    } else {
      alert('Please fill all fields')
    }

  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (

    

    <div className='MainDiv'>
      <AppBar>
        <Toolbar sx={{display:'flex',justifyContent:'end'}}>
          <Button onClick={handleClickOpen} sx={{ background: "white", ":hover": { bgcolor: "white" } }}>Add Product</Button>
        </Toolbar>
      </AppBar>

      <Dialog open={open}>
        <DialogTitle>
          Add Product
          <Button sx={{marginLeft:'280px'}} onClick={handleClose} >X</Button>
        </DialogTitle>
        <DialogContent>
          <Box>
            <input name='thumbnail' type='file' accept='image/*' onChange={handleImageChange} />
            <Box sx={{ margin: '30px 0px' }}>

              <TextField sx={{ marginRight: '15px' }} name='title' type='text' label='productname' onChange={handleChange} value={data.title} />
              <TextField name='price' type='number' label='price' onChange={handleChange} value={data.price} />

            </Box>
            <Button sx={{ width: '100%' }} variant="contained" onClick={handleAddProduct}>Add Product</Button>
          </Box>
        </DialogContent>
      </Dialog>


    </div>

    // <div className='container'>
    //   <div className='row'>
    //     <div className='col'>
    //       <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-success">
    //         <button onClick={handleClickOpen} className='btn btn-primary'>Add Product</button>
    //       </nav>
    //     </div>
    //   </div>
    //   <div className='row'>
    //     <div className='col-sm-6'>
    //       </input>
    //     </div>
    //   </div>
    // </div>


  )
}

export default Navbar
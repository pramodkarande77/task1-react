import React, { useState } from 'react'

function Table({shop }) {


    

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                        <h3>My Shopping Bag</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">ProductName</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shop?.map((item,i)=>{
                                return <tr>
                                    <td>{i+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>$ {item.price}.00</td>
                                    <td>$ {item.quantity*item.price}.00</td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    )
}

export default Table
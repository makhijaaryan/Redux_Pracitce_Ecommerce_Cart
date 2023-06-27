import React from 'react'
import Table from 'react-bootstrap/Table';
import './style.css'

const CardDetail = () => {
    return (
        <>
            <div className="container mt-2">
                <h2 className="text-center">Order Details</h2>
                <section className="container mt-3">
                    <div className="itemsDetails">
                        <div className="items_img">
                            <img src="https://www.authentkicks.com/wp-content/uploads/2020/09/619BkvKW35L._SL1500_.jpg" alt="" />
                        </div>
                        <div className="details">
                            <Table>
                                <td>
                                    <tr>
                                        <p> <strong>Item</strong> : PlayStation 5 </p>
                                        <p> <strong>Price</strong> : $399 </p>
                                        <p> <strong>Total</strong> : $399 </p>
                                    </tr>
                                    <tr>
                                        <p><strong>Rating : </strong><span style={{background: "green", color:"#fff",padding: "2px, 5px", borderRadius:"5px"}}>3.8 ★</span></p>
                                        <p><strong>About :</strong><span> PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.</span></p>
                                        <p><span> <i className="fas fa-trash" style={{color:"red", fontSize:20, cursor:"pointer"}}></i></span><strong>   Remove Item</strong></p>
                                    </tr>
                                </td>
                            </Table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardDetail

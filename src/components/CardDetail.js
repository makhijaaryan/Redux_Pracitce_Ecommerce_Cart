import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './style.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../redux/actions/action';

const CardDetail = () => {

    const [data, setData] = useState([])

    const { id } = useParams()

    const dispatch = useDispatch();

    const history = useNavigate();

    const getdata = useSelector((state) => state.cartReducer.carts)
    // console.log(getdata);

    const compare = () => {
        let compareData = getdata.filter((e) => {
            return (e.id == id)
        });
        setData(compareData);
        // console.log(compareData);
    }

    useEffect(() => {
        compare();
    }, [id])

    const dlt = (id) => {
        dispatch(DELETE(id))
        history("/")
    }

    return (
        <>
            <div className="container mt-2">
                <h2 className="text-center">Order Details</h2>
                <section className="container mt-3">
                    <div className="itemsDetails">
                        {
                            data.map((ele) => {
                                return (
                                    <>
                                        <div className="items_img" style={{ padding: 10 }}>
                                            <img src={ele.imgdata} alt="" />
                                        </div>
                                        <div className="details">
                                            <Table>
                                                <td>
                                                    <tr>
                                                        <p> <strong>Item</strong> : {ele.rname} </p>
                                                        <p> <strong>Price</strong> : ${ele.price} </p>
                                                        <p> <strong>Total</strong> : $399 </p>
                                                    </tr>
                                                    <tr>
                                                        <p><strong>Rating : </strong><span style={{ background: "green", color: "#fff", padding: "2px, 5px", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                                                        <p><strong>About :</strong><span> {ele.description}</span></p>
                                                        <p><span> <i className="fas fa-trash" style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(ele.id)}></i></span><strong>   Remove Item</strong></p>
                                                    </tr>
                                                </td>
                                            </Table>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardDetail

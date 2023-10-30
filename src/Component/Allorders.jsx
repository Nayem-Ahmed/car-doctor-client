import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import OrdersTable from "./OrdersTable";
import Swal from "sweetalert2";
import axios from "axios";



const Allorders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/orders?email=${user?.email}`;

    useEffect(() => {

        axios.get(url,{withCredentials:true})
        .then(res=>{
            setOrders(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setOrders(data)
        //     })
    }, [])
    const handledelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = orders.filter(order=> order._id !== id)
                            setOrders(remaining)
                        }
                    })
            }
        })


    }
    const handleconfirm = (id)=>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount) {
                const remaining = orders.filter(order=> order._id !== id)
                const update = orders.find(order=> order._id === id)
                update.status = 'confirm'
                const neworder = [update, ...remaining]
                setOrders(neworder)
                
            }
        })

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Button</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            orders.map(table => <OrdersTable handledelete={handledelete} handleconfirm={handleconfirm} key={table._id} table={table}></OrdersTable>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allorders;
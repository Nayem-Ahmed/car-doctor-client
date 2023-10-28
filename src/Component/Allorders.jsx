import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import OrdersTable from "./OrdersTable";
import Swal from "sweetalert2";


const Allorders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
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
                            <th>dffffffffffff</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {
                            orders.map(table => <OrdersTable handledelete={handledelete} key={table._id} table={table}></OrdersTable>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allorders;
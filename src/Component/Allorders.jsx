import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import OrdersTable from "./OrdersTable";


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
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                            <th>dffffffffffff</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(table => <OrdersTable key={table._id} table={table}></OrdersTable>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allorders;
import React from 'react';

const OrdersTable = ({ table }) => {
    const { title, img, price } = table;
    return (

            <tr>
                 <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src= {img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                   <h2>{price}</h2>
    
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
  
    );
};

export default OrdersTable;
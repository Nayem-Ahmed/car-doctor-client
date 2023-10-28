import React from 'react';

const OrdersTable = ({ table , handledelete,handleconfirm}) => {
    const { title, img, price, _id ,status} = table;


    return (

        <tr>
            <th>
                <button onClick={() => handledelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
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
                {
                    status === 'confirm' ? <span className='text-blue-600'>confirmed</span>
                    :
                    <button onClick={()=>handleconfirm(_id)} className="btn btn-ghost btn-xs">please confirm</button>

                }
            </th>
        </tr>

    );
};

export default OrdersTable;
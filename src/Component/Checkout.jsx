import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const {user} = useContext(AuthContext);
    const loadercheckout = useLoaderData();
    const {img,service_id,_id,price,title} = loadercheckout;
    const handlecheckout = (e)=>{
        e.preventDefault()
        // const email = e.target.email.value;
        const email = user?.email;
        const phone = e.target.phone.value;
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const comments = e.target.comments.value;
        const order = {email,title,phone,fname,lname,comments,img,service_id,_id,price}
        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                alert("order success")
                
            }
        })

    }
    return (
        <div className="hero min-h-screen ">

            <form onSubmit={handlecheckout} className="card-body lg:w-7/12 border">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" defaultValue={user?.email} name="email"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="tel" placeholder="Phone" name="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First name</span>
                        </label>
                        <input type="text" placeholder="First name" name="fname" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last name</span>
                        </label>
                        <input type="text" placeholder="Last name" name="lname" className="input input-bordered" required />
                    </div>
                </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional Comments</span>
                        </label>
                        <textarea placeholder="Enter your comments" name="comments" className="input input-bordered" required />
                    </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-secondary">Order Confirm</button>
                </div>
            </form>




        </div>

    );
};

export default Checkout;
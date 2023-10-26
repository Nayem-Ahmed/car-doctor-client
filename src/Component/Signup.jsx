import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";


const Signup = () => {
    const {createuser,signingoogle} = useContext(AuthContext)
    const handlesignup = (e) => {
        e.preventDefault()
        const name = e.target.text.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        createuser(email,password)
        .then((result) => {
            const user = result.user;
            console.log( user)
   
          })
          .catch((error) => {
           console.log(error)
          });

    }
    const handlegoogle = ()=>{
        signingoogle()
        .then((result) => {
            const user = result.user;
            console.log( user)
   
          })
          .catch((error) => {
           console.log(error)
          });

    }
    return (
        <div className="flex items-center flex-col md:flex-row py-4">
            <div className="flex-1"><img className="w-full" src="https://i.ibb.co/Z1XCGxW/images.jpg" alt="" /></div>
            <div className="flex-1">
                <div className="hero min-h-screen ">
                    <div className="hero-content">
                        <div className="card  shadow-2xl">
                            <form onSubmit={handlesignup} className="card-body">
                                <h2 className="text-center text-2xl">Sign Up</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" name='text' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-500 text-white">Signup</button>
                                </div>
                                <Link className="underline text-blue-600" to='/login'>Login</Link>
                                <i className="text-center border-b-2">or signup with</i>
                                <button onClick={handlegoogle} className="btn btn-circle text-center mx-auto">
                                     <FcGoogle></FcGoogle>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Signup;
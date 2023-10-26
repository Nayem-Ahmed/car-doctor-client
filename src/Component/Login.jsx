import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

 
const Login = () => {
    const {signin} = useContext(AuthContext);
    
    const handlelogin =(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signin(email,password)
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
            <div className="flex-1"><img src="https://i.ibb.co/vYQyydq/62e2bda8af29cc85b7fd0df2-icon.png" alt="" /></div>
            <div className="flex-1">
                <div className="hero min-h-screen ">
                    <div className="hero-content">
                        <div className="card  shadow-2xl">
                            <form onSubmit={handlelogin} className="card-body">
                                <h2 className="text-center text-2xl">Login</h2>
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
                                    <button className="btn bg-orange-500 text-white">Login</button>
                                </div>
                                <Link className="underline text-blue-600" to ='/signup'>Signup</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;
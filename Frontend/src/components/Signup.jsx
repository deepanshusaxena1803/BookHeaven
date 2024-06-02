import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

const Signup = () => {

    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
        await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success("SignUp successfully");
                navigate(from, { replace: true });
                window.location.reload();
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user));
        }).catch((err)=>{
            if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message);
            }
        });
        // console.log(data);
    }

    return (
        <>
            <div className="flex h-screen justify-center items-center">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <div className="w-[600px]">
                    <div className="modal-box border-2  dark:bg-white dark:text-black ">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>

                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input type="text" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black "
                                    {...register("fullname", { required: true })}
                                ></input>
                                <br />
                                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}

                            </div>

                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black "
                                    {...register("email", { required: true })}
                                ></input>
                                <br />
                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                            </div>

                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black "
                                    {...register("password", { required: true })}
                                ></input>
                                <br />
                                {errors.password && <span className="text-sm text-red-500">This field is required</span>}

                            </div>

                            <div className="flex justify-around mt-5">
                                <button className="bg-pink-500 hover:bg-pink-600 text-slate-800 px-3 py-1 rounded  dark:text-white ">Signup</button>
                                <p>Have Account? <span> </span>
                                    <button className="underline text-blue-400 cursor-pointer hover:text-blue-500"
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >Login</button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
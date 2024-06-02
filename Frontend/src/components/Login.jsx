import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'


const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo={
            email:data.email,
            password:data.password,
        }
        await axios.post("http://localhost:4001/user/login",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Loggedin successfully');
                document.getElementById("my_modal_3").close();
                setTimeout(()=>{
                    window.location.reload();
                    localStorage.setItem("Users",JSON.stringify(res.data.user));
                },1000);
            }
        })
        .catch((err)=>{
            if(err.response){
            console.log(err);
            toast.error("Error: "+err.response.data.message);
            setTimeout(()=>{},2000);
            }
        });
    };

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box  dark:bg-white dark:text-black ">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/"> <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >✕
                        </button>
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black "
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-white dark:text-black "
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}

                        </div>

                        <div className="flex justify-around mt-5">
                            <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-slate-800 px-3 py-1 rounded  dark:text-white ">Login</button>
                            <p>Not registered? <span> </span>
                                <Link to="/signup" className="underline text-blue-400 cursor-pointer hover:text-blue-500">Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"
import axios from "axios"
const Course = () => {
    const [book,setBook]= useState([]);

    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res=await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log("error: ",error);
            }
        };
        getBook();
    },[])

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We're delighted to have you <span className="text-pink-500">here! :)</span>
                    </h1>
                    <p className="mt-10">
                        Dive into a world of boundless knowledge with our handpicked selection of course books. Whether you're delving into mathematics, exploring literature, or mastering scientific concepts, our diverse collection caters to every academic pursuit. Empower your studies and ignite your passion for learning as you uncover essential texts meticulously curated to enhance your educational journey. From timeless classics to cutting-edge resources, each book is a gateway to unlocking new insights and fostering intellectual growth.
                    </p>

                    <Link to="/">
                    <button className="bg-pink-500 text-slate-900 px-4 py-2 rounded hover:bg-pink-700 duration-300 mt-6 dark:text-white " >Back</button>
                    </Link>

                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Course


import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <form className="space-y-4">
                    <p className="text-3xl ">Contact Us</p>
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <h5>Name</h5>
                            <input type="text" placeholder="Enter your name" className="dark:bg-white dark:text-black w-96 px-3 py-1 border rounded-sm outline-none"></input>
                        </div>

                        <div className="space-y-1">
                            <h5>Email</h5>
                            <input type="email" placeholder="Email address" className="dark:bg-white dark:text-black w-96 px-3 py-1 border rounded-sm outline-none"></input>
                        </div>

                        <div className="space-y-1">
                            <h5>Message</h5>
                            <textarea type="text" placeholder="Type your message" rows="4" className="dark:bg-white dark:text-black w-96 px-3 py-1 border rounded-sm outline-none"></textarea>
                        </div>

                        <button type='submit' className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2 ">Submit</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
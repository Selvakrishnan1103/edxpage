"use client"
import { motion } from "framer-motion"
import { useState } from "react"


export default function ContactForm(){
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const handleSubmit = () =>{
        console.log("name")
        console.log("email")
        setName("")
        setEmail("")
    }
    return (
        <div className="flex flex-col justify-center items-center h-[600px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col justify-center items-center gap-8 mx-auto border-2 border-white p-10 shadow-lg rounded"
            >
                <div className="flex flex-col justify-center items-center">
                    <motion.h1
                        className="text-[50px] font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Contact Form
                    </motion.h1>
                    <motion.p
                        className="text-[20px] font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        You can contact me through this form
                    </motion.p>
                </div>

                <motion.form
                    onSubmit={e => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-6 justify-center items-center w-full"
                >
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter your Name"
                        className="border border-white focus:outline-none focus:border-2 p-2 rounded-xl w-full max-w-xs transition-all duration-300 placeholder:text-white placeholder:text-center text-center text-white bg-transparent"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        className="border border-white focus:outline-none focus:border-2 p-2 rounded-xl w-full max-w-xs transition-all duration-300 placeholder:text-white placeholder:text-center text-center text-white bg-transparent"
                    />
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-white hover:text-red-500 border-2 border-white text-white w-24 p-2 rounded-full transition-all duration-300"
                    >
                        Submit
                    </button>
                </motion.form>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-4 text-white"
            >
                {name && <p>Name: {name}</p>}
                {email && <p>Email: {email}</p>}
            </motion.div>
        </div>
    )
}
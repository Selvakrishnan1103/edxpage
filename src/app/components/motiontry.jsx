"use client"

import { easeInOut, motion } from "framer-motion"

export default function MotionTry(){
    return(
        <>
            <motion.div
                animate = {{ opacity : [ 0.5, 1, 0.5]}}
                transition={{ duration : 2 , repeat : Infinity , repeatType : "loop"}}
                className="flex justify-center items-center h-[500px] w-full text-[30px]"
            >
                <motion.h1
                    
                >
                    Hello, This is Selva
                </motion.h1>

            </motion.div>
            <div className="flex justify-center items-center">
                <motion.button
                    
                    className="rounded-full bg-orange-600 text-white text-[30px] p-4 hover:scale-105 transition-all duration-300"
                >
                    Click Me
                </motion.button>
            </div>
        </>
        
    )
}
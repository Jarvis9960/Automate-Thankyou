import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";
import Router, { useRouter } from "next/router"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");

  const handleClick = () => {
     Router.push({
      pathname: "/TakeName",
      query: { name },
    })
  };

  return (
    <>
      <div className="home">
        <div className="inner_home">
          <motion.h1
            animate={{
              scale: 1.2,
              y: 300,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
            className="heading"
          >
            Write your name...?
          </motion.h1>
        </div>
        <div className="inner_home">
          <motion.input
            animate={{
              scale: 1.2,
              y: 300,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="input_text"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></motion.input>
        </div>
        <div className="inner_home">
          <motion.button
            animate={{
              scale: 1.2,
              y: 300,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 50 }}
            className="input_button"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </>
  );
}

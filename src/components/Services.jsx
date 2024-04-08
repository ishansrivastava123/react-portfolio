import React from 'react';
import { motion } from "framer-motion";
import { AiFillAndroid, AiFillIeCircle, AiFillWindows } from 'react-icons/ai';

const Services = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        one: {
            opacity: 0,
            x: "-100%"
        },
        twoAndThree: {
            opacity: 0,
            y: "-100%",
        },
        four: {
            opacity: 0,
            x: "100%"
        },
    }

  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className='serviceBox1' whileInView={animations.whileInView} initial={animations.one}>
                <h3>0+</h3>
                <p>Years of Experience</p>
                <h1>🥲</h1>
            </motion.div>
            <motion.div className='serviceBox2' whileInView={animations.whileInView} initial={animations.twoAndThree}>
                <AiFillIeCircle />
                <span>Web Development</span>
            </motion.div>
            <motion.div className='serviceBox3' whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{delay: 0.3}}>
                <AiFillAndroid />
                <span>App Development</span>
            </motion.div>
            <motion.div className='serviceBox4' whileInView={animations.whileInView} initial={animations.four}>
                <AiFillWindows />
                <span>Desktop Development</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Services
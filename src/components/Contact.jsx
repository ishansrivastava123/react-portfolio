import React, { useState } from 'react';
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
    const [inputs, setInputs] = useState({ name: "", email: "", msg: "" });

    const [disableBtn, setDisableBtn] = useState(false);

    const changeHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const submithandler = async (e) => {
        e.preventDefault();
        setDisableBtn(true);

        try {
            await addDoc(collection(db, "contacts"), { ...inputs })
            toast.success("Message Sent!");
            setDisableBtn(false);
            setInputs({ name: "", email: "", msg: "" });
        } catch (error) {
            toast.error("Error");
            console.log(error);
            setDisableBtn(false);
        }
    }

    const animations = {
        form: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            },
            transition: {
                delay: 0.5
            }
        }
    }

  return (
    <div id='contact'>
        <section>
            <motion.form onSubmit={submithandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="text" placeholder='Your Name' name='name' value={inputs.name} onChange={changeHandler} required />
                <input type="email" placeholder='Your Email' name='email' value={inputs.email} onChange={changeHandler} required />
                <input type="text" placeholder='Your Message' name='msg' value={inputs.msg} onChange={changeHandler} required />
                <motion.button disabled={disableBtn} className={disableBtn ? "disableBtn" : ""} type="submit" {...animations.button}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="Graphics" />
        </aside>
    </div>
  )
}

export default Contact
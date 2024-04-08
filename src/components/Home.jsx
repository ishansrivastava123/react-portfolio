import React, { useRef } from 'react';
import { animate, motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { LuExternalLink } from "react-icons/lu";
import { RxDoubleArrowDown } from "react-icons/rx"
import me from "../assets/logo.png";

const Home = ({ratio}) => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationCount = (key) => {
        animate(0, key === "client" ? 100 : 500, {
            duration: 2,
            onUpdate: (val) => key === "client" ? (clientCount.current.textContent = val.toFixed()) : (projectCount.current.textContent = val.toFixed())
        })
    }

    const animations = {
        h1: {
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
            }
        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I'm<br />Ishan
                </motion.h1>

                <Typewriter options={{
                    strings: ["A Developer", "A Designer", "A Creator"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "typeWriterPara"
                }} />

                <div>
                    <a href="mailto:ishansrivastava123@gmail.com">Hire Me!</a>
                    <a href="#work">Projects &nbsp; <LuExternalLink /></a>
                </div>

                <article>
                    <p>
                        +{
                            (ratio < 2.5) && (<motion.span whileInView={() => animationCount("client")} ref={clientCount}></motion.span>)
                        }
                    </p>
                    <span>Clients Worldwide</span>
                </article>

                <aside>
                    <article>
                        <p>
                            +{
                                (ratio < 2.5) && (<motion.span whileInView={animationCount} ref={projectCount}></motion.span>)
                            }
                        </p>
                        <span>Projects Completed</span>
                    </article>
                    <article data-special>
                        <p>Contact</p>
                        <span>ishansrivastava123@gmail.com</span>
                    </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="Ishan" />
        </section>
        <RxDoubleArrowDown />
    </div>
  )
}

export default Home
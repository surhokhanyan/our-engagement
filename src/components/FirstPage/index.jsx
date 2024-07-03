import React from "react";
import Countdown from "react-countdown";
import { ReactComponent as Sh1 } from "../../assets/svg/sh1.svg";
import { ReactComponent as Sh2 } from "../../assets/svg/sh2.svg";
import { ReactComponent as Sh3 } from "../../assets/svg/sh3.svg";
import { ReactComponent as Sh4 } from "../../assets/svg/sh4.svg";
import { ReactComponent as Leaf } from "../../assets/svg/shape.svg";
import { ReactComponent as Leaf2 } from "../../assets/svg/shape2.svg";
import styles from "./first_page.module.scss";
import { motion } from "framer-motion";
import { coming_delay, coming_from_top_anime, opacity_scale_anime } from "../../assets/animations";

const FirstPage = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <h3 className={styles.finish}>We are engaged</h3>;
        } else {
            return (
                <div className={styles.time_wrapper}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={0.7}
                        className={styles.time}
                    >
                        <p className={styles.time_number}>{`${days}`.length === 1 ? `0${days}` : days}</p>
                        <p className={styles.time_text}>Days</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={0.8}
                        className={styles.time}
                    >
                        <p className={styles.time_number}>{`${hours}`.length === 1 ? `0${hours}` : hours}</p>
                        <p className={styles.time_text}>Hours</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={0.9}
                        className={styles.time}
                    >
                        <p className={styles.time_number}>{`${minutes}`.length === 1 ? `0${minutes}` : minutes}</p>
                        <p className={styles.time_text}>minutes</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={1}
                        className={styles.time}
                    >
                        <p className={styles.time_number}>{`${seconds}`.length === 1 ? `0${seconds}` : seconds}</p>
                        <p className={styles.time_text}>seconds</p>
                    </motion.div>
                </div>
            );
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_from_top_anime} custom={50}>
                    <Leaf />
                </motion.div>
                <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.3}>
                    Suren & Marine
                </motion.h3>
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.6}>
                    We Are Getting Engaged on July 06,2024
                </motion.p>
                <Countdown date={1720267200000} renderer={renderer} />
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_from_top_anime} custom={200}>
                    <Leaf2 />
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={opacity_scale_anime}
                custom={0.8}
                className={styles.right}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opacity_scale_anime}
                    custom={1}
                    className={styles.framer}
                >
                    <div
                        className={styles.image}
                    >
                        <div className={styles.sh_one}>
                            <Sh1 />
                        </div>
                        <div className={styles.sh_two}>
                            <Sh2 />
                        </div>
                        <div className={styles.sh_three}>
                            <Sh3 />
                        </div>
                        <div className={styles.sh_four}>
                            <Sh4 />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FirstPage;

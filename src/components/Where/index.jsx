import React from "react";
import styles from "./where.module.scss";
import cinema from "../../assets/images/cinema.jpg";
import { ReactComponent as RightFLower } from "../../assets/svg/caxik.svg";
import { ReactComponent as LeftFLower } from "../../assets/svg/cax.svg";
import { motion } from "framer-motion";
import { coming_delay, opacity_scale_anime } from "../../assets/animations";

const Where = () => {
    return (
        <div className={styles.container}>
            <div className={styles.svg_wrapper1}>
                <LeftFLower />
            </div>
            <div className={styles.svg_wrapper2}>
                <RightFLower />
            </div>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0} className={styles.subtitle}>
                Our Engagement
            </motion.p>
            <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.3} className={styles.title}>
                When & Where
            </motion.h3>
            <div className={styles.info_wrapper}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opacity_scale_anime}
                    custom={0.3}
                    className={styles.image_wrapper}
                >
                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={opacity_scale_anime}
                        custom={0.5}
                        src={cinema}
                        alt="Cinema"
                    />
                </motion.div>
                <motion.h3
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opacity_scale_anime}
                    custom={0.3}
                    className={styles.place}
                >
                    Cinema Garden
                </motion.h3>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opacity_scale_anime}
                    custom={0.5}
                    className={styles.time}
                >
                    Saturday, 06 July 16:00 - 23:00
                </motion.p>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opacity_scale_anime}
                    custom={0.7}
                    className={styles.time}
                >
                    35 Lane, 16 House, Proshyan, Armenia
                </motion.p>
            </div>
        </div>
    );
};

export default Where;

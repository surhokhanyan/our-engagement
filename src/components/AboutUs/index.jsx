import React from "react";
import styles from "./about.module.scss";
import { ReactComponent as Background } from "../../assets/svg/aboutBg.svg";
import { ReactComponent as PhotoBG } from "../../assets/svg/photoFramer.svg";
import suren from "../../assets/images/Suren.jpg";
import mari from "../../assets/images/Mari.jpg";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { scale_anime, opacity_anime, coming_delay, coming_delay_right } from "../../assets/animations";

const About = () => {
    return (
        <div className={styles.container}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={opacity_anime}
                custom={0.5}
                className={styles.bg_wrapper}
            >
                <Background />
            </motion.div>
            <div className={styles.top}>
                <div className={styles.image_wrapper}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scale_anime}
                        className={styles.svg_wrapper}
                    >
                        <PhotoBG />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scale_anime} className={styles.image}>
                        <img src={mari} alt="Mari" />
                    </motion.div>
                </div>
                <div className={styles.info_wrapper}>
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.5}>
                        Marine Mikoyan
                    </motion.h3>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.7}>
                        20 y/o, Graphic Designer
                    </motion.p>
                    <div className={styles.social_wrapper}>
                        <motion.a
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay}
                            custom={0.9}
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/mari.ne_._?igsh=MzF4aXF0a2NxYWFw"
                        >
                            <InstagramOutlined />
                        </motion.a>
                        <motion.a
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay}
                            custom={1.1}
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/marine.mikoyan.52"
                        >
                            <FacebookOutlined />
                        </motion.a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.info_wrapper}>
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay_right} custom={0.5}>
                        Suren Hokhanyan
                    </motion.h3>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay_right} custom={0.7}>
                        24 y/o, Web Developer
                    </motion.p>
                    <div className={styles.social_wrapper}>
                        <motion.a
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay_right}
                            custom={0.9}
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.instagram.com/sur_hokhanyan?igsh=MXNzc2ltcW5rMm9tMw=="
                        >
                            <InstagramOutlined />
                        </motion.a>
                        <motion.a
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay_right}
                            custom={1.1}
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/suren.hokhanyan.7"
                        >
                            <FacebookOutlined />
                        </motion.a>
                    </div>
                </div>
                <div className={styles.image_wrapper}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scale_anime}
                        className={styles.svg_wrapper}
                    >
                        <PhotoBG />
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scale_anime} className={styles.image}>
                        <img src={suren} alt="Suren" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;

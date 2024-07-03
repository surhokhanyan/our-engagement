import React from "react";
import styles from "./story.module.scss";
import { ReactComponent as FlowerOne } from "../../assets/svg/terev.svg";
import { ReactComponent as FlowerTwo } from "../../assets/svg/caxikAj.svg";
import meet from "../../assets/images/meet.jpg";
import yes from "../../assets/images/yes.jpeg";
import dog from "../../assets/images/dog.jpg";
import home from "../../assets/images/home.jpg";
import { motion } from "framer-motion";
import { coming_delay, opacity_scale_anime } from "../../assets/animations";

const Story = () => {
    return (
        <div className={styles.container}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={coming_delay}
                custom={0.3}
                className={styles.flower_one}
            >
                <FlowerOne />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={coming_delay}
                custom={0.5}
                className={styles.flower_two}
            >
                <FlowerTwo />
            </motion.div>
            <div className={styles.header}>
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.3}>
                    Our Story
                </motion.p>
                <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.5}>
                    How it Happened
                </motion.h3>
            </div>
            <div className={styles.story}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opacity_scale_anime}
                    custom={0}
                    className={styles.story_bg}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={0.3}
                        className={styles.image_wrapper}
                    >
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay}
                            custom={0.3}
                            src={meet}
                            alt="We"
                        />
                    </motion.div>
                </motion.div>
                <div className={styles.info_wrapper}>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.3}>
                        15 Jan 2022
                    </motion.p>
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.5}>
                        Our first date
                    </motion.h3>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.7}>
                        At that time, Marine was completing an internship at CreativeLab. Her parents didn't know about Suren. Initially, Marine
                        didn't want to meet with Suren, but on January 15, 2022, at 6:30 PM, they decided to meet at the Monmartre restaurant. And
                        that's where everything started.
                    </motion.p>
                </div>
            </div>
            <div className={styles.story}>
                <div className={styles.info_wrapper}>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.3}>
                        14 Feb 2022
                    </motion.p>
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.5}>
                        She said Yes
                    </motion.h3>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.7}>
                        On Feb 22, they went to the Azat reservoir. After a wonderful and beautiful day, Suren proposed, and Marine
                        said yes. Since then, every year on February 14th, they go to the Azat reservoir.
                    </motion.p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={coming_delay}
                    custom={0.3}
                    className={styles.story_bg}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={0.3}
                        className={styles.image_wrapper}
                    >
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay}
                            custom={0.3}
                            src={yes}
                            alt="We"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div className={styles.story}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opacity_scale_anime}
                    custom={0}
                    className={styles.story_bg}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={0.3}
                        className={styles.image_wrapper}
                    >
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay}
                            custom={0.3}
                            src={dog}
                            alt="We"
                        />
                    </motion.div>
                </motion.div>
                <div className={styles.info_wrapper}>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.3}>
                        24 Oct 2023
                    </motion.p>
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.5}>
                        Family new member
                    </motion.h3>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.7}>
                        Their baby came home around that time. Her name is Mia, and she is the kindest, friendliest, and most intelligent dog in the
                        world, of course, as long as she's not hungry.
                    </motion.p>
                </div>
            </div>
            <div className={styles.story}>
                <div className={styles.info_wrapper}>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.3}>
                        8 Jun 2024
                    </motion.p>
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.5}>
                        New Home
                    </motion.h3>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={opacity_scale_anime} custom={0.7}>
                    On June 8th, they opened the door to their new home. They didn't expect to be able to buy it in 2024, but thanks God, everything is possible when love is with them.
                    </motion.p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={coming_delay}
                    custom={0.3}
                    className={styles.story_bg}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={coming_delay}
                        custom={0.3}
                        className={styles.image_wrapper}
                    >
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={coming_delay}
                            custom={0.3}
                            src={home}
                            alt="We"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Story;

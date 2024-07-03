import React from "react";
import styles from "./styles.module.scss";
import { CloudUploadOutlined } from "@ant-design/icons";
import last from "../../assets/images/last.jpg";
import { motion } from "framer-motion";
import { coming_delay, opacity_scale_anime } from "../../assets/animations";

const Upload = () => {
    return (
        <div className={styles.container}>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0} className={styles.subtitle}>
                Our Photos
            </motion.p>
            <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.2} className={styles.title}>
                Upload on Google Drive
            </motion.h3>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={coming_delay} custom={0.4} className={styles.info}>
                Dear guests, if you have photos or videos from our event, please upload them to Google Drive.
            </motion.p>
            <motion.a
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={coming_delay}
                custom={0.6}
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/drive/folders/1ECFIaiTRm6u1oRvHdwv4HPX7SY3R4IsY?usp=sharing"
            >
                <CloudUploadOutlined /> Upload
            </motion.a>
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
                    src={last}
                    alt="We"
                />
            </motion.div>
        </div>
    );
};

export default Upload;

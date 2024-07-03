import React, { useState } from "react";
import FirstPage from "../FirstPage";
import About from "../AboutUs";
import Story from "../Story";
import Where from "../Where";
import Upload from "../Upload";
import styles from "./main.module.scss";
import passwordImage from "../../assets/images/password.jpg";

const Main = () => {
    const [password, setPassword] = useState("");
    const [canSignIn, setCanSignIn] = useState(false);

    if (!canSignIn) {
        return (
            <div className={styles.container}>
                <h3 className={styles.header}>Welcome to Suren & Marine's engagement</h3>
                <div className={styles.main}>
                    <div className={styles.img_wrapper}>
                        <img src={passwordImage} alt="Our Photo" />
                    </div>
                    <div className={styles.signIn}>
                        <p>Please Sign In</p>
                        <input
                            type="password"
                            placeholder="Please write a password ..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setCanSignIn(password === "06072024");
                            }}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <FirstPage />
            <About />
            <Story />
            <Where />
            <Upload />
        </div>
    );
};

export default Main;

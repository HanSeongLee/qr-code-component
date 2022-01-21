import React from "react";
import styles from './style.module.scss';

const QRCard = () => {
    return (
        <div className={styles.card}>
            <img className={styles.image}
                 src={'/img/image-qr-code.png'}
                 alt={'QR code'}
            />
            <h2 className={styles.title}>
                Improve your front-end skills by building projects
            </h2>
            <p className={styles.description}>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    );
};

export default QRCard;

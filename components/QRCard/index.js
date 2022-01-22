import React from "react";
import styles from './style.module.scss';

const QRCard = ({ image, title, description }) => {
    return (
        <div className={styles.card}>
            <img className={styles.image}
                 src={image}
                 alt={'QR code'}
            />
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

export default QRCard;

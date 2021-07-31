import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';
import { MailToButton } from '..';

export const ServiceCard = ({
    title,
    description,
    mailToButtonTitle,
    mailToButtonSubject,
    imageSrc,
    imageAlt,
    reverse,
}) => (
    <div className={reverse ? styles.reverseServiceCard : styles.serviceCard}>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.buttonContainer}>
                <MailToButton title={mailToButtonTitle} subject={mailToButtonSubject} />
            </div>
        </div>
        <motion.div
            initial={{ rotate: -15 }}
            animate={{
                rotate: 15,
                transition: {
                    duration: 0.6,
                },
            }}
            className={styles.imageContainer}>
            <Image
                className={styles.imageContainer}
                width='1013'
                height='1064'
                src={imageSrc}
                alt={imageAlt}></Image>
        </motion.div>
    </div>
);

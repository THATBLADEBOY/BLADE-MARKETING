import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import styles from './ServiceCard.module.css';
import { MailToButton } from '..';

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            transition={{ duration: 0.3 }}
            variants={{
                visible: { opacity: 1, scale: 1, maxWidth: '100%' },
                hidden: { opacity: 0, scale: 0 },
            }}>
            {children}
        </motion.div>
    );
}

export const ServiceCard = ({
    title,
    description,
    mailToButtonTitle,
    mailToButtonSubject,
    imageSrc,
    imageAlt,
    imageSwingDuration,
    reverse,
}) => (
    <div className={reverse ? styles.reverseServiceCard : styles.serviceCard}>
        <div className={styles.serviceCardSection}>
            <h1>{title}</h1>
            <p>{description}</p>
            <FadeInWhenVisible>
                <span className={styles.buttonContainer}>
                    <MailToButton title={mailToButtonTitle} subject={mailToButtonSubject} />
                </span>
            </FadeInWhenVisible>
        </div>
        <motion.div
            initial={{ rotate: -10 }}
            animate={{
                rotate: 10,
                transition: {
                    duration: 3 + imageSwingDuration,
                    repeat: Infinity,
                    repeatType: 'mirror',
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

import Image from 'next/image';
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
        <div className={styles.imageContainer}>
            <Image width='450' height='486' src={imageSrc} alt={imageAlt}></Image>
        </div>
    </div>
);

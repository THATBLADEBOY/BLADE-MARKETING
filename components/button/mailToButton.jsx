import styles from './Button.module.css';

export const MailToButton = ({ title, subject }) => (
    <a href={`mailto:yo@blade.wtf?subject=${subject}`} className={styles.buttonEffect}>
        {title}
    </a>
);

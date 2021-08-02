import styles from './Button.module.css';

export const MailToButton = ({ title, subject }) => (
    <a href={`mailto:hello@austinblade.com?subject=${subject}`} className={styles.buttonEffect}>
        {title}
    </a>
);

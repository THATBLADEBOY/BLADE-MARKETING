import styles from './Header.module.css';
import { NavBar } from '..';

export const Header = ({ title, subTitle }) => (
    <div className={styles.container}>
        <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{subTitle}</p>
        </div>
    </div>
);

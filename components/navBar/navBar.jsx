import styles from './NavBar.module.css';
import { MailToButton } from '..';

export const NavBar = () => (
    <div className={styles.navBarContainer}>
        <h1>BLADE</h1>
        <MailToButton title='contact' subject="what's up?!" />
    </div>
);

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Button = ({ title }) => (
    <div className={styles.buttonContainer}>
        <button className={styles.buttonEffect}>{title}</button>
    </div>
);

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>blade design and development</title>
                <meta name='blade design and development' content='blade digital craftsmanship' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Performance and Personality</h1>
                <p className={styles.description}>High Quality Digital Goods Tailored To You</p>
                <div className={styles.serviceCard}>
                    <div>
                        <h1>E-Commerce</h1>
                        <p>
                            Custom tailored web stores designed to fit you and your brand's
                            personality. Also..they're wicked fast.
                        </p>
                        <Button title='Talk About E-Commerce' />
                    </div>
                    <Image width='450' height='450' src='/imgs/shopping_cart.png'></Image>
                </div>
                <div className={styles.serviceCard}>
                    <Image width='450' height='450' src='/imgs/blade_parfume.png'></Image>
                    <div>
                        <h1>Branding</h1>
                        <p>
                            From logo design to full-blown brand style guidelines. We can make you
                            look like the professional you are.
                        </p>
                        <Button title='TALK ABOUT BRANDING' />
                    </div>
                </div>
                <div className={styles.serviceCard}>
                    <div>
                        <h1>Custom Solutions</h1>
                        <p>
                            Need an app? Have some tedious processes you need automated with
                            software? We got you.
                        </p>
                        <Button title='TALK ABOUT CUSTOM SOLUTIONS' />
                    </div>
                    <Image width='450' height='450' src='/imgs/computer_salesman.png'></Image>
                </div>
                <h1 className={styles.title}>Need some help?</h1>
                <p className={styles.description}>
                    We love what we do, and we're stoked to help you figure out your next move to
                    bring your ideas to life.
                </p>
                <Button title='CONTACT US' />
            </main>
            <footer className={styles.footer}>
                Built with <span className={styles.logo}>🤟</span> by BLADE©
            </footer>
        </div>
    );
}

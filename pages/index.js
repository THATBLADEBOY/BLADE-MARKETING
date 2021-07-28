import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MailToButton, Header, NavBar, ServiceCard } from '../components';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>blade design and development</title>
                <meta name='blade design and development' content='blade digital craftsmanship' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavBar />
            <main className={styles.main}>
                <Header
                    title='Performance and Personality'
                    subTitle='High Quality Digital Goods Tailored To You'
                />
                <ServiceCard
                    title='E-Commerce'
                    description="Custom tailored web stores designed to fit you and your brand's
                            personality. Also..they're wicked fast."
                    mailToButtonTitle='GET E-COMMERCE'
                    mailToButtonSubject='E-Commerce Inquiry'
                    imageSrc='/imgs/shopping_cart.png'
                />
                <ServiceCard
                    title='Branding'
                    description='From logo design to full-blown brand style guidelines. We can make you
                            look like the professional you are.'
                    mailToButtonTitle='GET BRANDING'
                    mailToButtonSubject='Branding/Design Inquiry'
                    imageSrc='/imgs/blade_parfume.png'
                    reverse
                />
                <ServiceCard
                    title='Custom Solutions'
                    description='Need an app? Have some tedious processes you need automated with
                            software? We got you.'
                    mailToButtonTitle='GET CUSTOM SOLUTIONS'
                    mailToButtonSubject='Custom Solution Inquiry'
                    imageSrc='/imgs/computer_salesman.png'
                />
                <h1 className={styles.title}>Need some help?</h1>
                <p className={styles.contactParagraph}>
                    We love what we do, and we're stoked to help you figure out your next move and
                    bring your ideas to life.
                </p>
                <MailToButton title='CONTACT' subject="what's up?!" />
            </main>
            <footer className={styles.footer}>
                <p>
                    Built with<span className={styles.logo}>🤟</span>by BLADE©
                </p>
            </footer>
        </div>
    );
}

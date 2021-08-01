import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MailToButton, Header, NavBar, ServiceCard } from '../components';
import { motion } from 'framer-motion';

const boxVariants = {
    hidden: { scale: 0.8 },
    visible: {
        scale: 1,
        transition: {
            duration: 0.6,
        },
    },
};

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>blade design and development</title>
                <meta name='blade design and development' content='blade digital craftsmanship' />
                <meta
                    name='keywords'
                    content='Blade, Design, Development, Software, Nashville, Tennessee, TN, Austin, Logo, Website, Custom, E-Commerce'
                />
                <meta
                    name='description'
                    content='Custom software, websites, e-commerce, and graphic design agency from Nashville, TN.'
                />
                <link rel='icon' href='/blade_favicon.ico' />
            </Head>
            <NavBar />
            <main className={styles.main}>
                <motion.div initial='hidden' animate='visible' variants={boxVariants}>
                    <Header
                        title='Performance and Personality'
                        subTitle='High Quality Digital Goods Tailored To You'
                    />
                </motion.div>
                <ServiceCard
                    title='E-Commerce'
                    description="Custom tailored web stores designed to fit you and your brand's
                            personality. Also..they're wicked fast."
                    mailToButtonTitle='GET E-COMMERCE'
                    mailToButtonSubject='E-Commerce Inquiry'
                    imageSrc='/imgs/shopping_cart.png'
                    imageAlt='shopping cart'
                    imageSwingDuration={0.3}
                />
                <ServiceCard
                    title='Branding'
                    description='From logo design to full-blown brand guidelines. We can make you
                            look like the professional you are.'
                    mailToButtonTitle='GET BRANDING'
                    mailToButtonSubject='Branding/Design Inquiry'
                    imageSrc='/imgs/blade_parfume.png'
                    imageAlt='perfume bottle with blade logo'
                    imageSwingDuration={0.9}
                    reverse
                />
                <ServiceCard
                    title='Custom Solutions'
                    description='Need custom tools or processes to drive your business? From apps to bots, we got you.'
                    mailToButtonTitle='GET CUSTOM SOLUTIONS'
                    mailToButtonSubject='Custom Solution Inquiry'
                    imageSrc='/imgs/computer_salesman.png'
                    imageAlt='computer salesman with eyes crossed out and purple skin'
                    imageSwingDuration={0.4}
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
                    Built with
                    <span className={styles.logo} alt='love sign language emoji'>
                        🤟
                    </span>
                    by BLADE©
                </p>
            </footer>
        </div>
    );
}

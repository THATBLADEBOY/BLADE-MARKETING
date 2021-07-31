import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
                    <meta
                        name='blade design and development'
                        content='blade digital craftsmanship'
                    />
                    <meta
                        name='keywords'
                        content='Blade, Design, Development, Software, Nashville, Tennessee, TN, Austin, Logo, Website, Custom, E-Commerce'
                    />
                    <meta
                        name='description'
                        content='Custom software, websites, e-commerce, and graphic design agency from Nashville, TN.'
                    />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

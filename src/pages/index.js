import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Documentation for Docker Mate`}
            description="Documentation for Docker Mate, a environment to develop you PHP application">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <img src={useBaseUrl('/img/container.svg')} alt="Docker container" width="1119.60911" height="699"
                         className="img-fluid"/>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('/docs/start')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={styles.features}>
                    <div className="container text--center margin-bottom--xl">
                        <div className="row">
                            <div className="col">
                                <div className="text--center img--grid">
                                    <img className="img-fluid"
                                         src={useBaseUrl('/img/setup.svg')}
                                         alt="Easy to setup"/>
                                </div>
                                <h3>Easy to setup</h3>
                                <p>Docker mate is build to simplify your development setup and easy updates <code>git
                                    pull</code>.</p>
                            </div>
                            <div className="col">
                                <div className="text--center img--grid">
                                    <img className="img-fluid"
                                         src={useBaseUrl('/img/settings.svg')}
                                         alt="Configure to your needs"/>
                                </div>
                                <h3>Configure to your needs</h3>
                                <p>Different predefined system and possibilities to overwrite, adjust and extend
                                    configuration.</p>
                            </div>
                            <div className="col">
                                <div className="text--center img--grid">
                                    <img className="img-fluid"
                                         src={useBaseUrl('/img/develop.svg')}
                                         alt="Develop your application"/>
                                </div>
                                <h3>Develop your application</h3>
                                <p>Start your environment and develop your application.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Home;

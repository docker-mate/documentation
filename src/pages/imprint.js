import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';


function Imprint() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Imprint</h1>
                </div>
            </header>
            <main>
                <div className="container features_src-pages-">
                    <div className="row">
                        <div className="col">
                            <h2>catchIT GmbH</h2>
                            <p>Domplatz 5<br/>93047 Regensburg</p>
                            <p><strong>Geschäftsführer:</strong> Xaver Maierhofer</p><p><strong>Inhaltlich
                            verantwortlich
                            gem. § 55 Abs. 2 RStV:</strong> Xaver Maierhofer</p>
                            <p>Sitz der Gesellschaft Regensburg<br/>
                                Amtsgericht Regensburg HRB 16390<br/>
                                USt-ID: DE316921737</p>
                            <p><strong>Tel:</strong><a href="tel:+4994137801750">+49 (0) 941 37801750</a><br/>
                                <strong>E-Mail:</strong> info [at] catchit.xyz</p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Imprint;

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
                    <h1 className="hero__title">Datenschutzerklärung</h1>
                </div>
            </header>
            <main>
                <div className="container features_src-pages-">
                    <div className="row">
                        <div className="col">
                            <h2>Allgemeines</h2>
                            <p>Die Einhaltung der
                                Datenschutzgesetze ist für die catchIT GmbH nicht nur gesetzliche Pflicht, sondern auch
                                ein
                                wichtiger Vertrauensfaktor. Mit den nachfolgenden Datenschutzbestimmungen möchten wir
                                Sie
                                deshalb transparent über Art, Umfang und Zweck der von Ihnen erhobenen und verarbeiteten
                                personenbezogenen Daten innerhalb dieses Internetauftrittes sowie Ihre Rechte
                                informieren.
                                Verantwortlichkeit für die Datenverarbeitung</p>
                            <h2>Verantwortlichkeit für die Datenverarbeitung</h2>
                            <p>Die catchIT GmbH Domplatz 5, 93047 Regensburg (Im Folgenden: „Wir“)
                                ist als Betreiber der Website catchit.xyz, Verantwortlicher gem. Art. 4 Nr. 7 der
                                EU-Datenschutz-Grundverordnung (DSGVO). Bei Fragen können Sie sich an info@catchit.xyz
                                wenden.</p>
                            <h3>Datenschutzbeauftragter</h3>
                            <p>Verantwortlicher Datenschutzbeauftragter ist:<br/><br/>
                            </p>
                            <p><b>Süddeutsche Datenschutzgesellschaft mbH</b><br/>
                                Ansprechpartner Maximilian Mayer<br/>
                                Von-Brettreich-Straße 4<br/>
                                93049 Regensburg<br/>
                                Tel: <a href="tel:+4994183096238">+49 (0) 941 - 83096238</a><br/>
                                Mail: service(at)sddsg.de
                            </p>
                            <h3>Ihre Rechte als betroffene Person</h3>
                            <p>Als betroffene Person haben Sie uns gegenüber folgende Rechte hinsichtlich Ihrer
                                personenbezogenen Daten. Sie haben:</p>
                            <ul>
                                <li>Ein <strong>Recht auf Auskunft</strong> über die Kategorien der verarbeiteten Daten,
                                    der Verarbeitungszwecke, die Speicherdauer sowie etwaige Empfänger. (Art. 15 DSGVO)
                                </li>
                                <li>Ein <strong>Recht auf Berichtigung oder Löschung</strong> unrichtiger bzw.
                                    unvollständiger Daten. (Art. 17 DSGVO)
                                </li>
                                <li>Ein <strong>Recht auf Einschränkung der Verarbeitung</strong>, soweit eine Löschung
                                    nicht möglich oder strittig ist. (Art. 18 DSGVO)
                                </li>
                                <li>Ein <strong>Recht auf Widerspruch</strong> gegen die Verarbeitung, soweit die
                                    Datenverarbeitung aufgrund eines berechtigten Interesses erfolgte. (Art. 21 Abs. 1
                                    DSGVO)
                                </li>
                                <li>Ein <strong>Recht auf Widerruf</strong> einer abgegebenen Einwilligung mit Wirkung
                                    für die Zukunft. (Art. 7 Abs. 3 DSGVO)
                                </li>
                                <li>Ein <strong>Recht auf Datenübertragbarkeit</strong> in einem gängigen Format. (Art.
                                    20 DSGVO)
                                </li>
                                <li>Sie haben zudem das Recht, sich bei
                                    einer <strong>Datenschutz-Aufsichtsbehörde</strong> über die Verarbeitung Ihrer
                                    personenbezogenen Daten durch uns zu beschweren, insbesondere in dem Mitgliedstaat
                                    Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des
                                    mutmaßlichen Verstoßes. (Art. 77 DSGVO)
                                </li>
                            </ul>
                            <h2>Datenschutzmaßnahmen</h2>
                            <p>Wir sichern unsere Website und sonstigen Systeme – und damit
                                auch Ihre Daten – durch technische und organisatorische Maßnahmen gegen Verlust,
                                Zerstörung, Zugriff, Veränderung oder Verbreitung durch unbefugte Personen ab.
                                Insbesondere werden Ihre persönlichen Daten verschlüsselt durch das Internet übertragen.
                                Wir bedienen uns dabei des Codierungssystems TLS (Transport Layer Security).</p>
                            <p>Jedoch ist die Übertragung von Informationen über das Internet nie vollständig sicher,
                                weshalb wir die Sicherheit der von unserer Website übermittelten Daten nicht zu 100%
                                garantieren können.</p>
                            <h2>Datenverarbeitung</h2>
                            <h3>Datenübermittlung an Drittstaaten außerhalb der EU</h3>
                            <p>Alle Informationen, die wir von Ihnen oder über Sie erhalten, werden grundsätzlich auf
                                Servern innerhalb der Europäischen Union verarbeitet. Eine Übermittlung Ihrer Daten an
                                oder eine
                                Verarbeitung Ihrer Daten in Drittstaaten erfolgt ohne Ihre ausdrückliche Einwilligung
                                lediglich, sofern dies gesetzlich vorgesehen ist und in dem Drittstaat ein hierfür
                                angemessenes Datenschutzniveau sichergestellt ist.</p>
                            <h3>Weitergabe von Daten, Auftragsdatenverarbeitung</h3>
                            <p>Grundsätzlich geben wir Ihre personenbezogenen Daten nicht an Dritte weiter, es sei
                                denn,</p>
                            <ol>
                                <li>Sie haben in die Datenweitergabe eingewilligt oder</li>
                                <li>wir sind aufgrund
                                    <ol>
                                        <li>gesetzlicher Bestimmungen oder</li>
                                        <li>behördlicher oder gerichtlicher Anordnungen</li>
                                    </ol>
                                </li>
                            </ol>
                            <p>zu einer Datenweitergabe berechtigt oder verpflichtet. Dabei kann es sich insbesondere um
                                die Auskunftserteilung für Zwecke der Strafverfolgung, zur Gefahrenabwehr oder zur
                                Durchsetzung geistiger Eigentumsrechte handeln.</p>
                            <p>Unter Umständen übermitteln wir Ihre Daten außerdem an externe Dienstleister
                                (Auftragsverarbeiter), um unsere eigene Datenverarbeitung zu vereinfachen. In diesem
                                Fall wird dieser Auftragsverarbeiter entsprechend Art. 28 DSGVO vertraglich
                                verpflichtet, das heißt insbesondere, dass der Auftragsverarbeiter hinreichend Garantien
                                dafür zu bieten hat, dass durch ihn geeignete technische und organisatorische Maßnahmen
                                so durchgeführt werden, dass die Verarbeitung im Einklang mit den Anforderungen der
                                DSGVO erfolgt und der Schutz Ihrer Rechte als betroffene Person gewährleistet ist. Trotz
                                Beauftragung von Auftragsverarbeitern bleiben wir für die Verarbeitung Ihrer
                                personenbezogenen Daten die Verantwortliche Stelle im Sinne der Datenschutzgesetze.</p>
                            <h2>Arten, Zweck und Speicherdauer von Daten, Rechtsgrundlagen</h2>
                            <h3>Server-Log-Dateien</h3>
                            <p>Bei jedem Aufruf unserer Webseite werden die folgenden allgemeinen Informationen von
                                Ihrem Browser automatisch an unseren Server übermittelt (sog. Server-Log-Dateien):
                                IP-Adresse, Produkt- und Versionsinformationen über den verwendeten Browser und das
                                Betriebssystem, die Internetseite von welcher Ihr Zugriff stattfand (sog. Referer),
                                Datum und Uhrzeit der Anfrage und u.U. Ihr Internet-Service-Provider. Außerdem werden
                                der Status und die übertragene Datenmenge im Rahmen dieser Anfrage erfasst.</p>
                            <p>Die IP-Adresse Ihres Computers wird dabei nur für die Zeit Ihrer Nutzung der Website
                                gespeichert und im Anschluss daran unverzüglich gelöscht oder durch Kürzung teilweise
                                unkenntlich gemacht. Die übrigen Daten werden für eine begrenzte Zeitdauer (maximal 7
                                Tage) gespeichert.</p>
                            <p>Die Rechtsgrundlage für die Nutzung der Server-Log-Dateien ist Art. 6 Abs. 1 S. 1
                                Buchstabe f) DSGVO (Berechtigtes Interesse an der Datenverarbeitung). Das berechtigte
                                Interesse ergibt sich aus der Notwendigkeit für den Betrieb unserer Website,
                                insbesondere um Fehler der Website festzustellen und zu beseitigen, um die Auslastung
                                der Website festzustellen und um Anpassungen oder Verbesserungen vorzunehmen und die
                                Sicherheit des Systems zu gewährleisten.</p
                            ><h3>Kontaktaufnahme</h3>
                            <p>Unsere Website bietet an mehreren Stellen die Möglichkeit, direkt mit uns in Kontakt zu
                                treten. <strong>Mit dem Absenden des Kontaktformulars oder einer Email an uns erklären
                                    Sie sich mit der Verarbeitung und Speicherung Ihrer eingegebenen Daten (insbesondere
                                    Ihrer E-Mailadresse) einverstanden.</strong> Die von Ihnen dabei an uns
                                übermittelten Daten verarbeiten wir ausschließlich bis zur Erreichung des jeweiligen
                                Zwecks Ihrer Kontaktaufnahme, maximal jedoch bis zu 7 Tage nach Zweckerreichung. Dieser
                                Verarbeitung können Sie jederzeit mit Wirkung für die Zukunft widersprechen. Nutzen Sie
                                hierfür bitte unsere Kontaktdaten im Impressum.</p>
                            <p>Die Rechtsgrundlage für die Nutzung der von Ihnen durch die Kontaktaufnahme
                                an uns übermittelten Daten ist Art. 6 Abs. 1 S. 1 Buchstabe a) DSGVO (Einwilligung der
                                betroffenen Person). Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
                                widerrufen.</p>
                            <p>Stand der Datenschutzerklärung: 24.5.2018<br/>
                                Quelle: <a href="https://www.sddsg.de" target="_blank" rel="noopener">Süddeutsche
                                    Datenschutzgesellschaft mbH</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
);
}

export default Imprint;

import Link from 'next/link';
import styles from '../styles/Education.module.scss';

const Education = () => {
    return (
        <div className={styles.educationContainer}>

            <div className={styles.line}></div>
            <div className={styles.title}>Education</div>

            <div className={styles.education}>
                <div className={styles.educationCard}>
                    <div className={styles.info}>
                        <Link className={styles.link} href="https://www.uni-sofia.bg/index.php/bul" target="_blank">
                            <div className={styles.institutionTitle}>Sofia University &quot;St. Kliment Ohridski&quot;</div>
                        </Link>
                        <div className={styles.materialTitle}>B.Sc. Software Engineering | Faculty of Mathematics and Informatics</div>
                    </div>
                    <div className={styles.period}>2023 - 2027</div>
                </div>
                <div className={styles.educationCard}>
                    <div className={styles.info}>
                        <Link className={styles.link} href="http://ppmgkk.com/" target="_blank">
                            <div className={styles.institutionTitle}>PPMG &quot;Nikola Obreshkov&quot;</div>
                        </Link>
                        <div className={styles.materialTitle}>Mathematics, Informatics and IT</div>
                    </div>
                    <div className={styles.period}>2018 - 2023</div>
                </div>
                <div className={styles.educationCard}>
                    <div className={styles.info}>
                        <Link className={styles.link} href="https://oumatibolgaria.eu/" target="_blank">
                            <div className={styles.institutionTitle}>Elementary school &quot;Mati Bolgaria&quot;</div>
                        </Link>
                        <div className={styles.materialTitle}>Mathematics</div>
                    </div>
                    <div className={styles.period}>2015 - 2018</div>
                </div>
            </div>
        </div>
    );
};

export default Education;
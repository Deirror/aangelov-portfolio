'use client';

import { useEffect } from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
    useEffect(() => {
        const button = document.getElementById('btn') as HTMLElement;

        button.addEventListener('click', function() {
            document.body.scrollIntoView();
        });
    }, []);

    return (
        <div className={styles.footer}>
            <div className={styles.creator}>Designed by me</div>
            <div className={styles.portfolioProgrammer}>Alex Angelov</div>
            <div id="btn" className={styles.toTop}>Back to top</div>
        </div>
    );
};

export default Footer;
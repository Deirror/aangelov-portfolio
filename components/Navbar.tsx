'use client';

import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.portfolio}>Portfolio © 2025</div>
            <div className={styles.menuContainer}>
            <div className={styles.socialMedia}>
                <div className={styles.icon}>
                        <Link className={styles.link} href="https://www.linkedin.com/in/alexangelow" target="_blank">
                            <BsLinkedin />
                        </Link>
                </div>
                <div className={styles.icon}>
                        <Link className={styles.link} href="https://github.com/Deirror" target="_blank">
                            <BsGithub />
                        </Link>
                </div>
            </div>
                <Link href="/documents/CV.pdf"
                    download="Alex_Angelov_CV" className={styles.resume}>
                    <button className={styles.resumeButton}>Resume</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
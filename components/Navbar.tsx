'use client';

import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.portfolio}>Portfolio © 2025</div>
            <div className={styles.portfolio}>Alex Angelov</div>
            <div className={styles.menuContainer}>
                <Link href="/documents/ng.pdf"
                    download="Alex_Angelov_CV">
                    <button className={styles.resumeButton}>Resume</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
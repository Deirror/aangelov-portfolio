'use client';

import styles from '../styles/Home.module.scss';
import { Typewriter } from 'nextjs-simple-typewriter';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
// import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bioInfo}>
                <div className={styles.greeting}>Hello there! It&apos;s me</div>
                <div className={styles.name}>
                    <Typewriter
                        words={['Software Engineer', 'Backend Developer', 'Problem Solver', 'Go/Java Enthusiast', 'C/C++/C# Coder']}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={121}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>
                <div className={styles.position}>B.Sc. in Software Engineering</div>
                <div className={styles.description}>
                    None so far
                </div>
                <div className={styles.socialMedia}>
                    <div className={styles.icon}>
                        <Link className={styles.link} href="https://www.linkedin.com/in/s" target="_blank">
                            <BsLinkedin />
                        </Link>
                    </div>
                    <div className={styles.icon}>
                        <Link className={styles.link} href="https://github.com/Deirror" target="_blank">
                            <BsGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
'use client';

import styles from '../styles/Home.module.scss';
import { Typewriter } from 'nextjs-simple-typewriter';
import profileImgage from '../images/sg_aa.png';
import Image from 'next/image';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bioInfo}>
                <div className={styles.greeting}>Hello there! I&apos;m</div>
                <div className={styles.name}>
                    <Typewriter
                        words={['Software Engineer', 'Backend Developer', 'Problem Solver', 'Go/Java Enthusiast', 'C/C++/C# Coder']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={121}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>
                <div className={styles.position}>B.Sc. in Software Engineering</div>
                <div className={styles.description}>
                    I am Alex Angelov and have been a software developer for 3 years who is keen on making software projects including web servers, microservices, desktop applications and programs with CLI.
                </div>
            </div>
             <Image
                className={styles.profileImage}
                src={profileImgage}
                priority={true}
                height={450}
                width={450}
                alt="Alex Angelov" />
        </div>
    );
};

export default Home;
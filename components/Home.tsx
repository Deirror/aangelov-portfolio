'use client';

import styles from '../styles/Home.module.scss';
import { Typewriter } from 'nextjs-simple-typewriter';
// import Image from 'next/image';

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
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
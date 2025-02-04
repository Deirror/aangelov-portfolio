import { SiGooglecloud, SiBlazor, SiGo, SiHtmx, SiTailwindcss, SiDotnet, SiCplusplus, SiGit, SiOpenjdk, SiDocker } from 'react-icons/si';
import styles from '../styles/Skills.module.scss';

const Skills = () => {
    return (
        <div className={styles.skillsContainer}>
            <div className={styles.line}></div>
            <div className={styles.title}>Skills and Tech Stack</div>
            <div className={styles.pitch}>
                With a diverse set of skills ranging from data structures and algorithms to
                project realization, I possess rich understanding in
                many fields of study. I am fueled by an unwavering
                dedication to non-stop improvement, always seeking new challenges
                and opportunities to enhance my skills. I strive to achieve
                excellence in every undertaking, never settling for anything less.
                My passion for programming, coupled with my commitment to
                growth, pushes me forward, ready to conquer new frontiers and
                make a lasting impact in the world of technology.
            </div>
            <div className={styles.skillsCards}>
                <SiGo
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiHtmx
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiTailwindcss
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiDocker
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />    
                <SiGooglecloud
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />     
                <SiCplusplus
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />      
                <SiDotnet
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiBlazor
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />    
                <SiGit
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />
                <SiOpenjdk
                    className={styles.card}
                    style={{
                        fontSize: '5rem'
                    }} />    
            </div>
        </div>
    );
};

export default Skills;
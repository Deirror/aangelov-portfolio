'use client';

import { useEffect } from 'react';
import styles from '../styles/Certification.module.scss';

const Certification = () => {
    useEffect(() => {
        const bars = document.querySelectorAll<HTMLElement>('#bar');
        const widthArray = ['95%', '92%', '100%', '96%', '90%', '95%'];

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                    entry.target.style.width = widthArray[Number(entry.target.dataset.index)];
                };
            });
        }, {
            threshold: 1
        });

        bars.forEach(barItem => {
            observer.observe(barItem);
        });
    }, []);
// 
    return (
            <div className={styles.certificationContainer}>
            <div className={`${styles.line} ${styles.lineStart}`}></div>
            <div className={styles.title}>Certifications and courses</div>

            <div
                style={{
                    marginLeft: '8.33333333%',
                    width: '83.33333333%',
                    float: 'left',
                    position: 'relative',
                    minHeight: '1px',
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    marginTop: '4vh',
                    marginBottom: '1vh',
                }}
            >
                <ul className={`${styles.timeline} ${styles.timelineSplit} ${styles.timelineCentered}`}>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>October 2023 - 2027</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>
                                Mathematics | Sofia University &quot;St. Kliment Ohridski&quot;, Faculty of Mathematics and Informatics
                            </h3>
                            <div>
                                Attained deep understanding on complex fields of Mathematics such as Stereometry, Geometry, Differential
                                Equations, Calculus and Probability <br />
                                Thanks to the perfect guidance by the associate professors Yulian Tsankov and Nikolay Ivanov and my
                                dedication to succeed, I managed to pass my exams in Mathematics with flying colours <br />
                                Established strong friendships with fellow colleagues to further pave my way to academic and career
                                success
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.timelineItem} ${styles.period}`}>
                        <div className={styles.timelineInfo}></div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h2 className={styles.timelineTitle}>2022</h2>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>September 2022</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>JavaScript Advanced | Software University</h3>
                            <div>
                                Single Page Applications <br />
                                Asynchronous Programming <br />
                                Unit Testing and Error Handling | Mocha & Chai <br />
                                DOM Manipulations and Events <br />
                                Objects and Composition | Classes <br />
                                Algorithms and Data Structures
                            </div>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>June 2022</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>C1 Advanced English | Cambridge Assessment English</h3>
                            <div>
                                <div className={styles.skillsItem}>
                                    <div className={styles.skillsHeader}>Overall Score | 200 / 210</div>
                                    <div className={styles.skillBar}>
                                        <div className={styles.barInner}>
                                            <div id="bar" data-index={0} className={styles.bar}></div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={styles.skillsItem}>
                                    <div className={styles.skillsHeader}>Reading | 193 / 210</div>
                                    <div className={styles.skillBar}>
                                        <div className={styles.barInner}>
                                            <div id="bar" data-index={1} className={styles.bar}></div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={styles.skillsItem}>
                                    <div className={styles.skillsHeader}>Use of English | 210 / 210</div>
                                    <div className={styles.skillBar}>
                                        <div className={styles.barInner}>
                                            <div id="bar" data-index={2} className={styles.bar}></div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={styles.skillsItem}>
                                    <div className={styles.skillsHeader}>Writing | 203 / 210</div>
                                    <div className={styles.skillBar}>
                                        <div className={styles.barInner}>
                                            <div id="bar" data-index={3} className={styles.bar}></div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={styles.skillsItem}>
                                    <div className={styles.skillsHeader}>Listening | 190 / 210</div>
                                    <div className={styles.skillBar}>
                                        <div className={styles.barInner}>
                                            <div id="bar" data-index={4} className={styles.bar}></div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className={styles.skillsItem}>
                                    <div className={styles.skillsHeader}>Speaking | 200 / 210</div>
                                    <div className={styles.skillBar}>
                                        <div className={styles.barInner}>
                                            <div id="bar" data-index={5} className={styles.bar}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>October 2021 - June 2022</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>Teenovator 2022 | Voluntary Work</h3>
                            <div>
                                Orchestrated and streamlined our assignments, ensuring efficient coordination and seamless collaboration
                                among team members during the event &quot;Weekend of Ideas 2022&quot; in &quot;Teenovator 2022&quot; <br />
                                Developed, in collaboration with another team member, a robust login system for the final event of
                                &quot;Teenovator 2022&quot;, held at Sofia Tech Park, in order to guarantee the coherent flow of the event <br />
                                Facilitated the successful continuation of &quot;Teenovator 2022&quot; by providing guests and participants with
                                all the information they need <br />
                                Handled unforeseen situations by implementing my problem-solving abilities
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.timelineItem} ${styles.period}`}>
                        <div className={styles.timelineInfo}></div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h2 className={styles.timelineTitle}>2021</h2>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>May 2021</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>Programming Fundamentals with JavaScript | Software University</h3>
                            <div>
                                Software Development Concepts <br />
                                Associative and Advanced Arrays <br />
                                Objects and Classes <br />
                                Git and GitHub <br />
                                Regular Expressions and Text Processing <br />
                                QA Introduction <br />
                                Basic Syntax, Conditional Statements and Loops
                            </div>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>October 2020 - June 2021</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>Teenovator 2021</h3>
                            <div>
                                Attained broad understanding on the complex fields of marketing, SWAT analysis, business planning and
                                financial projections during the development of startup projects <br />
                                Enhanced my leadership skills by delegating responsibilities and facilitating effective communication
                                channels, fostering a cohesive and productive work environment <br />
                                Won the prize &quot;Most innovative idea&quot; during the event &quot;Weekend of Ideas 202&quot;1 by presenting a project
                                concerned with the ever-increasing pollution around our planet in Low Earth Orbit
                            </div>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>February 2021</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>News Media Literacy Training | American Councils</h3>
                            <div>
                                Trained on diverse topics such as disinformation and identification of untrustworthy sources of information
                                <br />
                                Emphasized on the hardly distinguishable characteristics of disinformation, fake news and propaganda <br />
                                Exchanged experience with fellow students and developed friendships to further investigate the uncontrolled
                                spread of fake news
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.timelineItem} ${styles.period}`}>
                        <div className={styles.timelineInfo}></div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h2 className={styles.timelineTitle}>2019 - 2020</h2>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>October 2019 - June 2020</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>Web Development | Telerik Academy School</h3>
                            <div>
                                JavaScript Syntax, Conditional Statements and Loops <br />
                                React.js <br />
                                HTML5, CSS3, SCSS <br />
                                jQuery <br />
                                DOM Manipulations and Events
                            </div>
                        </div>
                    </li>
                    <li className={styles.timelineItem}>
                        <div className={styles.timelineInfo}>
                            <span>October 2018 - April 2019</span>
                        </div>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineTitle}>Game Development | Telerik Academy School</h3>
                            <div>
                                JavaScript Syntax, Conditional Statements and Loops <br />
                                Phaser.js and Node.js Server Setup <br />
                                HTML5, CSS3
                            </div>
                        </div>
                    </li>
                </ul>
                <div className={`${styles.line} ${styles.lineEnd}`}></div>
            </div>
        </div>
    );
};

export default Certification;
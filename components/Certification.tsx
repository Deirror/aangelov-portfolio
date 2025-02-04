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
//  <div className={styles.line}></div>
// <div className={styles.title}>Certifications and courses</div>
    return (
        <div className={styles.certificationContainer}>
          
            <div style={{
                marginLeft: '8.33333333%',
                width: '83.33333333%',
                float: 'left',
                position: 'relative',
                minHeight: '1px',
                paddingRight: '15px',
                paddingLeft: '15px',
                marginTop: '4vh',
                marginBottom: '1vh'
            }}>
                 <div className={styles.title}>Certifications and courses</div>
                <ul className="timeline timeline-split timeline-centered">
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>October 2022 - March 2023</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Mathematics | Sofia University &quot;St. Kliment Ohridski&quot;, Faculty of Mathematics and Informatics</h3>
                            <div>
                                Attained deep understanding on complex fields
                                of Mathematics such as Stereometry, Geometry,
                                Differential Equations, Calculus and Probability <br />
                                Thanks to the perfect guidance by the
                                associate professors Yulian Tsankov and
                                Nikolay Ivanov and my dedication to succeed,
                                I managed to pass my exams in Mathematics 
                                with flying colours <br />
                                Established strong friendships with fellow
                                colleagues to further pave my way to
                                academic and career success
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item period">
                        <div className="timeline-info"></div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h2 className="timeline-title">2022</h2>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>September 2022</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">JavaScript Advanced | Software University</h3>
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
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>October 2021 - June 2022</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Teenovator 2022 | Voluntary Work</h3>
                            <div>
                                Orchestrated and streamlined our assignments,
                                ensuring efficient coordination and seamless
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item period">
                        <div className="timeline-info"></div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h2 className="timeline-title">2021</h2>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>May 2021</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Programming Fundamentals with JavaScript | Software University</h3>
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
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>October 2020 - June 2021</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Teenovator 2021</h3>
                            <div>
                                Attained broad understanding on the complex fields
                                of marketing, SWAT analysis, business planning
                                and financial projections during the
                                development of startup projects
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>February 2021</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">News Media Literacy Training | American Councils</h3>
                            <div>
                                Trained on diverse topics such as disinformation
                                and identification of untrustworthy sources
                                of information <br />
                                Emphasized on the hardly distinguishable
                                characteristics of disinformation, fake news
                                and propaganda <br />
                                Exchanged experience with fellow students and
                                developed friendships to further investigate
                                the uncontrolled spread of fake news
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item period">
                        <div className="timeline-info"></div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h2 className="timeline-title">2019 - 2020</h2>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>October 2019 / June 2020</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Web Development | Telerik Academy School</h3>
                            <div>
                                JavaScript Syntax, Conditional Statements and Loops <br />
                                React.js <br />
                                HTML5, CSS3, SCSS <br />
                                jQuery <br />
                                DOM Manipulations and Events
                            </div>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>October 2018 - April 2019</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Game Development | Telerik Academy School</h3>
                            <div>
                                JavaScript Syntax, Conditional Statements and Loops <br />
                                Phaser.js and Node.js Server Setup <br />
                                HTML5, CSS3
                            </div>
                        </div>
                    </li>
                </ul>
                <div className={styles.lineEnd}></div>
            </div>

            <style jsx>{`
                .timeline {
                    line-height: 1.4em;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    width: 100%;

                    h1, h2, h3, h4, h5, h6 {
                        line-height: inherit;
                    }
                }

                .timeline-item {
                    padding-left: 40px;
                    position: relative;
                    &:last-child {
                        padding-bottom: 0;
                    }
                }

                .timeline-info {
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 3px;
                    margin: 0 0 .5em 0;
                    text-transform: uppercase;
                    white-space: nowrap;
                }

                .timeline-marker {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 15px;
                    &::before {
                        content: "";
                        display: block;
                        background: #94ebbb;
                        border: 3px solid transparent;
                        border-radius: 100%;
                        height: 15px;
                        width: 15px;
                        position: absolute;
                        top: 4px;
                        left: 0;
                        transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
                    }
                    &::after {
                        content: "";
                        width: 3px;
                        background: #EBF7FF;
                        display: block;
                        position: absolute;
                        top: 24px;
                        bottom: 0;
                        left: 6px;
                    }

                    .timeline-item:last-child &::after {
                        content: none;
                    }
                }

                .timeline-item:not(.period):hover .timeline-marker::before {
                    background: transparent;
                    border: 3px solid #94ebbb;
                }

                .timeline-content {
                    padding-bottom: 40px;

                    p:last-child {
                        margin-bottom: 0;
                    }
                }

                .period {
                    padding: 0;

                    .timeline-info {
                        display: none;
                    }

                    .timeline-marker {
                        &::before {
                            background: transparent;
                            content: "";
                            width: 15px;
                            height: auto;
                            border: none;
                            border-radius: 0;
                            top: 0;
                            bottom: 30px;
                            position: absolute;
                            border-top: 3px solid #EBF7FF;
                            border-bottom: 3px solid #EBF7FF;
                        }
                        &::after {
                            content: "";
                            height: 32px;
                            top: auto;
                        }
                    }

                    .timeline-content {
                        padding: 40px 0 70px;
                    }

                    .timeline-title {
                        margin: 0;
                    }
                }

                .timeline-split {
                    @media (min-width: 768px) {
                        .timeline {
                            display: table;
                        }

                        .timeline-item {
                            display: table-row;
                            padding: 0;
                        }

                        .timeline-info,
                        .timeline-marker,
                        .timeline-content,
                        .period .timeline-info {
                            display: table-cell;
                            vertical-align: top;
                        }

                        .timeline-marker {
                            position: relative;
                        }

                        .timeline-content {
                            padding-left: 30px;
                        }

                        .timeline-info {
                            padding-right: 30px;
                        }

                        .period .timeline-title {
                            position: relative;
                            left: -45px;
                        }
                    }
                }

                .timeline-centered {
                    @extend .timeline-split;
                    @media (min-width: 992px) {
                        &,
                        .timeline-item,
                        .timeline-info,
                        .timeline-marker,
                        .timeline-content {
                            display: block;
                            margin: 0;
                            padding: 0;
                        }

                        .timeline-item {
                            padding-bottom: 40px;
                            overflow: hidden;
                        }

                        .timeline-marker {
                            position: absolute;
                            left: 50%;
                            margin-left: -7.5px;
                        }

                        .timeline-info,
                        .timeline-content {
                            width: 50%;
                        }
                        > .timeline-item:nth-child(odd) .timeline-info {
                            float: left;
                            text-align: right;
                            padding-right: 30px;
                        }
                        > .timeline-item:nth-child(odd) .timeline-content {
                            float: right;
                            text-align: left;
                            padding-left: 30px;
                        }
                        > .timeline-item:nth-child(even) .timeline-info {
                            float: right;
                            text-align: left;
                            padding-left: 30px;
                        }
                        > .timeline-item:nth-child(even) .timeline-content {
                            float: left;
                            text-align: right;
                            padding-right: 30px;
                        }
                        > .timeline-item.period .timeline-content {
                            float: none;
                            padding: 0;
                            width: 100%;
                            text-align: center;
                        }

                        .timeline-item.period {
                            padding: 50px 0 90px;
                        }

                        .period .timeline-marker:after {
                            height: 30px;
                            bottom: 0;
                            top: auto;
                        }

                        .period .timeline-title {
                            left: auto
                        }
                    }   
                }

                .marker-outline {
                    .timeline-marker {
                        &::before {
                            background: transparent;
                            border-color: #94ebbb;
                        }
                    }

                    .timeline-item:hover .timeline-marker::before {
                        background: #94ebbb;
                    }
                }
            `}</style>
        </div>
    );
};

export default Certification;
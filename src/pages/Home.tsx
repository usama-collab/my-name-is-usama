import React from "react";
import ShowHide from "../components/ShowHideDetailsButton";
import qandeel from "../images/qandeel.jpeg";

const Home = () => {
    return (
        <>
            <div id="section1">
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="animated animate__animated animate__backInDown animate__fast">
                            hello, my name is qandeel.
                        </h1>
                        <div
                            id="description"
                            className="animate__animated animate__shakeX animate__delay-1s"
                        >
                            I'm a {}
                            <span className="text-highlight-primary animate__animated animate__flash animate__delay-3s">
                                Software Engineer {}
                            </span>
                            and {}
                            <span className="text-highlight-secondary animate__animated animate__flash animate__delay-3s">
                                Author
                            </span>
                            .
                        </div>
                        <div className="img-placeholder">
                            <img src={qandeel} alt="qandeel" />
                        </div>
                    </div>
                </div>
            </div>
            <section id="section-about animate__animated animate__backInUp">
                <div className="container">
                    <div className="jumbotron">
                        <h1>ABOUT</h1>
                        <p>
                            I’m a <em>passionate</em> and{" "}
                            <em>pragmatic software engineer</em> with{" "}
                            <em>15 years</em> of professional experience,
                            specializing in <em>full-stack development</em>{" "}
                            using Microsoft technologies on the backend.
                        </p>
                        <p>
                            Strong in{" "}
                            <em>object-oriented analysis and design</em> and
                            experienced with a wide range of <em>front-end</em>{" "}
                            and <em>back-end</em> frameworks (see below). Also,
                            being an artist in nature, I have a good sense of{" "}
                            <em>design, colors, usability</em> and can build
                            beautiful and modern interfaces that people love.
                        </p>
                        <p>
                            I can assist in all stages of software development
                            lifecycle and deliver working software with{" "}
                            <em>clean architecture</em>, <em>clean code</em>,
                            and <em>automated tests</em>, as I've demonstrated
                            in my <em>Pluralsight course</em>{" "}
                            <a href="https://www.youtube.com/watch?v=yBxPgF85vt4">
                                "Become a Full-stack .NET Developer" (ranking
                                #1)
                            </a>
                            .
                        </p>
                        <p>
                            I also have several years of experience{" "}
                            <em>leading</em>, <em>mentoring</em> and{" "}
                            <em>training developers</em> with varying levels of
                            skills.
                        </p>
                        <p>
                            When I'm not coding, I'm a{" "}
                            <a href="https://www.pluralsight.com/authors/mosh-hamedani">
                                Pluralsight author
                            </a>{" "}
                            and{" "}
                            <a href="https://www.udemy.com/user/moshfeghhamedani/">
                                Udemy instructor
                            </a>{" "}
                            and so far, I've have helped more than{" "}
                            <a href="http://programmingwithmosh.com/courses">
                                31,000
                            </a>{" "}
                            aspiring and established developers take their
                            coding skills to the next level.
                        </p>
                    </div>
                </div>
            </section>
            <section className="spice spice-primary">
                <div className="container">
                    <h1>I enjoy turning concepts into reality.</h1>
                    <p>
                        I can help in all stages of this journey, including but
                        not limited to concept development, usability
                        engineering, software design and implementation.
                    </p>
                </div>
            </section>
            <section id="section-skills">
                <div className="container">
                    <div className="jumbotron">
                        <h1>Skills</h1>
                        <ul id="skills">
                            <li className="skill-category">
                                <h2>Back-end</h2>
                                <ul className="tags">
                                    <li>C#</li>
                                    <li>ASP.NET MVC</li>
                                    <li>ASP.NET Web API</li>
                                    <li>Entity Framework (Code-first)</li>
                                    <li>LINQ</li>
                                    <li>T-SQL</li>
                                    <li>SQL Server</li>
                                    <li>Azure</li>
                                </ul>
                            </li>
                            <li className="skill-category">
                                <h2>Front-end</h2>
                                <ul className="tags">
                                    <li>Angular2</li>
                                    <li>BackboneJS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>Xamarin Forms</li>
                                </ul>
                            </li>
                            <li className="skill-category">
                                <h2>Software Practices</h2>
                                <ul className="tags">
                                    <li>CI</li>
                                    <li>TDD</li>
                                    <li>DDD</li>
                                    <li>Clean Coding</li>
                                </ul>
                            </li>
                            <li className="skill-category">
                                <h2>SCM</h2>
                                <ul className="tags">
                                    <li>Git</li>
                                    <li>TFS</li>
                                    <li>SVN</li>
                                </ul>
                            </li>
                            <li className="skill-category">
                                <h2>UX / UI Design</h2>
                                <ul className="tags">
                                    <li>Web 2.0</li>
                                    <li>Flat Design</li>
                                    <li>Usability Principles</li>
                                    <li>Colors</li>
                                </ul>
                            </li>
                            <li className="skill-category">
                                <h2>Other</h2>
                                <ul className="tags">
                                    <li>Pragmatic</li>
                                    <li>Independent</li>
                                    <li>Fast Learner</li>
                                    <li>Strong Analytical Skills</li>
                                    <li>Excellent Communication Skills</li>
                                    <li>Fluent in English</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="spice spice-big spice-secondary">
                <div className="container">
                    <h1>"Simplicity is the ultimate sophistication."</h1>
                    <p>
                        That's my favorite quote from Leonardo da Vinci. I aim
                        to make things simple during software development,
                        whether it being the UX/UI or the software design or the
                        code.
                    </p>
                </div>
            </section>
            <section id="section-work-experience">
                <div className="container">
                    <div className="jumbotron">
                        <h1>Professional Experience</h1>
                        <ul className="experiences">
                            <li className="experience">
                                <time>2015 - Now</time>
                                <ul className="experience-details">
                                    <li className="company">Cientech</li>
                                    <li className="position">Founder</li>
                                </ul>
                            </li>
                            <li className="experience">
                                <time>2014 - 2015</time>
                                <ul className="experience-details">
                                    <li className="company">iCareHealth</li>
                                    <li className="position">
                                        Software Engineer
                                    </li>
                                </ul>
                            </li>
                            <li className="experience">
                                <time>2008 - 2014</time>
                                <ul className="experience-details">
                                    <li className="company">Sunesis</li>
                                    <li className="position">
                                        Lead Software Engineer
                                    </li>
                                </ul>
                            </li>
                            <li className="experience">
                                <time>2004 - 2008</time>
                                <ul className="experience-details">
                                    <li className="company">Ashna Web</li>
                                    <li className="position">Web Developer</li>
                                </ul>
                            </li>
                            <li className="experience">
                                <time>2001 - 2004</time>
                                <ul className="experience-details">
                                    <li className="company">Cientech</li>
                                    <li className="position">
                                        Software Developer
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="section-qualifications">
                <div className="container">
                    <div className="jumbotron">
                        <h1>Qualifications</h1>
                        <h2>Academic</h2>
                        <ul className="qualifications">
                            <li className="qualification">
                                <time>2008</time>
                                <ul className="qualification-details">
                                    <li className="qualification-name">
                                        Master of Science in Network Systems
                                    </li>
                                    <li className="qualification-issuer">
                                        Swinburne University of Technology
                                    </li>
                                    <li className="qualification-place">
                                        Melbourne, Australia
                                    </li>
                                </ul>
                            </li>
                            <li className="qualification">
                                <time>2006</time>
                                <ul className="qualification-details">
                                    <li className="qualification-name">
                                        Bachelor of Science in Software
                                        Engineering
                                    </li>
                                    <li className="qualification-issuer">
                                        Azad University
                                    </li>
                                    <li className="qualification-place">
                                        Tehran, Iran
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h2>Certifications</h2>
                        <ul className="qualifications">
                            <li className="qualification">
                                <time>2008</time>
                                <ul className="qualification-details">
                                    <li className="qualification-name">
                                        Microsoft Certified Technology
                                        Specialist - Web Applications (MCTS)
                                    </li>
                                </ul>
                            </li>
                            <li className="qualification">
                                <time>2005</time>
                                <ul className="qualification-details">
                                    <li className="qualification-name">
                                        Microsoft Certified Application
                                        Developer (MCAD)
                                    </li>
                                </ul>
                            </li>
                            <li className="qualification">
                                <time>2004</time>
                                <ul className="qualification-details">
                                    <li className="qualification-name">
                                        Microsoft Certified Professional (MCP)
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="section-past-projects">
                <div className="container">
                    <div className="jumbotron">
                        <h1>Past Projects</h1>
                        <p>
                            I've been involved in numerous projects of varying
                            size and complexity over my professional experience.
                            This includes{" "}
                            <em>
                                designing and coding web 2.0 sites, frameworks,
                                peer-to-peer applications
                            </em>
                            , and <em>mobile apps</em>. Projects listed below
                            are the ones that demonstrate my diverse range of
                            skills.
                        </p>
                        <ShowHide />
                        <ul
                            // onClick={handleShowHide}
                            id="past-projects"
                            className="projects hide"
                            style={{ display: "block" }}
                        >
                            <li className="project">
                                <h2>uWooed</h2>
                                <p>
                                    A video-based online dating website with
                                    support for viewing videos on multiple
                                    platforms (desktop, tablet, mobile) and
                                    integration with YouTube.
                                </p>
                                <ul className="tags">
                                    <li>UX / UI</li>
                                    <li>ASP.NET MVC 2</li>
                                    <li>jQuery</li>
                                    <li>Azure Web / Worker Role</li>
                                    <li>Workflows</li>
                                    <li>OpenID</li>
                                    <li>OAuth</li>
                                    <li>Entity Framework</li>
                                    <li>SQL Server</li>
                                </ul>
                            </li>
                            <li className="project">
                                <h2>O/RM for EAV Databases</h2>
                                <p>
                                    An object-relational mapper that supports
                                    loading and persisting objects in an EAV
                                    (entity-atribute-value) database.
                                </p>
                                <p>
                                    This O/RM reduced the effort to maintain
                                    existing applications and the time to build
                                    new applications dramatically. Prior to the
                                    release of this O/RM, there were 1000+
                                    stored procedures, each with 500+ lines of
                                    code. This O/RM replaced all these stored
                                    procedures with 1 generic stored procedure.
                                </p>
                                <ul className="tags">
                                    <li>C#</li>
                                    <li>Enterprise Patterns</li>
                                    <li>XML</li>
                                </ul>
                            </li>
                            <li className="project">
                                <h2>Chopin Project</h2>
                                <p>
                                    My own concept, back at university in 2001,
                                    a peer-to-peer network application (similar
                                    to bittorent) designed for sharing music
                                    sheets online. It featured a library
                                    (similar to iTunes) to store music sheets
                                    and identify them using meta tags. I never
                                    launched this application due to copyright
                                    issues.
                                </p>
                                <ul className="tags">
                                    <li>Peer-to-peer Network</li>
                                    <li>C#</li>
                                    <li>Windows Forms</li>
                                    <li>WinSocket</li>
                                    <li>SQL Server</li>
                                </ul>
                            </li>
                            <li className="project">
                                <h2>Naghoos Web Site</h2>
                                <p>
                                    An online bookshop for one of the biggest
                                    book publishing companies in Iran, Naghoos.
                                    It was inspired by Amazon.com and featured
                                    browsing and searching books, shopping
                                    carts, favorite lists, placing orders,
                                    fulfilling orders (for admins) and tracking
                                    orders (for customers).
                                </p>
                                <ul className="tags">
                                    <li>ASP.NET Web Forms</li>
                                    <li>C#</li>
                                    <li>ADO.NET</li>
                                    <li>SQL Server</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="spice spice-primary">
                <div className="container">
                    <h1>
                        I love to offer something cool and new to the world.
                    </h1>
                    <p>
                        I am passionate and get satisfaction from working with
                        small, creative, smart teams who aim to offer something
                        new to people and see them smile.
                    </p>
                </div>
            </section>
            <section id="section-contact">
                <div className="container">
                    <div className="jumbotron">
                        <h1>Contact Me</h1>
                        <p>
                            Do you have an interesting project that matches my
                            skill set? Let's talk!
                        </p>
                        <p>
                            <h2>com.qandeelhaider@gmail.com</h2>
                        </p>
                    </div>
                </div>
            </section>
            <footer>Design by Qandeel - All Rights Reserved.</footer>
        </>
    );
};

export default Home;

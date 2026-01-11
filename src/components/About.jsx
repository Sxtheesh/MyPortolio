import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--card-bg)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>About Me</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, minWidth: '300px' }}
                    >
                        <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '20px' }}>
                                I have hands-on experience with Amazon Web Services (AWS) and core DevOps tools.
                                I work with services like EC2, S3, IAM, VPC, CloudWatch, and have a solid
                                understanding of Linux systems and networking fundamentals.
                            </p>
                            <p style={{ marginBottom: '20px' }}>
                                I enjoy learning new technologies, solving infrastructure problems, and improving
                                system reliability through automation. I am currently seeking an entry-level
                                Cloud or DevOps Engineer role where I can apply my skills, grow professionally,
                                and contribute to real-world cloud projects.
                            </p>

                            <div style={{ marginTop: '30px' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '15px' }}>Education</h3>
                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{ fontSize: '1.2rem', color: '#fff' }}>Bachelor of Engineering</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Sri Krishna College of Technology</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>(Artificial Intelligence and Machine Learning)</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>2023 - 2026</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '30px' }}>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', marginBottom: '15px' }}>Certifications</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: 'var(--secondary-color)' }}>•</span> AWS Cloud Practitioner
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: 'var(--secondary-color)' }}>•</span> AWS Certified Solutions Architect - Associate (In Progress)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, minWidth: '300px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}
                    >
                        <div className="glass" style={{ padding: '30px', flex: 1, minWidth: '140px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>0</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="glass" style={{ padding: '30px', flex: 1, minWidth: '140px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)' }}>7+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="glass" style={{ padding: '30px', flex: 1, minWidth: '140px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}>5+</h3>
                            <p>Skills</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

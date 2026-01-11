import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws, FaCloud, FaGlobe, FaCogs, FaRocket, FaCode, FaChartLine, FaBell, FaServer } from 'react-icons/fa';

const projects = [
    {
        title: 'Static Website on AWS',
        description: 'Hosted a highly available static website using AWS S3, CloudFront for content delivery, and Route 53 for DNS management. Secured with SSL/TLS certificates.',
        tags: ['AWS S3', 'CloudFront', 'Route 53', 'ACM'],
        visual: 'aws',
        github: '#',
        demo: '#'
    },
    {
        title: 'CI/CD Pipeline Automation',
        description: 'Implemented a complete CI/CD pipeline using Jenkins and GitHub Actions. Automated testing and deployment of a Node.js application to EC2 instances.',
        tags: ['Jenkins', 'GitHub Actions', 'EC2', 'Docker'],
        visual: 'cicd',
        github: '#',
        demo: '#'
    },
    {
        title: 'Cloud Infrastructure Monitoring',
        description: 'Set up comprehensive monitoring and alerting for cloud resources using AWS CloudWatch. Configured dashboards for CPU, memory, and network metrics.',
        tags: ['CloudWatch', 'SNS', 'Lambda', 'Linux'],
        visual: 'monitoring',
        github: '#',
        demo: '#'
    }
];

const ProjectVisual = ({ type }) => {
    const containerStyle = {
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(129, 140, 248, 0.1))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
    };

    if (type === 'aws') {
        return (
            <div style={containerStyle}>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '20%', right: '20%', color: 'rgba(255,255,255,0.1)', fontSize: '4rem' }}
                >
                    <FaCloud />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ zIndex: 1, color: '#FF9900', fontSize: '5rem', filter: 'drop-shadow(0 0 10px rgba(255, 153, 0, 0.3))' }}
                >
                    <FaAws />
                </motion.div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ position: 'absolute', width: '120px', height: '120px', border: '2px dashed rgba(56, 189, 248, 0.3)', borderRadius: '50%' }}
                />
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{ position: 'absolute', bottom: '20%', left: '20%', color: '#38bdf8', fontSize: '2rem' }}
                >
                    <FaGlobe />
                </motion.div>
            </div>
        );
    }

    if (type === 'cicd') {
        return (
            <div style={containerStyle}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ position: 'absolute', top: '20%', right: '20%', color: '#818cf8', fontSize: '3rem' }}
                >
                    <FaCogs />
                </motion.div>
                <motion.div
                    animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ zIndex: 1, color: '#c084fc', fontSize: '4rem', display: 'flex', gap: '10px' }}
                >
                    <FaCode />
                </motion.div>
                <motion.div
                    animate={{ x: [0, 100], y: [0, -100], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeIn", repeatDelay: 1 }}
                    style={{ position: 'absolute', bottom: '20%', left: '20%', color: '#38bdf8', fontSize: '2.5rem' }}
                >
                    <FaRocket />
                </motion.div>
            </div>
        );
    }

    if (type === 'monitoring') {
        return (
            <div style={containerStyle}>
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)' }}
                />
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '50px' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [20, 50, 20] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                            style={{ width: '10px', background: '#38bdf8', borderRadius: '2px' }}
                        />
                    ))}
                </div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ position: 'absolute', top: '20%', right: '20%', color: '#ff007a', fontSize: '1.5rem' }}
                >
                    <FaBell />
                </motion.div>
                <motion.div
                    style={{ position: 'absolute', bottom: '15%', left: '15%', color: '#f3f4f6', fontSize: '2.5rem' }}
                >
                    <FaServer />
                </motion.div>
            </div>
        );
    }

    return null;
};

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ background: 'var(--card-bg)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Featured Projects</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden', background: '#0a0a0a' }}>
                                <ProjectVisual type={project.visual} />
                            </div>
                            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', flex: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.8rem',
                                            padding: '5px 10px',
                                            background: 'rgba(255,255,255,0.1)',
                                            borderRadius: '20px',
                                            color: 'var(--primary-color)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <a href={project.github} className="btn-outline" style={{ padding: '8px 16px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.demo} className="btn-primary" style={{ padding: '8px 16px', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '5px', border: 'none' }}>
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

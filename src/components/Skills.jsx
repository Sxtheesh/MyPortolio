import { motion } from 'framer-motion';
import { FaAws, FaLinux, FaDocker, FaJenkins, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiGithubactions, SiGnubash } from 'react-icons/si';

const skills = [
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
    { name: 'Jenkins', icon: <FaJenkins />, color: '#D24939' },
    { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Bash Scripting', icon: <SiGnubash />, color: '#4EAA25' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Technical Skills</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                padding: '30px',
                                width: '150px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ fontSize: '3rem', color: skill.color }}>{skill.icon}</div>
                            <p style={{ fontWeight: 600, textAlign: 'center' }}>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

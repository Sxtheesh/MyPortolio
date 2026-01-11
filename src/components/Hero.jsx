import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--primary-color)' }}
                    >
                        Heyyy , I'm
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.1 }}
                    >
                        <span className="gradient-text">Satheeshvaran</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--text-secondary)' }}
                    >
                        Cloud & DevOps Engineer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ fontSize: '1.1rem', maxWidth: '500px', marginBottom: '30px', color: 'var(--text-secondary)' }}
                    >
                        Aspiring Cloud and DevOps Engineer with a strong interest in building scalable, secure, and automated cloud solutions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ display: 'flex', gap: '15px' }}
                    >
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            <button className="btn btn-primary">View Work</button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-70}>
                            <button className="btn btn-outline">Contact Me</button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px', marginTop: '40px' }}
                >
                    <div style={{
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 50px rgba(255, 170, 0, 0.3), 0 0 20px rgba(255, 60, 0, 0.2)'
                    }}>
                        <div style={{
                            width: '340px',
                            height: '340px',
                            borderRadius: '50%',
                            background: 'var(--bg-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

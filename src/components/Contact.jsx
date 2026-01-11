import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        // Create a new FormData object for Web3Forms
        const data = new FormData();
        data.append('access_key', '7580e393-85a9-4713-badb-6e31a9a6dcd9'); // User needs to replace this
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data
            });

            const res = await response.json();

            if (res.success) {
                setResult({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResult({ type: 'error', message: 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setResult({ type: 'error', message: 'Connection error. Please check your internet.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Get In Touch</h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', margin: '0 auto' }}></div>
                </motion.div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, minWidth: '300px' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let's Talk</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
                            I'm open to freelance opportunities or full-time roles. If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>contact : satheeshvaransk@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>India</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                            <a
                                href="https://www.linkedin.com/in/satheeshvaran-l-b07bb8298/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: '2rem',
                                    color: 'var(--text-secondary)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.color = '#0077b5'; // LinkedIn Blue
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <FaLinkedin />
                            </a>
                            <a href="#" style={{ fontSize: '2rem', color: 'var(--text-secondary)', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><FaGithub /></a>
                            <a href="#" style={{ fontSize: '2rem', color: 'var(--text-secondary)', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><FaTwitter /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ flex: 1, minWidth: '300px', padding: '40px' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Email"
                                    style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 500 }}>Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Message"
                                    style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', outline: 'none', resize: 'none' }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                                style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: isSubmitting ? 0.7 : 1 }}
                            >
                                {isSubmitting ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
                            </button>

                            {result && (
                                <div style={{
                                    marginTop: '15px',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    background: result.type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                                    color: result.type === 'success' ? '#4ade80' : '#f87171',
                                    textAlign: 'center'
                                }}>
                                    {result.message}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

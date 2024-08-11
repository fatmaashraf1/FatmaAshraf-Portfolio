import React, { useState } from "react";
import styles from "./Form.module.css";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        // Name validation
        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
            valid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            formErrors.email = 'Email is required';
            valid = false;
        } else if (!emailRegex.test(formData.email)) {
            formErrors.email = 'Invalid email format';
            valid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            formErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // Validate form on each change
        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate form submission
            console.log('Form submitted:', formData);
            setSubmitted(true);

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 seconds
        }
    };

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Contact Me</h2>
            {submitted && <p className={styles.successMessage}>Thank you! Your message has been sent.</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Name"
                        onChange={handleChange}
                        className={errors.name ? styles.inputError : ''}
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className={errors.email ? styles.inputError : ''}
                    />
                    {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? styles.inputError : ''}
                    ></textarea>
                    {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

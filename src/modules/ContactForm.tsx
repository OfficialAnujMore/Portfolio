// src/components/ContactForm.tsx
import React, { useState } from 'react'
import style from '../styles/ContactForm.module.css'

const ContactForm: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        // Handle form submission logic here
        console.log({ name, email, message })
    }

    return (
        <div className={style.mainContainer}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Message
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
            <div className={style.iconContainer}>
                <a href="https://www.linkedin.com/in/yourprofile">
                    <img src="/linkedin-icon.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/yourprofile">
                    <img src="/github-icon.png" alt="GitHub" />
                </a>
                <a href="https://twitter.com/yourprofile">
                    <img src="/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="mailto:your.email@example.com">
                    <img src="/email-icon.png" alt="Email" />
                </a>
            </div>
        </div>
    )
}

export default ContactForm

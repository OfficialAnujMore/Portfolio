// src/components/ContactForm.tsx
import React, { useState } from 'react'
import style from '../styles/ContactForm.module.css'
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineX,
    AiTwotoneMail,
} from 'react-icons/ai'
import { TbBrandLeetcode } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'
import { CustomButton } from 'shared/components/CustomButton'
import { CustomHeading } from 'shared/components/CustomHeading'
import enData from '../shared/local/en.json'
import { CustomText } from 'shared/components/CustomText'
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
            <CustomHeading title={enData.contact} />
            <div className={style.bodyContainer}>
                <div className={style.iconContainer}>
                    <CustomButton
                        customComponent={
                            <AiFillLinkedin size={'1.5rem'} title="LinkedIn" />
                        }
                        actionItem={'https://www.linkedin.com/in/anuj-more/'}
                    />
                    <CustomButton
                        customComponent={
                            <FaGithub size={'1.5rem'} title="Github" />
                        }
                        actionItem={'https://github.com/OfficialAnujMore'}
                    />
                    <CustomButton
                        customComponent={
                            <AiOutlineX size={'1.5rem'} title="X" />
                        }
                        actionItem={'https://x.com/AnujMore1307'}
                    />
                    <CustomButton
                        customComponent={
                            <AiTwotoneMail size={'1.5rem'} title="Email" />
                        }
                        actionItem={'mailTo:moreanuj1307@gmail.com'}
                    />
                    <CustomButton
                        customComponent={
                            <TbBrandLeetcode size={'1.5rem'} title="Leetcode" />
                        }
                        actionItem={'https://leetcode.com/u/anujmore/'}
                    />

                    {/* <a href="mailto:your.email@example.com">
                    <img src="/email-icon.png" alt="Email" />
                    </a> */}
                </div>

                <div className={style.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <CustomText
                                title={enData.name}
                                fontSize="1.2rem"
                                fontColor="#fff"
                                fontWeight="500"
                            />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            <CustomText
                                title={enData.email}
                                fontSize="1.2rem"
                                fontColor="#fff"
                                fontWeight="500"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <CustomText
                                title={enData.message}
                                fontSize="1.2rem"
                                fontColor="#fff"
                                fontWeight="400"
                            />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={200}
                            />
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

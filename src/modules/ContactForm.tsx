import React, { useState } from 'react'
import style from '../styles/ContactForm.module.css'
import globalStyle from '../styles/Global.module.css'
import { AiFillLinkedin, AiOutlineX, AiTwotoneMail } from 'react-icons/ai'
import { TbBrandLeetcode } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa'
import { CustomButton } from 'shared/components/CustomButton'
import { CustomHeading } from 'shared/components/CustomHeading'
import WORD_DIR from '../shared/local/en.js'
import { CustomText } from 'shared/components/CustomText'
import {
    SOCIAL_URL,
    FONT_SIZE,
    FONT_WEIGHT,
    NAVIGATION_PATH,
} from 'shared/utils/constant'
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
        <div
            className={`${style.contactFormMainContainer} `}
            id={NAVIGATION_PATH.contactMe}
        >
            <CustomHeading title={WORD_DIR.contact} />
            <div
                className={` ${style.bodyContainer} ${globalStyle.commonBorderDecoration}`}
            >
                <div className={style.iconContainer}>
                    <CustomButton
                        customComponent={
                            <AiFillLinkedin
                                size={FONT_SIZE.large}
                                title={WORD_DIR.linkedIn}
                            />
                        }
                        actionItem={SOCIAL_URL.linkedIn}
                    />
                    <CustomButton
                        customComponent={
                            <FaGithub
                                size={FONT_SIZE.large}
                                title={WORD_DIR.github}
                            />
                        }
                        actionItem={SOCIAL_URL.github}
                    />
                    <CustomButton
                        customComponent={
                            <AiOutlineX
                                size={FONT_SIZE.large}
                                title={WORD_DIR.twitter}
                            />
                        }
                        actionItem={SOCIAL_URL.twitter}
                    />
                    <CustomButton
                        customComponent={
                            <AiTwotoneMail
                                size={FONT_SIZE.large}
                                title={WORD_DIR.email}
                            />
                        }
                        actionItem={SOCIAL_URL.email}
                    />
                    <CustomButton
                        customComponent={
                            <TbBrandLeetcode
                                size={FONT_SIZE.large}
                                title={WORD_DIR.leetcode}
                            />
                        }
                        actionItem={SOCIAL_URL.leetcode}
                    />
                </div>

                <div className={style.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <CustomText
                                title={WORD_DIR.name}
                                fontSize={FONT_SIZE.small}
                                fontWeight={FONT_WEIGHT.weight500}
                            />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label>
                            <CustomText
                                title={WORD_DIR.email}
                                fontSize={FONT_SIZE.small}
                                fontWeight={FONT_WEIGHT.weight500}
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <CustomText
                                title={WORD_DIR.message}
                                fontSize={FONT_SIZE.small}
                                fontWeight={FONT_WEIGHT.weight500}
                            />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                maxLength={200}
                            />
                        </label>
                        <CustomButton
                            text={WORD_DIR.send}
                            enableBorder={true}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

import React from 'react'
import styles from './page.module.css'
import Button from '../components/button/button'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Contactez-nous via le formulaire!</h1>
            <div className={styles.blocImageForm}>
                <div className={styles.imgContainer}>
                    <Image src='/contact.png' alt='contact illustration' fill={true} className={styles.img} />
                </div>
                <form className={styles.formContainer}>
                    <input type="text" name="name" placeholder='Nom' className={styles.input} />
                    <input type="email" name="email" placeholder='E-mail' className={styles.input} />
                    <textarea className={styles.textarea} name="message" placeholder="Votre message" ></textarea>
                    <Button url="#" text="Envoyer" />
                </form>
            </div>
        </div>
    )
}

export default Contact 
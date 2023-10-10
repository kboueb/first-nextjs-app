import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '../components/button/button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    className={styles.img} 
                    src='https://images.pexels.com/photos/9816/pexels-photo-9816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                    alt='About banner'
                    fill={true}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Lorem ipsum dolor</h1>
                    <h2 className={styles.imgDesc}>Lorem ipsum dolor 2</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.itemTitle}>Qui sommes-nous?</h1>
                    <p className={styles.itemDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia aliquid debitis velit, maxime cum facilis, ea aperiam iusto harum, at recusandae quibusdam consequuntur labore id commodi rem. Molestiae aliquid sint doloremque, eaque rem itaque? <br /><br />Ducimus saepe vitae optio accusantium quo beatae maxime et suscipit! Nisi iure voluptatum consequatur quisquam alias!
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.itemTitle}>Notre metier</h1>
                    <p className={styles.itemDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident sit sequi ullam ab dolores voluptatem facere illo! Quod fuga doloremque ab sapiente aliquid, eaque, quia illo ratione, asperiores placeat magni!
                    </p>
                    <Button url="contact" text="contact" />
                </div>
            </div>
        </div>
    )
}

export default About
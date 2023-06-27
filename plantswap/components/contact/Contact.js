"use client"

import styles from "./contact.module.scss";
import Image from "next/image";
import { forwardRef } from "react";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Contact = forwardRef(({index} ,ref ) => {
 
  return (
    <main className={styles.contact}>
        <section className={`${styles.contact__section} ${styles.section}`}  ref={ref} data-index={index}>
        <div className={styles.contact__imagediv}>
                <Image
                    src={"/images/obamap.png"}
                    alt={"test"}
                    className={styles.contact__image}
                    width={250}
                    height={550}
                    />
            </div>
           
            <section className={styles.contact__form}>
                <section className={styles.contact__container}>
                    <Title title="h1">
                    Contact
                    </Title>
                    <Text>
                    Wil je meer weten over ons of heb je vragen of opmerkingen? Neem gerust contact met ons op!
                    </Text>
                    <form>
                        <section className={styles.contact__formName}>
                            <input type="text" className={styles.contact__formfname}></input>  
                            <input type="text" className={styles.contact__formlname}></input> 
                        </section>
                        
                        <input type="text" className={styles.contact__formemail}></input> 
                        <textarea type="textarea" className={styles.contact__textarea}></textarea>  
                        <Button>Verstuur</Button>
                    </form> 
                </section>
            </section>
        </section>
    </main>
  );
});

export default Contact;

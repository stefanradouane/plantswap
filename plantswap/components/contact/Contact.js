"use client"

import styles from "./contact.module.scss";
import Image from "next/image";
import { forwardRef } from "react";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Contact = forwardRef(({index} ,ref ) => {
 
  return (
    <main className={styles.contact} ref={ref} data-index={index}>
       <section className={styles.contact__image}>
            <Image
                src={"/images/obamap.png"}
                alt={"oba location"}
                className={styles.contact__image}
                width={250}
                height={550}
            />
       </section>
        <section className={styles.contact__container}>
            <section className={styles['contact__container-contactform']}>
                    <article>
                        <Title title="h1">
                            Contact
                        </Title>
                        <Text>
                            Wil je meer weten over ons of heb je vragen of opmerkingen? Neem gerust contact met ons op!
                        </Text>
                    </article>
                    <form>
                        <section className={styles['contact__container-contactform-names']}>
                            <input type="text"></input>  
                            <input type="text"></input> 
                        </section>
                                
                        <input type="text"></input> 
                        <textarea type="textarea"></textarea>  
                        <Button>Verstuur</Button>
                    </form>
            </section>
       </section>
    </main>
  );
});

export default Contact;

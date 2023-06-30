"use client";
import styles from "./contact.module.scss";
import Image from "next/image";
import { forwardRef } from "react";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Button from "../Button/Button";
import FromInput from "../Input/input";

const Contact = forwardRef(({ index }, ref) => {
  return (
    <section className={styles.contact} ref={ref} data-index={index}>
      <section className={styles.contact__wrapper}>
        <section className={styles.contact__container}>
          <section className={styles["contact__container-contactform"]}>
            <article>
              <Title title="h1">Contact</Title>
              <Text>
                Wil je meer weten over ons of heb je vragen of opmerkingen? Neem
                gerust contact met ons op!
              </Text>
            </article>
            <form>
              <section
                className={styles["contact__container-contactform-names"]}>
                <FromInput
                  type="text"
                  id={"name"}
                  mainWrapper={true}
                  subject={"Naam"}
                  question={"Naam"}
                  placeholder={"Jouw naam"}
                />

                <FromInput
                  type="email"
                  id={"email"}
                  mainWrapper={true}
                  subject={"email"}
                  question={"E-mailadres"}
                  placeholder={"planstsw@p.nl"}
                />
              </section>

              <FromInput
                type="text"
                id={"subject"}
                mainWrapper={true}
                subject={"Onderwerp"}
                question={"Onderwerp"}
                placeholder={"Waar gaat het bericht over?"}
              />
              <section className={styles.contact__textarea}>
                <label htmlFor="message">Bericht aan ons</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Typ hier jouw bericht"></textarea>
              </section>
              <Button rotateIcon={90}>Verstuur</Button>
            </form>
          </section>
        </section>
        <section className={styles.contact__location}>
          <Image
            src={"/images/campusmap.png"}
            alt={"oba location"}
            width={256}
            height={610}
            quality={80}
          />
          <section className={styles["contact__location-info"]}>
            <Text modifier={"bold"}>Buurtcampus oost</Text>
            <Text modifier={"small"}>Linneausstraat 44</Text>
            <Text modifier={"small"}>1092 CL Amsterdam</Text>
          </section>
        </section>
      </section>
    </section>
  );
});


App.displayName='contact';

export default Contact;

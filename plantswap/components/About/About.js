"use client"

import { useEffect, useRef, useState } from "react";
import AboutSection from "../AboutSection/AboutSection";
import styles from "./about.module.scss";
import Contact from "../contact/Contact";
import Image from "next/image";

const About = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const sectionRefs = useRef([]);

  const callBackFunction = (entries) => {
    entries.forEach((entry) => {
      const sectionIndex = parseInt(entry.target.getAttribute("data-index"));
      if (entry.isIntersecting && sectionIndex) {
        setCurrentSection(sectionIndex);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "-100px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    sectionRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const sectionRef = (index) => {
    sectionRefs.current[index] = useRef(null);
    return sectionRefs.current[index];
  };

  const getIndicatorClassName = (sectionNumber) => {
    // Define your different class names for each section
    switch (sectionNumber) {
      case 1:
        return styles.about__indicatorSection1;
      case 2:
        return styles.about__indicatorSection2;
      case 3:
        return styles.about__indicatorSection3;
      case 4:
        return styles.about__indicatorSection4;
      default:
        return "";
    }
  };

  const goToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection <= sectionRefs.current.length) {
      sectionRefs.current[nextSection - 1].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToPreviousSection = () => {
    const previousSection = currentSection - 1;
    if (previousSection >= 1) {
      sectionRefs.current[previousSection - 1].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className={styles.about}>
        
      <ul className={`${styles.about__indicator} ${getIndicatorClassName(currentSection)}`}>
       
        <section className={styles.about__SectionBtn} onClick={goToPreviousSection} disabled={currentSection === 1}>
          <div className={styles.about__previousSectionIcon}>
          <Image
            src={"/images/down.png"}
            alt={"arrow"}
            className={styles.aboutsection__image}
            width={30}
            height={30}
      />
          </div>
         
        </section>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        
        <section className={styles.about__sectionBtn} onClick={goToNextSection} disabled={currentSection === 5}>
          <div className={styles.about__nextSectionIcon}>
          <Image
            src={"/images/down.png"}
            alt={"arrow"}
            className={styles.aboutsection__image}
            width={30}
            height={30}
      />
          </div>
         
        </section>
      </ul>
      
      <AboutSection 
      index={1} 
      ref={sectionRef(0)} 
            imageSrc={"/images/buurtcampus82.png"}
            altText={"ons netwerk"}
            text={"Heb jij een of meerdere plantenstekjes over en zou je die graag willen ruilen voor een nieuw plantje? Ruil je plantje met PlantSwap!"}
            title={"Over ons"}
            buttonText={"Swap!"}
            style={{backgroundColor: '#FFE4C4'}} />
      <AboutSection 
      index={2} 
      ref={sectionRef(1)} 
            imageSrc={"/images/kast.png"}
            altText={"swapkast"}
            text={"Binnen Plantswap kun je kiezen uit de opties ruilen of doneren. Met de optie ‘ruilen’ kies je uit onze beschikbare stekjes uit de stekjeskast. Vul het formulier in en kom je stekje bij ons ruilen!"}
            title={"Planten ruilen"}
            buttonText={"Ruil"}
            style={{backgroundColor: '#87CEEB'}} 
            reverse={true} />
      <AboutSection 
      index={3} 
      ref={sectionRef(2)} 
            imageSrc={"/images/stekje.png"}
            altText={"stekje"}
            text={"Heb jij (net als wij) teveel planten in huis? Wij zijn super blij als je stekjes komt doneren. Je kunt ze aanmelden via de app en daarna neerzetten in de PlantSwap kast in de bieb."}
            title={"Doneer een plant"}
            buttonText={"Doneer"}
            style={{backgroundColor: '#3CB371'}} />
      <AboutSection 
      index={4} 
      ref={sectionRef(3)}
            imageSrc={"/images/samen.png"}
            altText={"test"}
            text={"De eerste workshop ‘Planten stekken en verzorgen’ zal plaatsvinden in juni 2023 in de OBA Linnaeusstraat, meld je hier aan voor meer informatie en om op de hoogte te blijven."}
            title={"Workshops"}
            buttonText={"Workshops"}
            style={{backgroundColor: '#F0F0F0'}}
            reverse={true} />
        {/* <Contact 
        index={5} 
        ref={sectionRef(4)} 
        /> */}
    </main>
  );
};

export default About;

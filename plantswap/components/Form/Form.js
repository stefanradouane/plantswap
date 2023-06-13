'use client'

import React from 'react';

import Button from "../Button/Button";

import styles from "./form.module.scss";

const Form = ({ data }) => {
    
    return (
        <main>

            <section>

                <form className={styles.form}>

                    <fieldset className={styles.form__fieldset}>

                        <legend className={styles.form__legend}><span>1.</span>Groene Gegevens</legend>

                        <div className={styles.form__input_group}>
                            <label className={styles.form__label} htmlFor="plantNaam">Naam van de plant</label>
                            <span id="plantNaamDesc" className={styles.form__label_description}>Vul hier de naam van de plant in.</span>
                            <input className={styles.form__input_text} type="text" id="plantNaam" aria-describedby="plantNaamDesc" placeholder="Aziatische Lelies"/>
                        </div>

                        <div className={styles.form__input_group}>
                            <label className={styles.form__label} htmlFor="plantHerkomst">Herkomst van de plant</label>
                            <span id="plantHerkomstDesc" className={styles.form__label_description}>Vul hier de herkomst van de plant in.</span>
                            <select id="plantHerkomst" className={styles.form__input_select} aria-describedby="plantHerkomstDesc">
                                <option value="afrika">Afrika</option>
                                <option value="antartica">Antartica</option>
                                <option value="azie">Azië</option>
                                <option value="australie">Australië</option>
                                <option value="europa">Europa</option>
                                <option value="noordAmerika">Noord Amerika</option>
                                <option value="zuidAmerika">Zuid Amerika</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset className={styles.form__fieldset}>

                        <legend className={styles.form__legend}><span>2.</span>Onderhoud</legend>

                        <div className={styles.form__input_group}>
                            <label className={styles.form__label} htmlFor="onderhoudMoeilijkheidsgraad">Moeilijkheidsgraad onderhoud</label>
                            <span id="onderhoudDesc" className={styles.form__label_description}>Vul hier de moeilijkheidsgraad van de plant in.</span>
                            <select id="onderhoudMoeilijkheidsgraad" className={styles.form__input_select} aria-describedby="onderhoudDesc">
                                <option value="nietMoeilijk">Niet moeilijk te onderhouden</option>
                                <option value="gemiddeld">Vereist wat ervaring om te onderhouden</option>
                                <option value="heelMoeilijk">Heel moeilijk te onderhouden</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset className={styles.form__fieldset}>
                        <legend className={styles.form__legend}><span>3.</span>Verzorging</legend>

                        <div className={styles.form__input_group}>
                            <label className={styles.form__label} htmlFor="waterBehoefte">Behoefte aan water</label>
                            <span id="waterDesc" className={styles.form__label_description}>Vul hier de waterbehoefte van de plant in.</span>
                            <div className={styles.form__input_water_interval_group}>
                                <input type="text" id="waterBehoefte" className={styles.form__input_text} aria-describedby="waterDesc" placeholder="1"/>
                                <span>X per</span>
                                <select id="waterInterval" className={styles.form__input_select}>
                                    <option value="">Standaard</option>
                                    <option value="perDag">Per dag</option>
                                    <option value="perWeek">Per week</option>
                                    <option value="perMaand">Per maand</option>
                                    <option value="perJaar">Per jaar</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.form__input_group}>
                            <label className={styles.form__label} htmlFor="voedingBehoefte">Behoefte aan voeding</label>
                            <span id="voedingDesc" className={styles.form__label_description}>Vul hier de behoefte aan voeding van de plant in.</span>
                            <input type="text" id="voedingBehoefte" className={styles.form__input_text} aria-describedby="voedingDesc" placeholder="Om de twee maanden, plantvoeding."/>
                        </div>
                    </fieldset>

                    <fieldset className={styles.form__fieldset}>
                        <legend className={styles.form__legend}><span>4.</span>Giftig</legend>

                        <div className={styles.form__input_group}>
                            <label className={styles.form__label}>Is deze plant giftig?</label>
                            <span id="giftigDesc" className={styles.form__label_description}>Vink aan als deze plant giftig is.</span>

                            <div className={styles.form__input_checkbox_wrapper}>
                                <input type="checkbox" className={styles.form__input_checkbox} id="giftigCheckbox" aria-describedby="giftigDesc"/>
                                <label className={styles.form__input_checkbox_label} htmlFor="giftigCheckbox">Ja, deze plant is giftig.</label>
                            </div>

                            <div className={styles.form__input_sub_group}>
                                <label className={styles.form__label} htmlFor="giftigAddon">Aanvulling</label>
                                <span id="giftigAddonDesc" className={styles.form__label_description}>Aanvullende beschrijving.</span>
                                <input type="text" id="giftigAddon" className={styles.form__input_text} aria-describedby="giftigAddon" placeholder="Deze plant kan giftig zijn voor ..."/>
                            </div>

                        </div>
                    </fieldset>

                    <button type="submit" className={styles.form__submit_button}>Volgende stap</button>
                </form>

            </section>


        </main >
    );
};

export default Form;
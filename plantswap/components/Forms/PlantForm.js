'use client';

import React from 'react';

import Button from '../Button/Button';
import FromInput from '../Input/input';
import SelectMenu from '../Input/Select';
import styles from './form.module.scss';

const PlantForm = ({ data }) => {
	return (
		<main>
			<section>
				<form className={styles.form}>
					<fieldset className={styles.form__fieldset}>
						<legend className={styles.form__legend}>
							<span>1.</span>Groene Gegevens
						</legend>

						<FromInput
							id={'plantNaam'}
							mainWrapper={true}
							type={'text'}
							placeholder={'Aziatische Lelies'}
							question={'Naam van de plant'}
							task={'de naam van de plant in.'}
							required={true}
						/>

						<SelectMenu
							id={'plantHerkomst'}
							mainWrapper={true}
							question={'Herkomst van de plant'}
							task={'herkomst van de plant in.'}
							subject={'herkomst'}
						/>
					</fieldset>

					<fieldset className={styles.form__fieldset}>
						<legend className={styles.form__legend}>
							<span>2.</span>Onderhoud
						</legend>

						<SelectMenu
							id={'onderhoudMoeilijkheidsgraad'}
							mainWrapper={true}
							question={'Moeilijkheidsgraad onderhoud'}
							task={'moeilijkheidsgraad van de plant in.'}
							subject={'moeilijkheidsgraad'}
						/>
					</fieldset>

					<fieldset className={styles.form__fieldset}>
						<legend className={styles.form__legend}>
							<span>3.</span>Verzorging
						</legend>

						<div className={styles.form__input_group}>
							<label
								className={styles.form__label}
								htmlFor="waterBehoefte"
							>
								Behoefte aan water
							</label>
							<span
								id="waterDesc"
								className={styles.form__description}
							>
								Vul hier de waterbehoefte van de plant in.
							</span>

							<div className={styles.form__input_water_interval_group}>
								<input
									type="number"
									id="waterBehoefte"
									className={styles.form__input_text}
									aria-describedby="waterDesc"
									placeholder="1"
								/>
								<span>X </span>
								<select
									id="waterInterval"
									className={styles.form__input_select}
								>
									<option value="">Standaard</option>
									<option value="perDag">Per dag</option>
									<option value="perWeek">Per week</option>
									<option value="perMaand">Per maand</option>
									<option value="perJaar">Per jaar</option>
								</select>
							</div>
						</div>

						<FromInput
							id={'voedingBehoefte'}
							mainWrapper={true}
							type={'text'}
							placeholder={'Om de twee maanden, plantvoeding.'}
							question={'Behoefte aan voeding'}
							task={'de behoefte aan voeding van de plant in.'}
							required={false}
						/>
					</fieldset>

					<fieldset className={styles.form__fieldset}>
						<legend className={styles.form__legend}>
							<span>4.</span>Giftig
						</legend>

						<div className={styles.form__input_group}>
							<label className={styles.form__label}>
								Is deze plant giftig?
							</label>
							<span
								id="giftigDesc"
								className={styles.form__description}
							>
								Vink aan als deze plant giftig is.
							</span>

							<div className={styles.form__input_checkbox_wrapper}>
								<input
									type="checkbox"
                                    name='giftigCheckbox'
									className={styles.form__input_checkbox}
									id="giftigCheckbox"
									aria-describedby="giftigDesc"
								/>
								<label
									className={styles.form__input_checkbox_label}
									htmlFor="giftigCheckbox"
								>
									Ja, deze plant is giftig.
								</label>
							</div>

							<FromInput
								id={'giftigAddon'}
								mainWrapper={false}
								type={'text'}
								placeholder={'Deze plant kan giftig zijn voor ...'}
								question={'Aanvulling'}
								task={'de aanvulling van de plant in.'}
								required={false}
							/>
						</div>
					</fieldset>

					<Button
						disabled={false}
						children={'Volgende stap'}
						className={'__submit'}
					/>
				</form>
			</section>
		</main>
	);
};

export default PlantForm;

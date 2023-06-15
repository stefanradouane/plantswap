'use client';

import React from 'react';
import Button from '../Button/Button';
import FromInput from '../Input/input';
import styles from './form.module.scss';

function verifyForm(e) {
	e.preventDefault();
	// Get all the inputs within the submitted form
	const inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {

		// Only validate the inputs that have the required attribute
		if (inputs[i].hasAttribute('required')) {
			if (inputs[i].value == '') {
				// Found an empty field that is required
				// inputs[i].parentElement.classList.add(`${styles.form__invalid}`);

				inputs[i].style.borderColor = 'red';
				inputs[i].parentElement.querySelector('span').style.color = 'red';

				// alert("Please fill all required fields");
				// return false;
			} else if (inputs[i].getAttribute('type') == 'email') {
				// Check if the inputted email address is valid
				if (!inputs[i].value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
					inputs[i].style.borderColor = 'red';
					inputs[i].parentElement.querySelector('span').textContent = 'uw email is niet geldig, misschien een @ vergten?';
					return false;
				} else {
                    inputs[i].style.borderColor = '#acacac';
                    inputs[i].parentElement.querySelector('span').style.color = '#186300';
                    inputs[i].parentElement.querySelector('span').textContent = 'Vul hier uw e-mail adres in.';
                }

			} else {
				inputs[i].style.borderColor = '#acacac';
				inputs[i].parentElement.querySelector('span').style.color =
					'#186300';
			}
		}
	}
	return true;
}
const UserForm = () => {
	return (
		<main>
			<section>
				<form className={styles.form}>
					<fieldset className={styles.form__fieldset}>
						<legend className={styles.form__legend}>
							<span>1.</span>Persoonlijke Gegevens
						</legend>

						<FromInput
							id={'userName'}
							mainWrapper={true}
							type={'text'}
							placeholder={'Jhon Doe'}
							question={'Volledige naam'}
							task={'jouw volledige naam in.'}
							required={true}
						/>

						<FromInput
							id={'email'}
							mainWrapper={true}
							type={'email'}
							placeholder={'JhonDoe@mail.com'}
							question={'E-mail adress'}
							task={'jouw e-mail adres in.'}
							required={true}
						/>
					</fieldset>

					<fieldset className={styles.form__fieldset}>
						<legend className={styles.form__legend}>
							<span>2.</span>Moment van ophalen
						</legend>

						<FromInput
							id={'ophaaldatum'}
							mainWrapper={true}
							type={'date'}
							placeholder={''}
							question={'Ophaal datum'}
							task={'in wanneer je de plant wilt ophalen.'}
							required={true}
						/>

						<FromInput
							id={'tijdstip'}
							mainWrapper={true}
							type={'time'}
							placeholder={''}
							question={'Tijdstip'}
							task={'in hoelaat je de plant wilt ophalen.'}
							required={true}
						/>
					</fieldset>

					{/* <Button
						disabled={false}
						children={'Afronden'}
                        className={'__submit'}
						type={'submit'}
                        onClick={verifyForm}
					/> */}

					<button type="submit" onClick={verifyForm}>
						Submit
					</button>
				</form>
			</section>
		</main>
	);
};

export default UserForm;

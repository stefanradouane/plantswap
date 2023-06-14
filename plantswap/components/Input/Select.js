import Options from './Options';
import styles from "./input.module.scss";

const SelectMenu = ({ id, mainWrapper, question, task, subject, ...rest }) => {
	const style = (mainWrapper ? styles.form__wrapper : styles.form__sub_wrapper)
    return (
		<div className={style}>
			<label className={styles.form__label} htmlFor={id}>
				{question}
			</label>
			
			<span id={id + 'Desc'} className={styles.form__description}>
				Vul hier de {task}
			</span>
			<select
				id={id}
				className={styles.form__select}
				aria-describedby={id + 'Desc'}
			>
				{Options[subject].map((subject, index) => {
					return (
						<option key={index} value={index}>
							{subject}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SelectMenu;

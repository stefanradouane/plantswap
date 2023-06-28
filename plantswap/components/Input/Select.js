import Options from './Options';
import styles from './input.module.scss';

const SelectMenu = ({ id, mainWrapper, question, task, subject, ...rest }) => {
	const style = mainWrapper ? styles.form__wrapper : styles.form__sub_wrapper;
	return (
		<div className={style}>
			{question ? (
				<label className={styles.form__label} htmlFor={id}>
					{question}
				</label>
			) : (
				''
			)}

			{task ? (
				<span id={id + 'Desc'} className={styles.form__description}>
					Vul hier de {task}
				</span>
			) : (
				''
			)}

			<select
				id={id}
				className={styles.form__select}
				aria-describedby={id + 'Desc'}
			>
				{Options[subject].map((subject, index) => {
					return (
						<option key={index} value={subject}>
							{subject}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SelectMenu;

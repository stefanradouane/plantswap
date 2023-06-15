import styles from './input.module.scss';

const FromInput = ({
	id,
	mainWrapper,
	type,
	placeholder,
	question,
	task,
	required,
}) => {
	// Check if boolean is true or false, if true it is a sub element
	let style = mainWrapper ? styles.form__wrapper : styles.form__sub_wrapper;

	return (
		<section className={style}>
			<label className={styles.form__label} htmlFor={id}>
				{question}
			</label>
			<span
				id={id + 'Desc'}
				className={styles.form__description}
			>
				Vul hier {task}
			</span>
			<input
				className={styles.form__input_text}
				type={type}
				id={id}
				aria-describedby={id + 'Desc'}
				placeholder={placeholder}
				required={required}
			/>
		</section>
	);
};

export default FromInput;

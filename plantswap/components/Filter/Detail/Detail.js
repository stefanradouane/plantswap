import { useState, useEffect, useRef } from 'react';
import Input from '../../Input/Input';
import Options from '../../Input/Options';
import styles from './detail.module.scss';

const Detail = ({ subject, onFilterChange }) => {
	return (
		<details className={styles.details}>
			<summary className={styles['details--summery']}>{subject}</summary>

			{Options[subject].map((option, key) => {
				return (
					<Input
						key={key}
						type="checkbox"
						id={option}
						mainWrapper={true}
						className={styles['detail--checkbox']}
						value={option}
						subject={subject}
						next={onFilterChange}
						preventDefault={false}
						question={option}
					/>
				);
			})}
		</details>
	);
};

export default Detail;

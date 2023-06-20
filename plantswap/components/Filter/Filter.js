import styles from './filter.module.scss';
import Text from '../Text/Text.js';
import { useState } from 'react';

const PlantFilter = (plants) => {
	const [filteredPlants, setFilteredPlants] = useState(null);

	function filterPlants(e) {
		e.preventDefault();
		let difficulty = e.target.querySelector('select').value;
		let filteredPlants = plants.data.filter(
			(plant) => plant.categories[0].naam === difficulty
		);

		setFilteredPlants(filteredPlants);
	}

	function closeFilter(e) {
		e.preventDefault();
		setFilteredPlants(null);
	}

	function searchPlants(e) {
		e.preventDefault();
		let search = e.target.querySelector('input').value;
		let filteredPlants = plants.data.filter((plant) => {
            if (plant.naam === search ) {
                return plant;
            } else {
                return null;
            }
        
        });

        filterPlants ? setFilteredPlants(filteredPlants) : faildHandler();
	}

    function faildHandler() {
        console.log('faild');
    }

	const usedPlants = filteredPlants ? filteredPlants : plants.data;
	// const resultAmount = usedPlants.length;
	return (
		<section className={styles.filter}>
				<form className={styles.filter__search} onSubmit={searchPlants}>
					<input
						type="text"
						placeholder="Zoek een stekje"
						className={styles['filter__search--input']}
					/>
					<button className={styles['filter--btn']}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.5 14H14.71L14.43 13.73C15.41 12.61 16 11.14 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.14 16 12.61 15.41 13.73 14.43L14 14.71V15.5L19.25 20.75L20.75 19.25L15.5 14V14ZM9.5 14C6.47 14 4 11.53 4 8.5C4 5.47 6.47 3 9.5 3C12.53 3 15 5.47 15 8.5C15 11.53 12.53 14 9.5 14Z"
								fill="#000"
							/>
						</svg>
					</button>
				</form>

				<section className={styles.filter__meta}>
					<Text
						modifier={'meta'}
						className={styles['filter__meta--delete']}
					>
						Verwijdert alle filters
					</Text>

					<aside className={styles['filter--index']}>
						<Text
							modifier={'meta'}
							className={styles['filter__meta--black']}
						>
							Filter ( <span>1</span> )
							{/* Filter ( <span>{filterAmount}</span> ) */}
						</Text>

						<button
							className={styles['filter--btn']}
							onClick={closeFilter}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18 6L6 18"
									stroke="#000"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>

								<path
									d="M6 6L18 18"
									stroke="#000"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</aside>
				</section>
		</section>
	);
};

export default PlantFilter;

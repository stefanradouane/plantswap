'use client';

import React, { useState } from 'react';
import styles from './overview.module.scss';
import PlantCard from '../PlantItem/PlantItem.js';
import Filter from '../Filter/Filter.js';

const Overview = (plants) => {
	const [filteredPlants, setFilteredPlants] = useState(null);

	function filterPlants(e) {
		e.preventDefault();
		let difficulty = e.target.querySelector('select').value;
		let filteredPlants = plants.data.filter(
			(plant) => plant.categories[0].naam === difficulty
		);

		setFilteredPlants(filteredPlants);
	}

	const usedPlants = filteredPlants ? filteredPlants : plants.data;
	const resultAmount = usedPlants.length;
	return (
		<section className={styles.overview}>

			<Filter plants={plants} />
			<section className={styles.overview__meta}>
				<p><span>{resultAmount}</span> Groene kandidaten</p>
				<aside className={styles['overview__meta-legenda']}>
					leganda
				</aside>
			</section>

				<section className={styles.overview__plants}>
					{usedPlants.map((plant) => (
								<PlantCard
									key={plant.id}
									slug={plant.slug}
									name={
										plant.naam.split("'")[1]
											? plant.naam.split("'")[1]
											: plant.naam
									}
									latin={
										plant.naam.split("'")[1]
											? plant.naam.split("'")[0]
											: plant.naam
									}
									difficulty={plant.onderhoud}
									poisend={plant.giftig}
									image={plant.fotos[0].url}
								/>
						  ))
					
					}
				</section>
		</section>
	);
};

export default Overview;

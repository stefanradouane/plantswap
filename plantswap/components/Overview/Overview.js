'use client';

import React, { useState, useEffect } from 'react';
import styles from './overview.module.scss';
import PlantCard from '../PlantItem/PlantItem.js';
import Filter from '../Filter/Filter.js';

const Overview = (plants) => {
	const [filteredPlants, setFilteredPlants] = useState(null);
	const [selectedFilters, setSelectedFilters] = useState({});
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		// Filter the plants based on the selected filters
		const filterResult = plants.data.filter((plant) => {
			return (
				Object.entries(selectedFilters).every(([subject, options]) => {
					// Check if the plant has at least one of the selected options
					return options.some((option) => plant[subject].includes(option));
				}) &&
				(searchQuery === '' ||
					plant.naam.toLowerCase().includes(searchQuery.toLowerCase()))
			);
		});

		setFilteredPlants(filterResult);
	}, [plants, selectedFilters, searchQuery]);
	
	const usedPlants = filteredPlants || plants.data ;
	
			

	return (
		<section className={styles.overview}>
			<Filter
				plants={usedPlants}
				setSelectedFilters={setSelectedFilters}
				setSearchQuery={setSearchQuery}
			/>

			<section className={styles.overview__meta}>
				<p>
					<span>{usedPlants.length}</span> Groene kandidaten
				</p>
				<aside className={styles['overview__meta-legenda']}>leganda</aside>
			</section>

			<section className={styles.overview__plants}>
				{usedPlants.length === 0 ? (
					<p>Geen planten gevonden</p>
				) : (
					usedPlants.map((plant) => (
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
				)}
			</section>
		</section>
	);
};

export default Overview;

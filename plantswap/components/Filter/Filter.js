'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './filter.module.scss';
import FilterWindow from './Window/FilterWindow';
import Image from 'next/image';

const PlantFilter = ({ plants, setSelectedFilters, setSearchQuery }) => {
	const [collapsed, setCollapsed] = useState(true);
	const [filterCount, setFilterCount] = useState(0); // State to track the number of filters
	const removeFilters = () => {
		setSelectedFilters({}); // Clear the selected filters
		setFilterCount(0); // Reset the filter count

		const checkboxes = document.querySelectorAll('input[type="checkbox"]');
		checkboxes.forEach((checkbox) => {
			checkbox.checked = false;
		});
	};

	useEffect(() => {
		// Update the filter count whenever the selected filters change
		const count = Object.keys(setSelectedFilters).reduce((total, key) => {
			return total + setSelectedFilters[key].length;
		}, 0);
		setFilterCount(count);
	}, [setSelectedFilters]);

	const filtertoggle = collapsed
		? '/images/icons/Close.svg'
		: '/images/icons/Arrow-down.svg';

	return (
		<section className={styles.filter}>
			<header className={styles.filter__header}>
				<form className={styles.filter__search}>
					<input
						type="text"
						placeholder="Zoek een stekje"
						className={styles['filter__search--input']}
						onChange={(e) => setSearchQuery(e.target.value)}
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
						{/* <Icon className={styles['filter__search--icon']} /> */}
					</button>
				</form>

				<section className={styles.filter__meta}>
					<button
						className={styles['filter--btn']}
						onClick={removeFilters}
					>
						{' '}
						Verwijder filters
					</button>

					<button
						className={styles['filter--btn']}
						onClick={() => {
							setCollapsed(!collapsed);
						}}
					>
						<span>
							Filter (<strong>{filterCount}</strong>)
						</span>

						<Image
							src={filtertoggle}
							alt="filter button icon"
							width={12}
							height={12}
						/>
					</button>
				</section>
			</header>

			<FilterWindow
				plants={plants}
				active={collapsed}
				setSelectedFilters={setSelectedFilters}
				setFilterCount={setFilterCount}
				collapsed={setCollapsed}
			/>
		</section>
	);
};

export default PlantFilter;

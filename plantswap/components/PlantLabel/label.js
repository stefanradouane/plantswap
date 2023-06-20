import React from 'react';

import styles from './label.module.scss';
import Image from 'next/image';
import Text from '../Text/Text';

const PlantLabel = ({type}) => {
	const { icon, alt, discription } = IdentifyLabel(type);

	function IdentifyLabel(label) {
		switch (label) {
			case 1:
				return {
					icon: '/images/logo.webp',
					alt: 'Zeer makkelijk',
					discription: 'Zeer makkelijk',
				};
			case 2:
				return {
					icon: '/images/logo.webp',
					alt: 'Makkelijk',
					discription: 'Makkelijk',
				};
			case 3:
				return {
					icon: '/images/logo.webp',
					alt: 'Normaal',
					discription: 'Normaal',
				};
			case 4:
				return {
					icon: '/images/logo.webp',
					alt: 'Uitdagend',
					discription: 'Uitdagend',
				};

			case 5:
				return {
					icon: '/images/logo.webp',
					alt: 'Moeilijk',
					discription: 'Moeilijk',
				};

			case 'giftig':
				return {
					icon: '/images/logo.webp',
					alt: 'Giftig',
					discription: 'Giftig',
				};

			default:
				return {
					icon: '',
					alt: 'oma',

					discription: 'opa',
				};
		}
	}

	return (
		<div className={styles.label}>
			<Image
				className={styles['label--icon']}
				src={icon}
				alt={alt}
				width={20}
				height={20}
			/> 

			<Text className={styles['label--text']} modifier={'x-small'}>
				{discription}
			 </Text>
		</div>
	);
};

export default PlantLabel;

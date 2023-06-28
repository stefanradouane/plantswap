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
					icon: '/images/vingers/Groene_Vingers-1.svg',
					alt: 'Zeer makkelijk , 1 groene vinger',
				};
			case 2:
				return {
					icon: '/images/vingers/Groene_Vingers-2.svg',
					alt: 'Makkelijk, 2 groene vingers',
				};
			case 3:
				return {
					icon: '/images/vingers/Groene_Vingers-3.svg',
					alt: 'Normaal, 3 groene vingers',
				};
			case 4:
				return {
					icon: '/images/vingers/Groene_Vingers-4.svg',
					alt: 'Uitdagend, 4 groene vingers',
				};

			case 5:
				return {
					icon: '/images/vingers/Groene_Vingers-5.svg',
					alt: 'Moeilijk, 5 groene vingers',
				};

			case 'giftig':
				return {
					icon: '/images/icons/skull.svg',
					alt: 'Giftig',
					discription: 'Giftig',
				};

			default:
				return {
					icon: '',
					alt: 'Groene vingers',
				};
		}
	}

	return (
		<div className={styles.label}>
			<Image
				className={styles['label--icon']}
				src={icon}
				alt={alt}
				width={16}
				height={16}
			/> 

			<Text className={styles['label--text']} >
				{ discription ? discription : "Groene vingers" }
			 </Text>
		</div>
	);
};

export default PlantLabel;

import Image from 'next/image';
import Link from 'next/link';
import Text from '../Text/Text';
import Title from '../Title/Title';
import PlantLabel from '../PlantLabel/Label';
import styles from './item.module.scss';

const PlantCard = ({ slug, name, latin, difficulty, poisend, image }) => {

	return (
		<Link href={`/plant/${slug}`} className={styles.plant}>
		<header className={styles.plant__header}> 
			{poisend ? ( <PlantLabel type={'giftig'} /> ) : ( "" )}
			<PlantLabel type={difficulty} />

		</header>

			<Image
				className={styles.plant__image}
				src={image}
				alt={name}
				width={200}
				height={200}
			/>
			<article className={styles.plant__info}>
				<Title title={'h3'} className={styles['plant__info--name']}>
					{name}
				</Title>

				<footer className={styles.plant__meta}>
					<Text modifier={'meta'} className={styles['plant__meta-latine']}>
						{latin}
					</Text>

					<aside className={styles['plant__meta--read']}>
						<Text
							modifier={'meta'}
							className={styles['plant__meta--black']}
						>
							Lees meer
						</Text>

						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
								fill="#4A4A4A"
							/>
							<path
								d="M12 6C10.346 6 9 7.346 9 9C9 10.654 10.346 12 12 12C13.654 12 15 10.654 15 9C15 7.346 13.654 6 12 6ZM12 10C11.447 10 11 9.552 11 9C11 8.448 11.447 8 12 8C12.553 8 13 8.448 13 9C13 9.552 12.553 10 12 10Z"
								fill="#4A4A4A"
							/>
						</svg>
					</aside>
				</footer>
			</article>
		</Link>
	);
};

export default PlantCard;

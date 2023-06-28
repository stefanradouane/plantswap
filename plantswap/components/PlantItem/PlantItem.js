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

						<Image
						className={styles['plant__meta--icon']}
							src="/images/icons/Arrow-right.svg"
							alt="arrow"
							width={18}
							height={18}
						/>
					</aside>
				</footer>
			</article>
		</Link>
	);
};

export default PlantCard;

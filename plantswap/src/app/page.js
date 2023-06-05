import styles from './page.module.scss';
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Text from '../../components/Text/Text';
import Cta from '../../components/Cta/Cta';
import Hero from '../../components/Hero/Hero';

// Maak het fancy :)
export default function Page() {
	return (
		<>
			<Header />
			<main className={styles.page}>
				<section className={styles.homepage__content}>
					<section>
						<Title title={'h1'} modifier={'capitalize'}>
							Welkom bij plantswap
						</Title>
						<article>
							<Text modifier={'bold'}>
								Ontdek Plant Swap - de webapplicatie die je buurt
								socialer maakt en je plantenkennis vergroot! Ruil,
								doneer en bekijk stekjes op ons platform. Kom naar de
								bibliotheek en word onderdeel van onze groeiende
								community. Laat je groene pareltjes floreren en maak
								nieuwe vrienden met dezelfde passie. Doe mee met Plant
								Swap en ontdek een wereld vol groene magie!{' '}
							</Text>
							<Cta href="/planten" role="primary">
								Ontdek onze groene vriendejs
							</Cta>
						</article>
						{/* <Cta href="/swap" role="primary">
							Swap een plant
						</Cta> */}
					</section>

					<Hero />
				</section>
			</main>
		</>
	);
}

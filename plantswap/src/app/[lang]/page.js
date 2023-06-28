import styles from './page.module.scss';
import Title from '@/../components/Title/Title';
import Header from '@/../components/Header/Header';
import Text from '@/../components/Text/Text';
import Cta from '@/../components/Cta/Cta';
import Hero from '@/../components/Hero/Hero';
import { getDictionary } from '@/../get-dictionary';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
// import { NextResponse } from "next/server";
import Overview from '@/../components/Overview/Overview';
import PlantData from '@/../components/Switcher/plantdata.json';

<<<<<<< HEAD
import Layout from "../../../components/Layout/Base";
import { getData } from "../../../utils/getFormData";

// Maak het fancy :)
export default async function Page({ params }) {
  // const router =;
  // console.log(NextResponse)
  // console.log(await getDictionary(params.lang));
  const dictionary = await getDictionary(params.lang);

  const data = await getData(params.lang);
  console.log(data);
  return (
    <Layout locale={params.lang} dictionary={dictionary}>
      <main className={styles.page}>
        <section className={styles.page__content}>
          <section>
            <Title title={"h1"} modifier={"gentle-appear"}>
              {dictionary.homepage.title}
            </Title>
            <article>
              <Text>{dictionary.homepage.intro}</Text>
              <Cta
                href={`/${params.lang}/planten`}
                role="secondary"
                locale={params.lang}>
                Ontdek onze groene vriendjes
              </Cta>
              <Cta
                href={`/${params.lang}/swap`}
                role="primary"
                locale={params.lang}>
                Swap een van jouw groene vriendjes
              </Cta>
            </article>
            {/* <Cta href="/swap" role="primary">
							Swap een plant
						</Cta> */}
          </section>
=======
import Layout from '../../../components/Layout/Base';

// Maak het fancy :)
export default async function Page({ params }) {
	let mobile = false;
	// const router =;
	// console.log(NextResponse)
	// console.log(await getDictionary(params.lang));
	const dictionary = await getDictionary(params.lang);
>>>>>>> ac8dfb57459497664140f159f39bcbfbdc2431a3

	return (
		<Layout locale={params.lang} dictionary={dictionary}>
			<main className={styles.page}>
				<section className={styles.page__hero}>
					<aside className={styles.page__content}>
						<Title title={'h0'} modifier={'gentle-appear'}>
							{dictionary.homepage.title}
						</Title>
						<article className={styles['page__content--intro']}>
							<Text>{dictionary.homepage.intro}</Text>
							<Cta
								href={`/${params.lang}/planten`}
								role="primary"
								locale={params.lang}
							>
								{dictionary.homepage.button}
							</Cta>
						</article>
					</aside>
					<Hero />
					<p className={styles['page--sideNote']}>
						{dictionary.homepage.sideNote} &#8594;
					</p>
				</section>
				{/* <section className={styles.page__overview}> */}
					<Title title={'h0'} modifier={'gentle-appear'} className={styles['page--subTitle']}>
						{dictionary.homepage.subTitle}
					</Title>
					<Overview data={PlantData.stekjes} />
				{/* </section> */}
			</main>
		</Layout>
	);
}

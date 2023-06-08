import styles from "./page.module.scss";
import Title from "@/../components/Title/Title";
import Header from "@/../components/Header/Header";
import Text from "@/../components/Text/Text";
import Cta from "@/../components/Cta/Cta";
import Hero from "@/../components/Hero/Hero";
import { getDictionary } from "@/../get-dictionary";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// import { NextResponse } from "next/server";

import Layout from "../../../components/Layout/Base";

// Maak het fancy :)
export default async function Page({ params }) {
  // const router =;
  // console.log(NextResponse)
  // console.log(await getDictionary(params.lang));
  const dictionary = await getDictionary(params.lang);
  return (
    <Layout locale={params.lang} dictionary={dictionary}>
      <main className={styles.page}>
        <section className={styles.page__content}>
          <section>
            <Title title={"h1"} modifier={"gentle-appear"}>
              {dictionary.homepage.title}
            </Title>
            <article>
              <Text modifier={"bold"}>{dictionary.homepage.intro}</Text>
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

          <Hero />
        </section>
      </main>
    </Layout>
  );
}

import DetailpageHeader from "../DetailpageHeader/DetailpageHeader";
import DetailpageArticle from "../DetailpageArticle/DetailpageArticle";

import Accordion from "../Accordion/Accordion";

import styles from "./detailpage.module.scss";
import WaterCount from "../WaterCount/WaterCount";
import Icon from "../Icon/Icon";

const Detailpage = ({ dictionary, plant, form }) => {
  const options = form
    .map((a) => a.formSection.map((b) => b.fields))
    .flat(2)
    .map((c) => (c.optionList !== null ? c : undefined))
    .filter((d) => d)
    .filter((e) => {
      if (
        e.name === "origin" ||
        e.name === "fertilizer" ||
        e.name === "poisonous"
      ) {
        return e;
      }
    });

  const fields = form.map((a) => a.formSection.map((b) => b.fields)).flat(2);

  return (
    <main className={styles.detailpage}>
      <DetailpageHeader plant={plant} />

      <section className={styles.detailpage__section}>
        {options.map((option, i) => {
          const content = option.optionList.optionName.find(
            (x) => x.key === plant[option.name]
          )?.name;

          const key = option.optionList.optionName.find(
            (x) => x.key === plant[option.name]
          )?.key;

          if (content) {
            return (
              <DetailpageArticle
                key={i}
                title={option.title}
                content={content}
                defaultValue={key}
                name={option.name}
              />
            );
          }
        })}
        {/* <DetailpageArticle
           title="Moeilijkheidsgraad"
           content={data.difficulty}
         />
         <DetailpageArticle title="Beschrijving" content={data.description} /> */}

        {Object.keys(plant).map((key, i) => {
          const bannedValues = [
            "origin",
            "fertilizer",
            "poisonous",
            "id",
            "plantName",
            "image",
            "latinName",
            "reserved",
            "registered",
          ];

          if (bannedValues.includes(key)) return;

          if (plant[key] !== null) {
            const field = fields.find((x) => {
              return x.name === key;
            });
            if (field) {
              if (field.name === "maintenance")
                return (
                  <Accordion
                    key={i}
                    title={field.title}
                    content={
                      <Icon iconName={`groene-vinger-${plant[key]}`} />
                    }></Accordion>
                );

              if (field.name === "waterFrequency")
                return (
                  <Accordion
                    key={i}
                    title={field.title}
                    content={<WaterCount count={plant[key]} />}></Accordion>
                );

              if (field.name === "waterInterval") {
                return (
                  <Accordion
                    key={i}
                    title={field.title}
                    content={
                      fields
                        .find((x) => x.name === "waterInterval")
                        .optionList.optionName.find(
                          (x) => x.key === plant.waterInterval
                        ).name
                    }></Accordion>
                );
              }

              return (
                <Accordion
                  key={i}
                  title={field.title}
                  content={plant[key]}></Accordion>
              );
            }
          }
        })}
      </section>
    </main>
  );
};

export default Detailpage;

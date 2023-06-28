import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import PlantCard from "../PlantCard/PlantCard";
import Text from "../Text/Text";
import Title from "../Title/Title";
import styles from "./SwapFlowCheck.module.scss";

const SwapFlowCheck = ({ data }) => {
  console.log(data);
  const {
    flowdata: { flowData },
    dictionary,
    locale,
  } = data;

  const usedDict = dictionary.swapcheck[flowData.swaptype];

  return (
    <section className={styles.swapflowcheck}>
      <Title title={"h2"} className={styles.swapflowcheck__title}>
        Ruil gegevens
      </Title>
      <Card
        plant={{
          ...flowData.plantforms,
          image: flowData.plant.url,
        }}
        data={data}
        usedDict={usedDict}
      />
      {flowData.swaptype === "swap" && (
        <>
          <div className={styles.swapflowcheck__icon}>
            <Icon iconName="switcher" rotate={90} />
          </div>
          <Card plant={flowData.chosenplant} data={data} usedDict={usedDict} />
        </>
      )}

      <InfoPart dictionary={dictionary} flowData={flowData} locale={locale} />

      <Button modifier={"inline"} noIcon={true}>
        {flowData.swaptype === "swap"
          ? "Toch liever doneren?"
          : "Toch liever de plant ruilen?"}
      </Button>
      <Button
        className={styles.swapflowcheck__send}
        rotateIcon={90}
        next={(e) => {
          const formData = new FormData();
          formData.append(
            "data",
            JSON.stringify({
              ...flowData.plantforms,
              image: flowData.plant.url,
            })
          );
          formData.append("swapType", flowData.swaptype);
          formData.append("swapId", flowData.chosenplant.id);
          formData.append("swapDate", flowData.userForms.date);
          formData.append("swapTime", flowData.userForms.time);
          formData.append("swapWith", flowData.userForms.fullName);
          formData.append("swapWithEmail", flowData.userForms.email);
          console.log(e);
          console.log(flowData);
          fetch("/api/plant", {
            method: "POST",
            body: formData,
          }).then((res) => {
            console.log(res.json());
          });
        }}>
        Ruil bevestigen
      </Button>
    </section>
  );
};

export default SwapFlowCheck;

const Card = ({ plant, data, usedDict }) => {
  return (
    <section className={styles.swapflowcheck__card}>
      <Title title={"h3"}>{usedDict.to}</Title>
      <Text modifier={"small"}>{usedDict.ours}</Text>
      <PlantCard data={data} plant={plant} />
    </section>
  );
};

const InfoPart = ({ dictionary, flowData, locale }) => {
  console.log(dictionary.swapcheck.data);
  const d = dictionary.swapcheck.data;

  return d.map((sect, i) => (
    <section key={i} className={styles.swapflowcheck__info}>
      <Title title={"h2"} className={styles["swapflowcheck__info-title"]}>
        {sect.title}
      </Title>
      {sect.fields.map((field, i) => (
        <section key={i} className={styles["swapflowcheck__info-part"]}>
          <Title title={"h3"}>{field.title}</Title>
          {field.prop === "date" ? (
            <Text>
              {new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
                new Date(flowData.userForms[field.prop])
              )}
            </Text>
          ) : (
            <Text modifier={"small"}>{flowData.userForms[field.prop]}</Text>
          )}
        </section>
      ))}
    </section>
  ));

  return (
    <section>
      <Title title={"h2"}>Test</Title>
      <Text>Value</Text>
    </section>
  );
};

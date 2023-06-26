import * as Yup from "yup";
import Title from "../Title/Title";
import Text from "../Text/Text";
import { Field, useField, useFormikContext } from "formik";
import { useEffect, useRef, useState } from "react";
import dateLimit from "../../utils/date";
import ContinentIcon from "../ContinentIcon/ContinentIcon";
import Icon from "../Icon/Icon";
import WaterCount from "../WaterCount/WaterCount";
import Button from "../Button/Button";

import styles from "./Form.module.scss";
import SeasonIcon from "../SeasonIcon/SeasonIcon";

export const FormPart = ({
  field,
  props,
  title,
  step,
  children,
  setCurrentStep,
  currentStep,
}) => {
  const detail = useRef(null);
  const h = children ? "h2" : "h3";
  // console.log(currentStep);
  return (
    <details
      ref={detail}
      className={styles.form__part}
      open={currentStep == step}>
      <summary
        className={styles["form__part-title"]}
        onClick={(e) => {
          e.preventDefault();
          if (setCurrentStep) {
            setCurrentStep((prev) => {
              // console.log(prev, step);
              if (prev === step) {
                // detail.current.removeAttribute("open");
                return 0;
              }
              return step;
            });
          }
        }}>
        <Title title={h}>
          {step && <span>{step}.</span>} {title}
        </Title>
      </summary>

      <section className={styles["form__part-disclosure"]}>{children}</section>
    </details>
  );
};

export const FormPartType = ({ field, props }) => {
  if (
    field.type === "disclosure" ||
    field.type === "quantity" ||
    field.type === "options"
  ) {
    return <FieldSetPart title={field.title} field={field} props={props} />;
  } else return <FieldPart field={field} props={props} />;
};

export const FieldSetPart = ({ field, props }) => {
  const { touched, errors, values } = props;
  // console.log(errors);
  // console.log(touched);
  // console.log(!!values[field.name] && !!field.disclosure);
  const additonalField = field?.name == "waterInterval" ? true : false;
  return (
    <fieldset className={styles.form__part}>
      <legend htmlFor={field.name} className={styles["form__part-title"]}>
        <Title title={"h3"}>{field.title}</Title>
      </legend>
      <Text modifier={"x-small"} className={styles["form__part-description"]}>
        {field.description}
      </Text>

      <Control field={field} props={props} />
      {field.name === "onderhoud" && (
        <section className={styles["form__part-hints"]}>
          <Text modifier={["x-small", "grey"]}>🍎'tje 🥚'tje</Text>

          <Text modifier={["x-small", "grey"]}>🥵 Heel moeilijk</Text>
        </section>
      )}

      {touched[field.name] && errors[field.name] && (
        <Text>{errors[field.name]}</Text>
      )}

      {!!values[field.name] &&
        values[field.name] !== "idk" &&
        !field.additionalInfo &&
        !!field.disclosure && (
          <FieldPart field={field.disclosure} props={props} />
        )}

      {field.additionalInfo && (
        <section style={{ color: "red" }}>
          <label htmlFor={field.name + "Checkbox"}>
            <Field
              type={"checkbox"}
              name={field.name + "Checkbox"}
              title={field.title}
              id={field.name + "Checkbox"}
              placeholder={field.placeholder}
            />
            <span>
              <Icon
                iconName={
                  props.values[field.name + "Checkbox"] === true
                    ? "minus"
                    : "plus"
                }
              />
              {props.values[field.name + "Checkbox"] === true
                ? "Opmerking verwijderen"
                : "Opmerking toevoegen"}
            </span>
          </label>

          {props.values[field.name + "Checkbox"] === true &&
            !!field.disclosure && (
              <FieldPart field={field.disclosure} props={props} />
            )}
        </section>
      )}
    </fieldset>
  );
};

export const FieldPart = ({ field, props }) => {
  const { touched, errors, values } = props;
  return (
    <section className={styles.form__part}>
      <label htmlFor={field.name} className={styles["form__part-title"]}>
        <Title title={"h3"}>{field.title}</Title>
      </label>
      <Text modifier={"x-small"} className={styles["form__part-description"]}>
        {field.description}
      </Text>

      <Control field={field} props={props} />

      {touched[field.name] && errors[field.name] && (
        <Text>{errors[field.name]}</Text>
      )}
    </section>
  );
};

export const DisplayingErrorMessagesSchema = (form, currentForm) => {
  const arr = currentForm.map((x) => x.fields).flat(1);
  const ls = {};

  arr.forEach((x) => {
    // console.log(x);
    // ls[x.name] = x.errorMessage;

    // if(x.required) {
    //   ls[x.name] = Yup.string().required(x.errorMessage);
    // }

    if (x.type === "text") {
      ls[x.name] = x.required
        ? Yup.string().required(x.errorMessage)
        : Yup.string();
    }

    if (x.type === "quantity") {
      ls[x.name] = x.required
        ? Yup.number()
            .required(x.errorMessage)
            .min(1, x.errorMessage)
            .max(5, x.errorMessage)
        : Yup.number();
    }

    if (x.type === "options") {
      ls[x.name] = x.required
        ? Yup.string().required(x.errorMessage)
        : Yup.string();
    }

    if (!!x.disclosure) {
      // console.log(x);
      ls[x.disclosure.name] = x.disclosure.required
        ? Yup.string().required(x.disclosure.errorMessage)
        : Yup.string();
    }

    if (x.additionalInfo) {
      ls[x.name + "Checkbox"] = Yup.boolean();

      if (!!x.disclosure) {
        ls[x.disclosure.name] = Yup.string().when(
          x.name + "Checkbox",
          (checkbox) => {
            if (checkbox[0] === true)
              return Yup.string().required("Veld is verplicht");
          }
        );
      }
    }
  });
  console.log(ls);
  return Yup.object().shape(ls);

  // if (form === "user") {
  //   return Yup.object().shape({
  //     fullName: Yup.string().required("Veld is verplicht"),
  //     email: Yup.string()
  //       .email("Vul een geldig email adres in")
  //       .required("Veld is verplicht"),
  //     time: Yup.string().required("Veld is verplicht"),
  //     date: Yup.date()
  //       .min(
  //         (() => {
  //           let date = new Date();
  //           date.setDate(date.getDate() - 1);
  //           return date;
  //         })(),
  //         "Deze datum is al geweest"
  //       )
  //       .max(
  //         (() => {
  //           let date = new Date();
  //           date.setDate(date.getDate() + 14);
  //           return date;
  //         })(),
  //         "Plan een datum binnen 2 weken"
  //       )
  //       .required("Veld is verplicht"),
  //   });
  // } else {
  //   return Yup.object().shape({
  //     plantName: Yup.string().required("Veld is verplicht"),
  //     latinName: Yup.string().required("Veld is verplicht"),
  //     origin: Yup.string().required("Selecteer een continent in"),
  //     voeding: Yup.string().required("Selecteer een seizoen"),
  //     voedingDisclosure: Yup.string().required("Vul een waarde in"),
  //     onderhoud: Yup.string().required("Selecteer aantal groene vingers"),
  //     // waterInterval: Yup.string().required("Selecteer een interval in"),
  //     waterFrequence: Yup.number()
  //       .min(1, "Vul een getal in tussen de 1 en 5")
  //       .max(5, "Vul een getal in tussen de 1 en 5"),
  //     waterFrequenceCheckbox: Yup.boolean(),
  //     waterFrequenceAdditional: Yup.string(),

  //     giftigAddon: Yup.string().when("giftigCheckbox", (giftigCheckbox) => {
  //       if (giftigCheckbox[0] === true)
  //         return Yup.string().required("Veld is verplicht");
  //     }),
  //   });
  // }
};

const existingFormData = (flowData, key) => {
  const { plantinfo, myplant } = flowData;

  // console.log(plantinfo, myplant, key);

  if (plantinfo[key]) {
    return plantinfo[key];
  }

  if (flowData.myplant?.species) {
    if (key === "plantName") {
      return flowData.myplant?.species?.commonNames[0]
        ? flowData.myplant?.species?.commonNames[0]
        : "";
    } else if (key === "latinName") {
      return flowData.myplant?.species?.scientificNameWithoutAuthor;
    }
  }

  if (key.includes("Checkbox")) {
    return false;
  }

  if (key == "waterFrequence") {
    return 1;
  }

  return "";
};

export const initialFormValues = (flowData, form, currentForm) => {
  const arr = currentForm.map((x) => x.fields).flat(1);
  let ls = {};
  arr.forEach((x) => {
    ls[x.name] = existingFormData(flowData, x.name);
    if (x.additionalInfo) {
      ls[`${x.name}Checkbox`] = existingFormData(flowData, `${x.name}Checkbox`);
      // ls[`${x.name}Additional`] = existingFormData(
      //   flowData,
      //   `${x.name}Additional`
      // );
    }

    if (!!x.disclosure) {
      ls[x.disclosure.name] = existingFormData(flowData, x.disclosure.name);
    }
  });

  console.log(ls);

  return ls;
};

export const Control = ({ field, props }) => {
  if (field.type == "disclosure" && field.disclosure)
    return <Disclosure field={field} props={props} />;

  if (field.type == "options") return <Options field={field} props={props} />;

  if (field.type == "quantity") return <Quantity field={field} props={props} />;

  return <FieldControl field={field} props={props} />;
};

export const Options = ({ field, props }) => {
  const [checked, setChecked] = useState(true);
  const layout =
    field.name === "origin"
      ? "column"
      : field.name === "voeding"
      ? "grid"
      : "row";
  return (
    <section
      className={
        styles.form__list +
        " " +
        styles[`form__list--${field.optionList.listOrientation}`]
      }>
      {field.optionList.optionName.map((option, index) => (
        <label
          onClick={(e) => {
            props.setTouched({
              ...props.touched,
              [field.name]: true,
            });
            if (e.target.value === props.values[field.name]) {
              props.setValues({
                ...props.values,
                [field.name]: "",
              });
            }
          }}
          key={index}
          htmlFor={field.name + index}
          className={styles["form__list-option"]}>
          {field.name === "origin" ? (
            <ContinentIcon iconName={option.key} />
          ) : field.name === "onderhoud" ? (
            <Icon iconName={`groene-vinger-${option.key}`} />
          ) : field.name === "voeding" ? (
            <span>
              {
                {
                  spring: "🌱",
                  summer: "☀️",
                  autumn: "🍂",
                  winter: "❄️",
                }[option.key]
              }
            </span>
          ) : (
            <></>
          )}

          {option.name && (
            <span className={styles[`form__list-hint`]}>{option.name}</span>
          )}

          <Field
            // onChange={(e) => {
            //   console.log(props);
            //   // e.target.checked = true;
            // }}
            className={
              styles["form__list-option-field"] +
              " " +
              styles[`form__list-option-field--${layout}`]
            }
            title={field.description}
            type={"radio"}
            name={field.name}
            id={field.name + index}
            value={option.key ? option.key : option}
          />
        </label>
      ))}
    </section>
  );
};

export const Disclosure = ({ field, props }) => {
  return (
    <>
      <label htmlFor={field.name}>
        <Field
          type={"checkbox"}
          name={field.name}
          title={field.title}
          id={field.name}
          placeholder={field.placeholder}
        />
        <span>Ja, deze plant is giftig.</span>
      </label>

      {props.values.giftigCheckbox === true && (
        <FieldPart field={field.disclosure} props={props} />
      )}
    </>
  );
};

export const Quantity = ({ field, props, initialValue }) => {
  const [count, setCount] = useState(1);

  return (
    <section className={styles.form__quantity}>
      <Button
        disabled={count === 0}
        noIcon={true}
        modifier={"rounded"}
        next={(e) => {
          setCount(count - 1);
          props.setTouched({
            ...props.touched,
            [field.name]: true,
          });
        }}>
        <Icon iconName={"minus"} />
      </Button>

      {field.quantityType === "water" && <WaterCount count={count} />}

      <QuantityField
        data-type={field.quantityType}
        className={styles["form__quantity-input"]}
        count={count}
        id={field.name}
        name={field.name}
        placeholder="3"
        min={1}
        max={5}
        type="number"
      />

      <Button
        disabled={count === 5}
        noIcon={true}
        modifier={"rounded"}
        next={(e) => {
          setCount(count + 1);
          props.setTouched({
            ...props.touched,
            [field.name]: true,
          });
        }}>
        <Icon iconName={"plus"} />
      </Button>
    </section>
  );
};

export const QuantityField = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  useEffect(() => {
    setFieldValue(props.name, props.count);
  }, [props.count]);

  return <input {...props} {...field} />;
};

export const FieldControl = ({ field, props }) => {
  // console.log(props.initialValues);
  const [readOnly, setReadOnly] = useState(!!props.initialValues[field.name]);
  return (
    <>
      <Field
        readOnly={readOnly}
        className={styles.form__control}
        min={field.type == "date" ? dateLimit.min() : null}
        max={field.type == "date" ? dateLimit.max(14) : null}
        type={field.type}
        name={field.name}
        title={field.description}
        id={field.name}
        placeholder={field.placeholder}
      />
      {readOnly && (
        <Button
          modifier={"small"}
          noIcon={true}
          next={(e) => {
            setReadOnly(false);
            props.setTouched({
              ...props.touched,
              [field.name]: true,
            });
          }}>
          <Icon iconName={"pencil"} />
          Veld aanpassen
        </Button>
      )}
    </>
  );
};

export const FormIndicator = ({ step }) => {
  const container = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // const callBackFunction = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // };

  // const options = {
  //   root: null,
  //   rootMargin: "-100px",
  //   threshold: 0.5,
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callBackFunction, options);
  //   if (container.current) observer.observe(container.current);

  //   return () => {
  //     if (container.current) observer.unobserve(container.current);
  //   };
  // }, [container, options]);

  return (
    <div
      ref={container}
      data-visible={isVisible}
      className={styles.form__indicator}
      data-step={step}></div>
  );
};

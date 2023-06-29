import Text from "../Text/Text";
import styles from "../Forms/form.module.scss";
import Title from "../Title/Title";
import React from "react";
import ContinentIcon from "../ContinentIcon/ContinentIcon";
import Icon from "../Icon/Icon";
import { Field } from "formik";
import { FieldPart } from "./FormField";

/**
 * Used to create the base of the form field.
 * @param {{ baseType: "section" | "fieldset", children }} props
 * @returns {JSX.Element} Label of for the form field
 */
export const FieldBase = ({ baseType, children }) =>
  React.createElement(baseType, { className: styles.form__part }, children);

/**
 * Used to create a label for a form field.
 * @param {{ title: string , labelType: "label" | "legend" }} props
 * @returns {JSX.Element} Label of for the form field
 */
export const FieldLabel = ({ name, title, labelType }) =>
  React.createElement(
    labelType,
    { className: styles["form__part-title"], htmlFor: name },
    <Title title={"h3"}>{title}</Title>
  );

export const FieldDescription = ({ field }) => (
  <Text modifier={"x-small"} className={styles["form__part-description"]}>
    {field.description}
  </Text>
);

/**
 * Show error message if a field is touched and has an error.
 * @param {{ touched: boolean, error: string }} props
 * @returns {JSX.Element} Error message
 */
export const ErrorMessage = ({ touched, error }) =>
  touched &&
  error && <Text className={styles.field__errormessage}>{error}</Text>;

/**
 * Used to create a hint under a form field.
 * Field must have a hint property defined in the form schema
 * and can only be used under row (onderhoud).
 * @param {{ hintLow: string, hintHigh:string }} props
 * @returns {JSX.Element} Hints
 */
export const Hints = ({ hintLow, hintHigh }) => (
  <section className={styles["form__part-hints"]}>
    <Text modifier={["x-small", "grey"]}>🍎'tje 🥚'tje</Text>

    <Text modifier={["x-small", "grey"]}>🥵 Heel moeilijk</Text>
  </section>
);

/**
 * Used to create a response to a form field if a option is selected.
 * Option can't be a banned value.
 * Field must have a disclosure property defined in the form schema,
 * additionalInfo must be false.
 * @param {{ field: object, props: object, values: object }} props
 * @returns {JSX.Element} Response field
 */

export const FieldResponse = ({ field, props, values }) => {
  const bannedValues = ["idk"]; // FIXME: add property to form schema

  if (
    !!values[field.name] &&
    !bannedValues.includes(values[field.name]) &&
    !field.additionalInfo &&
    !!field.disclosure
  )
    return <FieldPart field={field.disclosure} props={props} />;
};

export const FieldAdditional = ({ field, props }) => {
  if (field.additionalInfo && !!field.disclosure) {
    const active = props.values[field.name + "Checkbox"] === true;

    return (
      <section className={styles.form__additional} style={{ color: "black" }}>
        <label
          htmlFor={field.name + "Checkbox"}
          className={styles["form__additional-control"]}>
          <Field
            type={"checkbox"}
            name={field.name + "Checkbox"}
            title={field.title}
            id={field.name + "Checkbox"}
            placeholder={field.placeholder}
          />
          <span className={styles["form__additional-label"]}>
            <Icon modifier={"small"} iconName={active ? "minus" : "plus"} />
            {active
              ? field.disclosure.title + " verwijderen"
              : field.disclosure.title + " toevoegen"}
          </span>
        </label>

        {active && !!field.disclosure && (
          <FieldPart field={field.disclosure} props={props} />
        )}
      </section>
    );
  }
};

export const OptionIcon = ({ field, option }) => {
  if (field.name === "origin") return <ContinentIcon iconName={option.key} />;
  if (field.name === "maintenance")
    return <Icon iconName={`groene-vinger-${option.key}`} />;
  if (field.name === "fertilizer")
    return (
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
    );
  else return <></>;
};

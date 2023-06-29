import { Field, useField, useFormikContext } from "formik";
import styles from "../Forms/Form.module.scss";
import { OptionIcon } from "./utils";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import WaterCount from "../WaterCount/WaterCount";

export const Options = ({ field, props }) => {
  const classNames =
    styles.form__list +
    " " +
    styles[`form__list--${field.optionList.listOrientation}`];
  return (
    <section className={classNames}>
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
          <OptionIcon field={field} option={option} />
          <span className={styles[`form__list-hint`]}>{option.name}</span>
          <Field
            className={
              styles["form__list-option-field"] +
              " " +
              styles[
                `form__list-option-field--${field.optionList.listOrientation}`
              ]
            }
            title={field.description}
            type={"radio"}
            name={field.name}
            id={field.name + index}
            value={option.key}
          />
        </label>
      ))}
    </section>
  );
};

export const SimpleField = ({ field, props }) => {
  const [readOnly, setReadOnly] = useState(
    props.initialValues[field.name] === props.values[field.name] &&
      !!props.initialValues[field.name]
  );
  return (
    <>
      <Field
        readOnly={readOnly}
        className={styles.form__control}
        min={
          field.type == "date" ? new Date().toISOString().split("T")[0] : null
        }
        max={
          field.type == "date"
            ? (() => {
                let d = new Date();
                d.setDate(d.getDate() + 14);
                return d.toISOString().split("T")[0];
              })()
            : null
        }
        type={field.type}
        name={field.name}
        title={field.description}
        id={field.name}
        placeholder={field.placeholder}
      />
      {readOnly && (
        <Button
          modifier={["small", "inline", "left-1"]}
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

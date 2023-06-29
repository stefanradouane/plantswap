import styles from "../Forms/Form.module.scss";
import { Options, Quantity, SimpleField } from "./FormFieldTypes";
import {
  ErrorMessage,
  FieldAdditional,
  FieldBase,
  FieldDescription,
  FieldLabel,
  FieldResponse,
  Hints,
} from "./utils";

export const FieldPartType = ({ field, props }) => {
  if (field.type === "quantity" || field.type === "options") {
    return (
      <FieldPart
        title={field.title}
        field={field}
        props={props}
        optOrQuant={true}
      />
    );
  } else
    return (
      <FieldPart
        title={field.title}
        field={field}
        props={props}
        optOrQuant={false}
      />
    );
};

export const FieldPart = ({ field, props, optOrQuant }) => {
  const base = optOrQuant ? "fieldset" : "section";
  const lab = optOrQuant ? "legend" : "label";
  const { touched, errors, values } = props;

  return (
    <FieldBase baseType={base}>
      <FieldLabel title={field.title} name={field.name} labelType={lab} />
      <FieldDescription field={field} />
      <FieldControl field={field} props={props} />
      {field.name === "maintenance" && <Hints styles={styles} />} {/* FIXMEE */}
      <ErrorMessage
        touched={props.touched[field.name]}
        error={props.errors[field.name]}
      />
      <FieldResponse field={field} props={props} values={values} />
      <FieldAdditional field={field} props={props} />
    </FieldBase>
  );
};

const FieldControl = ({ field, props }) => {
  if (field.type == "options") return <Options field={field} props={props} />;

  if (field.type == "quantity") return <Quantity field={field} props={props} />;

  return <SimpleField field={field} props={props} />;
};

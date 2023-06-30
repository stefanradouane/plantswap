"use client";

import styles from "./form.module.scss";
import Button from "../Button/Button";
import { Formik, Form } from "formik";
import { DisplayingErrorMessagesSchema, initialFormValues } from "./utils";
import FormTip from "../FormTip/FormTip";
import { useState } from "react";
import FormPart from "./FormPart";
import { FormIndicator } from "./FormIndicator";
import { FieldPartType } from "../FormField/FormField";

const SwapForm = ({ data, form, formData }) => {
  const { flowData, setFlowData } = data.flowdata;

  const currentForm = formData[form].map((form) => form.formSection[0]);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Formik
      initialValues={initialFormValues(flowData, form, currentForm)}
      validationSchema={DisplayingErrorMessagesSchema(form, currentForm)}
      onSubmit={(values) => {
        setFlowData((prev) => {
          return {
            ...prev,
            [form]: values,
            step: prev.step + 1,
          };
        });
      }}>
      {(props) => {
        return (
          <Form className={styles.form}>
            <FormTip description={data.dictionary[form].tip_description} />

            {currentForm.map((step, i) => {
              return (
                <FormPart
                  step={i + 1}
                  title={step.title}
                  key={i}
                  props={props}
                  setCurrentStep={setCurrentStep}
                  currentStep={currentStep}>
                  <FormIndicator step={i + 1} currentStep={currentStep} />

                  {step.fields.map((field, i) => {
                    return (
                      <FieldPartType key={i} field={field} props={props} />
                    );
                  })}
                </FormPart>
              );
            })}

            <Button
              rotateIcon={90}
              type={"submit"}
              disabled={!props.isValid}
              className={styles.form__button}>
              {flowData.step === 5 ? "Gegevens controleren" : "Volgende stap"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SwapForm;

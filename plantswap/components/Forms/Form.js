"use client";

import styles from "./Form.module.scss";
import Button from "../Button/Button";
import { Formik, Form } from "formik";
import {
  FormPartType,
  DisplayingErrorMessagesSchema,
  initialFormValues,
  FormPart,
  FormIndicator,
} from "./utils";
import formdata from "./formdata.json";
import FormTip from "../FormTip/FormTip";
import { useState } from "react";

const SwapForm = ({ data, form, formData }) => {
  const { flowData, setFlowData } = data.flowdata;
  console.log(formData);
  const currentForm = formData[form].map((form) => form.formSection[0]); // change json file to headless CMS (strapi/hygraph)

  const [currentStep, setCurrentStep] = useState(3);
  // console.log(formData["plantforms"].map((form) => form.formSection[0]));
  // console.log(=== currentStep);
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
                    return <FormPartType key={i} field={field} props={props} />;
                  })}
                </FormPart>
              );
            })}

            <Button
              type={"submit"}
              disabled={!props.isValid}
              children={
                flowData.step === 5 ? "Gegevens controleren" : "Volgende stap"
              }
              className={styles.form__submit}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SwapForm;

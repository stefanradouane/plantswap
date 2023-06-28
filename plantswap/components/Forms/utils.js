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
import { ErrorMessage, Hints } from "../FormField/utils";

export const existingFormData = (flowData, form, key) => {
  const usedKey = flowData[form] ? flowData[form][key] : undefined;
  if (usedKey) {
    return flowData[form][key];
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

// Add email
export const DisplayingErrorMessagesSchema = (form, currentForm) => {
  const arr = currentForm.map((x) => x.fields).flat(1);
  const ls = {};

  arr.forEach((x) => {
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
      ls[x.disclosure.name] =
        x.disclosure.required && x.required
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

    // Change me to a better solution. This is a quick fix
    if (x.name === "poisonous") {
      ls["poisonousFor"] = Yup.string().when(x.name, (poisonous) => {
        if (poisonous[0] === "yes") {
          return Yup.string().required("Veld is verplicht");
        }
      });
    }
  });
  return Yup.object().shape(ls);
};

export const initialFormValues = (flowData, form, currentForm) => {
  const arr = currentForm.map((x) => x.fields).flat(1);
  let ls = {};
  arr.forEach((x) => {
    ls[x.name] = existingFormData(flowData, form, x.name);
    if (x.additionalInfo) {
      ls[`${x.name}Checkbox`] = existingFormData(
        flowData,
        form,
        `${x.name}Checkbox`
      );
    }

    if (!!x.disclosure) {
      ls[x.disclosure.name] = existingFormData(
        flowData,
        form,
        x.disclosure.name
      );
    }
  });

  // console.log(ls);

  return ls;
};

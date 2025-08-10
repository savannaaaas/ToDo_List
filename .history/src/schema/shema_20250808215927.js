import * as yup from "yup";
export const schema = yup.object().shape({
  task: yup
    .string()
    .trim()
    .min(1, "The task must be more than 1 character long.")
    .required("This field is required")
    .test(`^\S+$`),
});

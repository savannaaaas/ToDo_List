import * as yup from "yup";
export const schema = yup.object().shape({
  task: yup
    .string()
    .min(1, "The task must be more than 1 character long.")
    .required(),
});

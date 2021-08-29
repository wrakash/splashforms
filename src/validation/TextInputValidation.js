import * as yup from 'yup';
export const schemaValidation = yup.object().shape({
    vistorName: yup.string().required(),
    vistorPhone: yup.number().required().positive().integer(),
    vistorGovId: yup.string().required(),
  });
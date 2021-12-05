import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    address: [Validators.required],
    city: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);

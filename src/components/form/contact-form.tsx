import React from 'react';
import { Field, Formik, Form, FormikProps, FieldProps } from 'formik';
import Button from '@material-ui/core/Button';

import InputField from '@components/elements/input-field';
import { inputInterface } from '@utils/types';
import useStyles from '@styles/sections/contact';

interface ContactFormProps {
  fieldList: inputInterface[];
  showConfirmButton: boolean;
  cancelConfirm: () => void;
  validate: any;
  initialValues: any;
  onSubmit: any;
}
const contactForm: React.FC<ContactFormProps> = ({
  fieldList,
  showConfirmButton,
  cancelConfirm,
  validate,
  initialValues,
  onSubmit,
}) => {
  const classes = useStyles();
  const renderButton = () => {
    if (showConfirmButton) {
      return (
        <div className={classes.buttonGroup}>
          <Button
            classes={{ root: classes.buttonRoot }}
            variant="outlined"
            color="primary"
            onClick={cancelConfirm}
          >
            確認
          </Button>
          <Button
            classes={{ root: classes.buttonRoot }}
            variant="contained"
            color="primary"
            type="submit"
          >
            確認
          </Button>
        </div>
      );
    }

    return (
      <Button
        classes={{ root: classes.buttonRoot }}
        variant="contained"
        color="primary"
        type="submit"
      >
        確認
      </Button>
    );
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnMount validate={validate}>
      {({ status }: FormikProps<any>) => (
        <Form>
          {fieldList.map((fieldInput) => (
            <Field key={fieldInput.id} name={fieldInput.name}>
              {({ field, meta }: FieldProps) => (
                <InputField fieldInput={fieldInput} field={field} meta={meta} />
              )}
            </Field>
          ))}
          {status === 'success' ? (
            <div className={classes.submitSuccess}>
              <img src="/success.png" alt="success" />
              <div> 送信しました </div>
            </div>
          ) : (
            <div className={classes.buttonContainer}>{renderButton()}</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default contactForm;

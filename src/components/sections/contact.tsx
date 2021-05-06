import React, { useState } from 'react';
import axios from 'axios';

import Image from '@components/elements/image';
import ContactForm from '@components/form/contact-form';
import { backgroundColorInterface, mediaInterface, textColorInterface } from 'utils/types';
import { getBackground } from 'utils/background';
import { getTextColor } from 'utils/color';
import useStyles from '@styles/sections/contact';
import { inputInterface } from '@utils/types';
import _ from 'lodash';

interface ContactProps {
  data: {
    title: string;
    image: mediaInterface;
    fieldList: inputInterface[];
    backgroundColor: backgroundColorInterface;
    textColor: textColorInterface;
  };
}

const ContactSection: React.FC<ContactProps> = ({ data }: ContactProps) => {
  const { title, image, fieldList = [] } = data;
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const classes = useStyles({
    ...getBackground(data.backgroundColor),
    ...getTextColor(data.textColor),
  });

  const createValidate = (value: any) => {
    const errors: any = {};
    fieldList.map(({ name, required, validateRegex }) => {
      const newRegExp = validateRegex ? new RegExp(validateRegex) : undefined;

      if (required && !_.get(value, name, '')) {
        errors[name] = 'Required';
      }
      if (newRegExp !== undefined && !newRegExp.test(_.get(value, name, ''))) {
        errors[name] = 'Incorrect';
      }
    });
    return errors;
  };

  const initialValues: any = {};
  fieldList.map((field) => {
    initialValues[field.name] = '';
  });

  const handleSubmit = (values: any, formikBag: any) => {
    if (showConfirmButton) {
      axios.post(process.env.INQUIRY_API_ENDPOINT as string, values).then((response) => {
        if (response.data.result) {
          formikBag.setStatus('success');
        }
      });
    } else setShowConfirmButton(true);
  };

  return (
    <div className={classes.contactSection}>
      <div className={classes.contactImage}>
        <Image media={image} />
      </div>
      <div className={classes.contactForm}>
        <div className={classes.formTitle}>{title}</div>
        <ContactForm
          fieldList={fieldList}
          validate={createValidate}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          showConfirmButton={showConfirmButton}
          cancelConfirm={() => setShowConfirmButton(false)}
        />
      </div>
    </div>
  );
};

export default ContactSection;

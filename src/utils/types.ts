export interface linkInterface {
  id: string | number;
  url: string;
  text: string;
  newTab?: boolean;
}

export interface mediaInterface {
  id: string | number;
  alternativeText?: string;
  mime: string;
  url: string;
}

export interface menuInterface {
  links: linkInterface[];
}

export interface backgroundColorInterface {
  backgroundColor: {
    backgroundType: string;
    rgba?: string;
    linear?: string;
  };
}

export interface textColorInterface {
  textColor: {
    hex?: string;
  };
}

export interface imageInterface {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface metadataInterface {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: {
    formats: {
      [key: string]: imageInterface;
    };
  };
  twitterCardType?: string;
  twitterUsername?: string;
}

export interface styleInterface {
  backgroundColor?: string | undefined;
  mobileBackgroundColor?: string | undefined;
  backgroundImage?: string | undefined;
  mobileBackgroundImage?: string | undefined;
  color?: string | undefined;
}

export interface inputInterface {
  id: string | number;
  inputType: string;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  min: number;
  max: number;
  selectFieldOptions: {
    options: {
      value: string;
      label: string;
    }[];
  };
  validateRegex: string;
}

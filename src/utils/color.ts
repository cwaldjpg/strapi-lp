import { textColorInterface } from './types';

type GetTextColorReturn = { color: string | undefined } | undefined;

export function getTextColor(textColorObj: textColorInterface): GetTextColorReturn {
  if (textColorObj == null) {
    return { color: `rgb(38, 38, 38)` };
  }

  const { textColor } = textColorObj;
  return { color: `${textColor.hex}` };
}

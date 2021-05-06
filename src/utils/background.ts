import { backgroundColorInterface } from './types';

type GetBackgroundReturn =
  | { backgroundColor?: string | undefined }
  | { backgroundImage?: string | undefined }
  | undefined;

export function getBackground(background: backgroundColorInterface): GetBackgroundReturn {
  if (background == null) {
    return undefined;
  }

  const { backgroundColor } = background;
  const backgroundType = backgroundColor.backgroundType;

  if (backgroundType && backgroundType === 'color') {
    return { backgroundColor: backgroundColor.rgba };
  }

  if (backgroundType && backgroundType === 'linear') {
    return { backgroundImage: backgroundColor.linear };
  }
  return undefined;
}

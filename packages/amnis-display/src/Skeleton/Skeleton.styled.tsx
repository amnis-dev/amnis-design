import styled, { CSSObject } from '@amnis/style/styled';
import type { SkeletonProps } from './Skeleton.types';

export const SkeletonStyled = styled<HTMLDivElement>('div')<Partial<SkeletonProps>>(({
  theme,
  variant = 'text',
}) => {
  const {
    mode,
    timings,
    shapes,
  } = theme;

  const baseColor = mode === 'light' ? '#cccccc' : '#777777';
  const shineColor = mode === 'light' ? '#e8e8e8' : '#989898';

  /**
   * Base styling.
   */
  let style: CSSObject = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    backgroundColor: baseColor,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    animation: `amnis-skeletonPulse 1.2s ${timings.easeInOut} infinite`,
    color: 'transparent',
    boxSizing: 'border-box',

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      background: `linear-gradient(90deg, transparent 25%, ${shineColor} 50%, transparent 75%) no-repeat fixed`,
      backgroundSize: 450,
      animation: 'amnis-skeletonShine 3s linear infinite',
    },
  };

  switch (variant) {
    case 'circle':
      style = {
        ...style,
        ...shapes.circle,
      };
      break;
    case 'rectangle':
      style = {
        ...style,
        ...shapes.rectangle,
      };
      break;
    case 'text':
    default:
      style = {
        ...style,
        ...shapes.rectangle,
        display: 'inline',
        lineHeight: '1.5em',
        wordWrap: 'break-word',
        maxWidth: '100%',
      };
  }

  return style;
});

export default SkeletonStyled;

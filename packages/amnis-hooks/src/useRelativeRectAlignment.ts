import React from 'react';
// import { useWindowSize } from './useWindowSize';

type AlignmentHorizontal = 'left' | 'center' | 'right';
type AlignmentVertical = 'top' | 'center' | 'bottom';

interface OriginAlignment {
  horizontal: AlignmentHorizontal;
  vertical: AlignmentVertical;
}

interface RectPosition {
  x: number,
  y: number
}

/**
 * Calculates origin alignments.
 */
function alignOrigin(rect: DOMRect, alignment: OriginAlignment): RectPosition {
  let x = 0;
  let y = 0;

  switch (alignment.horizontal) {
    case 'left':
      x = rect.left;
      break;
    case 'right':
      x = rect.right;
      break;
    case 'center':
    default:
      x = rect.left + (rect.width / 2);
      break;
  }

  switch (alignment.vertical) {
    case 'top':
      y = rect.top;
      break;
    case 'bottom':
      y = rect.bottom;
      break;
    case 'center':
    default:
      y = rect.top + (rect.height / 2);
      break;
  }

  return { x, y };
}

/**
 * Calculates origin offset.
 */
function alignOffset(rect: DOMRect, alignment: OriginAlignment): RectPosition {
  let x = 0;
  let y = 0;

  switch (alignment.horizontal) {
    case 'left':
      x = 0;
      break;
    case 'right':
      x = rect.width;
      break;
    case 'center':
    default:
      x = rect.width / 2;
      break;
  }

  switch (alignment.vertical) {
    case 'top':
      y = 0;
      break;
    case 'bottom':
      y = rect.height;
      break;
    case 'center':
    default:
      y = rect.height / 2;
      break;
  }

  return { x, y };
}

/**
 * Positions a DOM Rectangle relative to a secondary DOM Recangle.
 */
export function useRelativeRectAlignment(
  anchorRect: DOMRect,
  anchorAlignment: OriginAlignment,
  boatRect: DOMRect,
  boatAlignment: OriginAlignment,
): RectPosition {
  // const windowSize = useWindowSize();
  const origin = React.useMemo<RectPosition>(() => {
    if (!anchorRect || !boatRect) {
      return {
        x: 0,
        y: 0,
      };
    }

    const primaryOrigin = alignOrigin(anchorRect, anchorAlignment);
    const boatOffset = alignOffset(boatRect, boatAlignment);

    const p = {
      x: primaryOrigin.x - boatOffset.x,
      y: primaryOrigin.y - boatOffset.y,
    };

    p.x = p.x < 0 ? 0 : p.x;
    p.y = p.y < 0 ? 0 : p.y;

    return p;
  }, [
    anchorRect,
    boatRect,
    anchorAlignment?.horizontal,
    anchorAlignment?.vertical,
    boatAlignment?.horizontal,
    boatAlignment?.vertical,
  ]);

  return origin;
}

export default useRelativeRectAlignment;

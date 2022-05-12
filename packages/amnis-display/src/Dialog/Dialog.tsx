import React from 'react';
import { createPortal } from 'react-dom';
import { useIncrementalId } from '@amnis/hooks/useIncrementalId';
import { useOnClickOutside } from '@amnis/hooks/useOnClickOutside';
import { useBoundingClientRect } from '@amnis/hooks/useBoundingClientRect';
import { noop } from '@amnis/hooks/util';
import useRelativeRectAlignment from '@amnis/hooks/useRelativeRectAlignment';
import type { DialogProps } from './Dialog.types';
import { DialogStyled } from './Dialog.styled';

/**
 * ## Floating Box
 * A foating box component that can be anchored to appear next to other components.
 */
export const Dialog: React.FC<
React.ComponentProps<typeof DialogStyled>
& DialogProps
> = ({
  children,
  paint = 'main',
  surface = 'paper',
  padding,
  p,
  label,
  open = false,
  anchor,
  anchorOrigin = { horizontal: 'center', vertical: 'bottom' },
  dialogOrigin = { horizontal: 'center', vertical: 'top' },
  size = 'small',
  style,
  onClickAway = noop,
  ...props
}) => {
  const id = useIncrementalId('dialog');
  const ref = React.useRef<HTMLDivElement>(null);

  const [position, positionSet] = React.useState({ x: -9999, y: -9999 });
  const [childrenMounted, childrenMountedSet] = React.useState(open);
  const [portalEle, portalEleSet] = React.useState<HTMLElement | null>(null);

  const boatRect = useBoundingClientRect(ref);
  const anchorRect = useBoundingClientRect(anchor);

  const boatPosition = useRelativeRectAlignment(
    anchorRect,
    anchorOrigin,
    boatRect,
    dialogOrigin,
  );

  const maxWidth = React.useMemo<string>(() => {
    switch (size) {
      case 'tiny':
        return '10em';
      case 'small':
        return '20em';
      case 'large':
        return '40em';
      case 'huge':
        return '50em';
      case 'medium':
      default:
        return '30em';
    }
  }, [size]);

  useOnClickOutside([ref, anchor], () => onClickAway());

  React.useEffect(() => {
    if (open) {
      positionSet(boatPosition);
      childrenMountedSet(true);
      ref?.current?.focus();
    }
  }, [open, ref?.current, boatPosition]);

  React.useEffect(() => {
    portalEleSet(document.body);
  }, []);

  React.useEffect(() => {
    if (anchor?.current) {
      anchor.current.setAttribute('aria-controls', id);
    }
  }, [anchor]);

  return portalEle && createPortal(
    <DialogStyled
      ref={ref}
      id={id}
      paint={paint}
      surface={surface}
      padding={padding || p || 4}
      aria-label={label}
      aria-hidden={!open}
      role="dialog"
      tabIndex={-1}
      style={{
        left: position.x,
        top: position.y,
        maxWidth,
        ...style,
      }}
      onTransitionEnd={() => {
        if (!open) {
          childrenMountedSet(false);
          positionSet({
            x: -9999,
            y: -9999,
          });
        }
      }}
      {...props}
    >
      {childrenMounted ? children : undefined}
    </DialogStyled>,
    portalEle,
  );
};

export default Dialog;

import React from 'react';
import { createPortal } from 'react-dom';
import { noop } from '@amnis/hooks/util';
import type { OverlayProps } from './Overlay.types';
import { OverlayStyled } from './Overlay.styled';

const styleOpen = {
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const styleClose = {
  width: 0,
  height: 0,
  top: -9999,
  left: -9999,
};

/**
 * ## Overlay Portal
 * A area for displaying overlaid components.
 */
export const Overlay: React.FC<
React.ComponentProps<typeof OverlayStyled>
& OverlayProps
> = ({
  children,
  open = false,
  style,
  onClick = noop,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [childrenMounted, childrenMountedSet] = React.useState(open);
  const [portalElement, portalElementSet] = React.useState<HTMLElement | null>(null);
  const [styling, stylingSet] = React.useState(open ? styleOpen : styleClose);

  React.useEffect(() => {
    portalElementSet(document.body);
  }, []);

  React.useEffect(() => {
    if (open && ref?.current) {
      ref.current.focus();
      childrenMountedSet(true);
      stylingSet(styleOpen);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open, ref]);

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target !== ref.current) {
      return;
    }
    onClick(event);
  }, [onClick]);

  return (
    portalElement && createPortal(
      <OverlayStyled
        ref={ref}
        role="dialog"
        aria-hidden={!open}
        tabIndex={-1}
        onClick={handleClick}
        style={{
          ...styling,
          ...style,
        }}
        onTransitionEnd={() => {
          if (!open) {
            childrenMountedSet(false);
            stylingSet(styleClose);
          }
        }}
        {...props}
      >
        {childrenMounted ? children : undefined}
      </OverlayStyled>,
      portalElement,
    )
  );
};

export default Overlay;

import React from 'react';
import { createPortal } from 'react-dom';
import { Stack } from '@amnis/layout/Stack';
import { noop } from '@amnis/hooks/util';
import type { OverlayProps } from './Overlay.types';
import { Transition } from '../Transition';

/**
 * ## Overlay Portal
 * A area for displaying overlaid components.
 */
export const Overlay: React.FC<
React.ComponentProps<typeof Stack>
& OverlayProps
> = ({
  children,
  open = false,
  childrenPersist = false,
  style,
  onClick = noop,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [childrenMounted, childrenMountedSet] = React.useState(open);
  const [portalElement, portalElementSet] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    portalElementSet(document.body);
  }, []);

  React.useEffect(() => {
    if (open && ref?.current) {
      ref.current.focus();
      childrenMountedSet(true);
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
      <Transition
        ref={ref}
        surface="overlay"
        depth="overlay"
        role="dialog"
        position="absolute"
        width="100%"
        height="100%"
        top={0}
        left={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        aria-hidden={!open}
        tabIndex={-1}
        onClick={handleClick}
        style={style}
        variants={['fade']}
        active={open}
        {...props}
      >
        {(childrenPersist || childrenMounted) ? children : undefined}
      </Transition>,
      portalElement,
    )
  );
};

export default Overlay;

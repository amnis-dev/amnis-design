import React from 'react';
import { createPortal } from 'react-dom';
import { Box } from '@amnis/layout/Box';
import { useIncrementalId } from '@amnis/hooks/useIncrementalId';
import { useOnClickOutside } from '@amnis/hooks/useOnClickOutside';
import { useBoundingClientRect } from '@amnis/hooks/useBoundingClientRect';
import { noop } from '@amnis/hooks/util';
import useRelativeRectAlignment from '@amnis/hooks/useRelativeRectAlignment';
import { Transition } from '../Transition';
import type { DialogProps } from './Dialog.types';

/**
 * ## Floating Box
 * A foating box component that can be anchored to appear next to other components.
 */
export const Dialog: React.FC<
React.ComponentProps<typeof Transition>
& DialogProps
> = ({
  children,
  paint = 'main',
  surface = 'dialog',
  padding,
  p,
  label,
  open = false,
  anchor,
  anchorOrigin = { horizontal: 'center', vertical: 'bottom' },
  dialogOrigin = { horizontal: 'center', vertical: 'top' },
  size = 'small',
  onClickAway = noop,
  ...props
}) => {
  const id = useIncrementalId('dialog');
  const ref = React.useRef<HTMLDivElement>(null);

  const [position, positionSet] = React.useState({ x: 0, y: 0 });
  const [childrenMounted, childrenMountedSet] = React.useState(false);
  const [portalEle, portalEleSet] = React.useState<HTMLElement | null>(null);
  const [rendered, renderedSet] = React.useState(false);

  const isOpen = open && rendered;

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
    if (childrenMounted) {
      renderedSet(true);
    }
  }, [childrenMounted]);

  React.useEffect(() => {
    if (open && ref?.current) {
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
    <Box
      tabIndex={-1}
      position="absolute"
      display="inline-block"
      depth="system"
      left={position.x}
      top={position.y}
      maxWidth={maxWidth}
      style={{
        visibility: isOpen ? undefined : 'hidden',
      }}
    >
      <Transition
        ref={ref}
        id={id}
        paint={paint}
        surface={surface}
        padding={padding || p || 4}
        aria-label={label}
        aria-hidden={!isOpen}
        role="dialog"
        variants={['fade']}
        active={open}
        onTransitionEnd={() => {
          if (!isOpen) {
            childrenMountedSet(false);
          }
        }}
        {...props}
      >
        {childrenMounted ? children : undefined}
      </Transition>
    </Box>,
    portalEle,
  );
};

export default Dialog;

import React from 'react';
import { Box } from '@amnis/layout/Box';
import { Stack } from '@amnis/layout/Stack';
import { useIncrementalId } from '@amnis/hooks/useIncrementalId';
import { ButtonIcon } from '@amnis/entry/ButtonIcon';
import { Button } from '@amnis/entry/Button';
import { Font } from '../Font';
import { Overlay } from '../Overlay';
import type { ModalProps } from './Modal.types';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Modal = React.forwardRef<
HTMLDivElement,
ModalProps
>(({
  children,
  open = false,
  size = 'medium',
  title = 'Untitled Modal',
  description = 'Please add a description for this modal component.',
  confirmLabel = 'Confirm',
  closeLabel = 'Close',
  onConfirm,
  onClose,
  ...props
}, ref) => {
  /**
   * Get a unique id for this component
   */
  const modalId = useIncrementalId('modal');

  const hasControls = Boolean(onConfirm || onClose);

  /**
   * Determine sizing properties.
   */
  const sizeProps = React.useMemo(() => {
    switch (size) {
      case 'tiny':
        return {
          maxWidth: '10em',
          minHeight: '10em',
        };
      case 'small':
        return {
          maxWidth: '20em',
          minHeight: '10em',
        };
      case 'large':
        return {
          maxWidth: '48em',
          minHeight: '10em',
        };
      case 'huge':
        return {
          maxWidth: '90vw',
          minHeight: '10em',
        };
      case 'medium':
      default:
        return {
          maxWidth: '32em',
          minHeight: '10em',
        };
    }
  }, [size]);

  return (
    <Overlay
      open={open}
      id={modalId}
      aria-labelledby={`${modalId}-header`}
      aria-describedby={`${modalId}-desc`}
      background
      onClick={onClose}
    >
      <Stack
        ref={ref}
        surface="paper"
        padding={5}
        margin={3}
        gap={3}
        width="100%"
        {...sizeProps}
        {...props}
      >
        <Stack row width="100%">
          <Box flex={1}>
            <Font
              id={`${modalId}-header`}
              variant="heading-1"
            >
              {title}
            </Font>
          </Box>
          <Box>
            {onClose && (
              <ButtonIcon
                label="Close modal window"
                icon="HiX"
                variant="text"
                onClick={onClose}
                tabIndex={-1}
              />
            )}
          </Box>
        </Stack>

        <Box>
          <Font
            id={`${modalId}-desc`}
            variant="body-1"
          >
            {description}
          </Font>
        </Box>

        <Box flex={1}>
          {children}
        </Box>

        {hasControls ? (
          <Stack row justifyContent="flex-end" alignItems="center" gap={3} width="100%">
            {onClose
            && <Button paint="base" onClick={onClose}>{closeLabel}</Button> }
            {onConfirm
            && <Button onClick={onConfirm}>{confirmLabel}</Button> }
          </Stack>
        ) : null}
      </Stack>
    </Overlay>
  );
});

export default Modal;
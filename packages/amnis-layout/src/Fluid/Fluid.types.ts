import type { StackProps } from '../Stack/Stack.types';

export type FluidProps = Omit<StackProps, 'wrap' | 'direction' | 'row' | 'column'>;

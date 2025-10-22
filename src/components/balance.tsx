'use client';

import { Balance as BaseBalance } from '@merit-systems/echo-react-sdk';
import type { ComponentProps } from 'react';

export function Balance(props: ComponentProps<typeof BaseBalance>) {
  return <BaseBalance {...props} />;
}

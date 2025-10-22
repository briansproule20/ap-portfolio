'use client';

import { EchoButton as BaseEchoButton } from '@merit-systems/echo-react-sdk';
import type { ComponentProps } from 'react';

export function EchoButton(props: ComponentProps<typeof BaseEchoButton>) {
  return <BaseEchoButton {...props} />;
}

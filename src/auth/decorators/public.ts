import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'myPublicKey';

//export const Public = (...args: string[]) => SetMetadata(IS_PUBLIC_KEY, true);
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
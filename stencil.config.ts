import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'nc-img',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'www',
    },
  ],
};

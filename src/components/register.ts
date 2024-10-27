import React, { ComponentType } from 'react';

interface RegisteredComponents {
  [key: string]: ComponentType<any>; 
}

const components: RegisteredComponents = {};

const requireComponent = require.context('.', true, /\.(jsx?|tsx?)$/);

requireComponent.keys().forEach((filename: string) => {
  const component = requireComponent(filename).default;
  const componentName = filename
    .replace('./', '')
    .replace('.tsx', '')
    .replace('.ts', '')
    .replace('.jsx', '')
    .replace('.js', '')
    .replace(/\//g, ''); 

  components[componentName] = component;
});

export default components;

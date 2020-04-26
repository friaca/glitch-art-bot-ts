import { PSketchesEnum } from './index';
import { SketchConfig, ISketch } from '../types/sketch';

const globalDefault = {
  photo: 1,
};

export const sketches: ISketch[] = [
  {
    name: 'pixelsort',
    assets: 'pixelsort\\assets',
    output: 'pixelsort\\output',
  },
];

export const sketchesConfig: SketchConfig[] = [
  {
    name: 'pixelsort' as PSketchesEnum.pixelsort,
    parameters: ['mode'],
    defaultConfig: {
      ...globalDefault,
      mode: 1,
    },
  },
];

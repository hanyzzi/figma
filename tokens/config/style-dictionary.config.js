import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Tokens Studio 변환 등록
register(StyleDictionary);

export default {
  source: ['tokens/figma/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      transforms: [
        'ts/descriptionToComment',
        'ts/size/px',
        'ts/opacity/css',
        'ts/size/lineheight',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/generic',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/kebab'
      ],
      buildPath: 'styles/tokens/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables'
        }
      ]
    },
    tailwind: {
      transformGroup: 'js',
      transforms: [
        'ts/descriptionToComment',
        'ts/size/px',
        'ts/opacity/css',
        'ts/size/lineheight',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/generic',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/camel'
      ],
      buildPath: 'tokens/build/',
      files: [
        {
          destination: 'tailwind-tokens.js',
          format: 'javascript/module-flat'
        }
      ]
    },
    css: {
      transformGroup: 'css',
      transforms: [
        'ts/descriptionToComment',
        'ts/size/px',
        'ts/opacity/css',
        'ts/size/lineheight',
        'ts/typography/fontWeight',
        'ts/resolveMath',
        'ts/size/css/letterspacing',
        'ts/typography/css/generic',
        'ts/typography/css/shorthand',
        'ts/border/css/shorthand',
        'ts/shadow/css/shorthand',
        'ts/color/css/hexrgba',
        'ts/color/modifiers',
        'name/cti/kebab'
      ],
      buildPath: 'styles/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    }
  }
};
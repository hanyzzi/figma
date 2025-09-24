import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

console.log('🎨 Building design tokens...');

// Tokens Studio transforms 등록
register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['tokens/figma/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'styles/tokens/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables'
        }
      ]
    },
    css: {
      transformGroup: 'css', 
      buildPath: 'styles/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    }
  }
});

await sd.buildAllPlatforms();

console.log('✅ Design tokens built successfully!');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const SOURCE_ICONS_PATH = path.resolve(
  __dirname,
  '../node_modules/@tabler/icons/icons'
);
const DESTINATION_ICONS_PATH = path.resolve(__dirname, '../src/icons');

function pascalCase(string) {
  return string
    .replace(/(^\w|-\w)/g, (letter) => letter.toUpperCase())
    .replace(/-/g, '');
}

function getComponentTemplate() {
  return fs.readFileSync(
    path.resolve(__dirname, './component-template.txt'),
    'utf8'
  );
}

function getTypesTemplate() {
  return fs.readFileSync(
    path.resolve(__dirname, './types-template.txt'),
    'utf8'
  );
}

function findIcons() {
  return fs
    .readdirSync(SOURCE_ICONS_PATH)
    .filter((file) => file.endsWith('.svg'));
}

function createComponentName(originalName) {
  return (
    pascalCase(originalName)
      // A digit at the beginning of component name is not allowed
      .replace('2fa', 'TwoFA')
      .replace('3dCubeSphere', 'ThreeDCubeSphere')
      .replace('3dRotate', 'ThreeDRotate')
      .replace('123', 'OneTwoThree')
      .replace('24Hours', 'TwentyFourHours')
      .replace('360', 'ThreeSixty')
  );
}

function removeOldComponents() {
  const components = fs
    .readdirSync(DESTINATION_ICONS_PATH)
    .filter((file) => file.endsWith('.js'));

  for (const file of components) {
    fs.unlinkSync(path.join(DESTINATION_ICONS_PATH, file));
  }
}

async function generateNewComponents() {
  const prettierOptions = (await prettier.resolveConfig(__dirname)) || {};
  const exports = [];

  for (const file of findIcons()) {
    const [originalName] = file.split('.');
    const svgFileContents = fs.readFileSync(
      path.resolve(SOURCE_ICONS_PATH, file),
      'utf8'
    );

    const componentName = createComponentName(originalName);

    exports.push(
      `export { default as ${componentName} } from './icons/${originalName}.js';`
    );

    const [, svgContent] = /<svg[^>]*>([\s\S]*?)<\/svg>/.exec(svgFileContents);

    let source = getComponentTemplate()
      .replace(/%%COMPONENT_NAME%%/g, componentName)
      .replace(/%%ORIGINAL_NAME%%/g, originalName)
      .replace(/%%SVG_CONTENT%%/g, svgContent)
      .replace(/<desc\>(.*?)<\/desc>/g, '');

    fs.writeFileSync(
      path.resolve(DESTINATION_ICONS_PATH, `${originalName}.js`),
      prettier.format(source, { parser: 'babel', ...prettierOptions })
    );
  }

  fs.writeFileSync(
    path.resolve(__dirname, '../src/index.js'),
    prettier.format(exports.join('\n'), { parser: 'babel', ...prettierOptions })
  );
}

async function createTypesFile() {
  const prettierOptions = (await prettier.resolveConfig(__dirname)) || {};
  const exports = findIcons().map((file) => {
    const [originalName] = file.split('.');
    const componentName = createComponentName(originalName);

    return `export const ${componentName}: Icon;`;
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../src/index.d.ts'),
    prettier.format(getTypesTemplate() + exports.join('\n'), {
      parser: 'babel-ts',
      ...prettierOptions,
    })
  );
}

removeOldComponents();
generateNewComponents();
createTypesFile();

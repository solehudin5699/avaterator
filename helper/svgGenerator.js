const nameGenerator = require('./nameGenerator');
const svgProperty = require('./svgProperty');
const { colorGenerator } = require('./colorGenerator');

/***
 * @function svgGenerator
 * @param {string} name
 * @param {{size:number,background:string,color:string,bold:'normal'|'bold'|number,shape:'circle'|'square',rounded:number}} params
 * @returns string
 */
function svgGenerator(name, { shape, rounded, ...params }) {
  const initialName = nameGenerator(name);

  const { size, viewBox, background, color, bold, fontSize } = svgProperty(params);
  const colors = colorGenerator(initialName);

  const validShape = Array.isArray(shape) ? shape[shape.length - 1] : shape;

  const validRounded = Array.isArray(rounded) ? rounded[rounded.length - 1] : rounded;

  return `
  <svg height="${size}" width="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
      ${
        validShape === 'square'
          ? `<rect width="${size}" height="${size}" x="0" y="0" rx="${
              validRounded ?? 0.1 * size
            }" ry="${validRounded ?? 0.1 * size}" fill="${background || colors.background}" />`
          : `<circle r="${size / 2}" cx="${size / 2}" cy="${size / 2}" fill="${
              background || colors.background
            }" />`
      }
      <text
        x="50%"
        y="50%"
        fill="${color || colors.text}"
        style="
          color: ${color || colors.text};
          line-height: 1;
          font-family: inherit;
        "
        alignment-baseline="middle"
        text-anchor="middle"
        font-size="${fontSize}"
        font-weight="${bold}"
        dy=".1em"
        dominant-baseline="middle"
      >
        ${initialName}
      </text>
    </svg>
  `;
}

module.exports = svgGenerator;

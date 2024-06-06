/***
 * @param {Object} params
 * @param {number} params.size
 * @param {string} params.background
 * @param {string} params.color
 * @param {'normal'|'bold'|number} params.bold
 * @returns {{size:number,background:string,color:string,bold:'normal'|'bold'|number,viewBox:string,fontSize:number}}
 *
 */
function svgProperty(params) {
  const { size, background, color, bold } = params;
  const validSize =
    typeof size === 'number'
      ? size
      : Array.isArray(size)
      ? // @ts-ignore
        Number(size[size.length - 1]) || 100
      : Number(size) || 100;

  const validBackground = Array.isArray(background)
    ? background[background.length - 1]
    : background;

  const validColor = Array.isArray(color) ? color[color.length - 1] : color;

  const validBold = Array.isArray(bold) ? bold[bold.length - 1] : bold;

  return {
    size: validSize,
    background: isHexColor(validBackground) ? `#${validBackground}` : `${validBackground}`,
    color: isHexColor(validColor) ? `#${validColor}` : `${validColor}`,
    viewBox: `0 0 ${validSize} ${validSize}`,
    bold: validBold || 400,
    fontSize: 0.4 * validSize,
  };
}

const isHexColor = (color) => {
  return new RegExp(/^#[0-9A-F]{3,6}$/i).test('#' + color);
};

module.exports = svgProperty;

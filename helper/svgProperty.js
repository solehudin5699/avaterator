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
  const validSize = typeof size === 'number' ? size : Number(size) || 100;
  return {
    size: validSize,
    background: background,
    color: color,
    viewBox: `0 0 ${validSize} ${validSize}`,
    bold: bold || 400,
    fontSize: 0.4 * validSize,
  };
}

module.exports = svgProperty;

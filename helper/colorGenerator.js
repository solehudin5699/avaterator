const getHashOfString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);
  return hash;
};

const normalizeHash = (hash, min, max) => {
  return Math.floor((hash % (max - min)) + min);
};

const hRange = [0, 360];
const sRange = [0, 100];
const lRange = [0, 100];

const generateHSL = (name) => {
  const hash = getHashOfString(name);
  const h = normalizeHash(hash, hRange[0], hRange[1]);
  const s = normalizeHash(hash, sRange[0], sRange[1]);
  const l = normalizeHash(hash, lRange[0], lRange[1]);
  return [h, s, l];
};

const HSLtoString = (hsl) => {
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
};

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  let m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
}

function getTextColorFromHsl(h, s, l) {
  //HSL to RGB
  const [r, g, b] = hslToRgb(h, s, l);

  // count luminance relative
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // text color based on luminance
  return luminance > 128 ? '#000000' : '#FFFFFF';
}

const colorGenerator = (name) => {
  const hsl = generateHSL(name);
  const backgroundHSL = HSLtoString(hsl);
  const textColor = getTextColorFromHsl(hsl[0], hsl[1], hsl[2]);
  return {
    background: backgroundHSL,
    text: textColor,
  };
};

module.exports = { colorGenerator };

/***
 * Generate name from full name
 * @param {string} name
 * @returns string
 */
function nameGenerator(name) {
  const validName = Array.isArray(name) ? name[name.length - 1] : name;
  if (!validName) return '~';

  const [firstName, secondName] = validName
    ?.trim?.()
    ?.split?.(' ')
    ?.filter?.((el) => !!el)
    ?.map?.((el) => el.trim());

  const firstInitial = firstName?.[0];
  let lastInitial = secondName?.[0];
  if (!lastInitial) lastInitial = firstName?.[1];
  return `${firstInitial || ''}${lastInitial || ''}`;
}

module.exports = nameGenerator;

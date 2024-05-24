/***
 * Generate name from full name
 * @param {string} name
 * @returns string
 */
function nameGenerator(name) {
  if (!name) return '~';

  const [firstName, lastName] = name
    ?.trim?.()
    ?.split?.(' ')
    ?.filter?.((el) => !!el)
    ?.map?.((el) => el.trim());

  const firstInitial = firstName?.[0];
  const lastInitial = lastName?.[0];
  return `${firstInitial || ''}${lastInitial || ''}`;
}

module.exports = nameGenerator;

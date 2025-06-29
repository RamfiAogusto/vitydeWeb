/**
 * Combina clases CSS de forma condicional
 * @param {...(string|undefined|boolean)} classes - Las clases a combinar
 * @returns {string} Las clases combinadas
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
} 
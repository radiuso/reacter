
export function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

function dataType(x) {
  if (x === null) {
    return 'null';
  }

  switch (typeof x){
    case 'string':
      return 'string';
    case 'boolean':
      return 'boolean';
    case 'undefined':
      return 'undefined';
    case 'number':
      if (Math.round(x) === x) {
        return 'integer';
      } else {
        return 'float';
      }

      break;
    case 'object':
      return 'object';
    default:
      return 'not recognized';
  }
}

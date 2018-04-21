function filter_list(l) {
  return l.filter(val => {
    if(typeof val === 'number' && val >= 0) { return true; }
  });
}
// Groups the given array by the given key in it
export const GroupBygetId = (xs) => {
  return xs.reduce(function (rv, x) {
    (rv[x.getId()] = rv[x.getId()] || []).push(x);
    return rv;
  }, {});
};

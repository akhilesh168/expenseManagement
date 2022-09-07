export function groupBy(array, type) {
  var result = [];
  array.reduce(function (res, value) {
    if (!res[value[type]]) {
      res[value[type].value || value[type]] = {
        [type]: value[type].value || value[type],
        amount: 0,
      };
      result.push(res[value[type].value || value[type]]);
    }
    res[value[type].value || value[type]].amount += value.amount;
    return res;
  }, {});
  return result;
}

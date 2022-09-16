import { category } from './constants';

export function groupBy(array, type) {
  let result = [];
  array.reduce(function (res, value) {
    if (!res[value[type]]) {
      res[value[type]?.value || value[type]] = {
        [type]: value[type]?.value || value[type],
        amount: 0,
      };
      result.push(res[value[type]?.value || value[type]]);
    }
    res[value[type]?.value || value[type]].amount += Number(value.amount);
    return res;
  }, {});
  if (result.length) {
    Object.values(category).map((item) => {
      const count = result.filter((obj) => obj.category === item).length;
      if (count > 1) {
        result = groupBy(result, type);
      }
    });
  }

  return result;
}

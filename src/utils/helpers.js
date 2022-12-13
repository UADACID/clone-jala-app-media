export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const capitalFirstLetter = str => {
  if (str === null) {
    return str;
  }
  const arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const str2 = arr.join(' ');
  return str2;
};

export const currencyAdapter = number => {
  const numberToStr = number.toString();
  return numberToStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

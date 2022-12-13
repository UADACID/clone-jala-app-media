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

export const priceListAdapter = args => {
  const listOfSize = Array.from({length: 19}, (_, i) => i * 10 + 20);

  const finalList = listOfSize.map(size => {
    const keyOfSize = `size_${size}`;
    return {
      name: `Size ${size}`,
      price: args[keyOfSize] || '-',
    };
  });

  return finalList;
};

export const phoneNumberMasking = phoneNumber => {
  if (
    phoneNumber === null ||
    phoneNumber === '-' ||
    phoneNumber === '' ||
    phoneNumber.length < 5
  ) {
    return phoneNumber;
  }
  return phoneNumber.substr(0, phoneNumber.length - 3) + 'XXX';
};

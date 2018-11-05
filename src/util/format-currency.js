function formatCurrency (value, currency, decimals) {
  const reg = /(\d{3})(?=\d)/g;

  value = parseFloat(value);
  if (isFinite(value)) {
    currency = currency || '$';
    decimals = decimals || 2;
    value = Math.abs(value).toFixed(decimals);

    let intPart = decimals > 0 ? value.slice(0, -1 - decimals) : value;
    let decimalPart = decimals > 0 ? value.slice(-decimals) : '';
    let sign = value >= 0 ? '' : '-';
    let split = decimals > 0 ? '.' : '';
    intPart = intPart.split('').reverse().join('').replace(reg, '$1,').split('').reverse().join('');

    return sign + currency + intPart + split + decimalPart;
  } else {
    return '';
  }
}

export default formatCurrency;

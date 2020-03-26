export function formatNumber(numb: number, decimals: number = 5) {
  if ( numb % 1 !== 0) {
    return numb.toFixed(decimals).replace(/0+$/, '');
  } else {
    return numb;
  }
}

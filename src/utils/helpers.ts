export function formatNumber(numb: number, decimals: number = 5) {
  return numb.toFixed(decimals).replace(/[.,]00$/, '');
}

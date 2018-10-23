import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSummary'
})
export class NumberSummaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const number = Number(value);
    const fractionSize = args ? args[0] || 3 : 3;

    if (number === null) {
      return value;
    }

    if (isNaN(number)) {
      return value;
    }

    if (number === 0) { return '0'; }

    if (number < Math.pow(10, 6)) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    let abs = Math.abs(number);
    const rounder = Math.pow(10, fractionSize);
    const isNegative = number < 0;
    let key = '';
    const powers = [
      { key: 'qn', value: Math.pow(10, 15) },
      { key: 'tn', value: Math.pow(10, 12) },
      { key: 'bn', value: Math.pow(10, 9) },
      { key: 'm', value: Math.pow(10, 6) },
      // { key: 'k', value: 1000 }
    ];

    for (let i = 0; i < powers.length; i++) {

      let reduced = abs / powers[i].value;

      reduced = (Math.floor(reduced * rounder) / rounder);

      if (reduced >= 1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }

    return (isNegative ? '-' : '') + Number(abs.toFixed(3)) + key;
  }

}

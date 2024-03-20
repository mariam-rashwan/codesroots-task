import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, wordsNum:number =18): string {
    if (!value) return '';

    const words = value.split(' ');
    const truncatedWords = words.slice(0, wordsNum);
    return truncatedWords.join(' ') + '....';
  }
}

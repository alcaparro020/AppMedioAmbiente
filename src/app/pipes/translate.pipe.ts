import { Pipe, PipeTransform } from '@angular/core';
import * as strings from '../../assets/languages/es.json';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  transform(key: string): string {
    if (strings[key]) {
      let string = strings[key];
      if (Array.isArray(string)) {
        string = string.join('');
      }
      return string;
    }
    console.error(`key '${key}' not found in translate`);
    return key;
  }

}

// Import PipeModule in page module.
// HTML: {{'key' | translate }}
// TS: this.translatePipe.transform('key');
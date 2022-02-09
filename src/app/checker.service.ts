import {  Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {

    isEqualTo(firstString: string, secondString: string, respectPinyin: boolean = false) {

        if (respectPinyin) return firstString.toLowerCase() === secondString.toLowerCase();
      return this._pinyinToLatin(firstString).toLowerCase() === this._pinyinToLatin(secondString).toLowerCase(); 
    }
  
    private _pinyinToLatin(strPinyin: string): string {
      let strLatin: string = strPinyin;
      strLatin = strLatin.replaceAll('ā', 'a');
      strLatin = strLatin.replaceAll('á', 'a');
      strLatin = strLatin.replaceAll('ǎ', 'a');
      strLatin = strLatin.replaceAll('à', 'a');
      strLatin = strLatin.replaceAll('ē', 'e');
      strLatin = strLatin.replaceAll('é', 'e');
      strLatin = strLatin.replaceAll('ě', 'e');
      strLatin = strLatin.replaceAll('è', 'e');
      strLatin = strLatin.replaceAll('ò', 'o');
      strLatin = strLatin.replaceAll('ǒ', 'o');
      strLatin = strLatin.replaceAll('ó', 'o');
      strLatin = strLatin.replaceAll('ō', 'o');
      strLatin = strLatin.replaceAll('ī', 'i');
      strLatin = strLatin.replaceAll('í', 'i');
      strLatin = strLatin.replaceAll('ǐ', 'i');
      strLatin = strLatin.replaceAll('ì', 'i');
      strLatin = strLatin.replaceAll('ù', 'u');
      strLatin = strLatin.replaceAll('ǔ', 'u');
      strLatin = strLatin.replaceAll('ú', 'u');
      strLatin = strLatin.replaceAll('ū', 'u');
      strLatin = strLatin.replaceAll('ǘ', 'u');
      strLatin = strLatin.replaceAll('ǚ', 'u');
      return strLatin;
    }
}

import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataSetService } from './data-set.service';
import { CheckerService } from './checker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('pinyinInput') pinyinInput: ElementRef | undefined;
  constructor(private dataSet: DataSetService, private checker: CheckerService ) {}
  randomHskChar = this.generateNewChar();
  inputValue = "";
  isValid: boolean = false;
  ngOnViewInit() {
    this.randomHskChar = this.generateNewChar()
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  onKeyUp(keyCode: Number) {
    if(keyCode === 32) {
      this.check();
    }
  }

  generateNewChar() {
    return this.dataSet.getRandomHskChar();
  }

  check() {
    this.inputValue = this.pinyinInput ? this.pinyinInput.nativeElement.value : "";
    this.isValid = this.checker.isEqualTo(this.inputValue, this.randomHskChar.pinyin);
    if(this.isValid && this.pinyinInput) {
      this.pinyinInput.nativeElement.value = "";
      this.randomHskChar = this.generateNewChar()
    }
  }

  change() {
    this.inputValue = this.pinyinInput ? this.pinyinInput.nativeElement.value : "";
    if(!this.checker.isEqualTo(this.inputValue, this.randomHskChar.pinyin)) {
      this.isValid = this.checker.isEqualTo(this.inputValue, this.randomHskChar.pinyin);
    }
    
  }
  
}

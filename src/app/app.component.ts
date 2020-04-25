import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  useLetters = false;
  userNumber = false;
  useSymbol = false;
  password: string = "";

  onChangeLength(value: string){
    const parseValue = parseInt(value);
    if(!isNaN(parseValue)){
      this.length = parseValue;
    }
  }

  onChangeUserLetter(){
    this.useLetters = !this.useLetters;
  }

  onChangeUserNumbers(){
    this.userNumber = !this.userNumber;
  }

  onChangeUserSymbols(){
    this.useSymbol = !this.useSymbol;
  }

  onButtonClick() {
    // console.log(`
    // User performing action on CheckBox
    // letters : ${this.useLetters}
    // number : ${this.userNumber}
    // symbol : ${this.useSymbol}
    // `);

    const numbers = '1234567890';
    const letters ='qwertyuioplkjhgfdsazxcvbnm';
    const symbol = '!@#$%^&*()';  

    let validChars = '';
    if(this.useLetters){
       validChars += letters;
    }

    if(this.userNumber){
      validChars += numbers;
   }

   if(this.useSymbol){
    validChars += symbol;
 }

  let genPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      genPassword += validChars[index];
    }
    this.password = genPassword;
  }

}
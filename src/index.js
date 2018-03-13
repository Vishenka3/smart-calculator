class SmartCalculator{
  constructor(initialValue) {
    // your implementation
      this.arithmetic = [initialValue];
  }

  add(number) {
    // your implementation
      this.arithmetic.push('+');
      this.arithmetic.push(number);
      return this;
  }
  
  subtract(number) {
    // your implementation
      this.arithmetic.push('-');
      this.arithmetic.push(number);
      return this;
  }

  multiply(number) {
    // your implementation
      this.arithmetic.push('*');
      this.arithmetic.push(number);
      return this;
  }

  devide(number) {
    // your implementation
      this.arithmetic.push('/');
      this.arithmetic.push(number);
      return this;
  }

  pow(number) {
    // your implementation
      if(this.arithmetic[this.arithmetic.length-1][2]===')'){
          let numb = ~~this.arithmetic[this.arithmetic.length-1][1];
          number=Math.pow(numb,number);
          this.arithmetic[this.arithmetic.length-1] = this.arithmetic[this.arithmetic.length-1].replace(numb, number);
      }else{
          this.arithmetic.splice(this.arithmetic.length-1, 0, 'Math.pow(');
          this.arithmetic.push(','+ number + ')');
      }
      return this;
  }

  valueOf() {
      return eval(this.arithmetic.join(' '));
  }

}

module.exports = SmartCalculator;

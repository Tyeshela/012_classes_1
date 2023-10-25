class Natural {
    constructor(value) {
      this.value = value;
    }
  }
  
  class Integer extends Natural {
    constructor(value) {
      super(value);
    }
  }
  
  class Rational extends Integer {
    constructor(numerator, denominator) {
      super(numerator);
      this.denominator = denominator;
    }
  }
  
  class Irrational extends Real {
    constructor(value) {
      super(value);
    }
  }
  
  class Real {
    constructor(value) {
      this.value = value;
    }
  }
  
  class Imaginary {
    constructor(value) {
      this.value = value;
    }
  }
  
  class Complex {
    constructor(real, imaginary) {
      this.real = real;
      this.imaginary = imaginary;
    }
  }
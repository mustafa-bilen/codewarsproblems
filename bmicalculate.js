// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


//çözüm


function bmi(weight, height) {
    var formula = weight / (height * height);
    if (formula <= 18.5) {
      return "Underweight";
    }
    if (formula <= 25.0) {
      return "Normal";
  }
    if (formula <= 30.0) {
      return "Overweight";
  }
    if (formula > 30) {
      return "Obese";
  }
  }
    
import React, { useState } from "react";
import "./Calculator.css";
import MainLayout from "../../components/MainLayout/MainLayout";
const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState("");

  function handleCalculate(e) {
    e.preventDefault();

    // calculate BMR
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // calculate TDEE
    let tdee;
    switch (activityLevel) {
      case "sedentary":
        tdee = bmr * 1.2;
        break;
      case "lightly-active":
        tdee = bmr * 1.375;
        break;
      case "moderately-active":
        tdee = bmr * 1.55;
        break;
      case "very-active":
        tdee = bmr * 1.725;
        break;
      case "extra-active":
        tdee = bmr * 1.9;
        break;
      default:
        break;
    }

    // set calories state
    setCalories(tdee.toFixed(2));
  }

  return (
    <MainLayout>
      <div className="calorie-calculator">
        <h1>Calorie Calculator</h1>
        <form onSubmit={handleCalculate}>
          <div className="form__inside">
          <label className="calc__label">
            Weight (in kg):
            <input
            className="calc__acceptor"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          </div>
          <div className="form__inside">
        
          <label>
            Height (in cm):
            <input
              type="number"
              className="calc__acceptor"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          </div>
          <div className="form__inside">
          <label>
            Age:
            <input
            className="calc__acceptor"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          </div>
          <div className="form__inside">
          <label>
            Gender:
            <select className="calc__acceptor" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option className="calc__acceptor" value="male">Male</option>
              <option className="calc__acceptor" value="female">Female</option>
            </select>
          </label>
          </div>  
          <div className="form__inside">
            <label>
            Activity level:
            <select
            className="calc__acceptor"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightly-active">Lightly active</option>
              <option value="moderately-active">Moderately active</option>
              <option value="very-active">Very active</option>
              <option value="extra-active">Extra active</option>
            </select>
          </label>
         
          </div>
          <button className="calc_btn" type="submit">
            Calculate
          </button>
        </form>
        {calories && <p>Your daily caloric needs are: {calories} kcal.</p>}
      </div>
    </MainLayout>
  );
};

export default Calculator;

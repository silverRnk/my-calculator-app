<script>
  import Button from "./Button.svelte";
  import ButtonContainer from "./ButtonContainer.svelte";
  import Display from "./Display.svelte";
  import {
    SimpleCalculator,
    CalculatorButton,
  } from "$lib/utils/Calculator";
  import LargeButton from "./LargeButton.svelte";

  let display = "";
  const calculator = new SimpleCalculator();
  const button0 = CalculatorButton("0", "0");
  const button1 = CalculatorButton("1", "1");
  const button2 = CalculatorButton("2", "2");
  const button3 = CalculatorButton("3", "3");
  const button4 = CalculatorButton("4", "4");
  const button5 = CalculatorButton("5", "5");
  const button6 = CalculatorButton("6", "6");
  const button7 = CalculatorButton("7", "7");
  const button8 = CalculatorButton("8", "8");
  const button9 = CalculatorButton("9", "9");
  const buttonDot = CalculatorButton(".", ".");
  const buttonPlus = CalculatorButton("+", "+");
  const buttonMinus = CalculatorButton("-", "-");
  const buttonMult = CalculatorButton("x", "*");
  const buttonDiv = CalculatorButton("/", "/");
  const buttonEquals = CalculatorButton("=", "=");
  const buttonCE = CalculatorButton("CE", "CE");
  const buttonC = CalculatorButton("C", "C")
  const buttonBckSpc = CalculatorButton("BckSpc", "BckSpc")
  // console.log(Calculator.calculate(["22", "+", "5"]));
  
  function handleEvaluate(){
    display = '...Calculating'
    fetch(`api/v1/compute?exp=${calculator.parseToURLParams()}`)
    .then(response => {
        response.json()
        .then(value => {
          /**
           * @type string
          */
          display = value.answer
          calculator.enterAnInput('CE')
          display.split("").forEach(char => {
            calculator.enterAnInput(char)
          })
        })
    }).catch(err => {
      console.log(err)
    })
  }

  /**
   * 
   * @param {string} value
   */
  function buttonHandler(value) {
    calculator.enterAnInput(value);
    display = calculator.displayExpression;
  }
</script>

<div class="calculator-container">
  <Display expression={display} />
  <div class="button-container">
    <!--1th Row-->
    <Button
      label={''}
    />
    <Button
      label={buttonCE.label}
      onClick={() => buttonHandler(buttonCE.value)}
    />
    <Button
      label={buttonC.label}
      onClick={() => buttonHandler(buttonC.value)}
    />
    <Button
      label={buttonBckSpc.label}
      onClick={() => buttonHandler(buttonBckSpc.value)}
    />

    <!--2th Row-->
    <Button
      label={button7.label}
      onClick={() => buttonHandler(button7.value)}
    />
    <Button
      label={button8.label}
      onClick={() => buttonHandler(button8.value)}
    />
    <Button
      label={button9.label}
      onClick={() => buttonHandler(button9.value)}
    />
    <LargeButton
      label={buttonDiv.label}
      onClick={() => buttonHandler(buttonDiv.value)}
    />

    <!--3th Row-->
    <Button
      label={button4.label}
      onClick={() => buttonHandler(button4.value)}
    />
    <Button
      label={button5.label}
      onClick={() => buttonHandler(button5.value)}
    />
    <Button
      label={button6.label}
      onClick={() => buttonHandler(button6.value)}
    />
    <LargeButton
      label={buttonMult.label}
      onClick={() => buttonHandler(buttonMult.value)}
    />

    <!--4th Row-->
    <Button
      label={button1.label}
      onClick={() => buttonHandler(button1.value)}
    />
    <Button
      label={button2.label}
      onClick={() => buttonHandler(button2.value)}
    />
    <Button
      label={button3.label}
      onClick={() => buttonHandler(button3.value)}
    />
    <LargeButton
      label={buttonMinus.label}
      onClick={() => buttonHandler(buttonMinus.value)}
    />

    <!-- 5th row-->
    <Button
      label={buttonDot.label}
      onClick={() => buttonHandler(buttonDot.value)}
    />
    <Button
      label={button0.label}
      onClick={() => buttonHandler(button0.value)}
    />
    <Button
      label={buttonEquals.label}
      onClick={handleEvaluate}
    />

    <LargeButton
      label={buttonPlus.label}
      onClick={() => buttonHandler(buttonPlus.value)}
    />
  </div>
</div>

<style>
  .calculator-container {
    height: 720px;
    width: 560px;
    border: 2px solid black;
    border-radius: 20px;
  }

  div.button-container {
    margin: 0 35px 40px 35px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;
    align-items: center;
    justify-items: center;
  }
</style>

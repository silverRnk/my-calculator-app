

class SimpleCalculator {
  
  constructor() {
    /**
   * @type string[]
   */
    this.expression = [];
  }

  /**
   * Add the number or operator to your expression
   * @param {string} inputValue
   */
  #appendExpression(inputValue) {
    console.log(inputValue.match(/[0-9]*/g) ? true : false);
    if (
      inputValue.match(/[0-9.]/g) &&
      this.expression.length % 2 == 1
    ) {
      if (
        inputValue === "." &&
        !this.expression[this.expression.length - 1].match(/[.]/g)
      ) {
        this.expression[this.expression.length - 1] =
          this.expression[this.expression.length - 1] + inputValue;
      } else if (inputValue.match(/[0-9]/g)) {
        this.expression[this.expression.length - 1] =
          this.expression[this.expression.length - 1] + inputValue;
      }
    } else if (
      inputValue.match(/[+=*/]/g) &&
      this.expression.length % 2 == 1
    ) {
      this.expression.push(inputValue);
    } else if (
      inputValue.match(/[0-9.]/g) &&
      this.expression.length % 2 == 0
    ) {
      this.expression.push(inputValue);
    }
    console.log(this.expression);
  }

  #backSpace() {
    let lastEntry = this.expression.pop();
    if (lastEntry !== "" || lastEntry !== undefined) {
      lastEntry = lastEntry?.slice(0, -1);
      lastEntry && this.expression.push(lastEntry);
    }
  }

  parseToURLParams(){
    return this.getExpression.replace('+', '%2B').replace('/', '%2F')
  }

  get getExpression() {
    return this.expression.join(" ");
  }

  /**
   *
   * @param {string} calculatorInput
   */
  set enterAnInput(calculatorInput) {
    if (calculatorInput === "CE") {
      this.expression = [];
    } else if (calculatorInput === "C") {
      this.expression.pop();
    } else if (calculatorInput === "BckSpc") {
      this.#backSpace();
    } else if (calculatorInput === "=") {
    } else {
      this.#appendExpression(calculatorInput);
    }
  }

  /**
   *
   * @param {string[]} exp
   */
  static calculate(exp) {
    let operator2, operand2, operator1, operand1;
    operand1 = exp.pop()
    operator1 = exp.pop()
    operand2 = exp.pop()
    operator2 = exp.pop()
    
    while (
      exp.length > 0 ||
      operator1 ||
      operand2 ||
      operator2
    ) {
      console.log(operator2, operand2, operator1, operand1)
      
      if (operator1 === "*" || operator1 === "/") {
        switch (operator1) {
          case "*":
            operand1 = `${Number(operand1) * Number(operand2)}`;
            break;
          case "/":
            if (Number(operand1) == 0) {
              throw new Error("cannot divide by zero");
            }
            operand1 = `${Number(operand2) / Number(operand1)}`;
            break;
          default:
        }

        operator1 = operator2;
        operand2 = exp?.pop() ?? "";
        operator2 = exp?.pop() ?? "";
      } else {
        //if the operand 2 is * or / get the next last element for exp
        // then evaluate operand2 to the last element of exp
        if (operator2 === "*" || operator2 === "/") {
          let tempOperand = exp?.pop();
          switch (operator2) {
            case "*":
              operand2 = `${Number(tempOperand) * Number(operand2)}`;
              break;
            case "/":
              if (Number(operand1) == 0) {
                throw new Error("cannot divide by zero");
              }
              operand2 = `${Number(tempOperand) / Number(operand1)}`;
              break;
            default:
          }

          operator2 = exp?.pop() ?? "";
        } else {
          switch (operator1) {
            case "+":
              operand1 = `${Number(operand2) + Number(operand1)}`;
              break;
            case "-":
              operand1 = `${Number(operand2) - Number(operand1)}`;
              break;
            default:
          }
          operator1 = operator2;
          operand2 = exp?.pop() ?? "";
          operator2 = exp?.pop() ?? "";
        }
      }
      
    }
    return operand1;
  }
}

/**
 *
 * @param {any} label
 * @param {string} value
 */
function CalculatorButton(label, value) {
  return { label, value };
}

class Expression {
  constructor() {
    this.operand = "";
    this.operator = "";
    /**
     * @type Expression | null
     */
    this.nextExpression = null;
  }

  parseToJSON() {
    return {
      operand: this.operand,
      operator: this.operator,
      nextExpression: this.nextExpression?.parseToJSON(),
    };
  }

  /**
   *
   * @param {string} inputNum
   */
  appendOperand(inputNum) {
    this.operand = this.operand + inputNum;
  }

  /**
   *
   * @param {string} inputChar
   */
  appendOperator(inputChar) {
    this.operator = this.operator + inputChar;
  }

  /**
   *
   * @param {Expression} expression
   */
  appendNextExpression(expression) {
    this.nextExpression = expression;
  }

  /**
   * if operator if not null remove operator
   * if operator is null and operand is not null
   */
  backspace() {
    if (this.operator) {
      this.operator = "";
    } else if (this.operand) {
      this.operand = this.operand.slice(0, -1);
    }
  }
}

export { SimpleCalculator, CalculatorButton };

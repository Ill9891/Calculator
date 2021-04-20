let calculator = {
    that: null,
    numField: document.getElementById("num-field"),
    numButtons: document.getElementsByClassName("num-buttons"),
    operationButtons: document.getElementsByClassName("operation-buttons"),

    temporaryFirstNumber: null,
    secondValue: 0,
    operationSign: null,
    result: null,

    init: function () {
        that = this;

        for (let index = 0; index < this.numButtons.length; index++) {
            this.addNumEventListener(index);
        }

        for (let index = 0; index < this.operationButtons.length; index++) {
            this.addOperationEventListener(index);
        }
    },

    addNumEventListener: function (i) {
        this.numButtons[i].addEventListener("click", function (e) { that.numberButtonClick(e) });
    },

    addOperationEventListener: function (i) {
        this.operationButtons[i].addEventListener("click", function (e) { that.operationButtonClick(e) });
    },

    numberButtonClick: function (e) {

        let clickedElement = e.currentTarget;
        let numValue = clickedElement.innerHTML;

        if (this.operationSign != null) {
            this.secondValue += numValue;
            this.numField.value = Number(this.secondValue);
        } else if (this.numField.value === "0") {
            this.numField.value = numValue;
        } else {
            this.numField.value += numValue;
        }
    },

    operationButtonClick: function (e) {
        if (this.operationSign === null) {
            this.temporaryFirstNumber = this.numField.value;
        }

        this.clickedElement = e.currentTarget;
        this.sign = this.clickedElement.innerHTML;

        if (this.sign === "=") {
            this.equality(this.operationSign);
        } else if (this.sign === "C") {
            this.numField.value = 0;
            this.ditch();
        } else {
            this.operationSign = this.clickedElement.innerHTML;
        }
    },

    equality: function (operation) {
        if (operation === "+") {
            this.result = Number(this.temporaryFirstNumber) + Number(this.numField.value);
        } else if (operation === "-") {
            this.result = Number(this.temporaryFirstNumber) - Number(this.numField.value);
        } else if (operation === "*") {
            this.result = Number(this.temporaryFirstNumber) * Number(this.numField.value);
        } else if (operation === "/") {
            this.result = Number(this.temporaryFirstNumber) / Number(this.numField.value);
        } else {
            this.alert("Error!");
        }

        this.numField.value = this.result;

        this.ditch();
    },

    ditch: function () {
        this.temporaryFirstNumber = null;
        this.sign = null;
        this.operationSign = null;
        this.secondValue = 0;
    }
}
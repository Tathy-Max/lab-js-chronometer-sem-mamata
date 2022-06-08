const chronometer = new Chronometer();

const btnLeft = document.getElementById(‘btnLeft’);
const btnRight = document.getElementById(‘btnRight’);

let minDec = document.getElementById(‘minDec’);
let minUni = document.getElementById(‘minUni’);
let secDec = document.getElementById(‘secDec’);
let secUni = document.getElementById(‘secUni’);
let milDec = document.getElementById(‘milDec’);
let milUni = document.getElementById(‘milUni’);
let splits = document.getElementById(‘splits’);
function printTime() {
  printMinutes();
  printSeconds();
}
function printMinutes() {
  let minDec = chronometer.getMinutes();
  minDec.innerText = chronometer.computeTwoDigitNumber(minDec)[0];
  minUni.innerText = chronometer.computeTwoDigitNumber(minDec)[1];
}
function printSeconds() {
  console.log(‘passei caraleo!’);
}
function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {
  chronometer.start(printTime);
}
function setResetBtn() {}
// Start/Stop Button
btnLeft.addEventListener(‘click’, () => {
  setStartBtn();
});
// Reset/Split Button
btnRight.addEventListener(‘click’, () => {});






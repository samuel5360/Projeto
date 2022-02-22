function oneThroughTwenty() {

  let Number = [];

  for (i = 1; i <= 20; i++) {
    Number.push(i)
  }
  return Number;
}

oneThroughTwenty()

//------------------------------------------------------------------------------------------
function evensToTwenty() {

  let Pair = [];

  for (i = 2; i <= 20; i += 2) {
    Pair.push(i)
  }
  return Pair;

}

evensToTwenty()

//----------------------------------------------------------------------------------------------
function oddsToTwenty() {

  let Odds = [];

  for (i = 1; i <= 19; i += 2) {
    Odds.push(i)
  }
  return Odds;
}

oddsToTwenty()

//---------------------------------------------------------------------------------------------------
function multiplesOfFive() {

  let Multiples = [];

  for (i = 5; i <= 100; i = i + 5) {
    Multiples.push(i)
  }
  return Multiples;
}

multiplesOfFive()

//--------------------------------------------------------------------------------------------------
function squareNumbers() {

  let SquarePerfect = [];

  for (i = 1; i <= 100; i += 1) {
    SquarePerfect.push(i * i)
  }
  return SquarePerfect;
}

squareNumbers()

//--------------------------------------------------------------------------------------------------------
function countingBackwards() {

  let NumbersBack = [];

  for (i = 20; i >= 1; i--) {

    NumbersBack.push(i)
  }
  return NumbersBack;
}

countingBackwards()

//---------------------------------------------------------------------------------------------------------
function evenNumbersBackwards() {


  let PairBack = [];

  for (i = 20; i >= 2; i -= 2) {
    PairBack.push(i);
  }
  return PairBack;
}

evenNumbersBackwards()

//----------------------------------------------------------------------------------------------------------------
function oddNumbersBackwards() {
  
  OddsBack = [];

  for (i = 19; i >= 1; i -= 2) {
    OddsBack.push(i)
  }
  return OddsBack;
}

oddNumbersBackwards()

//---------------------------------------------------------------------------------------------------------------
function multiplesOfFiveBackwards() {

  MultiplesBack = [];

  for (i = 100; i >=5; i -= 5) {
    MultiplesBack.push(i)
  }
  return MultiplesBack;
}

multiplesOfFiveBackwards()

//-----------------------------------------------------------------------------------------------------------------
function squareNumbersBackwards() {

  let SquarePerfectBack = [];

  for (i = 100; i >= 1; i -= 1) {
    SquarePerfectBack.push(i * i)
  }
  return SquarePerfectBack;
}

squareNumbersBackwards()





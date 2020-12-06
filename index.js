// Your code here
function saturdayFun(str="roller-skate"){
  return `This Saturday, I want to ${str}!`;
}
function mondayWork(str="go to the office"){
  return `This Monday, I will ${str}.`;
}

function wrapAdjective(flair="*"){
  return function(str="special"){
    return `${flair}You are ${str}${flair}`;
  }
}
let Calculator={
  add : function() {
    return 1 + 3;
}
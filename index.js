// Your code here
function saturdayFun(str="roller-skate"){
  return `This Saturday, I want to ${str}!`;
}
function mondayWork(str="go to the office"){
  return `This Monday, I will ${str}.`;
}

function wrapAdjective(flair="*"){
  return function(type="special"){
    return `You are ${flair}${type}${flair}!`;
  }
}

let Calculator={
  add : function() {
    return 1 + 3;
},
  subtract : function() {
    return 1 -3;
},
  multiply : function() {
    return 1 * 3;
},
divide : function() {
    return 10/5 ;
}
}
function actionApplyer(num,arr){
 if (arr === undefined || arr.length === 0){
  return num;
  }
  else{
    arr=[
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
    ]
    let n1=arr[0](num);
    let n2=arr[1](n1);
    let n3=arr[2](n2);
    return n3;
  }
}
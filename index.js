var katzDeliLine = [];

// when someone comes in, thats there number
  // when next person comes in, they are number number+1
// referencing the customer by their number
var number = 0;
function takeANumber(line, name){
  // put person in back of line
  // name, push that to end of line
    // give them number, number++
  line.push(name);
  number++;
  // welcome message
  return(`Welcome you are ticket number ${number} in line.`);
}

function nowServing(line){
  // if no one in line
  if(line.length === 0){
    return('There is nobody waiting to be served!');
  }
  // shift returns name and removes first element
  return('Currently serving ' + line.shift() + '.');
}

function currentLine(line){
  // if no one in line
  if(line.length === 0){
    return('The line is currently empty.');
  }
  // resulting array
  var lineNameAndPlace = [];

  // loop to give number with person
  for(let i = 0; i < line.length; i++){
    lineNameAndPlace.push(i+1 + '. ' + line[i]);
  }
  // combining resulting array
  return('The line is currently: ' + lineNameAndPlace.join(', '));
}

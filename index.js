var katzDeliLine = [];

function takeANumber(line, name){
  // put person in back of line
  line.push(name);
  // welcome message
  return("Welcome, " + name + ". You are number " + line.length + ' in line.');
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
  /*
  // resulting array
  var lineNameAndPlace = [];

  // loop to give number with person
  for(let i = 0; i < line.length; i++){
    lineNameAndPlace.push(i+1 + '. ' + line[i]);
  }
  // combining resulting array
  return('The line is currently: ' + lineNameAndPlace.join(', '));
  */

  for(let i = 0; i < line.length; i++) {
    return('The line is currently: 'i+1 + '. ' + line.shift() + ', ');
  }
}

// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("Rover is now facing: " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "W":
    rover.direction = "N";
    break;
    case "S":
    rover.direction = "W";
    break;
  }
  console.log("Rover is now facing: " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
  if (rover.direction === "N") {
    rover.y--
    console.log("Rover is: " + rover.x + ", " + rover.y);
    rover.travelLog.push([rover.x, rover.y])
  } else if (rover.direction === "E") {
    rover.x++
    console.log("Rover is: " + rover.x + ", " + rover.y);
    rover.travelLog.push([rover.x, rover.y])
  } else if (rover.direction === "S") {
    rover.y++
    console.log("Rover is: " + rover.x + ", " + rover.y);
    rover.travelLog.push([rover.x, rover.y])
  } else if (rover.direction === "W") {
    rover.x--
    console.log("Rover is: " + rover.x + ", " + rover.y);
    rover.travelLog.push([rover.x, rover.y]);
  }
}

function commands(str){
  for (let i = 0; i < str.length; i++) {
    if (i === 'r'){
      turnRight(rover);
    } else if (i === 'l'){
      turnLeft(rover);
    } else if (i === 'f'){
      moveForward(rover);
    } else console.log("Not a command.");
  }
}
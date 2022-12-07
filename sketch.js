// Create an array to store the snowflakes
let snowflakes = [];

// Create a variable to store the wind strength
let wind = 0;

function setup() {
  // Set the size of the canvas
  const width = windowWidth;
  const height = windowHeight;

  createCanvas(width, height);

  // Create a large number of snowflakes
  for (let i = 0; i < 900; i++) {
    snowflakes.push(new Snowflake());
  }
}

function draw() {
  background(0);

  // Update and display the snowflakes
  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
    snowflakes[i].display();
  }

  // Draw the wind strength on the screen
  // fill(255);
  // noStroke();
  // text("Wind: " + wind, 10, 20);
}

// Create the snowflake class
class Snowflake {
  constructor() {
    // Initialize the position with a random x and y value
    this.pos = createVector(random(width), random(-height, 0));

    // Initialize the velocity with a random x and y value
    this.vel = createVector(random(-1, 1), random(2));

    // Initialize the size with a random value
    this.size = random(3, 8);
  }

  // Method to update the position of the snowflake
  update() {
    // Apply the wind force to the velocity
    this.vel.x += wind;

    // Update the position by adding the velocity
    this.pos.add(this.vel);

    // If the snowflake reaches the bottom of the screen,
    // reset its position to the top
    if (this.pos.y > height) {
      this.pos = createVector(random(width), random(-height, 0));
    }
    // If snow exits on left or right, it comes back in from
    // the other side
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
  }

  // Method to display the snowflake on the screen
  display() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

// Function to change the wind strength when the mouse is pressed
// function mousePressed() {
//   wind = random(-0.1, 0.1);
// }

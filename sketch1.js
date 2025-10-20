class Worm {
  constructor(){
    this.xVals = []
    this.yVals = []
    this.numSegments = floor(random(50,200))
    for(let i = 0; i<this.numSegments;i++){
        this.xVals[i] = mouseX;
        this.yVals[i] = mouseY;
    }
    this.counter = 0;
    this.speed = random(0.005,0.02);
    this.offset = random(1,100);
    
    this.diameter = random(50,150)
    
    this.col1 = color(random(255),random(255),random(255));
    this.col2 = color(random(255),random(255),random(255));
  
  }
  
  move(){
    this.xVals[this.numSegments -1] = noise(this.counter) * width
  this.yVals[this.numSegments -1] = noise(this.counter+this.offset) * height
    
    
   this.counter+=this.speed;
    
  }
  
  display(){
  
    for(let i = 0; i< this.numSegments-1; i++){
  
    this.xVals[i] = this.xVals[i+1]
    this.yVals[i] = this.yVals[i+1]
    
    
    let l = sin(map(i, 0,this.numSegments, 0,PI));
      
    let col = lerpColor(this.col1, this.col2, l);
   
    
    stroke(col);
      fill(0)
    
    let d = sin(map(i, 0,this.numSegments, 0,PI))
    
    ellipse(this.xVals[i], this.yVals[i], this.diameter*d)
  }
    
  }
}


let worms = [] 

let c;

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  
}

function draw() {

  c.position(0,0);
  c.style('z-index',-1);
  
  background(0);
  for(let i = 0; i<worms.length; i++){
    worms[i].move()
    worms[i].display()
  }
  
}

function mousePressed(){
  worms.push(new Worm())
  
}
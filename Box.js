class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      stroke("black");
      strokeWeight(2);
      rectMode(CENTER);
      fill("lightblue")
      rect(0, 0, this.width, this.height);
      pop();
    }
}
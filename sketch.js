let data; 

function preload() {
  
  data = loadTable('w5.csv');
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  noStroke();
  
 
  background(240);
  
  /
  let radius = 50; 
  
  for (let i = 0; i < data.getRowCount(); i++) {
    let category = data.getString(i, 'Category');
    let value = data.getString(i, 'Value');
    
    
    let x = (i + 1) * (width / (data.getRowCount() + 1));
    let y = height / 2;
    
    
    let c;
    switch (category) {
      case 'Favorite Color':
        c = color(0, 0, 255); 
        break;
      case 'Favorite Activity':
        c = color(255, 0, 0); 
        break;
      case 'Favorite Food':
        c = color(255, 204, 0); 
        break;
      case 'Favorite Movie':
        c = color(0, 255, 0); 
        break;
      case 'Favorite Music Genre':
        c = color(255, 0, 255); 
        break;
      case 'Favorite Animal':
        c = color(255, 165, 0); 
        break;
      default:
        c = color(200);
    }
    
    fill(c);
    ellipse(x, y, radius, radius);
    
    
    fill(0);
    textSize(16);
    text(category, x, y - radius / 2 - 10);
    textSize(14);
    text(value, x, y + radius / 2 + 10);
  }
}

function draw() {
  
}

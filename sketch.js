let scene;
let mouseIsReleased;
let maps;
let my_range_slider, output, device_orientation;
let txt_table;
let img;
let imbg;

function preload()
{
  maps = [];
  maps[0] = loadImage ("assets/1995.png");
  maps[1] = loadImage ("assets/NODATA.png");
  maps[2] = loadImage ("assets/NODATA.png");
  maps[3] = loadImage ("assets/NODATA.png");
  maps[4] = loadImage ("assets/NODATA.png");
  maps[5] = loadImage ("assets/NODATA.png");
  maps[6] = loadImage ("assets/NODATA.png");
  maps[7] = loadImage ("assets/2002_2003.png");
  maps[8] = loadImage ("assets/2002_2003.png");
  maps[9] = loadImage ("assets/NODATA.png");
  maps[10] = loadImage ("assets/NODATA.png");
  maps[11] = loadImage ("assets/NODATA.png");
  maps[12] = loadImage ("assets/NODATA.png");
  maps[13] = loadImage ("assets/NODATA.png");
  maps[14] = loadImage ("assets/2009.png");
  maps[15] = loadImage ("assets/2010.png");
  maps[16] = loadImage ("assets/2011.png");
  maps[17] = loadImage ("assets/2012.png");
  maps[18] = loadImage ("assets/2013MissinHouses.png");
  
  //we give a number to the map to make a sequence, will the assign a image to each number of the array
  
  txt_table = loadTable("txt_table.csv", "csv", "header");
  
 img = loadImage ("assets/WolfImage.png");
  
//this tells the fucntion to load the image from the assets
  
  imgbg = loadImage ("assets/backgroundvis.png")
  
  //this tells the fucntion to load the image from the assets
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  
  if (width > height) device_orientation = "l";
  else
  if (width < height) device_orientation = "p";
  
  
  my_range_slider = new RangeSlider (1995, 2013, 1, 1995); // (min, max, step, value)
  //the slider will go from 1991 to 2019 jumping trought each year one by one
  
  output = 0;
  scene = 1;
  mouseIsReleased = true;
  
  importData();
  
  //this would import the data from the data tables
}


function draw() 
{
  if (scene === 1) intro();
  else 
  if (scene === 2) context();
  else
  if (scene === 3) vis();
  //this fuction specifies wich scene is wich, lets say we traded intro to context then context would be the first scene.
  //this scene needs to be put in the scope of work inside of the html in order to work 
  
}


function mouseReleased() 
{
  mouseIsReleased = true;
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
  
  //resizes the canvas size
}


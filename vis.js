


function vis() 
{
  background (output);
  image(imgbg, windowWidth/2, windowHeight/2);
  
  const x = width/2; //postition in x
  const y = height-50; // height of slider bar
  const w = (width/4)*3; //width of the slider bar
  const h = 15;//height of slider bar
  
  my_range_slider.position (x-w/2, y-h/2); // (x, y)
  my_range_slider.size (w, h); // (width, height)
  
  output = my_range_slider.value();
  const i = output-1995;
  
  if (device_orientation === "l") 
  {
    maps[i].resize(0, height);
    drawData(i, 300, 50);
  //this draw the data from the text table
  }
  else
  if (device_orientation === "p") 
  {
    textSize(10);
    maps[i].resize(width, 0);
    drawData(i, width/2, 50);
  //this draw the data from the text table
    
  }
  

  imageMode (CENTER);
  image (maps[i], width/2, height/2);  //we tell the slider were to go grab the images and were they will be placed and theyre size
  
  
  
  noFill();
  stroke (25, 25, 25); // this will give the color to the slider
  
  //rect (my_range_slider.slider().x, my_range_slider.slider().y, my_range_slider.slider().w, my_range_slider.slider().h);

  for (let i=0; i<=my_range_slider.numTickMarks(); i++) 
  {
    line (i * my_range_slider.numPixelsPerTickMark() + my_range_slider.slider().x, my_range_slider.track().y1 - h/4,
          i * my_range_slider.numPixelsPerTickMark() + my_range_slider.slider().x, my_range_slider.track().y1 + h/4);
  }

  line (my_range_slider.track().x1, my_range_slider.track().y1, my_range_slider.track().x2, my_range_slider.track().y2);
  
  fill (0, 0, 0);
  ellipse (my_range_slider.thumb().x, my_range_slider.thumb().y, 10); //this gives the color to the date number and the slider movable circle

  
  textAlign (CENTER, CENTER);
  textSize (20);
  text (output, width/2, height-50-25); //we changed the height of the text, in this case the year, to better suit our project
  //this changes the heitht of the text in the range slider
}


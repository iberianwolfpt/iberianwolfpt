function intro() 
{
  background (202, 180, 155);
  //we use this to change the background color
  
  if (device_orientation === "l") 
  {
    text ("You will see a visualization beetween houses built in portugal and the current", width/2, height*0.9-130);
  text (" population of the iberian wolf, with the objective of trying to show a", width/2, height*0.9-110);
  text ("correlation beetween the two and how the growth of the portuguese populace may,", width/2, height*0.9-90);
    text ("have impacted the territory of this species", width/2, height*0.9-70);
  }
  else
  if (device_orientation === "p") 
  {
    textSize(10);
   text ("You will see a visualization beetween houses built in portugal and the current", width/2, height*0.9-130);
  text (" population of the iberian wolf, with the objective of trying to show a", width/2, height*0.9-110);
  text ("correlation beetween the two and how the growth of the portuguese populace may,", width/2, height*0.9-90);
    text ("have impacted the territory of this species", width/2, height*0.9-70);
    
  } 
  

  let title_size = 20;
  textSize (title_size);
  textAlign (CENTER, CENTER);
  fill (25);
  textSize (title_size*3);
  text ("Iberian Wolf", width/2, height/2 - title_size*3);
  textSize (title_size);
  text ("A Populational Crisis", width/2, height*0.6 - title_size*3);
  
  
  
 let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height-75;
  //coordinates of the rectangle button
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 50;
  //size of the rectangle button, first on being the width and the second one being the height
  
  rectMode (CENTER);
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  //button
  {
    scene = 2;
    mouseIsReleased = false;
    //this makes it so when you click the button it wont keep skipping trought the different scenes while its held
  }
  
}



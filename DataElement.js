class DataElement 
{
  constructor (year, txt) 
  {
    this.year  = year;
    this.txt   = txt;
  }

  drawDataElement (x, y) 
  {
    noStroke();
    fill (0);
    textAlign (LEFT, TOP);
    textSize (20);
    text (this.txt, x, y);
    //we can use this to change the properties ofthe display text of the text array
  }
}


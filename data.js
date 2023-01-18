function importData() 
{
  data_elements = [];
  
  for (let r=0; r<txt_table.getRowCount(); r++) 
  {
    const year  = txt_table.getString (r, 0);
    const txt   = txt_table.getString (r, 1);
    
    data_elements[r] = new DataElement (year, txt);
    //this fucntion imports the data from the data element to prepare a array
  }
}


function drawData (i, x, y) 
{
  //data_elements[i].drawDataElement (x, y);
  text(data_elements[i].txt,x,y);
  //we tried some other ways to draw this element, so instead of using how it was set on data element to change its size we can now change it in the different scens we call it in directly.
  
}
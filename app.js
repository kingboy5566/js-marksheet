

var eng = +prompt ("Emter youer Englis marks:") ;
var math =  +prompt ("Emter youer Math marks:") ;
var urdu = +prompt ("Emter youer Urdu marks:") ;


var obtainingMarks = eng+math+urdu;
var total = 300
var per =(obtainingMarks /total)*100


//document.write(per )





if ( per >= 80 && per <= 100){
                      document.write("Total Marks 300 ");
                      document.write("<br> Obtaining Marks " + obtainingMarks);
                      document.write("<br> Percentage " + per + "%");
                      document.write("<br> Grade: A-one ");
                      document.write("<br> You need to improve ") }

 else if( per >= 70 && per < 80){
                      document.write("Total Marks 300 ");
                      document.write("<br>  Obtaining Marks " + obtainingMarks);
                      document.write("<br> Percentage " + per + "%");
                      document.write("<br> Grade:A");
                      document.write("<br>You need to improve ") }
 else if( per >= 60 && per < 70){
                     
                             document.write(" <br>Total Marks 300 <br>");
                             document.write( " <br> Obtaining Marks " + obtainingMarks);
                             document.write(" <br> Percentage " + per  + "%");
                             document.write(" <br> Grade:B"); 
                             document.write("<br> You need to improve ") }
else if( per >= 50 && per < 60){
                                document.write("Total Marks 300");
                                document.write("<br>  Obtaining Marks " + obtainingMarks);
                                document.write("<br> Percentage " + per  + "%");
                                document.write("<br> Grade: C"); 
                                document.write("<br> You need to improve ") }
     
else if (per <= 40){
                      document.write("Total Marks 300 ");
                      document.write("<br> Obtaining Marks " + obtainingMarks);
                      document.write("<br> Percentage " + per  + "%");
                      document.write("<br> you are fail");}

     else {
            document.write(" <br> You will be not improve ");}











    // Create an SVG container using D3.js
    var svg = d3.select("#diagram");

    // resistor element1
    var element1 = svg.append("image")
        .attr("x", 110)
        .attr("y", 126)
        .attr("width", 60)
        .attr("height", 30)
        .attr("xlink:href", "resistor1.png")
         .on("click", function () {
        toggleConnection(element1);
         });       
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 170)
        .attr("cy", 140)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 110)
        .attr("cy", 140)
        .attr("r", 4)
        .attr("fill", "green");



    // resistor element2
    var element2 = svg.append("image")
        .attr("x", 210)
        .attr("y", 126)
        .attr("width", 60)
        .attr("height", 30)
        .attr("xlink:href", "resistor1.png")
         .on("click", function () {
        toggleConnection(element2);
         }); 

    var sourceEndpoint = svg.append("circle")
        .attr("cx", 210)
        .attr("cy", 140)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 270)
        .attr("cy", 140)
        .attr("r", 4)
        .attr("fill", "green");


    

    // resistor element3
    var element3= svg.append("image")
        .attr("x", 40)
        .attr("y", 456)
        .attr("width", 60)
        .attr("height", 30)
        .attr("xlink:href", "resistor1.png")
        .on("click", function () {
        toggleConnection(element3);
         });        

    element3.attr("transform", "rotate(90, " + (290 + 75/2) + ", " + (300 + 65/2) + ")");
    
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 190)
        .attr("cy", 105)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 190)
        .attr("cy", 45)
        .attr("r", 4)
        .attr("fill", "green");

    


    // capacitor element4
    var element4= svg.append("image")
        .attr("x", 150)
        .attr("y", 165)
        .attr("width", 80)
        .attr("height", 40)
        .attr("xlink:href", "capacitor.png")
        .on("click", function () {
        toggleConnection(element4);
         });        
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 190)
        .attr("cy", 205)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 190)
        .attr("cy", 165)
        .attr("r", 4)
        .attr("fill", "green");



  //Ground element5
       var element5 = svg.append("image")
        .attr("x", 150)
        .attr("y", 240)
        .attr("width", 80)
        .attr("height", 40)
        .attr("xlink:href", "ground.png")
         .on("click", function () {
        toggleConnection(element5);
         }); 
      var targetEndpoint = svg.append("circle")
        .attr("cx", 190)
        .attr("cy", 240)
        .attr("r", 4)
        .attr("fill", "green");






    // capcitor element6
    var element6= svg.append("image")
        .attr("x", 250)
        .attr("y", 55)
        .attr("width", 80)
        .attr("height", 40)
        .attr("xlink:href", "capacitor.png")
        .on("click", function () {
        toggleConnection(element6);
         });   
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 290)
        .attr("cy", 95)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 290)
        .attr("cy", 55)
        .attr("r", 4)
        .attr("fill", "green");



    // opamp element7
    var element7 = svg.append("image")
        .attr("x", 320)
        .attr("y", 100)
        .attr("width", 150)
        .attr("height", 120)
        .attr("xlink:href", "opamp.png")
         .on("click", function () {
        toggleConnection(element7);
         }); 
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 335)
        .attr("cy", 140)
        .attr("r", 4)
        .attr("fill", "green");
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 455)
        .attr("cy", 160)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 335)
        .attr("cy", 175)
        .attr("r", 4)
        .attr("fill", "green");



    // resistor element8
    var element8= svg.append("image")
        .attr("x", 200)
        .attr("y", 311)
        .attr("width", 60)
        .attr("height", 30)
        .attr("xlink:href", "resistor1.png")
        .on("click", function () {
        toggleConnection(element8);
         });        

    element8.attr("transform", "rotate(90, " + (290 + 75/2) + ", " + (300 + 65/2) + ")");
    
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 335)
        .attr("cy", 205)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 335)
        .attr("cy", 265)
        .attr("r", 4)
        .attr("fill", "green");


  //Ground element9
       var element9 = svg.append("image")
        .attr("x", 295)
        .attr("y", 290)
        .attr("width", 80)
        .attr("height", 40)
        .attr("xlink:href", "ground.png")
         .on("click", function () {
        toggleConnection(element9);
         }); 
    var targetEndpoint = svg.append("circle")
        .attr("cx", 335)
        .attr("cy", 290)
        .attr("r", 4)
        .attr("fill", "green");


 // capcitor element10
    var element10 = svg.append("image")
        .attr("x", 115)
        .attr("y", 110)
        .attr("width", 80)
        .attr("height", 40)
        .attr("xlink:href", "capacitor.png")
         .on("click", function () {
        toggleConnection(element10);
         });    
      element10.attr("transform", "rotate(90, " + (290 + 75/2) + ", " + (300 + 65/2) + ")");   
    var sourceEndpoint = svg.append("circle")
        .attr("cx", 550)
        .attr("cy", 160)
        .attr("r", 4)
        .attr("fill", "green");
    var targetEndpoint = svg.append("circle")
        .attr("cx", 510)
        .attr("cy", 160)
        .attr("r", 4)
        .attr("fill", "green");

  svg.append("text")
    .attr("x", 140)
    .attr("y", 125)
    .attr("text-anchor", "middle")
    .text("R1");


  svg.append("text")
    .attr("x", 240)
    .attr("y", 125)
    .attr("text-anchor", "middle")
    .text("R2");


  svg.append("text")
    .attr("x", 165)
    .attr("y", 80)
    .attr("text-anchor", "middle")
    .text("R3");


  svg.append("text")
    .attr("x", 160)
    .attr("y", 190)
    .attr("text-anchor", "middle")
    .text("C1");

  svg.append("text")
    .attr("x", 263)
    .attr("y", 80)
    .attr("text-anchor", "middle")
    .text("C2");

  svg.append("text")
    .attr("x", 310)
    .attr("y", 240)
    .attr("text-anchor", "middle")
    .text("R4");

  svg.append("text")
    .attr("x", 385)
    .attr("y", 95)
    .attr("text-anchor", "middle")
    .text("+12V");

  svg.append("text")
    .attr("x", 385)
    .attr("y", 235)
    .attr("text-anchor", "middle")
    .text("-12V");

    svg.append("text")
    .attr("x", 530)
    .attr("y", 140)
    .attr("text-anchor", "middle")
    .text("C3");

    svg.append("text")
    .attr("x", 190)
    .attr("y", 300)
    .attr("text-anchor", "middle")
    .text("G1");

    svg.append("text")
    .attr("x", 335)
    .attr("y", 350)
    .attr("text-anchor", "middle")
    .text("G2");

var connection = null; // Initialize the connection as null
var resistor1click = false;
var resistor2click = false;
var resistor3click = false;
var capacitor1click = false;
var ground1click =false;
var capacitor2click = false;
var opampclick = false;
var resistor4click = false;
var ground2click = false;
var capacitor3click = false;
var allconnected= false;
connection1= false;
connection2= false;
connection3= false;
connection4= false;
connection5= false;
connection6= false;
connection7= false;
connection8= false;
connection9= false;
connection10= false;

alert("Click on the resistor R1 and then click on resistor R2")

function toggleConnection(element) {
  if (element === element1) {
        resistor1click = true;
        console.log('message');
    } else if (element === element2) {
        resistor2click = true;
        console.log('message1');
    } else if (element === element3) {
        resistor3click = true;
        console.log('message2');
    } else if (element === element4) {
        capacitor1click = true;
    } else if (element === element5) {
        ground1click = true;
    } else if (element === element6) {
        capacitor2click = true;
    } else if (element === element7) {
        opampclick = true;
    } else if (element === element8) {
        resistor4click = true;
    } else if (element === element9) {
         ground2click = true;
    }  else if (element === element10) {
        capacitor3click = true;
    }



    //Connection between the resistor1 and resistor2

    if (resistor1click && resistor2click) {
            // Create the connection line

            connection = svg.append("line")
                .attr("x1", +element1.attr("x") + +element1.attr("width")-6)
                .attr("y1", +element1.attr("y") + +element1.attr("height") / 2)
                .attr("x2", +element2.attr("x")+6)
                .attr("y2", +element2.attr("y") + +element2.attr("height") / 2)
                .attr("stroke", "green")
                .attr("stroke-width", 2);
        resistor1click = false;
        resistor2click = false;
        connection1= true;
        console.log("aaaaaaaaaaaaaa");
        alert("Click on the resistor R3 and then click on capacitor C1")
        } else if (resistor1click && (resistor3click || capacitor1click || ground1click || capacitor2click || opampclick || resistor4click || ground2click || capacitor3click ) ){
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
          capacitor1click = false;
          ground1click =false;
          capacitor2click = false;
          opampclick = false;
          resistor4click = false;
          ground2click = false;
          capacitor3click = false;
        } else if (resistor2click && (resistor1click || resistor3click || ground1click || resistor4click || ground2click || capacitor3click ) ){
          console.log(resistor1click)
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
          capacitor1click = false;
          ground1click =false;
          capacitor2click = false;
          opampclick = false;
          resistor4click = false;
          ground2click = false;
          capacitor3click = false;
        }


        
// Connection between resistor3 and capacitor1
        if (resistor3click && capacitor1click) {
              var Fixedconnection3 = svg.append("line")
        .attr("x1", 190)
        .attr("y1", 100)
        .attr("x2", 190)
        .attr("y2", 170) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        resistor3click = false;
        capacitor1click = false;
        connection2= true;
         alert("Click on the capacitor C1 and then click on ground G1")
        } else if (resistor3click && (resistor1click || resistor2click || ground1click || opampclick || resistor4click || ground2click || capacitor3click ) ){
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
           capacitor1click = false;
           ground1click =false;
          capacitor2click = false;
           opampclick = false;
          resistor4click = false;
           ground2click = false;
           capacitor3click = false;
        } else if (capacitor1click && (resistor1click || resistor2click || capacitor2click || opampclick || resistor4click || ground2click || capacitor3click ) ){
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
           capacitor1click = false;
           ground1click =false;
          capacitor2click = false;
           opampclick = false;
          resistor4click = false;
           ground2click = false;
           capacitor3click = false;
        }


  //Connection between capacitor1 and ground1
        if (ground1click && capacitor1click) {
              var Fixedconnection2 = svg.append("line")
        .attr("x1", 190)
        .attr("y1", 205)
        .attr("x2", 190)
        .attr("y2", 240) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        ground1click = false;
        capacitor1click = false;
        connection3= true;
        alert("Click on the resistor R3 and then click on capacitor C2")
        }  else if (ground1click && (resistor1click || resistor2click || capacitor2click || opampclick || resistor4click || ground2click || capacitor3click || resistor3click) ){
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
           capacitor1click = false;
           ground1click =false;
          capacitor2click = false;
           opampclick = false;
          resistor4click = false;
           ground2click = false;
           capacitor3click = false;
        }

  //Connection between resistor3 and capacitor2
             if (resistor3click && capacitor2click) {
                  var Fixedconnection8 = svg.append("line")
        .attr("x1", 190)
        .attr("y1", 45)
        .attr("x2", 190)
        .attr("y2", 20) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);

    var Fixedconnection9 = svg.append("line")
        .attr("x1", 190)
        .attr("y1", 20)
        .attr("x2", 290)
        .attr("y2", 20) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);

    var Fixedconnection10 = svg.append("line")
        .attr("x1", 290)
        .attr("y1", 20)
        .attr("x2", 290)
        .attr("y2", 60) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        resistor3click = false;
        capacitor2click = false;
        connection4= true;
        alert("Click on the capacitor C2 and then click on resistor R2")
        }  else if (capacitor2click && (resistor1click || capacitor1click || opampclick || resistor4click || ground2click || ground1click) ){
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
           capacitor1click = false;
           ground1click =false;
          capacitor2click = false;
           opampclick = false;
          resistor4click = false;
           ground2click = false;
           capacitor3click = false;
        }  

//Connection between resistor4 and ground2
               if (resistor4click && ground2click) {
    var Fixedconnection1 = svg.append("line")
        .attr("x1", 335)
        .attr("y1", 290)
        .attr("x2", 335)
        .attr("y2", 260) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        resistor4click = false;
        ground2click = false;
        connection5= true;
        alert("Click on the output terminal of opamp and then click on capacitor C3")
        } else if (ground2click && (resistor1click || resistor2click || capacitor1click || opampclick || capacitor3click || ground1click || resistor3click || capacitor2click) ){
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
          capacitor1click = false;
          ground1click =false;
          capacitor2click = false;
          opampclick = false;
          resistor4click = false;
          ground2click = false;
          capacitor3click = false;
        } else if (resistor4click && (resistor1click || resistor2click || capacitor1click || capacitor3click || ground1click || resistor3click || capacitor2click ) ){
          alert("Invalid connection.")
          resistor1click = false;
          resistor2click = false;
          resistor3click = false;
          capacitor1click = false;
          ground1click =false;
          capacitor2click = false;
          opampclick = false;
          resistor4click = false;
          ground2click = false;
          capacitor3click = false;
        } 

//Connection between resistor2 and capacitor2
        if (resistor2click && capacitor2click) {
            var Fixedconnection4 = svg.append("line")
        .attr("x1", 290)
        .attr("y1", 95)
        .attr("x2", 290)
        .attr("y2", 140) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);

    var Fixedconnection5 = svg.append("line")
        .attr("x1", 270)
        .attr("y1", 140)
        .attr("x2", 290)
        .attr("y2", 140) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        resistor2click = false;
        capacitor2click = false;
        connection6= true;
        alert("Click on the resistor R2 and then click on Opamp non inverting terminal")
        } 


//Connection between resistor2 and opamp
       if (resistor2click && opampclick) {

    var Fixedconnection5 = svg.append("line")
        .attr("x1", 270)
        .attr("y1", 140)
        .attr("x2", 335)
        .attr("y2", 140) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        resistor2click = false;
        opampclick = false;
        connection7= true;
        alert("Click on the Opamp inverting terminal and then click on resistor R4")
        } 

//Connection between resistor4 and opamp
              if (resistor4click && opampclick) {
      var Fixedconnection6 = svg.append("line")
        .attr("x1", 335)
        .attr("y1", 175)
        .attr("x2", 335)
        .attr("y2", 205) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        resistor4click = false;
        opampclick = false;
        connection8= true;
        console.log("aaaa");
        alert("Click on the resistor R4 and then click on ground G2")

        } 

//Connection between opamp and capacitor3
       if (opampclick && capacitor3click) {
    var Fixedconnection7 = svg.append("line")
        .attr("x1", 455)
        .attr("y1", 160)
        .attr("x2", 510)
        .attr("y2", 160) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        capacitor3click = false;
        opampclick = false;
        connection9= true;
        alert("Click on the capacitor C2 and then click on capacitor C3")
        } 


//Connection between capacitor3 and capacitor2
      if (capacitor2click && capacitor3click) {
    var Fixedconnection10 = svg.append("line")
        .attr("x1", 290)
        .attr("y1", 20)
        .attr("x2", 290)
        .attr("y2", 60) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
    var Fixedconnection11 = svg.append("line")
        .attr("x1", 290)
        .attr("y1", 20)
        .attr("x2", 480)
        .attr("y2", 20) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);

    var Fixedconnection12 = svg.append("line")
        .attr("x1", 480)
        .attr("y1", 20)
        .attr("x2", 480)
        .attr("y2", 160) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);

    var Fixedconnection7 = svg.append("line")
        .attr("x1", 480)
        .attr("y1", 160)
        .attr("x2", 510)
        .attr("y2", 160) 
        .attr("stroke", "green")
        .attr("stroke-width", 2);
        capacitor3click = false;
        capacitor2click = false;
        connection10= true;
        } 

        if(connection1 && connection2 && connection3 && connection4 && connection5 && connection6 && connection7 && connection8 && connection9 && connection10){
            allconnected=true;
           
        }

        }
function eval()
{
    if(allconnected)//allconnected
    {
        window.open("graph.html", "_blank");   
    }
    else
    {
        window.alert("Circuit connection is not Complete");
    }
}        


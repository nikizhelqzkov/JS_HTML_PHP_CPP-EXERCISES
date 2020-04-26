function points(){
    let x = new Array();
    let y = new Array();
    x[1] = document.getElementById('x1').value;
    y[1] = document.getElementById('y1').value;
    x[2] = document.getElementById('x2').value;
    y[2] = document.getElementById('y2').value;
    x[3] = document.getElementById('x3').value;
    y[3] = document.getElementById('y3').value;
    x[4] = document.getElementById('x4').value;
    y[4] = document.getElementById('y4').value;
    x[5] = document.getElementById('x5').value;
    y[5] = document.getElementById('y5').value;
    let xc = document.getElementById('xc').value;
    let yc = document.getElementById('yc').value;
    let r = document.getElementById('r').value;
    for(var i = 1; i<=5;  i++)
    {
        
        if((x[i]-xc)*(x[i]-xc) + (y[i]-yc)*(y[i]-yc)<= r * r)
        {
            
            let inside = i + ' ';
            document.getElementById('inside').value += inside;
           
        }
    }
    for(var i = 1; i<=5;  i++)
    {
        if((x[i]-xc)*(x[i]-xc) + (y[i]-yc)*(y[i]-yc)> r * r)
        {
            let outside = i + ' ';
            document.getElementById('outside').value += outside;
          
        }
    }
}
function perimeterAndS(){
    let p = 0;
    let s = 0;
    let d = 0;
    let x = new Array();
    let y = new Array();
    x[1] = document.getElementsByName('x1').value;
    y[1] = document.getElementsByName('y1').value;
    x[2] = document.getElementsByName('x2').value;
    y[2] = document.getElementsByName('y2').value;
    x[3] = document.getElementsByName('x3').value;
    y[3] = document.getElementsByName('y3').value;
    x[4] = document.getElementsByName('x4').value;
    y[4] = document.getElementsByName('y4').value;
    x[5] = document.getElementsByName('x5').value;
    y[5] = document.getElementsByName('y5').value;
    x[6] = document.getElementsByName('x6').value;
    y[6] = document.getElementsByName('y6').value;
    x[7] = document.getElementsByName('x7').value;
    y[7] = document.getElementsByName('y7').value;
    x[8] = document.getElementsByName('x8').value;
    y[8] = document.getElementsByName('y8').value;
    for(let i = 1;i<=7;i++){
        d =d+ Math.pow(x[i]-x[i+1],2)+Math.pow(y[i]-y[i+1],2);
       // let d = Math.sqrt(parseInt((x[i+1]-x[i])*(x[i+1]-x[i])+(y[i+1]-y[i])*(y[i+1]-y[i])));
        p = p + d; console.dir(d);
    }
    p = p + Math.sqrt(Math.pow(x[8]-x[1],2)+Math.pow(y[8]-y[1],2));
    for(var i = 2;i<8;i++){
        let a = Math.sqrt(parseInt((x[1]-x[i])*(x[1]-x[i])+(y[1]-y[i])*(y[1]-y[i])));
        let b = Math.sqrt(parseInt((x[i]-x[i+1])*(x[i]-x[i+1])+(y[i]-y[i+1])*(y[i]-y[i+1])));
        let c = Math.sqrt(parseInt((x[i+1]-x[1])*(x[i+1]-x[1])+(y[i+1]-y[1])*(y[i+1]-y[1])));
        let poluperimeter = (a+b+c)/2;
        s = s + Math.sqrt(parseInt(poluperimeter*(poluperimeter-a)*(poluperimeter-b)*(poluperimeter-c))); 
    }
    document.getElementById("perimeter").value = p + ' ';
    document.getElementById("square").value = s+ ' ';
    
}
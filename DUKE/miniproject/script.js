var imageOriginal=null;
var imageFinal=null;

function check() {
    if(imageOriginal==null || ! imageOriginal.complete()) {
        alert("The image has not loaded");
        return;
    }
    return;
}

function display() {
    var canvasFinal = document.getElementById("canForFinal");
    canvasFinal.style.display = "initial";
    imageOriginal.drawTo(canvasFinal);
    var canvas = document.getElementById("canForImage");
    imageFinal.drawTo(canvas);
    imageFinal=imageOriginal;
    return;
}

function hideFeatures() {
    document.querySelector(".heading").style.display="initial";
    document.getElementById("downloadButton").style.display="initial";
    document.getElementById("fileInput").style.visibility="hidden";
    document.querySelector(".filtersAvailable").style.display="none";
    document.getElementById("reset").style.visibility="visible";
    document.getElementById("clear").style.visibility="visible";
    document.getElementById("filters").style.visibility="hidden";
    return;
}

function setRGBOfPixel(pixelParameter, redValue, greenValue, BlueValue) {
    pixelParameter.setRed(redValue);
    pixelParameter.setGreen(greenValue);
    pixelParameter.setBlue(BlueValue);
    return pixelParameter;
}

function showfeatures() {
    document.querySelector(".heading").style.display="none";
    document.getElementById("downloadButton").style.display="none";
    document.getElementById("fileInput").style.visibility="visible";
    document.querySelector(".filtersAvailable").style.display="flex";
    document.getElementById("reset").style.visibility="hidden";
    document.getElementById("clear").style.visibility="hidden";
    document.getElementById("filters").style.visibility="visible";
    return;
}



function uploadOriginal() {
    var file = document.getElementById("fl");
    imageOriginal = new SimpleImage(file);
    imageFinal = new SimpleImage(file);
    var canvas = document.getElementById("canForImage");
    imageOriginal.drawTo(canvas);
}

function doGreyScale() {
    check();
    for (var pixel of imageFinal.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel=setRGBOfPixel(pixel, avg, avg, avg);
        imageFinal.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
    display();
    hideFeatures();
}

function doRed() {
    check();
    for (var pixel of imageFinal.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        if (avg < 128) 
            pixel=setRGBOfPixel(pixel, 2*avg, 0, 0);
        else
            pixel=setRGBOfPixel(pixel, 255, 2*avg-255, 2*avg-255);
        imageFinal.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
    display();
    hideFeatures();
}

function doTint() {
    check();
    for (var pixel of imageFinal.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        if (avg < 128)
        pixel=setRGBOfPixel(pixel, .6*avg, 0, .6*avg);    
        else 
        pixel=setRGBOfPixel(pixel, .16*avg+61.2, .8*avg-114, .16*avg+61.2);    
        imageFinal.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
    display();
    hideFeatures();
}

function doVintage() {
    check();
    for (var pixel of imageFinal.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        if (avg < 128) 
        pixel=setRGBOfPixel(pixel, 1*avg, 1*avg, 25);    
        else 
        pixel=setRGBOfPixel(pixel, 127.5, 127.5, 1.25*avg-127.5);    
        imageFinal.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
    display();
    hideFeatures();
}

function doRainbow() {
    check();
    var height = imageFinal.getHeight();
    for (var pixel of imageFinal.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        var x = pixel.getX();
        var y = pixel.getY();
        
        if (y<=height/7) {
            if (avg < 128)
                pixel=setRGBOfPixel(pixel, 2*avg, 0, 0);
            else 
                pixel=setRGBOfPixel(pixel, 255, 2.5*avg-255, 2.5*avg-255);
            imageFinal.setPixel(x,y,pixel);
        }
        else if (y<=2*height/7) {
            if (avg < 128) 
                pixel=setRGBOfPixel(pixel, 2*avg, .8*avg, 0);
            else 
                pixel=setRGBOfPixel(pixel, 255, 1.2*avg-51, 2*avg-51);
            imageFinal.setPixel(x,y,pixel);
        }
        else if (y<=3*height/7) {
             if (avg < 128) 
                pixel=setRGBOfPixel(pixel, 2*avg, 2*avg, 0);
            else 
                pixel=setRGBOfPixel(pixel, 255, 255, 2.5*avg-255);
            imageFinal.setPixel(x,y,pixel);
        }
        else if (y<=4*height/7) {
            if (avg < 128) 
                pixel=setRGBOfPixel(pixel, 0, 2*avg, 0);
            else 
                pixel=setRGBOfPixel(pixel, 2*avg-255, 255, 2*avg-255);
            imageFinal.setPixel(x,y,pixel);
        }
        else if (y<=5*height/7) {
            if (avg < 128)
                pixel=setRGBOfPixel(pixel, 0, 0, 2*avg); 
            else
                pixel=setRGBOfPixel(pixel, 2*avg-255, 2*avg-255, 255);
            imageFinal.setPixel(x,y,pixel);
        }
        else if (y<=6*height/7) {
            if (avg < 128)
                pixel=setRGBOfPixel(pixel, .8*avg, 0, .8*avg);
            else
                pixel=setRGBOfPixel(pixel, 1.2*avg-51, 2*avg-255, 255);
            imageFinal.setPixel(x,y,pixel);
        }
        else {
            if (avg < 128)
                pixel=setRGBOfPixel(pixel, 1.6*avg, 0, 1.6*avg);
            else 
                pixel=setRGBOfPixel(pixel, .4*avg+153, 2*avg-255, .4*avg+153);
            imageFinal.setPixel(x,y,pixel);
        }
    }
    display();
    hideFeatures();
}

function doTeal() {
    check();
    for (var pixel of imageFinal.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        if (avg < 128) 
            pixel=setRGBOfPixel(pixel, .13*avg, 1.33*avg, 1.2*avg);
        else
            pixel=setRGBOfPixel(pixel, 1.87*avg-221, .67*avg+85, .8*avg+51);
        imageFinal.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
    display();
    hideFeatures();
}

function doNoise() {
    check();
    for (var pixel of imageFinal.values()) {
        var rand = Math.random();
        pixel=setRGBOfPixel(pixel, rand*pixel.getRed(), rand*pixel.getGreen(), rand*pixel.getBlue());
    }
    display();
    hideFeatures();
}


function Reset() {
    var canvasFinal = document.getElementById("canForFinal");
    canvasFinal.style.display = "none";
    //written to reset after applying more than 2 filters
    var file = document.getElementById("fl");
    imageOriginal = new SimpleImage(file);


    var canvas = document.getElementById("canForImage");
    imageOriginal.drawTo(canvas);
    showfeatures();
}

function doClear() {
    var canvasFinal = document.getElementById("canForFinal");
    canvasFinal.style.display = "none";
    var canvas = document.getElementById("canForImage");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, imageFinal.width, imageFinal.height);
    showfeatures();
}

function downloadCanvasAsImage(){
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute("download", "CanvasAsImage.png");
    let canvas = document.getElementById("canForImage");
    canvas.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    });
}
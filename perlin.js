var time_count = 0;

function setup() {
    createCanvas(800,800);
    background(0, 0, 0);
}

function draw(){
    handler();
}

function handler(){
    let resultr, resultg, resultb;
    loadPixels();

    let xoff = 0.0;
    for (let x = 0; x < width; x++) {
        let yoff = 0.0;
        for (let y = 0; y < height; y++) {
            let n = noise(xoff,yoff, time_count);
            if(n < 0.5){
                resultr = 255*n;
                resultg = 0;
                resultb = 0;
            }
            else {
                resultr = 255;
                resultg = 255*map(n, 0.5, 1, 0, 1);
                resultb = 0;
            }
            updateOnePixel(x, y, resultr, resultg, resultb, 255);
            yoff += 0.01;
        }
        xoff += 0.01;
    }
    time_count += 0.01;
    updatePixels();
}

function updateOnePixel(x, y, r, g, b, a)
{
    let d = pixelDensity();
    for (let i = 0; i < d; i++) {
        for (let j = 0; j < d; j++) {
            // loop over
            index = 4 * ((y * d + j) * width * d + (x * d + i));
            pixels[index] = r;
            pixels[index+1] = g;
            pixels[index+2] = b;
            pixels[index+3] = a;
        }
    }
}


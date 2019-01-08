# Aurora

This is a webpage that can randomly generate visual effects similar to the Aurora, by modelling Aurora "curtains" using arrays of adjcent vertical rays (`streams` in the code).

Arguments for tweaking the performance:
- **backbone**: boolean, set to true to display the trend of each aurora stream;
- **rays**: boolean, set to true to display vertical rays;
- **OSC**: Degreee of random oscillation of the rays, used to simulate eletron deflection in the atmosphere. Defualt value: 0.1;
- **STREAM_NUM**: Number of aurora streams. Default value: 2;
- **RAY_LENGTH**: Length toggle for the vertical rays. Defualt value: 400;
- **RAY_WIDTH**: Width toggle for the vertical rays. Defualt value: 5;
- **STREAM_LENGTH**: Number of rays per stream. Defualt value: 12000;
- **GAP**: Distance between each vertical ray. Defualt value: 0.03;
- **OPACITY**: Global opacity. Defualt value: 0.8;
- **FLAT**: Flatness of the stream trend. Increase if for more curvy curtains. Defualt value: 50;

The color of the aurora is determined by drawing color samples according to the height of the aurora (i.e. the y position on the webpage). The RGB samples are drawn independently from linear functions of the height, an approximation to the RGB intensity curve (Baranoski, G. V., Rokne, J. G., Shirley, P. , Trondsen, T. S. and Bastos, R. (2003), Simulating the aurora), and added together to make the final color. In this way, color is evaluated (`getcolor()`) at a few points on each ray, and gathered to make a vertical gradient, as a rough simulation of the actual color of the aurora.   
- **RAY_DEPTH**: Number of points used in drawing the vertical gradient. Defualt value: 6;

Rebecca Xiong
Dec 2018 
const RAY_LENGTH = 96;
const RAY_WIDTH = 10;
const STREAM_LENGTH = 1000;
const GAP = 5;
var rays = [];
var currentTime, time, frame, timeNextFrame;
const H = b.height = 512;
const W = b.width = 0 | H * innerWidth / innerHeight;
const OPACITY = 80;
streams = [
    {
        x: 0,
        y: H/2,
        // start from the center of left edge of the screen

        a: 0, // stream heading
        ai: 0,  // angular velocity of stream heading
        w: WIDTH, // width of the rays
        p: [],
        o: OPACITY,
    }
];


while(true) {
    streams.forEach(s => {
        dx = Math.cos(s.a) * s.w / 2;
        dy = Math.sin(s.a) * s.w / 2;

        s.x += dx;
        s.y += dy;
        s.a += s.ai / (s.w) / 2;
        // s.a = Math.abs(s.a);
        if (s.p.length > STREAM_LENGTH) {
            break;
        }
        s.p.push({
            x: s.x,
            y: s.y,
            dx: dx,
            dy: dy
        });
        if (frame % 30 == 0) {
            s.ai = 16384 / 50 * (Math.random() - 0.5) / s.l;
        }
    })
}
for h = 1: 300
    if (h >= 160 && h <= 240) 
        r(h) = 0.0025 * (h - 160);
    elseif (h > 240)
        r(h) = 0.2 - 0.003 * (h - 240);
    else 
        r(h) = 0;
    end

    if (h < 140 && h > 100)
        g(h) = 0.025 * ( h - 100 );
    elseif (h >= 140 && h <= 240)
        g(h) = (1 -  0.01 * (h - 140));
    else
        g(h) = 0;
    end

    if (h < 140 && h > 100) 
        b(h) = 0.0125 * ( h - 100 );
    elseif (h >= 140 && h <= 240)
        b(h) = (0.5 - 0.005 * (h - 140));
    else
        b(h) = 0;
    end
end

h = 1:1:300;
plot(h,r,'red');
hold on 
plot(h,g,'green');
hold on 
plot(h,b,'blue');
hold off
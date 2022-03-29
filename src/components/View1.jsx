/* eslint-disable no-new */
/* eslint-disable no-param-reassign */
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export default function View1() {
    const containerRef = useRef();

    const Sketch = (p) => {
        const x = 0;
        const y = 0;

        p.setup = () => {
            p.createCanvas(200, 200);
        };

        p.draw = () => {
            p.background(0);
            p.fill(0, 255, 0);
            p.rect(x, y, 100, 100);
        };
    };

    useEffect(() => {
        const instance = new p5(Sketch, containerRef.current);
        return () => instance.remove();
    }, []);

    return (
        <div ref={containerRef} />
    );
}

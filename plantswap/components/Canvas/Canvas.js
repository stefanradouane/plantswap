'use client';
import React, { useEffect } from 'react';
import Script from 'next/script';

const Canvas = () => {
  useEffect(() => {
    const loadRive = async () => {
      // Load rive-js library
      const riveScript = document.createElement('script');
      riveScript.src = 'https://unpkg.com/rive-js';
      riveScript.async = true;
      document.body.appendChild(riveScript);

      // Wait for the script to load
      await new Promise((resolve) => {
        riveScript.addEventListener('load', resolve);
      });

      // Create Rive canvas
      const riveCanvas = new window.rive.Rive({
        src: './rups.riv',
        canvas: document.getElementById('canvas'),
        autoplay: true,
        stateMachines: 'State Machine 2',
        fit: rive.Fit.cover,
        onLoad: (_) => {
          const inputs = riveCanvas.stateMachineInputs('State Machine 2');
          const findAnimation = (name) =>
            inputs.find((animation) => animation.name === name);

          const animation = {
            hands_up: findAnimation('hands_up'),
            idle: findAnimation('Look'),
            succes: findAnimation('success'),
            faild: findAnimation('fail'),
            check: findAnimation('Check'),
          };
        },
      });
    };

    loadRive();
  }, []);

  return (
    <section className="canvas">
      {/* <Script src="https://unpkg.com/rive-js" strategy="lazyOnload" /> */}
      <canvas id="canvas" width="400" height="400"></canvas>
    </section>
  );
};

export default Canvas;

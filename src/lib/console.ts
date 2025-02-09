function detectDevTools(): void {
    // The worker script with eval-wrapped debugger
    const workerScript: string = `
        onmessage = function(e) {
            postMessage('heartbeat');
            try {
                eval('debugger');
            } catch (e) {
                // Fallback if eval is blocked by CSP
                debugger;
            }
            postMessage('done');
        }
    `;

    // Create a worker with the detection script
    const worker: Worker = new Worker(
        URL.createObjectURL(
            new Blob([workerScript], { type: 'application/javascript' })
        )
    );

    let devToolsOpen: boolean = false;
    let consecutiveDetections: number = 0;
    const DETECTION_THRESHOLD: number = 2;

    worker.onmessage = function (e: MessageEvent): void {
        if (e.data === 'heartbeat') {
            setTimeout((): void => {
                if (!devToolsOpen) {
                    return;
                }
                consecutiveDetections++;

                if (consecutiveDetections >= DETECTION_THRESHOLD) {
                    console.clear();
                    console.log(`
    ███╗   ██╗ ██████╗ ███████╗███████╗    ██╗   ██╗██╗
    ████╗  ██║██╔═══██╗╚══███╔╝╚══███╔╝    ██║   ██║██║
    ██╔██╗ ██║██║   ██║  ███╔╝   ███╔╝     ██║   ██║██║
    ██║╚██╗██║██║   ██║ ███╔╝   ███╔╝      ██║   ██║██║
    ██║ ╚████║╚██████╔╝███████╗███████╗    ╚██████╔╝██║
    ╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝     ╚═════╝ ╚═╝
                                                      
    🚀 Delightfully Simple Astro Components
    `);
                }
            }, 100);
        } else if (e.data === 'done') {
            devToolsOpen = false;
            consecutiveDetections = 0;
        }
    };

    // Check for devtools periodically
    setInterval((): void => {
        worker.postMessage('check');
        setTimeout((): void => {
            devToolsOpen = true;
        }, 50);
    }, 1000);
}

// Auto-start detection
detectDevTools();
function detectDevTools(): void {
    const workerScript: string = `
        onmessage = function(e) {
            postMessage('heartbeat');
            try {
                eval('debugger');
            } catch (e) {
                debugger;
            }
            postMessage('done');
        }
    `;

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

    setInterval((): void => {
        worker.postMessage('check');
        setTimeout((): void => {
            devToolsOpen = true;
        }, 50);
    }, 1000);
}

detectDevTools();
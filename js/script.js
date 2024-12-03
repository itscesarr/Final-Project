  document.addEventListener('DOMContentLoaded', () => {
        const toggleFullScreen = () => {
            const container = document.querySelector('.fullscreen');
            if (container) {
                if (!document.fullscreenElement) {
                    container.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            } else {
                console.error('Element with class .fullscreen not found.');
            }
        };
    
        document.querySelector('button').addEventListener('click', toggleFullScreen);
    });
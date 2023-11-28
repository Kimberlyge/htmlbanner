// Test import of a JavaScript module
// import { example } from '@/js/example'

// Test import of styles
import '@/styles/index.scss'
import gsap from 'gsap';


document.addEventListener('DOMContentLoaded', function () {
    const containerDimensions = [
        { dimension: '300600', totalImages: 60, fps: 29.97},
        { dimension: '320480', totalImages: 234, fps: 29.97 },
        { dimension: '300250', totalImages: 140, fps: 29.97 },
        { dimension: '72890', totalImages: 258, fps: 29.97  },
        { dimension: '97090', totalImages: 60, fps: 29.97  },
        { dimension: '1080', totalImages: 150, fps: 29.97 },
    ];

    containerDimensions.forEach(({ dimension, totalImages, fps }) => {
        const container = document.getElementById(`animation-container-${dimension}`);
        const filenames = generateFilenames(dimension, totalImages);

        loadImagesAndAnimate(container, filenames, fps);
    });

    function generateFilenames(dimension, totalImages) {
        const filenames = [];

        for (let i = 1; i <= totalImages; i++) {
            filenames.push(`${dimension}/${dimension}-${i}.png`);
        }

        return filenames;
    }

    function loadImagesAndAnimate(container, filenames, fps) {
        let imagesLoaded = 0;

        filenames.forEach((filename, index) => {
            const imgElement = new Image();
            imgElement.src = `/assets/images/${filename}`;
            imgElement.alt = 'Image';

            imgElement.onload = () => {
                imagesLoaded++;

                if (imagesLoaded === filenames.length) {
                    // All images are loaded, perform animation
                    doAnimation(container, fps);
                }
            };

            container.appendChild(imgElement);
        });
    }

    function doAnimation(container, fps) {
        const images = gsap.utils.toArray(`#${container.id} img`);
        // const fps = 24;
        const duration = 1 / fps;

        const sequence = gsap.timeline({ repeat: -1 })
            .staggerTo(images, 0, { position: 'static', visibility: 'visible' }, duration, 0)
            .staggerTo(gsap.utils.toArray(`#${container.id} img:not(:last-child)`), 0, { position: 'absolute', visibility: 'hidden', immediateRender: false }, duration, duration)
            .set({}, {}, "+=" + duration);
    }
    
});

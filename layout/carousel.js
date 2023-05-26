import React from 'react'
import styles from "./carousel.module.css"
import CarouselCard from '@/components/carouselCard'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {

    const getInnerWidth = () => {
        try {
          // if client
          return window.innerWidth;
        } catch {
        // if server, set any desired value
          return 1024;
        }   
    };

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    const items = [
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
        <CarouselCard title="Development" text="At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus." />,
    ];

    return (
        <div className={styles.carousel}>
            <h1 className={styles.header}>Ready to make digital your superpower? </h1>
            <AliceCarousel mouseTracking ssrSilentMode={false} items={items} innerWidth={getInnerWidth()} responsive={responsive} controlsStrategy="alternate" />
        </div>
    )
}

export default Carousel
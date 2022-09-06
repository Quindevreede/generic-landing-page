import React from 'react';
import GalleryComponent from '../../components/gallerycomponent/GallleryComponent';

function Gallery() {
    return (
        <main>
            <section className="outer-content-container">
                <div className="inner-content-container">
            <section className='container'>
                <div className='title'>
                    <h2>our reviews</h2>
                    <div className='underline'></div>
                </div>
                <GalleryComponent />
            </section>
                </div>
            </section>
        </main>
    );
}

export default Gallery;
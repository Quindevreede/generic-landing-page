import React from 'react';
import GalleryComponent from '../../components/gallerycomponent/GalleryComponent';

function Gallery() {
    return (
        <main>
            <section className="outer-content-container">
                <div className="inner-content-container">
            <section className='gallery-top__container'>
                <div className='title'>
                    <h2>GALLERY</h2>
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
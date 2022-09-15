import React from 'react';
import './gallery.css'
import GalleryComponent from '../../components/gallerycomponent/GalleryComponent';

function Gallery() {
    return (
        <main id="gallery">
            <div className="skewer--top-right"></div>
            <section className="outer-content-container">
                <div className="inner-content-container">
                <div className='title'>
                    <h2>GALLERY</h2>
                    <div className='underline'></div>
                </div>
                <GalleryComponent />
                </div>
            </section>
        </main>
    );
}

export default Gallery;
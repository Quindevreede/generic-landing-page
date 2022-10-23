import React from 'react';
import './aboutlist.css';
import AboutListComponent from '../../components/aboutlistcomponent/AboutListComponent';

function AboutList() {
    return (
        <main id='about'>
            <div className='about-list-title__container'>
                <div className='about-title'>
                    <h2>ABOUT</h2>
                    <div className='underline'></div>
                </div>
                <div className='about-list-top__container'>
                    <div className='about-list__container'>
                        <div className='about-list-header__container'>
                            <AboutListComponent title='WHAT IS A LIST?'
                                                text='This is a landing page about lists, the definition of a list can be found in this section, clarified in a list' />
                        </div>
                        <div className='about-list-quote__container'>
                            <h1 className='gradient__text2'>The human animal differs from the lesser primates in his passion for lists</h1>
                            <p>- H. Allen Smith -</p>
                        </div>
                        <div className='about-list-description__container'>
                            <AboutListComponent title='NOUN'
                                                text='A series of names or other items written or printed together in a meaningful grouping or sequence so as to constitute a record'/>
                            <AboutListComponent title='VERB'
                                                text='1. Make a list of: "I have listed four reasons below" 2. Include or enter in a list:"local offices are listed in the phone book"' />
                            <AboutListComponent title='ORIGIN'
                                                text='First encountered in the early 17th century: Old English lystan (verb), of Germanic origin, from a base meaning "pleasure"'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

    export default AboutList;

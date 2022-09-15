import React, { useState } from 'react';
import dataFaq from '../../components/faqcomponent/dataFaq';
import './faq.css';
import FaqComponent from '../../components/faqcomponent/FaqComponent';

function Faq() {
    const [questions, setQuestions] = useState(dataFaq);

    return (
        <main id='faq'>
        <section className="outer-content-container">
            <div className="inner-content-container">
                <div className="title">
                    <h2>FAQs</h2>
                    <div className="underline"></div>
                </div>
            <div className='faq-top__container'>
                <section className='info'>
                    {questions.map((question) => {
                        return (
                            <FaqComponent key={question.id} {...question}></FaqComponent>
                        );
                    })}
                </section>
            </div>
                </div>
            </section>
        </main>
    );
}

export default Faq;
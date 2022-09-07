import React, { useState } from 'react';
import dataFaq from '../../components/faqcomponent/dataFaq';
import './faq.css';
import FaqComponent from '../../components/faqcomponent/FaqComponent';

function Faq() {
    const [questions, setQuestions] = useState(dataFaq);

    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
        <main className='faq-top'>
            <div className='faq__container'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {questions.map((question) => {
                        return (
                            <FaqComponent key={question.id} {...question}></FaqComponent>
                        );
                    })}
                </section>
            </div>
        </main>
                </div>
            </section>
    );
}

export default Faq;
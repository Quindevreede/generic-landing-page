import React, { useEffect, useState } from 'react';
import './tours.css';
import Loading from '../../components/loading/Loading'
import MultipleTours from '../../components/tour/MultipleTours'
import Button from "../../components/button/Button";
const url = 'https://course-api.com/react-tours-project'

function Tours() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    function removeTour(id) {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])
    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main id="tour">
                <div className="skewer--top"></div>
                <section className="outer-content-container">
                    <div className="inner-content-container">
                        <div className="title">
                            <h2>OUR TOURS</h2>
                            <div className="underline"></div>
                        </div>
                        <div className='tours-empty__container'>
                            <div>
                                <h2>NO TOURS LEFT</h2>
                                <Button
                                    type="button"
                                    buttonStyle='btn--refresh'
                                    buttonSize="btn--medium"
                                    onClick={() => fetchTours()}>
                                    REFRESH
                                </Button>
                            </div>
                        </div>
                        </div>
                    </section>
                <div className="skewer--bottom"></div>
            </main>
    )
    }

    return (
        <main id="tour">
            <div className="skewer--top"></div>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div className="title">
                        <h2>TOUR</h2>
                        <div className="underline"></div>
                    </div>
                    <MultipleTours tours={tours} removeTour={removeTour} />
                </div>
            </section>
            <div className="skewer--bottom"></div>
        </main>
    )
}

export default Tours;
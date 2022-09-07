import React, { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading'
import MultipleTours from '../../components/tour/MultipleTours'
const url = 'https://course-api.com/react-tours-project'

function Tours() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
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
            <main className="tours__main__container">
                <section className="outer-content-container">
                    <div className="inner-content-container">
                <div>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={() => fetchTours()}>
                        refresh
                    </button>
                </div>
                    </div>
                </section>
            </main>
        )
    }
    return (
        <main id="tours">
            <section className="outer-content-container">
                <div className="inner-content-container">
            <MultipleTours tours={tours} removeTour={removeTour} />
                </div>
            </section>
        </main>
    )
}

export default Tours;
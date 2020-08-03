import React from 'react';
import Hero from "../components/Hero"
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export const Contact = () => {
    return (
        <Hero>
            <Banner title='Email business inquiries to' subtitle="shapeshyft24@gmail.com">
                <Link to="/" className='btn-primary'>
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}

import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export const Home = () => {
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="SHAPEshyft" subtitle="Geometric Art">
                <Link to="/rooms" className="btn-primary">
                    Drawings
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}


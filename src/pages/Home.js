import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import {Link} from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'
import defaultImg from '../images/room-1.jpeg'

const Home = () => {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at 999rs">
                    <Link to='/rooms' className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}
export default Home
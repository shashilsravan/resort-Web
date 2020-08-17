import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title="Wow! you've got 404 error" 
                        subtitle="Dont worry it happens sometimes">
                    <Link to="/" className="btn-primary">Return Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error
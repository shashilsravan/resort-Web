import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'
import defaultImg from '../images/room-1.jpeg'

class SingleRoom extends Component {
    static value = this.RoomContext
    constructor(props){
        super(props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext
    componentDidMount(){

    }
    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if(!room){
            return (
                <div className="error">
                    <h3>No such room could be found</h3>
                    <Link to='/rooms/' className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            )
        }
        const {name, description, capacity, size, price, 
            extras, breakfast, pets, images} = room
        const [mainImage, ...restImages] = images
        return (
            <>
                <StyledHero img={mainImage || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to='/rooms' className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {restImages.map((image, index) => 
                            <img key={index} src={image} alt={name} />
                        )}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>
                                {description}
                            </p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: {price}rs</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>max capacity: {
                                capacity > 1 ? `${capacity} people`: 
                                    `${capacity} person`
                            }</h6>
                            <h6>{pets ? "pets are allowed" : "no pets allowed" }</h6>
                            <h6>{breakfast && "free breakfast included" }</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>
                        extras
                    </h6>
                    <ul className="extras">
                        {
                        extras.map((item, index) => {
                            return <li key={index}> * {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
export default SingleRoom

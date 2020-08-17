import React, { Component } from 'react'
import Title from './Title'
import {FaWifi,FaUserTie, FaTaxi, FaSmokingBan} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {   
                icon: <FaWifi />,
                title: "Free Wifi",
                info: "We provide you free and fast wifi 24x7 and if you have a data plan already please dont use the wifi"
            },
            {   
                icon: <FaUserTie />,
                title: "24x7 Customer Support",
                info: "We provide you 24x7 assistance but since we are also humans and rest is indeed! dont disturb in the rest hours"
            },
            {   
                icon: <FaTaxi />,
                title: "Taxi/Cab Services",
                info: "You can book a cab or hire a taxi with in OLA Cabs App, we cannot do anything with it, we may bid you all adieu"
            },
            {   
                icon: <FaSmokingBan />,
                title: "No Smoking in resort",
                info: "We may not care about you, but we definitely care about ourselves so even if you smoke we will be affected by that"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    { this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    }) }
                </div>
            </section>
        )
    }
}

import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaTshirt, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"Coasters",
            //info: 'Lorem ipsum dolor sit amer constedted adisppnmfgs elshed'
            },
            {
                icon:<FaTshirt/>,
                title:"T-shirts",
                //info: 'Lorem ipsum dolor sit amer constedted adisppnmfgs elshed'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Stickers & Decals",
                //info: 'Lorem ipsum dolor sit amer constedted adisppnmfgs elshed'
            },
            {
                icon:<FaBeer/>,
                title:"Coozies",
                //info: 'Lorem ipsum dolor sit amer constedted adisppnmfgs elshed'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='Printed Products'/>
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>                      
                    })}
                </div>

            </section>            
        )
    }
}

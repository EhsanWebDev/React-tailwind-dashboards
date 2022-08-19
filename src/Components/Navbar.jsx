import React from 'react'
import { Link } from 'react-router-dom'
import games from "../assets/dashboard_SS/games.png"
import boldo from "../assets/dashboard_SS/boldo.png"
import agency from "../assets/dashboard_SS/agency.png"

const Navbar = () => {
    return (
        <div>
            <div>
                <h1 className=' text-white text-2xl font-bold'>Dashboards</h1>
                <div className=' grid grid-cols-2 mt-12 gap-8'>
                    <Link to="/gamesMode" className=' text-white space-y-2 group'>
                        <img src={games} alt="" />
                        <p className=' group-hover:border-b inline-block'>Games Store</p>
                    </Link>
                    <Link to="/boldo" className=' text-white space-y-2 group'>
                        <img src={boldo} alt="" />
                        <p className=' group-hover:border-b inline-block'>SaaS Dashboard</p>
                    </Link>
                    <Link to="/agency" className=' text-white space-y-2 group'>
                        <img src={agency} alt="" />
                        <p className=' group-hover:border-b inline-block'>Digital Agency</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar
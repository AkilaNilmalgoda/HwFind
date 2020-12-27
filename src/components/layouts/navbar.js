import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const navbar = () => {
    return (
        <div className='container-fluid navbar-background'>
            <section className="container">
                <Link style={{ textDecoration: 'none' }} to='/'>
                <div >
                    <h2 className='logo'><i class="fas fa-book"></i> Homework Finder</h2>
                </div>
                </Link>
            </section>
        </div>
    )
}

export default navbar

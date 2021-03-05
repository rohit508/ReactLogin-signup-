import React from 'react'
import Card from "./components/card";

function home({ handlelogout }) {
    return (
        <section className="hero">
            <nav>
                <h2>Quiz App</h2>
                <button type="button" class="btn btn-danger"  onClick={handlelogout}>logout</button>

                
            </nav>

            <Card/>
            


        </section>
    )
}

export default home

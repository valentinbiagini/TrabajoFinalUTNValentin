import React from 'react';
import "./Section.css"

const Section1 = () => {
    return(
        <>

            <section class="info-section">
                    <div class="info-text">
                        <h2>TRADITIONAL</h2>
                        <h2>ITALIAN BAKERY</h2>
                        <p>Italian Bakery Products can make special any occasion, the <br />
                            offer is so various that who want to try some Italian <br />
                            bakery speciality doesnt know where to start.</p>
                    </div>
                    <div class="info-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxmSg2-JUUaKmCWlSfYc0R56oShiEEIAc8Q&usqp=CAU" alt="panera" />
                    </div>
            </section>

            <section class="subscribe-section">
                <h3>Subscripe for New Recipes</h3>
                <form class="subscription-form">
                    <div class="form-group">
                        <input type="text" placeholder='Name' id='name' name='name' />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder='Example@gmail.com' name="email" id="email" />
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        
        </>
    )
}

export { Section1 }
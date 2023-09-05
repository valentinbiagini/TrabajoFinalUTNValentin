import React from 'react';
import "./Section3.css"


const Section3 = () => {
    return(
        <>
            <section class="recipes-section">
                    <div class="section-header">
                        <h2>Recipes</h2>
                        <a href="#">View All</a>
                    </div>
                    <div class="recipe-cards">
                        <div class="recipe-card">
                            <img src="https://img.freepik.com/foto-gratis/pan-crujiente-casero-granos_144627-362.jpg" />
                            <h3><a href="#">Whole Wheat</a></h3>
                        </div>
                        <div class="recipe-card">
                            <img src="https://leitesculinaria.com/wp-content/uploads/2020/07/cinnamon-rolls.jpg" />
                            <h3><a href="#">Ciannamon Rolls</a></h3>
                        </div>
                        <div class="recipe-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_LHYL3Aqp439JjhFB0ACs2Fy_LUNi92qyw&usqp=CAU" />
                            <h3><a href="#">Wheat baguette</a></h3>
                        </div>
                        <div class="recipe-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjKPx-HZikco6F95tiWFSVv96YeXfG9CvuA&usqp=CAU" />
                            <h3><a href="#">Whole Wheat</a></h3>
                        </div>
                    </div>
            </section>
        
        
        
        </>
    )
}

export { Section3 }
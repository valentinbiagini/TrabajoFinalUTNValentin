import React from 'react';
import "./Section2.css"

const Section2 = () => {
    return(
        <>
            <section class="favorites-section">
                <div class="section-header">
                    <h2>CUSTOMERS FAVOURITES</h2>
                    <a href="#">View All</a>
                </div>
                <div class="categories">
                    <div class="category">
                        <h3>Daily Items</h3>
                        <ul class="ul-section2">
                            <li class="li-section2">Whole Grain Spelt</li><br />
                            <li class="li-section2">Whole Wheat</li><br />
                            <li class="li-section2">Wheat Bread</li><br />
                            <li class="li-section2">Ciabatta Rye</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div class="category">
                        <h3>Speciality</h3>
                        <ul class="ul-section2">
                            <li class="li-section2">Ciabatta Wheat</li><br />
                            <li class="li-section2">Mt Ida Multigrain</li><br />
                            <li class="li-section2">Whole Wheat</li><br />
                            <li class="li-section2">Wheat Bread</li>
                        </ul>
                    </div>
                </div>
                <div class="product-grid">

                    <div class="product-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5N1TFtD-YgxmFtz5_Ml4Y4keAq3u85lpfQ&usqp=CAU" alt="producto" id='producto1' />
                        <h3>Producto </h3>
                        <p>Descripción del producto </p>
                        <select name="cantidad">
                            <option value="1">1 pcs</option>
                            <option value="2">2 pcs</option>
                            <option value="3">3 pcs</option>
                        </select>
                        <button>Buy</button>
                        <p class="precio">$3.00</p>
                    </div>
                    <div class="product-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5N1TFtD-YgxmFtz5_Ml4Y4keAq3u85lpfQ&usqp=CAU" alt="producto" id='producto1' />
                        <h3>Producto</h3>
                        <p>Descripción del producto</p>
                        <select name="cantidad">
                            <option value="1">1 pcs</option>
                            <option value="2">2 pcs</option>
                            <option value="3">3 pcs</option>
                        </select>
                        <button>Buy</button>
                        <p class="precio">$3.00</p>
                    </div>
                    <div class="product-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5N1TFtD-YgxmFtz5_Ml4Y4keAq3u85lpfQ&usqp=CAU" alt="producto" id='producto1' />
                        <h3>Producto</h3>
                        <p>Descripción del producto</p>
                        <select name="cantidad">
                            <option value="1">1 pcs</option>
                            <option value="2">2 pcs</option>
                            <option value="3">3 pcs</option>
                        </select>
                        <button>Buy</button>
                        <p class="precio">$3.00</p>
                    </div>
                    <div class="product-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5N1TFtD-YgxmFtz5_Ml4Y4keAq3u85lpfQ&usqp=CAU" alt="producto" id='producto1' />
                        <h3>Producto</h3>
                        <p>Descripción del producto</p>
                        <select name="cantidad">
                            <option value="1">1 pcs</option>
                            <option value="2">2 pcs</option>
                            <option value="3">3 pcs</option>
                        </select>
                        <button>Buy</button>
                        <p class="precio">$3.00</p>
                    </div>
                    <div class="product-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5N1TFtD-YgxmFtz5_Ml4Y4keAq3u85lpfQ&usqp=CAU" alt="producto" id='producto1' />
                        <h3>Producto</h3>
                        <p>Descripción del producto </p>
                        <select name="cantidad">
                            <option value="1">1 pcs</option>
                            <option value="2">2 pcs</option>
                            <option value="3">3 pcs</option>
                        </select>
                        <button>Buy</button>
                        <p class="precio">$3.00</p>
                    </div>
                    <div class="product-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5N1TFtD-YgxmFtz5_Ml4Y4keAq3u85lpfQ&usqp=CAU" alt="producto" id='producto1' />
                        <h3>Producto</h3>
                        <p>Descripción del producto</p>
                        <select name="cantidad">
                            <option value="1">1 pcs</option>
                            <option value="2">2 pcs</option>
                            <option value="3">3 pcs</option>
                        </select>
                        <button>Buy</button>
                        <p class="precio">$3.00</p>
                    </div>
                </div>
        
            </section>        
        
        </>
    )
}

export { Section2 }
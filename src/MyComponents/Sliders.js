import React from 'react'
// import moduleName from '../'
export default function Sliders() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide container mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="/assets/images/phone4.jpg" className="d-block w-100" alt="..." height="400px"/>
                    </div>
                    <div className="carousel-item">
                    <img src="/assets/images/book2.jpg" className="d-block w-100" alt="..." height="400px"/>
                    </div>
                    <div className="carousel-item">
                    <img src="/assets/images/phone3.jpg" className="d-block w-100" alt="..." height="400px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}


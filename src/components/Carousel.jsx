import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{"maxHeight": "500px"}}>
                <div class="carousel-caption" style={{"zIndex":"1","background":"#2121215e", "padding":"25px","transform":"translateY(-110%)"}}>
                    <h3 className='fs-1 text-white'style={{"fontWeight":"bold"}}>Order Now</h3>
                <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-dark text-white" type="submit" style={{"background":"#b90b0b"}}>Search</button>
    </form>
      </div>
                    <div className="carousel-item active">
                        <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block image-fluid" alt="Random Image" style={{ "objectFit" :"cover", "width": "100%","filter":"brightness(50%)" }}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D" className="d-block image-fluid" alt="Food Image" style={{ "objectFit" :"cover", "width": "100%","filter":"brightness(50%)"  }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2R8ZW58MHwwfDB8fHww" className="d-block image-fluid" alt="Food Image" style={{ "objectFit" :"contain", "width": "100%", "filter":"brightness(50%)"  }} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

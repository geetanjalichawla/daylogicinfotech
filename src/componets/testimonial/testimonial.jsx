import React from 'react';
import './testimonial.css'

const Testimonial = () => {
    return (
        <div className="container-m testimonial flex-column text-center">
            <h2>Our Team</h2>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum quos reiciendis porro voluptatibus minus, deserunt soluta itaque eveniet vitae laudantium voluptatem officiis officia veritatis fugiat similique modi aliquam adipisci.</p>
        <div className="row">
            <div className="col-md-4 my-4">
                <div className="card"> <i className="fa fa-quote-left u-color"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="user-about"> <span className="font-weight-bold d-block">Alex Smith</span> <span className="u-color">Designer | Developer</span>
                            <div className="d-flex flex-row mt-1"> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> </div>
                        </div>
                        <div className="user-image"> <img src="https://i.imgur.com/UUW3zLx.jpg" className="rounded-circle" width="70" alt = ""/> </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card"> <i className="fa fa-quote-left u-color"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="user-about"> <span className="font-weight-bold d-block">Sophia T.</span> <span className="u-color">Designer | Architect</span>
                            <div className="d-flex flex-row mt-1"> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star-o u-color"></i> <i className="fa fa-star-o u-color"></i> </div>
                        </div>
                        <div className="user-image"> <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle" width="70" alt ="" /> </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card"> <i className="fa fa-quote-left u-color"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="user-about"> <span className="font-weight-bold d-block">Mike Vincent</span> <span className="u-color">Designer | Developer</span>
                            <div className="d-flex flex-row mt-1"> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star u-color"></i> <i className="fa fa-star-o u-color"></i> </div>
                        </div>
                        <div className="user-image"> <img  src="https://i.imgur.com/At1IG6H.png" className="rounded-circle" width="70" alt =""/> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Testimonial;

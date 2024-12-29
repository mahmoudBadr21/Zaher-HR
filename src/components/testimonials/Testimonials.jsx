import { dataTestimonials } from '../../../public/data'
import './testimonials.css'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className='testimonials'>
      <h2 className="mainTitle">Testimonials</h2>

      <div className="testimonialsContainer">
        <Slider {...settings}>
          {
            dataTestimonials.map((value, index) => {
              return(
                <>
                  <article className='testimonial' key={index}>
                    <div className="clientAvatar">
                      <img src={value.image} alt={value.id} width='unset' height='unset' />
                    </div>
                    <h5 className="clientName">{value.name}</h5>
                    <small className='clientReview'>{value.review}</small>
                  </article>
                </>
              )
            })
          }
        </Slider>
        </div>
    </div>
  )
}

export default Testimonials
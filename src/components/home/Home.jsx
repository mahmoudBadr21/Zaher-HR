import { dataServices, mainSection } from '../../../public/data';
import Partner from '../partner/Partner';
import Testimonials from '../testimonials/Testimonials';
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* summary */}
      <div className="summary">
        <div className="summaryText">
          <h2 className="mainTitle">summary</h2>
          <p>
            Zaher Company was established to become a leading organization
            specializing in providing human resources services, business
            development, and other essential services. It aims to be the first
            company of its kind in Egypt to offer comprehensive business
            solutions, seamlessly integrating all functions required by
            establishments, whether small, medium, or large.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="sections">
          {
            mainSection.map((section) => {
              return (
                <div className={section.secDir} id={section.title} key={section.id}>
                  <div className="sectionText">
                    <h2 className="mainTitle">{section.title}</h2>
                    <p className='sceDesc'>{section.desc}</p>
                  </div>

                  <div className="sectionImage">
                    <img src={section.image} alt="" />
                  </div>
                </div>
              )
            })
          }

          <div className="services" id='services'>
            <h2 className="mainTitle">services</h2>
            <div className="cards">
              {
                dataServices.map((servic) => {
                  return(
                    <div className="box" key={servic.id}>
                      <Link to={`/service/${servic.id}`} className='mainLink'>
                        <div className="image">
                          <img src={servic.image} alt="#" />
                        </div>

                        <div className="text">
                          <span className="titleBg">{servic.title}</span>
                          <p className="serviceDesc">{servic.minDesc}</p>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <Testimonials />
          <Partner />
        </div>
      </div>
    </div>
  );
}

export default Home
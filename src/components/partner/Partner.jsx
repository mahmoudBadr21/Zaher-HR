import './partner.css'
import partner1 from '../../assets/partner/partner-1.png'
import partner2 from '../../assets/partner/partner-2.png'
import partner3 from '../../assets/partner/partner-3.png'
import partner4 from '../../assets/partner/partner-4.png'

const Partner = () => {
  return (
    <div className='partner'>
      <h2 className="mainTitle">our partner on succsess</h2>
      <div className="contentImage">
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
      </div>
    </div>
  )
}

export default Partner
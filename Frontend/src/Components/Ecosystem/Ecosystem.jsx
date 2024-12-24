import '../Ecosystem/Ecosystem.css'
import QSlogo from '../../assets/QSLogo.svg'
import Airplane from '../../assets/Airplane.svg'
import WES from '../../assets/WES.svg'
function Ecosystem() {
  return (
    <div className='europe'>
        <div>
            <p>European Ecosystem</p>
            <h1>Collaborating with UCAM (Universidad Católica San Antonio de Murcia) provides a great opportunity to gain a global perspective and learn from experienced European professors”., one of the best European universities according to international rankings (Qs, Forbes…)</h1>
        </div>
        <div>
            <div>
                <div>
                    <img src={QSlogo} alt="" />
                </div>
                <div>
                    <h3>One of the first campuses to align with the European Quality System. Ensuring high quality education and consistent academic excellence. European Faculty Academic programmes are designed and taught by European faculty industry experts.</h3>
                </div>
            </div>
            <div>
                <div>
                    <img src={Airplane} alt="" />
                </div>
                <div>
                    <h3>You will have the unique opportunity to embark on an international adventure through the European Journey, a 3-week cultural and academic trip, visiting international organisations and networking across Spain and international contacts.</h3>
                </div>
            </div> 
            <div>
                <div>
                    <img src={WES} alt="" />
                </div>
                <div>
                    <h3>The UCAM Mumbai Masters are recognised and approved by the WES - World Education Services, facilitating the acceptance of qualifications in countries like the USA and Canada for further education or employment.</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ecosystem
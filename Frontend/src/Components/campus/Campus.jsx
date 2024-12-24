import '../campus/Campus.css'
import logo from '../../assets/logos.jpg'
import player1 from '../../assets/player.webp'
import player2 from '../../assets/player2.jpg'

function Campus() {
    return (
        <div className='campus'> 
          <div className='title'>
            <h5>UCAM MUMBAI CAMPUS OF SPORTS</h5>
            <h1>Welcome to our sporting ecosystem, chosen by +200 athletes</h1>
            <p>Following the Anglo-Saxon University model, sport is part of UCAM’s DNA. Moreover, the Institution was hailed as the winner of Spain’s University Championships for the sixth consecutive year, with 141 medals (86 gold). UCAM’s best athletes include Olympic medallists such as Carolina Marín, Ruth Beitia or David Cal, and World Cup champions such as Miguel Ángel López, Javier Fernández or Mario Mola.</p>
          </div>
          <div className='content'> 
            <div className='teams'>
              <div>
                <img id='img1' src={logo} alt="UCAM logo" />
              </div>
              <div className='heading'>
                <h2>Top UCAM teams</h2>
                <h3>Making history in European competitions.</h3>
              </div>
            </div>
            <div>
              <div className='players'>
                <img src={player1} alt="Player 1" />
                <img src={player2} alt="Player 2" />
              </div>
              <div className='heading'>
                <h2>Top Athletes</h2>
                <h3>Making history in the Olympic Games.</h3>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Campus
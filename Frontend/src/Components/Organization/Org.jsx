import '../Organization/Org.css';
import qs from '../../assets/QS.svg';
import ucam from '../../assets/UCAM.svg';
import spanish from '../../assets/ucamSpanish.svg';
import wes from '../../assets/WES.svg';
import fcb from '../../assets/fcblogo.svg';

function Org() {
  return (
    <div className="organization">
      <div>
        <h1 className="title">
          Visiting international organisations and making networking
        </h1>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          <li><img src={qs} alt="QS" /></li>
          <li><img src={ucam} alt="UCAM" /></li>
          <li><img src={spanish} alt="Spanish" /></li>
          <li><img src={wes} alt="WES" /></li>
          <li><img src={fcb} alt="FCB" /></li>

          <li><img src={qs} alt="QS" /></li>
          <li><img src={ucam} alt="UCAM" /></li>
          <li><img src={spanish} alt="Spanish" /></li>
          <li><img src={wes} alt="WES" /></li>
          <li><img src={fcb} alt="FCB" /></li>

          <li><img src={qs} alt="QS" /></li>
          <li><img src={ucam} alt="UCAM" /></li>
          <li><img src={spanish} alt="Spanish" /></li>
          <li><img src={wes} alt="WES" /></li>
          <li><img src={fcb} alt="FCB" /></li>
        </div>
      </div>
    </div>
  );
}

export default Org;

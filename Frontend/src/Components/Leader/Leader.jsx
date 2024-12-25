import '../Leader/Leader.css';

import qs from '../../assets/QS.svg';
import ucam from '../../assets/UCAM.svg';
import spanish from '../../assets/ucamSpanish.svg';
import wes from '../../assets/WES.svg';
import fcb from '../../assets/fcblogo.svg';

function Leader() {
  return (
    <div className="leader">
      <div>
        <h5 className="title">Already chosen by leaders</h5>
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

export default Leader;

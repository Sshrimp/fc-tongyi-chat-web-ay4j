import { useContext } from 'react'
import { Context } from '../../App';
import { useNavigate } from 'react-router-dom'

import './index.less'

const HomePage = () => {
    const goEasy = useContext(Context) as any;
    console.log(goEasy);
    const navigate = useNavigate()


    return <div className="HM-blood-home-page">
      <div onClick={() => navigate('/hostPage')} className='HM-blood-home-page-common HM-blood-home-page-blue'> 血 染 </div>
      <div className='HM-blood-home-page-common HM-blood-home-page-red'>钟 楼 </div>
    </div>

};

export default HomePage
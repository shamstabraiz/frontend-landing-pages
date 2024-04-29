import { useNavigate } from 'react-router-dom'
import LogoIcon from '../../assets/Logo.png'
function Logo() {
  const navigate = useNavigate();

  return (
    <div className='cursor-pointer max-w-[130px]'>
      <img src={LogoIcon} onClick={()=>{
        navigate('/')
      }} alt="Logo" />
    </div>
  )
}

export default Logo
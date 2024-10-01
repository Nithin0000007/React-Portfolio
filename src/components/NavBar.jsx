import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"


const NavBar = () => {

    const style = {
        navBarStyle:{
            alignItems: 'center',
        }
    }
  return (
    <nav style={style.navBarStyle} className='mb-20 flex item-center justify-between py-6'>
        <div className="flex flex-shrink-0 item-center">
            <img  className="mx-2 w-10" src={logo} alt="" />
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
        </div>   
    </nav>
  )
}

export default NavBar

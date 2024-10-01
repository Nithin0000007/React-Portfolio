import logo from "../assets/nkmlogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";


const NavBar = () => {

    const style = {
        navBarStyle:{
            alignItems: 'center',
        }
    }
  return (
    <nav style={style.navBarStyle} className='mb-20 flex item-center justify-between py-6'>
        <div className="flex flex-shrink-0 item-center">
            <img  className="mx-2 w-20" src={logo} alt="" />
        </div>
        <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/nithin070/" target="blank"><FaLinkedin /></a>
        <a href="https://github.com/Nithin0000007" target="blank"><FaGithub /></a>
        <a href="https://leetcode.com/u/nitinmeena915/" target="blank"><SiLeetcode /></a>
        <a href="https://www.instagram.com/mr__n.i.c.k/" target="blank" ><FaInstagram /></a>
        </div>   
    </nav>
  )
}

export default NavBar

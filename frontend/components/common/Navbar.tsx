import Image from "next/image"
import style from  '../../styles/navbar.module.css';

const Navbar = () =>{
    return <div className={style.navbar}>
        <h3 className={style.shop}>Shop</h3>
        <h2 className={style.brandname}>Fashion</h2>
        <div className={style.navItemContainer}>
            <h3 className={style.navItem}>Register</h3>
            <h3 className={style.navItem}>Login</h3>
            <Image src={"/cartIcon.png"} alt={""} width={25} height ={25}/>
        </div>
    </div>
}

export default Navbar
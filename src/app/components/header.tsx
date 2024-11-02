import Image from "next/image";
import Logo from "../images/Logo.png"
import searchLogo from "../images/Search.png"
import favourite from "../images/Icon/32px/Favorites.png"
import Vector from "../images/Icon/32px/Vector.png"
import Cart1 from "../images/Icon/32px/Cart1.png"
const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Image
                        className="logo-image"
                        src={Logo}
                        width={300}
                        height={300}
                        alt="Logo"
                    />

                </div>
                <div className="search-bar">
                    <Image
                        className="search-icon"
                        src={searchLogo}
                        width={300}
                        height={300}
                        alt="search"
                    />
                    <input type="search" placeholder="Search" />
                </div>
                <div className="pages-link">
                    <span className="active-tag">Home</span>
                    <span>About</span>
                    <span>Contact Us</span>
                    <span>Blog</span>
                </div>
                <div className="cart-section">
                    <Image
                        className="cart-images"
                        src={favourite}
                        width={100}
                        height={100}
                        alt="Logo"
                    /><Image
                        className="cart-images"
                        src={Cart1}
                        width={100}
                        height={100}
                        alt="Logo"
                    /><Image
                        className="cart-images"
                        src={Vector}
                        width={200}
                        height={200}
                        alt="Logo"
                    />
                </div>
            </div>
        </>
    )
}

export default Header;
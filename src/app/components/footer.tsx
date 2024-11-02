import LogoPNG from "@/app/images/white-logo.png";
import Twitter from "@/app/images/Icon/Twitter.png";
import Facebook from "@/app/images/Icon/Facebook.png";
import Tiktok from "@/app/images/Icon/Vector.png";
import Insta from "@/app/images/Icon/Insta.png";
import Image from "next/image";
const Footer = () => {
    return (
        <>
        <div className="footer-container">

            <div className="footer">

                <div className="left">
                    <Image
                        className="footer-logo"
                        src={LogoPNG}
                        width={65.4}
                        height={22.87}
                        alt="cyber" />
                    <div className="text">
                        We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                    </div>
                </div>
                <div className="right">
                    <div className="section-1">
                        <ul className="section">
                            <li className="heading">Services</li>
                            <li className="sub-heading">Bonus Program</li>
                            <li className="sub-heading">Gift Cards</li>
                            <li className="sub-heading">Credit and Payments</li>
                            <li className="sub-heading">Service Contracts</li>
                            <li className="sub-heading">Non-cash account</li>
                            <li className="sub-heading">Payment</li>
                        </ul>
                    </div>
                    <div className="section-2">
                        <ul className="section">
                            <li className="heading">Services</li>
                            <li className="sub-heading">Bonus Program</li>
                            <li className="sub-heading">Gift Cards</li>
                            <li className="sub-heading">Credit and Payments</li>
                            <li className="sub-heading">Service Contracts</li>
                            <li className="sub-heading">Non-cash account</li>
                            <li className="sub-heading">Payment</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="links">
                <Image
                    src={Twitter}
                    alt="Twitter"
                    width={16}
                    height={16} />
                <Image
                    src={Facebook}
                    alt="Facebook"
                    width={16}
                    height={16} />
                <Image
                    src={Tiktok}
                    alt="tiktok"
                    width={16}
                    height={16} />
                <Image
                    src={Insta}
                    alt="Instagram"
                    width={16}
                    height={16} />
            </div>
        </div>
        </>
    )
}

export default Footer;
import { StaticImageData } from "next/image"
import Image from "next/image"
import Phone from "../images/Icon/Phones.png"
import Camera from "../images/Icon/Cameras.png"
import Gaming from "../images/Icon/Gaming.png"
import SmartWatch from "../images/Icon/Smart Watches.png"
import Headphones from "../images/Icon/Headphones.png"
import Computer from "../images/Icon/Computers.png"


type Data = {
    text: string,
    icon: StaticImageData
}
const data: Data[] = [{
    text: "Phones",
    icon: Phone
},{
    text: "Camera",
    icon: Camera
},{
    text: "Gaming",
    icon: Gaming
},{
    text: "Computers",
    icon: Computer
},{
    text: "Smart Watches",
    icon: SmartWatch
},{
    text: "Headphones",
    icon: Headphones
}]

const Categories = () => {
    return (
        <>
            <div className="cat-container">
                {data.map((elem: Data) => {
                    return(
                        <div className="box">

                    <Image
                        src={elem.icon}
                        width={48}
                        height={48}
                        alt="phone"
                    />
                    <div className="text">{elem.text}</div>
                </div>
                    )
                })}
            </div>
        </>
    )
}

export default Categories;
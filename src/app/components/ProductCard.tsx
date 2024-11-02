import Image from "next/image";
const ProductCard = ({ data }: any) => {
    return (
        <div className="card1">
            <div className="icon">
                <Image
                    className="favourite"
                    src={data.icon}
                    alt="fav"
                    width={32}
                    height={32} />
            </div>
            <div className="Iphone">
                <Image
                    src={data.image}
                    alt="Iphone"
                    width={160}
                    height={160} />
            </div>
            <div className="text">
                <span className="1st-child">{data.text}</span>
                <span className="2nd-child">{data.price}</span>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard;
import Link from "next/link";
import CustomImage from "./image";

const Products = ({ product }) => {
    return (
        <Link href={`/clothes/`} className="w-30 h-96 flex flex-col group border-2 rounded-lg p-6 transition-transform ease-out duration-200 hover:scale-105">
            <div className="relative h-72 flex-1">
                <CustomImage product={product} fill />
            </div>
            <h3 className="pt-3 tracking-widest text-xs font-medium title-font line-clamp-1 text-black">{product.title}</h3>
            <p className="pt-3 leading-relaxed text-base text-center font-bold text-black">₦ {product.price}</p>
        </Link>
    )
}

export default Products;

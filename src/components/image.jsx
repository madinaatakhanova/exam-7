"use client"

import { useState } from "react"
import Image from "next/image";

const CustomImage = ({ product, fill }) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
            onLoadingComplete={() => setIsLoading(false)}
        />
    )
}

export default CustomImage
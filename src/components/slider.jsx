"use client"

import { useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import HeroImg from "@/assets/Logo.png"

export function Slider() {
    const carouselRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true)
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <Carousel
            ref={carouselRef}
            className="w-full max-w-[1280px] h-[500px] relative"
            options={{ loop: true }}
            onMouseEnter={() => carouselRef.current?.autoplay?.stop()}
            onMouseLeave={() => carouselRef.current?.autoplay?.start()}
            plugins={[plugin.current]}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex h-[490px] items-center justify-center p-6 bg-[#ED165F]">
                                    <Image src={HeroImg} alt="img" className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
                                        onLoadingComplete={() => setIsLoading(false)} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

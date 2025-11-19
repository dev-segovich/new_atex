"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// const imageList = [
// 	"/img/S1.webp",
// 	"/img/S2.webp",
// 	"/img/S3.webp",
// 	"/img/S4.webp",
// 	"/img/S5.webp",
// 	"/img/S6.webp",
// 	"/img/S7.webp",
// 	"/img/S8.webp",
// 	"/img/S9.webp",
// 	"/img/S10.webp",
// 	"/img/S11.webp",
// 	"/img/S12.webp",
// 	"/img/S13.webp",
// 	"/img/S14.webp",
// 	"/img/S15.webp",
// ];

const imageList = [
	"/img/S1.webp",
	"/img/S16.webp",
	"/img/S17.webp",
	"/img/S18.webp",
	"/img/S19.webp",
	"/img/S20.webp",
	"/img/S21.webp",
];

const Carousel = () => {
	const trackRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLDivElement>(null);

	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const isDragging = useRef(false);
	const startX = useRef(0);
	const currentTranslate = useRef(0);
	const prevTranslate = useRef(0);

	useEffect(() => {
		if (!isPaused) {
			const interval = setInterval(() => {
				setCurrentSlide((prev) => (prev + 1) % imageList.length);
			}, 3000);
			return () => clearInterval(interval);
		}
	}, [isPaused]);

	useEffect(() => {
		if (!trackRef.current) return;

		const slideWidth = trackRef.current.clientWidth;
		const offset = -currentSlide * slideWidth;

		currentTranslate.current = offset;
		prevTranslate.current = offset;

		trackRef.current.style.transform = `translateX(${offset}px)`;
	}, [currentSlide]);

	const goToSlide = (i: number) => setCurrentSlide(i);

	const getPositionX = (e: TouchEvent | MouseEvent) =>
		"touches" in e ? e.touches[0].clientX : e.clientX;

	const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
		isDragging.current = true;
		startX.current = getPositionX(e.nativeEvent);

		document.addEventListener("mousemove", handleTouchMove);
		document.addEventListener("mouseup", handleTouchEnd);
		document.addEventListener("touchmove", handleTouchMove);
		document.addEventListener("touchend", handleTouchEnd);
	};

	const handleTouchMove = (e: TouchEvent | MouseEvent) => {
		if (!isDragging.current || !trackRef.current) return;

		const currentPosition = getPositionX(e);
		currentTranslate.current =
			prevTranslate.current + currentPosition - startX.current;

		trackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
	};

	const handleTouchEnd = () => {
		isDragging.current = false;
		const movedBy = currentTranslate.current - prevTranslate.current;

		if (movedBy < -100 && currentSlide < imageList.length - 1)
			setCurrentSlide((p) => p + 1);
		else if (movedBy > 100 && currentSlide > 0) setCurrentSlide((p) => p - 1);
		else setCurrentSlide((p) => p);

		document.removeEventListener("mousemove", handleTouchMove);
		document.removeEventListener("mouseup", handleTouchEnd);
		document.removeEventListener("touchmove", handleTouchMove);
		document.removeEventListener("touchend", handleTouchEnd);
	};

	return (
		<section className="carousel-section relative">
			<div className="carousel overflow-hidden relative">
				<div
					className="carousel-track flex transition-transform duration-700 ease-out"
					ref={trackRef}
					onMouseDown={handleTouchStart}
					onTouchStart={handleTouchStart}
				>
					{imageList.map((src, i) => (
						<div
							key={i}
							className="carousel-item relative min-w-full h-[480px]"
						>
							<Image
								src={src}
								alt=""
								fill
								priority={i === 0}
								sizes="100vw"
								placeholder="blur"
								blurDataURL="/img/blur.webp"
								className="object-cover"
							/>
						</div>
					))}
				</div>

				<div className="flex flex-col items-center mt-4 gap-5">
					<div className="carousel-nav flex gap-2" ref={navRef}>
						{imageList.map((_, i) => (
							<div
								key={i}
								className={`carousel-nav-line ${
									i === currentSlide ? "active" : ""
								}`}
								onClick={() => goToSlide(i)}
							/>
						))}
					</div>

					<button
						onClick={() => setIsPaused(!isPaused)}
						className="bg-[#364350] text-white px-5 py-2 rounded-full shadow hover:bg-[#2e3a44] transition text-sm"
					>
						{isPaused ? "▶ Resume" : "❚❚ Pause"}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Carousel;

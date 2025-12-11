"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageComparisonSliderProps {
	beforeImage: string;
	afterImage: string;
	beforeAlt?: string;
	afterAlt?: string;
	caption?: string;
}

export default function ImageComparisonSlider({
	beforeImage,
	afterImage,
	beforeAlt = "Before",
	afterAlt = "After",
	caption,
}: ImageComparisonSliderProps) {
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMove = (clientX: number) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = clientX - rect.left;
		const percentage = (x / rect.width) * 100;

		// Limitar entre 0 y 100
		const bounded = Math.max(0, Math.min(100, percentage));
		setSliderPosition(bounded);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging) return;
		handleMove(e.clientX);
	};

	const handleTouchMove = (e: TouchEvent) => {
		if (!isDragging) return;
		handleMove(e.touches[0].clientX);
	};

	const handleStart = () => {
		setIsDragging(true);
	};

	const handleEnd = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		if (isDragging) {
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleEnd);
			document.addEventListener("touchmove", handleTouchMove);
			document.addEventListener("touchend", handleEnd);
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleEnd);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleEnd);
		};
	}, [isDragging]);

	return (
		<div className="image-comparison-container">
			<div
				ref={containerRef}
				className="image-comparison-wrapper"
				onMouseDown={handleStart}
				onTouchStart={handleStart}
			>
				{/* Imagen de "después" (fondo) */}
				<div className="comparison-image after-image">
					<Image
						src={afterImage}
						alt={afterAlt}
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>

				{/* Imagen de "antes" (overlay con clip) */}
				<div
					className="comparison-image before-image"
					style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
				>
					<Image
						src={beforeImage}
						alt={beforeAlt}
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>

				{/* Slider handle */}
				<div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
					<div className="slider-line"></div>
					<div className="slider-button">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 19l-7-7 7-7"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M9 19l7-7-7-7"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>

				{/* Etiquetas opcionales */}
				<div className="comparison-labels">
					<span className="label-before">{beforeAlt}</span>
					<span className="label-after">{afterAlt}</span>
				</div>
			</div>

			{caption && <p className="text-sm image-caption">{caption}</p>}

			<style jsx>{`
				.image-comparison-container {
					width: 100%;
					margin: 2rem auto;
				}

				.image-comparison-wrapper {
					position: relative;
					width: 100%;
					aspect-ratio: 16 / 9;
					overflow: hidden;
					border-radius: 8px;
					cursor: ew-resize;
					user-select: none;
					-webkit-user-select: none;
				}

				.comparison-image {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}

				.before-image {
					z-index: 2;
				}

				.after-image {
					z-index: 1;
				}

				.slider-handle {
					position: absolute;
					top: 0;
					bottom: 0;
					width: 4px;
					z-index: 3;
					transform: translateX(-50%);
					pointer-events: none;
				}

				.slider-line {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 50%;
					width: 4px;
					background: white;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
					transform: translateX(-50%);
				}

				.slider-button {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 48px;
					height: 48px;
					background: white;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
					color: #333;
					pointer-events: all;
					cursor: ew-resize;
				}

				.slider-button svg {
					width: 24px;
					height: 24px;
				}

				.comparison-labels {
					position: absolute;
					top: 20px;
					left: 0;
					right: 0;
					display: flex;
					justify-content: space-between;
					padding: 0 20px;
					z-index: 4;
					pointer-events: none;
				}

				.comparison-labels span {
					background: rgba(0, 0, 0, 0.7);
					color: white;
					padding: 8px 16px;
					border-radius: 4px;
					font-size: 14px;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.5px;
				}

				@media (max-width: 768px) {
					.comparison-labels {
						padding: 0 10px;
						top: 10px;
					}

					.comparison-labels span {
						padding: 6px 12px;
						font-size: 12px;
					}

					.slider-button {
						width: 40px;
						height: 40px;
					}
				}
			`}</style>
		</div>
	);
}

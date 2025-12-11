"use client";
import { useState } from "react";
import Image from "next/image";

interface ImageOpacitySliderProps {
	beforeImage: string;
	afterImage: string;
	beforeAlt?: string;
	afterAlt?: string;
	caption?: string;
}

export default function ImageOpacitySlider({
	beforeImage,
	afterImage,
	beforeAlt = "Before",
	afterAlt = "After",
	caption,
}: ImageOpacitySliderProps) {
	const [opacity, setOpacity] = useState(50);

	const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setOpacity(Number(e.target.value));
	};

	// Calcular las opacidades de cada imagen
	const beforeOpacity = opacity / 100;
	const afterOpacity = (100 - opacity) / 100;

	return (
		<div className="image-opacity-container">
			<div className="image-opacity-wrapper">
				{/* Imagen de "después" (fondo) */}
				<div
					className="opacity-image after-image"
					style={{ opacity: afterOpacity }}
				>
					<Image
						src={afterImage}
						alt={afterAlt}
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>

				{/* Imagen de "antes" (overlay) */}
				<div
					className="opacity-image before-image"
					style={{ opacity: beforeOpacity }}
				>
					<Image
						src={beforeImage}
						alt={beforeAlt}
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>

				{/* Etiquetas de las imágenes */}
				<div className="opacity-labels">
					<span className="label-before" style={{ opacity: beforeOpacity }}>
						{beforeAlt}
					</span>
					<span className="label-after" style={{ opacity: afterOpacity }}>
						{afterAlt}
					</span>
				</div>
			</div>

			{/* Slider de control */}
			<div className="slider-control">
				<div className="slider-labels-bottom">
					<span className="slider-label">{beforeAlt}</span>
					<span className="slider-label">{afterAlt}</span>
				</div>
				<input
					type="range"
					min="0"
					max="100"
					value={opacity}
					onChange={handleSliderChange}
					className="opacity-slider"
				/>
				<div className="slider-percentage">
					{Math.round(beforeOpacity * 100)}% / {Math.round(afterOpacity * 100)}%
				</div>
			</div>

			{caption && <p className="text-sm image-caption">{caption}</p>}

			<style jsx>{`
				.image-opacity-container {
					width: 100%;
					margin: 2rem auto;
				}

				.image-opacity-wrapper {
					position: relative;
					width: 100%;
					aspect-ratio: 16 / 9;
					overflow: hidden;
					border-radius: 8px;
					background: #000;
				}

				.opacity-image {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					transition: opacity 0.3s ease;
				}

				.before-image {
					z-index: 2;
				}

				.after-image {
					z-index: 1;
				}

				.opacity-labels {
					position: absolute;
					top: 20px;
					left: 0;
					right: 0;
					display: flex;
					justify-content: space-between;
					padding: 0 20px;
					z-index: 3;
					pointer-events: none;
				}

				.opacity-labels span {
					background: rgba(0, 0, 0, 0.7);
					color: white;
					padding: 8px 16px;
					border-radius: 4px;
					font-size: 14px;
					font-weight: 600;
					text-transform: uppercase;
					letter-spacing: 0.5px;
					transition: opacity 0.3s ease;
				}

				.slider-control {
					margin-top: 1.5rem;
					padding: 0 10px;
				}

				.slider-labels-bottom {
					display: flex;
					justify-content: space-between;
					margin-bottom: 0.5rem;
				}

				.slider-label {
					font-size: 14px;
					font-weight: 600;
					color: #333;
					text-transform: uppercase;
					letter-spacing: 0.5px;
				}

				.opacity-slider {
					width: 100%;
					height: 8px;
					border-radius: 4px;
					background: linear-gradient(to right, #364451 0%, #e0e7e5 100%);
					outline: none;
					-webkit-appearance: none;
					appearance: none;
					cursor: pointer;
				}

				.opacity-slider::-webkit-slider-thumb {
					-webkit-appearance: none;
					appearance: none;
					width: 24px;
					height: 24px;
					border-radius: 50%;
					background: white;
					border: 3px solid #4f46e5;
					cursor: pointer;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
					transition: transform 0.2s ease;
				}

				.opacity-slider::-webkit-slider-thumb:hover {
					transform: scale(1.2);
				}

				.opacity-slider::-moz-range-thumb {
					width: 24px;
					height: 24px;
					border-radius: 50%;
					background: white;
					border: 3px solid #4f46e5;
					cursor: pointer;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
					transition: transform 0.2s ease;
				}

				.opacity-slider::-moz-range-thumb:hover {
					transform: scale(1.2);
				}

				.slider-percentage {
					text-align: center;
					margin-top: 0.5rem;
					font-size: 14px;
					font-weight: 600;
					color: #666;
				}

				@media (max-width: 768px) {
					.opacity-labels {
						padding: 0 10px;
						top: 10px;
					}

					.opacity-labels span {
						padding: 6px 12px;
						font-size: 12px;
					}

					.slider-label {
						font-size: 12px;
					}

					.slider-percentage {
						font-size: 12px;
					}

					.opacity-slider {
						height: 6px;
					}

					.opacity-slider::-webkit-slider-thumb {
						width: 20px;
						height: 20px;
					}

					.opacity-slider::-moz-range-thumb {
						width: 20px;
						height: 20px;
					}
				}
			`}</style>
		</div>
	);
}

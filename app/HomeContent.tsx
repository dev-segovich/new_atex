"use client";
import Carousel from "@/components/carousel";
import Accordion from "@/components/accordionitem";
// import ImageComparisonSlider from "@/components/ImageComparisonSlider";
import ImageOpacitySlider from "@/components/ImageOpacitySlider";
import { useTranslation } from "react-i18next";
import "../i18n";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function HomeContent() {
	const { t } = useTranslation("common");
	const videoRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Send play command to YouTube iframe
						video.contentWindow?.postMessage(
							'{"event":"command","func":"playVideo","args":""}',
							"*"
						);
					} else {
						// Send pause command to YouTube iframe
						video.contentWindow?.postMessage(
							'{"event":"command","func":"pauseVideo","args":""}',
							"*"
						);
					}
				});
			},
			{
				threshold: 0.5,
			}
		);

		observer.observe(video);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<main>
			<div id="navbar-placeholder"></div>

			<Carousel />

			<section className="intro-section">
				<div className="intro-container">
					<p className="intro-text">{t("intro_1")}</p>
					<p className="intro-text">{t("intro_2")}</p>
					<p className="intro-text">{t("intro_3")}</p>
				</div>
			</section>

			<section className="video-section">
				<div className="video-container">
					<h1 className="video-heading">{t("video_title")}</h1>
					<iframe
						ref={videoRef}
						src="https://www.youtube.com/embed/vRMO4-0BI-M?enablejsapi=1&mute=1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="featured-video aspect-video"
					></iframe>
				</div>
			</section>

			<section className="services-section">
				<div className="services-container">
					<h1 className="services-heading">{t("we_provide")}</h1>
					<div className="services-grid">
						<div className="service-card">
							<h2 className="service-title">{t("service_1_title")}</h2>
							<p className="service-text">{t("service_1_text")}</p>
						</div>
						<div className="service-card">
							<h2 className="service-title">{t("service_2_title")}</h2>
							<p className="service-text">{t("service_2_text")}</p>
						</div>
					</div>
				</div>
			</section>

			<section className="featured-image-section">
				<div className="image-wrapper">
					<ImageOpacitySlider
						beforeImage="/img/Real A11.jpg"
						afterImage="/img/Render A1.webp"
						beforeAlt="Render"
						afterAlt="Real"
						caption={t("caption_1")}
					/>

					{/* <ImageComparisonSlider
						beforeImage="/img/Render A1.webp"
						afterImage="/img/Real A11.jpg"
						beforeAlt="Render"
						afterAlt="Real"
						caption={t("caption_1")}
					/> */}
				</div>
			</section>

			<section className="capabilities-section">
				<div className="capabilities-container">
					<h2 className="capabilities-heading">{t("capabilities")}</h2>
					<div className="capabilities-grid">
						<div className="capability-card">
							<h3 className="capability-title">{t("cap_1_title")}</h3>
							<p className="capability-text">{t("cap_1_text")}</p>
						</div>
						<div className="capability-card">
							<h3 className="capability-title">{t("cap_2_title")}</h3>
							<p className="capability-text">{t("cap_2_text")}</p>
						</div>
						<div className="capability-card">
							<h3 className="capability-title">{t("cap_3_title")}</h3>
							<p className="capability-text">{t("cap_3_text")}</p>
						</div>
					</div>
				</div>
			</section>

			<section className="why-choose-section">
				<div className="why-choose-container">
					<h2 className="why-heading">{t("why_choose")}</h2>
					<Accordion
						items={[
							{
								title: t("accordion_1_title"),
								content: t("accordion_1_content"),
							},
							{
								title: t("accordion_2_title"),
								content: t("accordion_2_content"),
							},
							{
								title: t("accordion_3_title"),
								content: t("accordion_3_content"),
							},
							{
								title: t("accordion_4_title"),
								content: t("accordion_4_content"),
							},
							{
								title: t("accordion_5_title"),
								content: t("accordion_5_content"),
							},
							{
								title: t("accordion_6_title"),
								content: t("accordion_6_content"),
							},
						]}
					/>
				</div>
			</section>

			<section className="featured-image-section">
				<div className="image-wrapper">
					<Image
						src="img/fondo5.webp"
						alt="Massing Atex Project"
						width={1920}
						height={1080}
						className="featured-image"
					/>
					<p className="image-caption">{t("caption_2")}</p>
				</div>
			</section>
		</main>
	);
}

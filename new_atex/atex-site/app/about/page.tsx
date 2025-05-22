'use client';

import { useEffect } from 'react';
// import ScrollExpandMedia from '@/components/scroll-expansion-hero';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('resetSection'));
  }, []);

  return (
    <div className="min-h-screen">
      {/* <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/img/a5.webp"
        bgImageSrc="/img/a3.webp"
        title="ABOUT ATEX"
        date="Real Estate Development"
        scrollToExpand="Scroll to explore"
      > */}
      <section className="relative w-full h-[60vh] overflow-hidden mb-16">
        <img
          src="/img/16.webp"
          alt="Services"
          className="brightness-[0.7] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">ABOUT US</h1>
        </div>
      </section>
        <div className="max-w-4xl mx-auto px-4 text-lg text-justify leading-relaxed">
        {/* <h3 className="text-2xl font-semibold mb-4">ABOUT US</h3> */}
        <p className="mb-6">
          Atex Group is a real estate advisory and owner representation firm serving private clients and family offices across the United States. Backed by over two decades of experience in real estate and infrastructure development across the U.S. and Latin America, we bring a deep understanding of both strategic oversight and local execution.
          <br /><br />
          Since 2018, we have transitioned away from telecom infrastructure to focus exclusively on high-end single-family homes, multifamily communities, and mixed-use developments. Our mission is to help clients bring their vision to life with clarity, control, and exceptional quality. In luxury residential projects, we work closely with homeowners, architects, and builders to ensure every detail reflects the client’s expectations—on time and to the highest standard.
          <br /><br />
          For multifamily and master-planned communities, we emphasize walkability, livability, and long-term value through thoughtful, human-scale design. We are committed to developing communities with a live–work–play philosophy—places that are functional, vibrant, and built for the future.
          <br /><br />
          With a track record of managing complex projects remotely, we’ve refined a model that combines centralized administrative and financial leadership with high-performing local teams. This allows us to deliver tailored results efficiently and effectively—without compromise on quality, budget, or design intent.
        </p>

        <h3 className="text-2xl font-semibold text-[#364350] mt-10 mb-6 text-center">Core Values</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-l-[4px] border-[#364350] p-4 shadow-sm rounded">
            <h4 className="text-lg font-semibold mb-2 text-[#364350]">Strategic Clarity</h4>
            <p>Every decision is guided by a long-term, data-driven perspective aligned with your goals.</p>
          </div>
          <div className="bg-white border-l-[4px] border-[#364350] p-4 shadow-sm rounded">
            <h4 className="text-lg font-semibold mb-2 text-[#364350]">Discreet Representation</h4>
            <p>We act as trusted stewards, protecting your interests with discretion and professionalism.</p>
          </div>
          <div className="bg-white border-l-[4px] border-[#364350] p-4 shadow-sm rounded">
            <h4 className="text-lg font-semibold mb-2 text-[#364350]">Long-Term Value</h4>
            <p>We prioritize sustainability, livability, and enduring design to preserve and grow value.</p>
          </div>
          <div className="bg-white border-l-[4px] border-[#364350] p-4 shadow-sm rounded">
            <h4 className="text-lg font-semibold mb-2 text-[#364350]">Client-Centered Execution</h4>
            <p>Your vision drives every step. We coordinate with precision and communicate with transparency.</p>
          </div>
        </div>

      </div>

      {/* </ScrollExpandMedia> */}
    </div>
  );
}

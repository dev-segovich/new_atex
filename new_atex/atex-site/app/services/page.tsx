'use client';

import { useEffect } from 'react';
import ServiceAccordion from '@/components/serviceaccordion';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#364350]">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/img/21.webp"
          alt="Services"
          className="brightness-[0.7] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Our Services</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center"> Full Lifecycle Owner Representation</h2>
        <p className="text-lg text-justify leading-relaxed">
        At Atex Group, we represent ownership interests from land evaluation through project closeout—managing development strategy, team coordination, financial oversight, and lender-facing documentation. While we do not perform site supervision ourselves, we partner with third-party professionals who specialize in the specific product type and local market. This model allows us to manage projects remotely across the U.S. with consistent precision and cost control. 
        <br /><br />
        By handling the most time-consuming administrative and financial processes, we free up local site experts to focus solely on what they do best: quality control and field supervision. This approach not only reduces friction but consistently attracts top-tier talent—resulting in higher-quality outcomes and greater project efficiency. Our structure is lean, effective, and proven—allowing clients to stay focused on the vision while we take care of the execution. 
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <ServiceAccordion />
    </section>

    </main>
  );
}

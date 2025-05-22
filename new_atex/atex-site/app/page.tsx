// import { main } from "framer-motion/client";
// import Image from "next/image";
import Carousel from '@/components/carousel';
import Accordion from "@/components/accordionitem";

export default function Home() {
  return (
    <main>
      <div id="navbar-placeholder"></div>

      <Carousel />
  <section className="intro-section">
    <div className="intro-container">
      {/* <h2 className="intro-heading">Intro</h2> */}
      <p className="intro-text">
        Atex Group provides full-scope development management and owner representation—without ever swinging a hammer. We partner with private clients and family offices to bring high-end residential, multifamily, and mixed-use projects to life across the U.S., offering strategic leadership from acquisition to delivery.
      </p>
      <p className="intro-text">
        We don’t perform construction or site supervision. Instead, we coordinate with top-tier, licensed professionals in each market—allowing us to manage complex projects remotely with precision, speed, and complete alignment with our clients’ vision. This model gives our clients the best of both worlds: local, on-the-ground expertise paired with a dedicated partner managing everything behind the scenes.
      </p>
      <p className="intro-text">
        From securing entitlements and assembling teams to managing budgets, lender draws, and project closeout, we serve as the engine behind successful developments—protecting your investment and freeing you to focus on what you do best.
      </p>
    </div>
  </section>
  <section className="services-section">
    <div className="services-container">
      <h2 className="services-heading">We Provide</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3 className="service-title">Real Estate Advisory</h3>
          <p className="service-text">
            At Atex Group, we represent owners from day one—guiding every critical decision before a project ever breaks ground. Our advisory services support clients through land acquisition with a focus on feasibility, entitlement strategy, and deal structure. We coordinate preliminary design studies, vet zoning paths, and align budgets and schedules with the project’s financial goals. Our approach emphasizes data-driven analysis and development intelligence—ensuring each opportunity is viable, aligned with long-term objectives, and positioned for successful execution.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-title">Client Representation</h3>
          <p className="service-text">
            As Owner’s Representatives, we act as the client’s trusted advisor throughout the entire development process—from early planning to project closeout. We lead goal setting, team assembly, design coordination, budget oversight, and schedule management to ensure alignment with the client’s vision and investment strategy. While we do not self-perform construction oversight, we coordinate with a qualified third-party site supervision expert—specifically selected based on the product type and location. Our role is to safeguard the project’s success by driving accountability, reducing risk, and making sure every decision reflects the owner&apos;s best interests.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="featured-image-section">
    <div className="image-wrapper">
      <img src="img/a1.webp" alt="Featured Atex Project" className="featured-image" />
      <p className="image-caption">Atex Projects: Where Vision Becomes Reality</p>
    </div>
  </section>
  <section className="capabilities-section">
    <div className="capabilities-container">
      <h2 className="capabilities-heading">Capabilities</h2>
      <div className="capabilities-grid">
        <div className="capability-card">
          <h3 className="capability-title">Ultra High-End Homes</h3>
          <p className="capability-text">
            We specialize in managing the development of custom residences averaging 10,000 square feet—each one uniquely tailored to reflect the vision, lifestyle, and expectations of our private clients and their design teams. From the earliest planning conversations to final delivery, we coordinate every detail across consultants, builders, and trades to ensure the process is seamless and the outcome extraordinary. With Atex, your dream home is guided with precision, discretion, and total commitment to quality. 
          </p>
        </div>
        <div className="capability-card">
          <h3 className="capability-title">Multifamily Communities</h3>
          <p className="capability-text">
          We partner with developers and clients to deliver high-performing, garden-style apartment communities—typically over 200 units and located near job centers and transportation corridors. Acting as your back office from acquisition to disposition, we handle entitlements, budgeting, team coordination, lender packages, and everything in between. Our support allows you to stay focused on raising capital, building relationships, and shaping the big picture. 
          </p>
        </div>
        <div className="capability-card">
          <h3 className="capability-title">Commercial & Mixed-use</h3>
          <p className="capability-text">
            In our mixed-use projects, we help bring commercial components to life with purpose and intention. Whether activating experiential retail or supporting local entrepreneurs, we work closely with clients and partners to curate environments that complement the residential experience and drive long-term value. From feasibility to fit-out, we manage the full scope of development—quietly powering the work behind the scenes so our partners can lead from the front. 
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="why-choose-section">
  <div className="why-choose-container">
    <h2 className="why-heading">Why Clients Choose Atex</h2>
    <Accordion
      items={[
        {
          title: 'End-to-End Oversight',
          content:
            'We manage the full development process—from planning to closeout—ensuring every phase aligns with your goals. Our holistic approach helps avoid disconnects between design, permitting, and execution.',
        },
        {
          title: 'Specialized Team Alignment',
          content:
            'We leverage a trusted network of architects, engineers, consultants, and third-party experts—carefully matched to each project’s scale, product type, and location.',
        },
        {
          title: 'Clear, Proactive Communication',
          content:
            'We prioritize clarity, consistency, and responsiveness. Our team keeps owners informed at every stage, anticipating challenges and ensuring alignment across stakeholders.',
        },
        {
          title: 'Time-Saving Execution',
          content:
            'We handle the details so you don’t have to. With rigorous organization and proactive management, we simplify decision-making and free you to focus on high-level priorities.',
        },
        {
          title: 'Risk Management, Built In',
          content:
            'We reduce risk through early planning, detailed feasibility reviews, and continuous oversight. When issues arise, we solve them before they escalate—protecting your time, capital, and vision.',
        },
        {
          title: 'Local Expertise, National Reach',
          content:
            'We operate with flexibility and reach—combining regional knowledge with a national presence. Wherever your project is located, we bring the right relationships and on-the-ground insight.',
        },
      ]}
    />
  </div>
</section>

  <section className="featured-image-section">
    <div className="image-wrapper">
      <img src="img/fondo5.webp" alt="Featured Atex Project" className="featured-image" />
      <p className="image-caption">Atex Projects: Where Vision Becomes Reality</p>
    </div>
  </section>
    </main>
  );
}

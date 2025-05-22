'use client';

import { useState } from 'react';

interface ServiceSection {
  title: string;
  subtitle: string;
  items: string[];
}

const serviceData:  ServiceSection[] = [
    {
      title: '1. Market Intelligence & Site Evaluation',
      subtitle: 'Research & Due Diligence',
      items: [
        'Land search strategy and site visits to evaluate physical, zoning, and access conditions',
        'Risk and constraints analysis (e.g. utilities, easements, environmental conditions)',
        'Comparable property analysis for revenue benchmarking',
        'Preliminary schedule and budget planning for entitlements, design, and delivery',
        'Zoning overlay review and early planning authority engagement',
        'Acquisition support, including deal structuring and closing coordination'
      ]
    },
    {
      title: '2. Feasibility & Financial Modeling',
      subtitle: 'Feasibility Studies & Pro Forma Analysis',
      items: [
        'Customizable project pro formas with revenue, cost, and phasing inputs',
        'Full development budget creation with Division 1–16 line items',
        'IRR calculations, cash flow projections, and capital stack structuring',
        'Advisory on equity, JV structuring, mezzanine debt, and lender pitch support',
        'Scenario testing, sensitivity analysis, and value optimization studies'
      ]
    },
    {
      title: '3. Team Formation & Procurement Strategy',
      subtitle: 'Team Selection & Contracting',
      items: [
        'Curate, evaluate, and coordinate architects, engineers, and consultants',
        'Contractor prequalification, bid packaging, and trade partner vetting',
        'Construction Manager or GC interview prep and contract negotiation support',
        'Alignment of scope with design objectives, schedule, and budget',
        'Procurement timeline mapping tied to project milestones and financing triggers'
      ]
    },
    {
      title: '4. Entitlements, Design & Approvals',
      subtitle: 'Predevelopment & Design Management',
      items: [
        'Oversight of zoning, site plan approvals, permitting, and variances',
        'Coordination with legal, planning, and land use consultants',
        'Architect, MEP, and structural engineer management',
        'Preliminary massing, layout programming, and parking efficiency analysis',
        'Integration of green building incentives and energy credits',
        'Permitting process strategy and liaison with local agencies',
        'Value engineering to ensure cost control without design compromise',
        'Support with modular, prefabricated, and alternate delivery methods'
      ]
    },
    {
      title: '5. Pre-Construction Administration',
      subtitle: 'Cost & Scope Validation',
      items: [
        'Review of budget assumptions and reconciliation with CM or GC',
        'Setup of construction accounting protocols and Schedule of Values',
        'Review of insurance, bonding, and contract risk allocations',
        'Documentation prep for lenders, equity partners, and insurer reviews',
        'Proactive alignment of procurement and mobilization plans'
      ]
    },
    {
      title: '6. Construction Phase Support',
      subtitle: 'Construction Oversight Administration (Supervision performed by third-party experts)',
      items: [
        'Track construction progress via monthly reporting and site team coordination',
        'Review and approval of change orders and draw requests',
        'Manage documentation for lender loan draws and budget tracking',
        'Mitigate schedule delays through proactive contractor coordination',
        'Administer cost certifications and soft cost validations',
        'Maintain consistent communication with clients, legal, and financial teams',
        'Issue resolution facilitation between owner, consultants, and contractor'
      ]
    },
    {
      title: '7. Project Controls & Quality Assurance',
      subtitle: 'Financial Oversight & Risk Management',
      items: [
        'Ongoing pro forma and cost-to-complete updates',
        'Monitoring of project milestones and contractor performance',
        'Change order and claims evaluation',
        'Monthly work-in-place valuation and soft cost invoice review',
        'Develop and track master schedule and short-term look-aheads',
        'Identify and resolve scope gaps early',
        'Quality benchmarking through collaboration with third-party site supervisors'
      ]
    },
    {
      title: '8. Project Closeout & Turnover',
      subtitle: 'Final Delivery Management',
      items: [
        'Final draw coordination and cost reconciliation',
        'Punch list management and turnover planning (via third party)',
        'Closeout documentation, warranties, and regulatory compliance',
        'Condo formation and transition to building management or sale',
        'Coordination of remaining escrow/holdback releases'
      ]
    },
    {
      title: '9. Lender Coordination & Investor Reporting',
      subtitle: 'Loan & Investment Services',
      items: [
        'Construction loan monitoring and progress draw certifications',
        'Equity contribution tracking and confirmation',
        'Insured deposit release coordination',
        'Reporting to senior and mezzanine lenders',
        'Review of key financial documents, pre-sale/lease criteria, and insurance policies',
        'Site visit reports and lender-specific due diligence packages'
      ]
    },
    {
      title: '10. Post-Construction Financial Services',
      subtitle: 'Waterfall & Investor Reconciliation',
      items: [
        'Waterfall reporting for co-owners and capital partners',
        'Distribution analysis: loan repayment, preferred return, equity splits',
        'Warranty reserve planning, Letter of Credit reconciliation',
        'Preferred return and profit-sharing documentation',
        'Final report assembly for investors and family offices'
      ]
    }
  ];
  

export default function ServiceAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {serviceData.map((section, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 font-semibold text-lg text-[#364350] flex justify-between items-center"
          >
            {section.title}
            <span className="ml-2 text-xl">{activeIndex === index ? '−' : '+'}</span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
              activeIndex === index ? 'max-h-screen py-4' : 'max-h-0'
            }`}
          >
            <h4 className="font-semibold text-md mb-2 text-[#364350]">
              {section.subtitle}
            </h4>
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {index === 5 && (
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-900 rounded">
                <strong>Note:</strong> All field-level supervision and construction services are performed by licensed third-party professionals. ATEX Group CX does not operate as a general contractor or construction manager of record
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

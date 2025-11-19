'use client';

import dynamic from 'next/dynamic';

const InvestmentStrategyContent = dynamic(() => import('./InvestmentStrategyContent'), { ssr: false });

export default function InvestmentStrategyPage() {
    return <InvestmentStrategyContent />;
}

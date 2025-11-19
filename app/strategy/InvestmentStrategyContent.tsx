'use client';

import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Trans } from 'react-i18next';



export default function InvestmentStrategyContent() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[60vh] overflow-hidden mb-16">
        <img
          src="/img/F3.webp"
          alt="Investment Strategy"
          className="brightness-[0.7] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {t('investmentStrategy.title')}
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 text-lg text-justify leading-relaxed text-[#364350]">

        <Trans className="mb-6" i18nKey="investmentStrategy.intro" components={{ strong: <strong /> }} />

        <div className="text-center mt-4 mb-8">
            <button
            className="bg-[#364350] hover:bg-[#2a343d] text-white py-2 px-6 rounded shadow"
            onClick={() => {
                // Aquí puedes redirigir a una sección o abrir un modal
                // Por ejemplo: scroll hacia formulario o abrir modal de contacto
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            >
            Request more information here
            </button>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
          {t('investmentStrategy.why.title')}
        </h2>
        
        <p className="mb-6">{t('investmentStrategy.why.description')}</p>

        {/* Video destacado desde YouTube */}
        <section className="featured-video-section mb-10">
        <div className="video-wrapper text-center">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md max-w-4xl mx-auto">
            <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vRMO4-0BI-M?autoplay=1&mute=1&loop=1&playlist=vRMO4-0BI-M"
            title="Latest Atex Project"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
            </div>
        </div>
        </section>



        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
          {t('investmentStrategy.ownership.title')}
        </h2>
        <p className="mb-6">{t('investmentStrategy.ownership.description')}</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
        <Trans i18nKey="investmentStrategy.howItWorks.title" components={{ strong: <strong /> }} />
        </h2>

        <p className="mb-4">
        <Trans i18nKey="investmentStrategy.howItWorks.description1" />
        </p>
        <p className="mb-4">
        <Trans i18nKey="investmentStrategy.howItWorks.description2" />
        </p>
        <p className="mb-6">
        <Trans i18nKey="investmentStrategy.howItWorks.description3" components={{ strong: <strong /> }} />
        </p>
        <p className="mb-6">
        <Trans i18nKey="investmentStrategy.howItWorks.description4" components={{ strong: <strong /> }} />
        </p>
        <p className="mb-6">
        <Trans i18nKey="investmentStrategy.howItWorks.description5" />
        </p>


        <h2 className="text-2xl font-semibold mt-10 mb-6 text-center">
        {t('investmentStrategy.criteria.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(t('investmentStrategy.criteria.items', { returnObjects: true }) as { icon: string; label: string }[]).map((item, index) => (
            <div
            key={index}
            className="bg-[#364350] text-white p-6 rounded-lg flex flex-col items-center text-center shadow-md"
            >
            <img
                src={`/img/${item.icon}`}
                alt={item.label}
                className="w-50 h-50 object-contain"
            />
            <p className="text-base font-medium">{item.label}</p>
            </div>
        ))}
        </div>


        <h2 className="text-2xl font-semibold mt-10 mb-6 text-center">
            {t('investmentStrategy.cardsTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
            {(t('investmentStrategy.cards', { returnObjects: true }) as { title: string; description: string }[]).map(
                (card, idx) => (
                <div
                    key={idx}
                    className="bg-white border-l-[4px] border-[#364350] p-4 shadow-sm rounded"
                >
                    <h3 className="text-lg font-semibold mb-2 text-[#364350]">
                    {card.title}
                    </h3>
                    <p>{card.description}</p>
                </div>
                )
            )}
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">
        {t('investmentStrategy.carouselTitle')}
        </h2>

        <div className="max-w-4xl mx-auto">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="rounded shadow-md"
            >
            {['F1.webp', 'F2.webp', 'F3.webp', 'F4.webp', 'F5.webp', 'F6.webp'].map((img, idx) => (
                <SwiperSlide key={idx}>
                <img
                    src={`/img/${img}`}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-auto object-cover rounded"
                />
                </SwiperSlide>
            ))}
            </Swiper>

        </div>

      </div>
    </div>
  );
}

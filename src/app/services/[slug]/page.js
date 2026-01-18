// import { categories } from "@/app/libs/categories";
// import { notFound } from "next/navigation";
// import AnimatedHero from "@/app/components/AnimatedHero"; // We'll create this next

// // 1. Generate SEO Metadata
// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const data = categories.find((c) => c.slug === slug);

//   if (!data) return { title: "Service Not Found" };

//   return {
//     title: `${data.title} | Luxury Architecture Firm`,
//     description: data.tagline,
//     openGraph: {
//       title: data.title,
//       description: data.tagline,
//       images: [`/og/${slug}.jpg`],
//     },
//   };
// }

// // 2. Pre-render all 40+ pages at build time
// export async function generateStaticParams() {
//   return categories.map((cat) => ({ slug: cat.slug }));
// }

// export default async function CategoryPage({ params }) {
//   const { slug } = await params;
//   const data = categories.find((c) => c.slug === slug);

//   if (!data) notFound();

//   return (
//     <main className="bg-[#0a0a0a] text-white min-h-screen overflow-hidden">
//       <AnimatedHero data={data} />

//       {/* Content Section */}
//       <section className="px-10 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
//         <div className="reveal-text">
//           <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
//             Expertise
//           </h2>
//           <p className="text-2xl leading-relaxed font-light">
//             {data.description}
//           </p>
//         </div>
//         <div className="h-[400px] bg-neutral-900 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
//           {/* Replace with your architectural imagery */}
//           <div className="w-full h-full bg-[url('/arch-sample.jpg')] bg-cover bg-center" />
//         </div>
//       </section>
//     </main>
//   );
// }



import { categories } from '@/app/libs/categories';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import HeroAnimation from '@/app/components/AnimatedHero';
import CtaSection from '@/app/components/CtaSection';
import Footer from '@/app/components/Footer';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = categories.find((c) => c.slug === slug);
  if (!data) return { title: "Not Found" };

  return {
    title: `${data.title} | Luxury Architecture & Construction`,
    description: data.tagline,
    openGraph: {
      images: [data.thumbnail || data.image],
    },
  };
}

// export default async function ServicePage({ params }) {
//   const { slug } = await params;
//   const data = categories.find((c) => c.slug === slug);

//   if (!data) notFound();

//   return (
//     <div className="bg-[#f8f8f8] text-neutral-900 min-h-screen font-sans">
//       <HeroAnimation data={data} />

//       <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
//         {/* Descriptive Text */}
//         <div className="md:col-span-5">
//           <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-400 mb-6 font-bold">
//             Project Overview
//           </h2>
//           <p className="text-2xl font-light leading-relaxed text-neutral-700">
//             {data.description}
//           </p>
//         </div>

//         {/* Realistic Secondary Image */}
//         <div className="md:col-span-7 relative aspect-4/3 overflow-hidden rounded-sm shadow-2xl">
//           <Image 
//             src={data.image} 
//             alt={data.title}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = categories.find((c) => c.slug === slug);

  return (
    <div className="bg-white">
      <HeroAnimation data={data} /> {/* The GSAP Hero we built earlier */}

      {/* SECTION 1: Statistics Bar (Social Proof) */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {data.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <h4 className="text-5xl font-light mb-2">{stat.value}</h4>
              <p className="text-neutral-500 uppercase tracking-widest text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Detailed Services (GSAP Grid) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-16">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.features.map((feature, i) => (
            <div key={i} className="p-10 border border-neutral-100 hover:border-black transition-colors duration-500 group">
              <span className="text-neutral-300 group-hover:text-black transition-colors">0{i+1}</span>
              <h3 className="text-xl font-medium mt-4 mb-2">{feature.title}</h3>
              <p className="text-neutral-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: The Process (Vertical Timeline) */}
      <section className="py-32 bg-[#fcfcfc] px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] text-neutral-400 mb-16">Our Process</h2>
          {data.process.map((p, i) => (
            <div key={i} className="flex gap-10 mb-20 last:mb-0">
              <span className="text-2xl font-light text-neutral-300">{p.step}</span>
              <div>
                <h3 className="text-2xl font-medium mb-3">{p.name}</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* SECTION 4: Final CTA (Sticky Footer style) */}
      {/* <section className="h-[60vh] flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">Ready to Build?</h2>
          <button className="px-12 py-5 bg-black text-white rounded-full uppercase text-xs tracking-widest hover:scale-105 transition-transform">
            Request a Consultation
          </button>
        </div>
      </section> */}
      <CtaSection />
      <Footer />
    </div>
  );
}
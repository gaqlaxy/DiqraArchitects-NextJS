


// import { categories } from '@/app/libs/categories';
// import Image from 'next/image';
// import Link from 'next/link'; //
// import { notFound } from 'next/navigation';
// import HeroAnimation from '@/app/components/AnimatedHero';
// import CtaSection from '@/app/components/CtaSection';
// import Footer from '@/app/components/Footer';



// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const data = categories.find((c) => c.slug === slug);

//   if (!data) return { title: "Service Not Found" };

//   // SEO TRICK: Add "Location" and "intent" words automatically
//   const location = "Chennai"; // Or "India"
//   const title = `Best ${data.title} in ${location} | Top Rated Service`;

//   return {
//     title: title,
//     description: `Looking for ${data.title}? We provide ${data.tagline} with ${data.stats[0].value} successful projects. Get a free quote for ${data.title.toLowerCase()} today.`,
//     alternates: {
//       canonical: `https://yourwebsite.com/services/${slug}`,
//     },
//     openGraph: {
//       title: title,
//       description: data.tagline,
//       images: [data.thumbnail],
//       type: 'website',
//     },
//   };
// }



// export default async function ServicePage({ params }) {
//   const { slug } = await params;
//   const data = categories.find((c) => c.slug === slug);
//   if (!data) return notFound();
//   // Add this inside the component return, right at the top

//   return (
//     <div className="bg-white">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Service",
//             "name": data.title,
//             "provider": {
//               "@type": "ConstructionBusiness",
//               "name": "Diqra Architects",
//               "image": "https://diqraarchitects.com/logo.png",
//               "priceRange": "INR"
//             },
//             "areaServed": {
//               "@type": "City",
//               "name": "chengalpattu" // Change to your target city
//             },
//             "description": data.description,
//             "offer": {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": data.title
//               }
//             }
//           })
//         }}
//       />
//       <HeroAnimation data={data} /> {/* The GSAP Hero we built earlier */}

//       {/* SECTION 1: Statistics Bar (Social Proof) */}
//       <section className="bg-[#1a1a1a] text-white py-20 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//           {data.stats.map((stat, i) => (
//             <div key={i} className="stat-item">
//               <h4 className="text-5xl font-light mb-2">{stat.value}</h4>
//               <p className="text-neutral-500 uppercase tracking-widest text-xs">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 2: SEO CONTENT BLOCK (Crucial for Ranking) */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-light mb-8 text-black">
//             Professional {data.title} Services in Chengalpattu
//           </h2>
//           <p className="text-lg text-neutral-600 leading-relaxed mb-6">
//             Diqra Architects provides premium <strong>{data.title.toLowerCase()}</strong> solutions tailored to the unique landscape of Chengalpattu and surrounding areas.
//             Whether you are looking for residential expertise or large-scale commercial development, our team ensures
//             international standards with local compliance.
//           </p>
//           <p className="text-md text-neutral-500 italic">
//             Specializing in {data.features.map(f => f.title).join(", ")}.
//           </p>
//         </div>
//       </section>

//       {/* SECTION 2: Detailed Services (GSAP Grid) */}
//       <section className="py-32 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-light mb-16">Core Expertise</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {data.features.map((feature, i) => (
//             <div key={i} className="p-10 border border-neutral-100 hover:border-black transition-colors duration-500 group">
//               <span className="text-neutral-300 group-hover:text-black transition-colors">0{i + 1}</span>
//               <h3 className="text-xl font-medium mt-4 mb-2">{feature.title}</h3>
//               <p className="text-neutral-500">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 3: The Process (Vertical Timeline) */}
//       <section className="py-32 bg-[#fcfcfc] px-6">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-sm uppercase tracking-[0.4em] text-neutral-400 mb-16">Our Process</h2>
//           {data.process.map((p, i) => (
//             <div key={i} className="flex gap-10 mb-20 last:mb-0">
//               <span className="text-2xl font-light text-neutral-300">{p.step}</span>
//               <div>
//                 <h3 className="text-2xl font-medium mb-3">{p.name}</h3>
//                 <p className="text-lg text-neutral-600 leading-relaxed">{p.detail}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 5: Related Services (Internal Linking) */}
//       <section className="py-20 px-6 border-t border-neutral-200">
//         <div className="max-w-7xl mx-auto">
//           <h3 className="text-xl font-bold mb-8 italic">Other Expert Services by Diqra Architects</h3>
//           <div className="flex flex-wrap gap-4">
//             {categories
//               .filter((c) => c.slug !== slug)
//               .sort(() => 0.5 - Math.random())
//               .slice(0, 12)
//               .map((cat) => (
//                 <Link
//                   key={cat.slug}
//                   href={`/services/${cat.slug}`}
//                   className="px-5 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-sm hover:bg-black hover:text-white transition-all"
//                 >
//                   {cat.title}
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </section>


//       <CtaSection />
//       <Footer />
//     </div>

//   );
// }

import { categories } from '@/app/libs/categories';
import { notFound } from 'next/navigation';
import ServiceClient from '@/app/components/ServiceClient'; // The Visual Component

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = categories.find((c) => c.slug === slug);

  if (!data) return { title: "Service Not Found" };

  const city = "Chennai"; // Dynamic location insertion for SEO

  return {
    title: `Top ${data.title} in ${city} | Premium Services`,
    description: `Looking for ${data.title}? Diqra Architects delivers ${data.tagline} with ${data.stats[0].value} completed projects. Rated #1 in ${city}.`,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
      url: `https://diqraarchitects.com/services/${slug}`,
      siteName: "DIQRA Architects",
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = categories.find((c) => c.slug === slug);
  if (!data) return notFound();

  // JSON-LD for Google Rich Results (Essential for JustDial/Local SEO traffic)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "provider": {
      "@type": "GeneralContractor",
      "name": "Diqra Architects",
      "image": "https://diqraarchitects.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chengalpattu",
        "addressRegion": "TN",
        "addressCountry": "IN"
      }
    },
    "description": data.description,
    "areaServed": ["Chennai", "Chengalpattu", "Kanchipuram"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": data.features.map((f) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f.title
        }
      }))
    }
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceClient data={data} />
    </main>
  );
}
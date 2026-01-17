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

// app/services/[slug]/page.js
import { categories } from "@/app/libs/categories";
import Navbar from "@/app/components/Navbar";
import AnimatedHero from "@/app/components/AnimatedHero";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = categories.find((c) => c.slug === slug);

  if (!data) return { title: "Service Not Found" };

  return {
    title: `${data.title} | Diqra Architects`,
    description: data.tagline,
    openGraph: {
      title: data.title,
      description: data.tagline,
      images: [`/og/${slug}.jpg`],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = categories.find((c) => c.slug === slug);

  return (
    <div className="bg-[#fcfcfc] text-[#1a1a1a] selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <AnimatedHero data={data} />

        {/* Simple Realistic Section: The Content */}
        <section className="max-w-screen-xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-neutral-400 mb-4">
              01 / Our Expertise
            </h2>
            <h3 className="text-4xl font-medium leading-tight">
              Specialized Solutions for {data.title}
            </h3>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              {data.description} Our approach to {data.title.toLowerCase()}{" "}
              combines structural integrity with aesthetic excellence. We
              transform blueprints into landmarks.
            </p>
            <div className="h-[1px] w-full bg-neutral-200 mb-8" />
            <ul className="grid grid-cols-2 gap-y-4 text-sm uppercase tracking-tight font-medium">
              <li>• Planning & Design</li>
              <li>• Project Management</li>
              <li>• Structural Engineering</li>
              <li>• Sustainable Building</li>
            </ul>
          </div>
        </section>

        {/* Realistic Image Grid */}
        <section className="px-6 pb-24">
          <div className="aspect-[21/9] w-full bg-neutral-200 overflow-hidden rounded-sm relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            <img
              src={`/images/${slug}-hero.jpg`}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

// export default function robots() {
//     return {
//         rules: {
//             userAgent: '*',
//             allow: '/',
//             disallow: '/private/',
//         },
//         sitemap: 'https://diqraarchitects.com/sitemap.xml',
//     }
// }

export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: "https://diqraarchitects.com/sitemap.xml",
  };
}

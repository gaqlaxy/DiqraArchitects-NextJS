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
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: "https://diqraarchitects.com/sitemap.xml",
  };
}

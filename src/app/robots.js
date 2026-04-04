// export default function robots() {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         disallow: "/",
//       },
//     ],
//   };
// }


export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"], // if needed
      },
    ],
    sitemap: "https://diqraarchitects.com/sitemap.xml",
  };
}
// export default {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   }
// }

export default {
  plugins: {
    "@tailwindcss/postcss": {},   
    autoprefixer: {},            
    cssnano: { preset: "default" } 
  }
};
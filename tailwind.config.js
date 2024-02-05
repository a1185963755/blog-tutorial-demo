/*
 * @Author: Oliver
 * @Date: 2024-02-01 11:05:08
 * @LastEditors: Oliver
 * @LastEditTime: 2024-02-02 13:57:37
 * @Description:
 *
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,astro,tsx,ts,md}"],
  },
  theme: {
    extend: {},
    colors: {
      navy: "#462492",
    },
  },
  plugins: [],
  darkMode: "class",
};

/*
 * @Author: Oliver
 * @Date: 2024-01-30 18:38:26
 * @LastEditors: Oliver
 * @LastEditTime: 2024-02-02 18:10:35
 * @Description:
 *
 */
document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("hidden");
  });
});

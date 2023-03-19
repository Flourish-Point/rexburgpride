// Set data theme before rendering
const theme = localStorage.getItem("theme");
document.documentElement.setAttribute(
  "data-theme",
  theme ? JSON.parse(theme) : "light"
);

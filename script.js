// Marca o link ativo no menu com base no arquivo atual
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();
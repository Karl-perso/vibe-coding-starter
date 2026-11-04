const projectsToggle = document.querySelector(".projects-toggle");
const projects = document.querySelector("#projects");

projectsToggle.addEventListener("click", () => {
	const isExpanded = projectsToggle.getAttribute("aria-expanded") === "true";

	projectsToggle.setAttribute("aria-expanded", String(!isExpanded));
	projects.hidden = isExpanded;
	projectsToggle.querySelector(".button-label").textContent = isExpanded
		? "Découvrir mes projets"
		: "Masquer les projets";
});

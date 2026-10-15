
const activityButton = document.getElementById("activityBtn");

activityButton.addEventListener("click", () => {
  const activitySection = document.getElementById("transactions");

  activitySection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
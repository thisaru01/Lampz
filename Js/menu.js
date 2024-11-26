//toggle the sidebar menu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
  }
  
// Close the sidebar 
  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menu");
  
    if (
      sidebar.style.width === "250px" &&
      !sidebar.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      sidebar.style.width = "0";
    }
  });
  // Store elements
  const hamburger = document.querySelector("#hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector(".body");
  const map = document.querySelector("#map");

  // Toggle hamburger menu
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("open");
    body.classList.toggle("no-scroll");
  });

  // Klik == terug naar homepage
  goHome = () => {
    window.location.href = "../HTML-CSS/index.html";
  };

  // Button terug omhoog
  goUp = () => {
    document.documentElement.scrollTop = 300;
  };

  // function initialize() {
  //   var mapOptions = {
  //       center: new google.maps.LatLng(52.476551, 6.570020),
  //       zoom: 18,
  //       mapTypeId: 'hybrid'
  //   };
  //   var map = new google.maps.Map(document.getElementById('map'),
  //   mapOptions);
  // }

initMap = () => {
  const myLatLng = { lat: 52.477, lng: 6.570 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
    mapTypeId: "satellite",
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Here am I",
  });
};
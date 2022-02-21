// ***** IMPORTS ***** //

import "./styles/styles.css";

import faLabs from "./utils/fa_labs.js";

document.addEventListener("DOMContentLoaded", function () {
  // ***** DOM ELEMENTS ***** //

  // const $menuIcon = document.getElementById("menu-icon");
  // const $navbar = document.getElementById("navbar");

  // ***** EVENT LISTENERS ***** //

  // $menuIcon.addEventListener("click", () => {
  //   $navbar.classList.toggle("hidden");
  // });

  // ***** FUNCTIONS ***** //

  /**
   * Returns a marker with a binded popup
   *
   * @param {object} lab The object with data to bind
   * @param {map} map The map to bind the markers
   */
  function createMarker(lab, map) {
    const { site, coordinates, contacts } = lab;

    // Create marker with "faLab" coordinates
    let marker = L.marker(coordinates, {
      title: site,
      riseOnHover: true,
    }).addTo(map);

    // If the lab has no contacts we bind a message to the marker
    if (contacts.length <= 0) {
      const message = /*html*/ `
        <h3>Site: ${site}</h3><br>
        <p>No contact available</p>
      `;
      marker.bindPopup(message);
      return marker;
    }

    // Create a popup message with each contact information

    const message = /*html*/ `
        <h3>${site}</h3>
        <br>
        <p>Contacts: <br>
          ${contacts
            .map(
              (contact) =>
                `<a href="mailto:${contact.email}@flex.com">${contact.name}</a><br>`
            )
            .join("")}</p>`;

    // Create popup and return marker

    marker.bindPopup(message);
    return marker;
  }

  // ***** LEAFLET MAP  ***** //

  let map = L.map("map", {
    // Options object with map's initial properties
    center: [20, 0],
    zoom: 2,
    zoomSnap: 0.1,
    zoomDelta: 0.1,
    minZoom: 2,
    dragging: true,
    maxBounds: [
      [80.703997, -165.9375],
      [-77.078784, 164.882813],
    ],
  });

  // ***** LEAFLET MAP TILE LAYERS ***** //

  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=c7sfiYbOOPrFNk6C9d8y",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ).addTo(map);

  // ***** LEAFLET MAP MARKERS ***** //
  faLabs.forEach((lab) => createMarker(lab, map));
});

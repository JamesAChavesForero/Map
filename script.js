const routeInfo = (route) => {
  routeObject = {
    ecRoute: {
      color: "#C40C11",
      price: 350,
      routeName: "East Coast",
      states:
        "AL, AR, CT, DE, FL, GA, IN, KY, LA, MD, MA, MI, MS, NJ, NY, NC, OH, PA, RI, SC, TN, VA & WV",
      ETA: "",
    },
    wcRoute: {
      color: "#E6E01C",
      price: 500,
      routeName: "West Coast",
      states: "California, Idaho, Nevada, Oregon & Washington",
      ETA: "",
    },
    nwRoute: {
      color: "#BE0BC4",
      price: 400,
      routeName: "North West",
      states: "Montana, Nebraska, North Dakota, South Dakota, Utah & Wyoming",
      ETA: "",
    },
    chRoute: {
      color: "#0B6DC4",
      price: 400,
      routeName: "Chicago Coast",
      states: "Illinois , Iowa, Minnesota, Missouri & Wisconsin",
      ETA: "",
    },
    txRoute: {
      color: "#DEA812",
      price: 450,
      routeName: "Texas Coast",
      states: "Arizona, Colorado, Kansas, New Mexico, Oklahoma & Texas",
      ETA: "",
    },
    exRoute: {
      color: "#0BC462",
      price: 425,
      routeName: "East Extended",
      states: "Maine, New Hampshire & Vermont",
      ETA: "",
    },
    noRoute: {
      color: "#7C7C7C",
      price: 0,
      routeName: "No ",
      states: "Hawaii & Alaska",
      ETA: "",
    },
  };

  document.getElementById("title").innerText = `Cevi Med Premium Shipping - ${
    routeObject[`${route}`].routeName
  } Route`;

  document.getElementById("price").style.color = routeObject[`${route}`].color;

  document.getElementById("price").innerHTML = `${
    routeObject[`${route}`].price
  }`;

  document.getElementById(
    "svgContainer"
  ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" xmlns:v="https://vecta.io/nano"><path fill-rule="evenodd" d="M3.127 3.01l1.312-.829C6.368.962 7.332.353 8.31.573s1.587 1.185 2.806 3.114 1.828 2.893 1.608 3.871-1.185 1.587-3.114 2.806l-1.312.829c-1.109.7-1.663 1.051-2.288 1.087s-1.216-.248-2.397-.817l-.681-.328c-.994-.479-1.491-.718-1.769-1.158S.881 8.985.876 7.882l-.004-.756c-.006-1.311-.01-1.967.291-2.516s.855-.899 1.964-1.6zm4.96 4.188c-.483.305-1.047.174-1.442-.162a.45.45 0 0 1-.474-.747c-.061-.223-.067-.454-.016-.671a.45.45 0 1 1 .876.206c-.024.103-.009.25.082.393.176.278.416.269.494.22s.189-.263.013-.541c-.355-.562-.329-1.389.293-1.782.483-.305 1.047-.174 1.442.162a.45.45 0 0 1 .474.747 1.32 1.32 0 0 1-.059.892.45.45 0 1 1-.82-.371c.045-.099.048-.274-.063-.45-.176-.278-.416-.269-.494-.22s-.189.263-.013.541c.355.562.329 1.389-.293 1.782zm-2.51.126a1.2 1.2 0 1 0-2.029 1.282 1.2 1.2 0 1 0 2.029-1.282z" fill="${
    routeObject[`${route}`].color
  }"/></svg>`;

  document.getElementById(
    "pricingDetails"
  ).innerHTML = `Additional discounted Shipping per additonal table purchased!`;

  document.getElementById("routeDetails").innerHTML = `<span>
  This Route Includes the following States :
  </span>
  <br/>
  <b style="color:${routeObject[`${route}`].color}; font-size: 15px;">
  ${routeObject[`${route}`].states} 
  </b>`;

  Array.from(document.querySelectorAll(`.${route}`)).forEach((data) => {
    data.addEventListener("mouseover", () => {
      Array.from(document.querySelectorAll(`.${route}`)).forEach(
        (state) => (state.style.fill = routeObject[`${route}`].color, state.style.border = "5px solid white")
      );
    });

    data.addEventListener("mouseleave", () => {
      Array.from(document.querySelectorAll(`.${route}`)).forEach(
        (state) => (state.style.fill = "#D9D9D9")
      );
    });
  });
};

Array.from(document.querySelectorAll("path")).forEach((el) =>
  el.addEventListener("mouseenter", () => {
    routeInfo(el.classList.value);
  })
);

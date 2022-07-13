import taxi from "../App/Common/assets/img/portfolio/taxi.png";
import euro from "../App/Common/assets/img/portfolio/football.png";
import store from "../App/Common/assets/img/portfolio/flame-online-sale.png";
import akbarsmed from "../App/Common/assets/img/portfolio/doctor.png";
import adventure from "../App/Common/assets/img/portfolio/travel.png";
import collection from "../App/Common/assets/img/portfolio/collection.png";

// Taxi images
import taxiImage1 from "../App/Common/assets/img/portfolio/taxiImages/taxi-img1.png";
import taxiImage2 from "../App/Common/assets/img/portfolio/taxiImages/taxi-img2.png";
import euroImage1 from "../App/Common/assets/img/portfolio/euro2020/euro2020-1.png";
import euroImage2 from "../App/Common/assets/img/portfolio/euro2020/euro2020-2.png";
import adventureImage1 from "../App/Common/assets/img/portfolio/adventure/adventure-1.png";
import adventureImage2 from "../App/Common/assets/img/portfolio/adventure/adventure-2.jpg";
import storeImage1 from "../App/Common/assets/img/portfolio/store/store-1.jpg";
import storeImage2 from "../App/Common/assets/img/portfolio/store/store-2.jpg";

export const aboutPortfoliItems = {
  taxi: {
    title: "Yul Yort taxi",
    img: taxi,
    text: `Project description coming soon...`,
    background: "#ffc833",
    links: [
      "https://github.com/gaisdav/yul-yort-admin",
      "https://github.com/gaisdav/yul-yort-back-end",
    ],
    images: [taxiImage1, taxiImage2],
  },
  euro2020: {
    title: "euro2020",
    img: euro,
    text: `Project description coming soon...`,
    background: "#306fb6",
    links: ["https://russian.rt.com/euro2020"],
    images: [euroImage1, euroImage2],
  },
  store: {
    title: "store",
    img: store,
    text: `Project description coming soon...`,
    background: "#fc00ff",
    links: ["https://test-online-store-app.web.app/", "https://github.com/Zaynetdinova/work"],
    images: [storeImage2, storeImage1],
  },
  akbarsmed: {
    title: "akbarsmed",
    img: akbarsmed,
    text: `Project description coming soon...`,
    background: "#e1e1e1",
    links: ["https://www.akbarsmed.ru/"],
    images: [],
  },
  adventure: {
    title: "adventure",
    img: adventure,
    text: `Project description coming soon...`,
    background: "#8dc3b6",
    links: ["https://85adventures.rbth.com/"],
    images: [adventureImage2, adventureImage1],
  },
  collection: {
    title: "collection",
    img: collection,
    text: `Project description coming soon...`,
    background: "#ffc6af ",
    links: ["https://github.com/DavletkulovAynur/COLLECTIONS"],
    images: [],
  },
};

import nikeAir from "../images/nike-air.jpg";
import nikeGravity from "../images/nike-gravity.jpg";
import nikeJoyride from "../images/nike-joyride.jpg";
import nikePhantom from "../images/nike-phantom.jpg";
import nikeReact from "../images/nike-react.jpg";
import nikeRival from "../images/nike-rival.jpg";
import nikeTrial from "../images/nike-trial.jpg";
import nikeVictory from "../images/nike-victory.jpg";
import nikeZoom from "../images/nike-zoom.jpg";

const dataItem = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Nike Air",

    image: nikeAir,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Nike Grvity",
    image: nikeGravity,
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "nike joyride",
    image: nikeJoyride,

    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "nike phantom",
    image:nikePhantom,
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "nike react",
    image: nikeReact,

    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "nike rival",
    image: nikeRival,

    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "nike trial",
    image: nikeTrial,

    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "nike victory",
    image: nikeVictory,

    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "nike zoom",
    image: nikeZoom,

    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

export function getData() {
  return dataItem;
}

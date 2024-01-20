import { ImTruck } from "react-icons/im";
import { MdDiscount, MdSupportAgent } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import image1 from "../assets/img/1.png";
import image2 from "../assets/img/2.png";
import image3 from "../assets/img/3.png";
import image4 from "../assets/img/4.png";
import image5 from "../assets/img/5.png";
import image6 from "../assets/img/6.png";
import image7 from "../assets/img/7.png";
import image8 from "../assets/img/8.png";

// SERVICES
export const services = [
  {
    id: 1,
    title: "Free Delivery",
    subtitle: "Orders from all item",
    icon: <ImTruck />,
  },
  {
    id: 2,
    title: "Return & Refund",
    subtitle: "Money back guarantee",
    icon: <SiMoneygram />,
  },
  {
    id: 3,
    title: "Member Discount",
    subtitle: "on Order over $99.00",
    icon: <MdDiscount />,
  },
  {
    id: 4,
    title: "Support 24/7",
    subtitle: "Contact us 24 hours a day",
    icon: <MdSupportAgent />,
  },
];

// PRODUCTS

export const products = [
  {
    id: 1,
    title: "Pear Phone 1",
    category: "Mobile Phone",
    price: 1099,
    rating: 2,
    views: 2,
    image: image1,
    quantity: 1,
  },
  {
    id: 2,
    title: "Pear Phone 2",
    category: "Mobile Phone",
    price: 999,
    rating: 1,
    views: 5,
    image: image2,
    quantity: 1,
  },
  {
    id: 3,
    title: "Pear Phone 3",
    category: "Mobile Phone",
    price: 1199,
    rating: 5,
    views: 1,
    image: image3,
    quantity: 1,
  },
  {
    id: 4,
    title: "Pear Phone 4",
    category: "Mobile Phone",
    price: 1299,
    rating: 4,
    views: 3,
    image: image4,
    quantity: 1,
  },
  {
    id: 5,
    title: "Pear Phone 5",
    category: "Mobile Phone",
    price: 1399,
    rating: 3,
    views: 2,
    image: image5,
    quantity: 1,
  },
  {
    id: 6,
    title: "Pear Phone 6",
    category: "Mobile Phone",
    price: 1499,
    rating: 5,
    views: 8,
    image: image6,
    quantity: 1,
  },
  {
    id: 7,
    title: "Pear Phone 7",
    category: "Mobile Phone",
    price: 1599,
    rating: 1,
    views: 4,
    image: image7,
    quantity: 1,
  },
  {
    id: 8,
    title: "Pear Phone 8",
    category: "Mobile Phone",
    price: 1699,
    rating: 2,
    views: 5,
    image: image8,
    quantity: 1,
  },
];

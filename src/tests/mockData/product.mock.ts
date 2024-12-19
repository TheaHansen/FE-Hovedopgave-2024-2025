import Product from "../../components/product/Product.interfaces";
import { StockText } from "../../components/stockStatus/StockText.enum";

const mockProducts: Product[] = [
  {
    id: 1,
    articleNumber: "A1234",
    title: "Tandbørste",
    shortDescription: "Blå tandbørste",
    description: "Denne tandbørste er super god",
    price: 99.99,
    imageUrl: "IMG_1618.jpg",
    inCarousel: true,
    stockStatus: StockText.InStock,
  },
  {
    id: 2,
    articleNumber: "B1234",
    title: "Mundbind",
    shortDescription: "Blåt mundbind",
    description: "Dette mundbind er super godt",
    price: 8.99,
    imageUrl: "IMG_1618.jpg",
    inCarousel: false,
    stockStatus: StockText.OutOfStock,
  },
  {
    id: 3,
    articleNumber: "C1234",
    title: "Tandpasta",
    shortDescription: "Blå tandpasta",
    description: "Denne tandpasta er super god",
    price: 20.0,
    imageUrl: "IMG_1618.jpg",
    inCarousel: true,
    stockStatus: StockText.InStock,
  },
  {
    id: 4,
    articleNumber: "D1234",
    title: "Bluse",
    shortDescription: "Blå bluse",
    description: "Denne bluse er super god",
    price: 199.99,
    imageUrl: "IMG_1618.jpg",
    inCarousel: false,
    stockStatus: StockText.InStock,
  },
  {
    id: 5,
    articleNumber: "E1234",
    title: "Bukser",
    shortDescription: "Blå bukser",
    description: "Disse bukser er super gode",
    price: 399.99,
    imageUrl: "IMG_1618.jpg",
    inCarousel: true,
    stockStatus: StockText.OutOfStock,
  },
];

export default mockProducts;

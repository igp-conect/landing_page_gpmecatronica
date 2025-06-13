export type PortfolioItem = {
  name: string;
  description: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
};

export const portfolioItems: PortfolioItem[] = [
  {
    name: "App 1",
    description: "Lorem",
    category: "app",
    image: {
      src: "assets/img/portfolio/app-1.jpg",
      alt: "App 1",
    },
  },
  {
    name: "App 1",
    description: "Lorem",
    category: "app",
    image: {
      src: "assets/img/portfolio/app-1.jpg",
      alt: "App 1",
    },
  },
  {
    name: "Branding 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    category: "branding",
    image: {
      src: "assets/img/portfolio/branding-1.jpg",
      alt: "Branding 1",
    },
  },
  {
    name: "Books 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
    category: "books",
    image: {
      src: "assets/img/portfolio/books-1.jpg",
      alt: "Books 1",
    },
  },
  {
    name: "App 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    category: "app",
    image: {
      src: "assets/img/portfolio/app-2.jpg",
      alt: "App 2",
    },
  },
  {
    name: "Product 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    category: "product",
    image: {
      src: "assets/img/portfolio/product-2.jpg",
      alt: "Product 2",
    },
  },
  {
    name: "Branding 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    category: "branding",
    image: {
      src: "assets/img/portfolio/branding-2.jpg",
      alt: "Branding 2",
    },
  },
  {
    name: "Books 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
    category: "books",
    image: {
      src: "assets/img/portfolio/books-2.jpg",
      alt: "Books 2",
    },
  },
  {
    name: "App 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
    category: "app",
    image: {
      src: "assets/img/portfolio/app-3.jpg",
      alt: "App 3",
    },
  },
];

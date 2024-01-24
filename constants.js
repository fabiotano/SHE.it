export const products = [
  {
    title: 'Product 1',
    desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/products/image-1.jpg',
    newFlag: true,
    price: 979.14,
    discount: 5,
    favorite: true,
  },
  {
    title: 'Product 2',
    desc: 'Brief description',
    image: '/products/image-2.jpg',
    newFlag: false,
    price: 364.29,
    discount: 10,
    favorite: false,
  },
  {
    title: 'Product 3',
    desc: 'Brief description',
    image: '/products/image-3.jpg',
    newFlag: false,
    price: 936.77,
    discount: 10,
    favorite: false,
  },
  {
    title: 'Product 4',
    desc: 'Brief description',
    image: '/products/image-4.jpg',
    newFlag: true,
    price: 196.24,
    discount: 10,
    favorite: true,
  },
  {
    title: 'Product 5',
    desc: 'Brief description',
    image: '/products/image-5.jpg',
    newFlag: true,
    price: 651.71,
    discount: 5,
    favorite: true,
  },
  {
    title: 'Product 6',
    desc: 'Brief description',
    image: '/products/image-6.jpg',
    newFlag: false,
    price: 106.5,
    discount: 5,
    favorite: true,
  },
  {
    title: 'Product 7',
    desc: 'Brief description',
    image: '/products/image-7.jpg',
    newFlag: true,
    price: 263.04,
    discount: 5,
    favorite: false,
  },
  {
    title: 'Product 8',
    desc: 'Brief description',
    image: '/products/image-8.jpg',
    newFlag: false,
    price: 385.75,
    discount: 5,
    favorite: true,
  },
];

export const filters = [
  {
    title: 'Marcas',
    options: ['SHE', 'Eugenperma', 'Chenice'],
  },
  {
    title: 'Price',
    options: ['$0 - $50', '$50 - $100', '$100 - $200'],
  },
  {
    title: 'Categoria',
    options: [
      'Shampoo',
      'Tinta',
      'Balsamo',
    ],
  }
];

export const sortOptions = [
  {
    title: 'Más vendidos',
    value: 'mostSold',
  },
  {
    title: 'Menor precio',
    value: 'lowToHigh',
  },
  {
    title: 'Mayor precio',
    value: 'highToLow',
  },
  {
    title: 'A a Z',
    value: 'aToZ',
  },
  {
    title: 'Z a A',
    value: 'zToA',
  },
];

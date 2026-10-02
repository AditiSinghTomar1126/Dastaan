export type MenuCategory =
  | 'Starters'
  | 'Main Course'
  | 'Breads'
  | 'Rice'
  | 'Desserts'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  isVeg: boolean;
  spicy?: boolean;
}

export const menuCategories: MenuCategory[] = [
  'Starters',
  'Main Course',
  'Breads',
  'Rice',
  'Desserts',
  'Beverages',
];

export const menuData: MenuItem[] = [
  // ── Starters ──
  {
    id: 'samosa',
    name: 'Punjabi Samosa',
    description: 'Crispy pastry filled with spiced potatoes and green peas, fried golden.',
    price: 180,
    category: 'Starters',
    image: 'https://images.pexels.com/photos/29037265/pexels-photo-29037265.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
    spicy: true,
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    description: 'Char-grilled cottage cheese marinated in yogurt, ginger and tandoori spices.',
    price: 320,
    category: 'Starters',
    image: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
    spicy: true,
  },
  {
    id: 'pani-puri',
    name: 'Pani Puri',
    description: 'Hollow crisp shells filled with tangy tamarind water, sprouts and mint chutney.',
    price: 160,
    category: 'Starters',
    image: 'https://images.pexels.com/photos/34270741/pexels-photo-34270741.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
    spicy: true,
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    description: 'Half chicken marinated overnight in saffron and yogurt, roasted in clay oven.',
    price: 420,
    category: 'Starters',
    image: 'https://images.pexels.com/photos/36895285/pexels-photo-36895285.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: false,
    spicy: true,
  },

  // ── Main Course ──
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Tandoor-roasted chicken simmered in a velvety tomato and cashew gravy.',
    price: 480,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/35158690/pexels-photo-35158690.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: false,
    spicy: false,
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    description: 'Cottage cheese cubes in a creamy spinach gravy tempered with garlic and cumin.',
    price: 380,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/28674559/pexels-photo-28674559.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
    spicy: false,
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    description: 'Yellow lentils slow-cooked and finished with smoked ghee, garlic and red chili.',
    price: 280,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/38108860/pexels-photo-38108860.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
    spicy: false,
  },
  {
    id: 'rogan-josh',
    name: 'Lamb Rogan Josh',
    description: 'Tender lamb braised in Kashmiri chilies, fennel and whole spices.',
    price: 560,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: false,
    spicy: true,
  },
  {
    id: 'aloo-kofta',
    name: 'Aloo Kofta',
    description: 'Potato-paneer dumplings in a rich cashew and saffron curry.',
    price: 340,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/36343375/pexels-photo-36343375.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
    spicy: false,
  },

  // ── Breads ──
  {
    id: 'butter-naan',
    name: 'Butter Naan',
    description: 'Soft tandoor-baked flatbread brushed with melted butter.',
    price: 60,
    category: 'Breads',
    image: 'https://images.pexels.com/photos/37223237/pexels-photo-37223237.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    description: 'Naan topped with fresh garlic and coriander, baked in the tandoor.',
    price: 80,
    category: 'Breads',
    image: 'https://images.pexels.com/photos/10337726/pexels-photo-10337726.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'tandoori-roti',
    name: 'Tandoori Roti',
    description: 'Whole-wheat flatbread baked directly on the tandoor wall.',
    price: 40,
    category: 'Breads',
    image: 'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },

  // ── Rice ──
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    description: 'Basmati rice layered with marinated chicken, saffron and fried onions.',
    price: 380,
    category: 'Rice',
    image: 'https://images.pexels.com/photos/8250738/pexels-photo-8250738.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: false,
    spicy: true,
  },
  {
    id: 'matar-pulao',
    name: 'Matar Pulao',
    description: 'Fragrant basmati rice tossed with green peas and whole spices.',
    price: 220,
    category: 'Rice',
    image: 'https://images.pexels.com/photos/35552983/pexels-photo-35552983.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'saffron-rice',
    name: 'Saffron Rice',
    description: 'Basmati rice steamed with saffron threads, cashews and raisins.',
    price: 200,
    category: 'Rice',
    image: 'https://images.pexels.com/photos/12669168/pexels-photo-12669168.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },

  // ── Desserts ──
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Warm milk-solid dumplings soaked in cardamom-rose syrup.',
    price: 160,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'jalebi',
    name: 'Jalebi',
    description: 'Crisp spiral batter fried and dipped in saffron sugar syrup.',
    price: 140,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/36551398/pexels-photo-36551398.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'kheer',
    name: 'Kheer',
    description: 'Slow-cooked rice pudding with milk, cardamom and pistachio.',
    price: 150,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/33088380/pexels-photo-33088380.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },

  // ── Beverages ──
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    description: 'Black tea brewed with milk, ginger and whole spices.',
    price: 80,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/29650995/pexels-photo-29650995.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    description: 'Yogurt blended with Alphonso mango and a hint of cardamom.',
    price: 120,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/18142611/pexels-photo-18142611.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    description: 'Churned yogurt with sugar and rose water, served chilled.',
    price: 100,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/18142603/pexels-photo-18142603.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
  {
    id: 'filter-coffee',
    name: 'Filter Coffee',
    description: 'South Indian style frothy coffee from a brass filter.',
    price: 90,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/13376622/pexels-photo-13376622.jpeg?auto=compress&cs=tinysrgb&w=800',
    isVeg: true,
  },
];

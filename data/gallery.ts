export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Interior' | 'Ambience' | 'Outdoor' | 'Kitchen' | 'Dining' | 'Restaurant';
}

export const galleryItems: GalleryItem[] = [

  {
    id: 1,
    title: 'Elegant Dining Area',
    description: 'Warm, inviting interiors designed for a comfortable dining experience.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    category: 'Interior',
  },
  {
    id: 2,
    title: 'Restaurant Ambience',
    description: 'A cozy atmosphere with soft lighting and contemporary decor.',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    category: 'Ambience',
  },
  {
    id: 3,
    title: 'Private Dining',
    description: 'An intimate dining space perfect for special occasions and gatherings.',
    image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
    category: 'Interior',
  },
  {
    id: 4,
    title: 'Outdoor Seating',
    description: 'Relaxed outdoor seating surrounded by a refreshing and welcoming setting.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    category: 'Outdoor',
  },
  {
    id: 5,
    title: 'Modern Bar Area',
    description: 'A stylish bar space featuring modern design and warm ambient lighting.',
    image: 'https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg',
    category: 'Interior',
  },
  {
    id: 6,
    title: 'Cozy Corner',
    description: 'A beautifully styled corner made for relaxed conversations and long dinners.',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
    category: 'Ambience',
  },
  {
    id: 7,
    title: 'Restaurant Exterior',
    description: 'A welcoming exterior that sets the tone for the dining experience inside.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    category: 'Outdoor',
  },
  {
    id: 8,
    title: 'Chef at Work',
    description: 'Our culinary team bringing carefully prepared dishes to life in the kitchen.',
    image: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg',
    category: 'Kitchen',
  },
  {
    id: 9,
    title: 'Open Kitchen',
    description: 'A glimpse into our kitchen where fresh ingredients become memorable meals.',
    image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg',
    category: 'Kitchen',
  },
  {
    id: 10,
    title: 'Evening Atmosphere',
    description: 'A vibrant evening setting with warm lights and a lively dining atmosphere.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    category: 'Ambience',
  },
  {
    id: 11,
    title: 'Signature Table Setup',
    description: 'Thoughtfully arranged tables prepared for an unforgettable dining experience.',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    category: 'Dining',
  },
  {
    id: 12,
    title: 'Family Dining',
    description: 'Spacious seating designed for memorable meals with family and friends.',
    image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
    category: 'Dining',
  },
  {
    id: 13,
    title: 'Fine Dining Setup',
    description: 'Elegant table arrangements paired with a refined and sophisticated atmosphere.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    category: 'Dining',
  },
  {
    id: 14,
    title: 'Weekend Vibes',
    description: 'A lively restaurant atmosphere made for good food, conversations and celebrations.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    category: 'Ambience',
  },
  {
    id: 15,
    title: 'A Place to Gather',
    description: 'A welcoming space where friends, families and food come together.',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    category: 'Restaurant',
  },
];

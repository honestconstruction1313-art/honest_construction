import {
  Home,
  ArrowUpFromLine,
  RefreshCw,
  Zap,
  Droplets,
  Grid3x3,
  Layers,
  Bath,
  Hammer,
  Warehouse,
  AppWindow,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  warranty: string;
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Home Extensions (Single/Double Storey)',
    description:
      'Full bespoke planning, structural build, and internal finishes — seamlessly expanding your living space.',
    warranty: '10-Year Structural Guarantee',
    icon: Home,
    image:
      'https://images.pexels.com/photos/28885519/pexels-photo-28885519.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Loft Conversions',
    description:
      'Velux & Dormer conversion specialists maximizing vertical living space with natural light and headroom.',
    warranty: '10-Year Structural Guarantee',
    icon: ArrowUpFromLine,
    image:
      'https://images.pexels.com/photos/8082327/pexels-photo-8082327.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Full House Renovations & Refurbishments',
    description:
      'Complete interior and exterior modernization — bringing tired properties back to life with precision.',
    warranty: '10-Year Structural Guarantee on Alterations',
    icon: RefreshCw,
    image:
      'https://images.pexels.com/photos/28885512/pexels-photo-28885512.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Electrical Works & Re-wiring',
    description:
      'Certified electrical installations, consumer unit upgrades, lighting, and comprehensive safety checks.',
    warranty: '6 to 10-Year Workmanship Warranty',
    icon: Zap,
    image:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Plumbing Services',
    description:
      'Installation, leak repairs, heating systems, and wetroom plumbing — reliable, clean, and efficient.',
    warranty: '2 to 5-Year Workmanship Warranty',
    icon: Droplets,
    image:
      'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Wall & Floor Tiling',
    description:
      'Precision tiling for kitchens, bathrooms, floors, and external patios with meticulous attention to detail.',
    warranty: '3 to 5-Year Installation Warranty',
    icon: Grid3x3,
    image:
      'https://images.pexels.com/photos/4250577/pexels-photo-4250577.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Concrete Slab & Sub-base Work',
    description:
      'Structural concrete foundations for buildings, sheds, and paving — built to last for decades.',
    warranty: '10-Year Structural Guarantee',
    icon: Layers,
    image:
      'https://images.pexels.com/photos/37121405/pexels-photo-37121405.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Kitchen & Bathroom Fitting',
    description:
      'Complete renovation, design, and fitting — turning your kitchen and bathroom into modern showpieces.',
    warranty: 'Workmanship Warranty Applies',
    icon: Bath,
    image:
      'https://images.pexels.com/photos/35868664/pexels-photo-35868664.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Brickwork & Structural Alterations',
    description:
      'Specialist RSJ steel installations and high-precision masonry for safe, lasting structural changes.',
    warranty: '10-Year Structural Guarantee',
    icon: Hammer,
    image:
      'https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Roofing, Driveways & Patios',
    description:
      'Complete roofing solutions, paving, and landscaping surfaces — protecting and enhancing your property.',
    warranty: '10 to 15-Year Roofing Guarantee',
    icon: Warehouse,
    image:
      'https://images.pexels.com/photos/276593/pexels-photo-276593.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    title: 'Doors & Windows Installation',
    description:
      'Supply and fitment of modern UPVC / Aluminium double and triple glazing — secure, warm, and stylish.',
    warranty: '10-Year Manufacturer & Fit Guarantee',
    icon: AppWindow,
    image:
      'https://images.pexels.com/photos/5691550/pexels-photo-5691550.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export const SERVICE_OPTIONS = [
  'Extension',
  'Loft',
  'Electrical',
  'Plumbing',
  'Tiling',
  'Concrete Slab',
  'Kitchen & Bathroom',
  'Brickwork & Structural',
  'Roofing, Driveways & Patios',
  'Doors & Windows',
  'Full Renovation',
  'Other',
];

export const URGENCY_OPTIONS = [
  'Urgent',
  'Next 30 Days',
  'Planning Phase',
  'Contact Later',
];

export const CONTACT_INFO = {
  phone: '07495 731134',
  phoneLink: 'tel:07495731134',
  whatsapp: 'https://wa.me/447495731134',
  email: 'honestconstruction1313@gmail.com',
  emailLink: 'mailto:honestconstruction1313@gmail.com',
  address: 'Penny Lane, WA11 0QX, United Kingdom',
};

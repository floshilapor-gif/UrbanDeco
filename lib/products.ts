export type CategorySlug = "sillones" | "mesas" | "deco" | "camas";

export interface Category {
  slug: CategorySlug;
  label: string;
  tagline: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  compareAt?: number;
  image: string | null;
  short: string;
  description: string;
  features: string[];
  dimensions?: string;
  colors?: string[];
  badge?: string;
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  { slug: "sillones", label: "Sillones", tagline: "Sofás y sillones de diseño" },
  { slug: "mesas", label: "Mesas", tagline: "Centro, comedor y auxiliares" },
  { slug: "deco", label: "Deco", tagline: "Iluminación, textiles y accesorios" },
  { slug: "camas", label: "Camas", tagline: "Descanso con estilo urbano" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "sofa-mykonos",
    name: "Sofá Mykonos",
    category: "sillones",
    price: 1890,
    image: "/images/Mykonos.jpeg",
    short: "Sofá modular de tres plazas en bouclé gris con módulos acolchados.",
    description:
      "El Mykonos redefine el confort urbano. Su estructura modular en bouclé gris envuelve el espacio con líneas suaves y volúmenes generosos, creando un ambiente acogedor sin renunciar al diseño contemporáneo. Asientos de espuma de alta resiliencia y patas ocultas para una estética flotante.",
    features: [
      "Tapizado en bouclé de alta densidad",
      "Estructura modular reconfigurable",
      "Espuma HR de alta resiliencia",
      "Funda desenfundable y lavable",
    ],
    dimensions: "280 × 95 × 72 cm",
    colors: ["Gris bouclé", "Arena", "Verde salvia"],
    badge: "Más vendido",
    featured: true,
  },
  {
    slug: "sofa-madrid",
    name: "Sofá Madrid",
    category: "sillones",
    price: 2490,
    compareAt: 2790,
    image: "/images/madridsillon.jpeg",
    short: "Seccional modular en chenille gris con costuras geométricas.",
    description:
      "Inspirado en el lujo discreto de los áticos de la ciudad, el Madrid combina módulos profundos con un acolchado geométrico que aporta textura y personalidad. Pensado para grandes salones, se adapta en L o en línea según tu espacio.",
    features: [
      "Acolchado geométrico cosido a mano",
      "Tejido chenille resistente al desgaste",
      "Configuración en L o lineal",
      "Patas metálicas color grafito",
    ],
    dimensions: "320 × 165 × 70 cm",
    colors: ["Gris piedra", "Antracita", "Crema"],
    badge: "Nuevo",
    featured: true,
  },
  {
    slug: "sofa-mykonos-2-plazas",
    name: "Sofá Mykonos 2 Plazas",
    category: "sillones",
    price: 1290,
    image: "/images/Mykonos.jpeg",
    short: "La versión compacta del Mykonos, ideal para espacios urbanos.",
    description:
      "Todo el carácter del Mykonos en un formato compacto de dos plazas. Perfecto para apartamentos, estudios o segundas estancias donde el confort no se negocia.",
    features: [
      "Tapizado en bouclé de alta densidad",
      "Formato compacto de 2 plazas",
      "Espuma HR de alta resiliencia",
      "Funda desenfundable y lavable",
    ],
    dimensions: "185 × 95 × 72 cm",
    colors: ["Gris bouclé", "Arena"],
  },
  {
    slug: "cama-baul-lino",
    name: "Cama Baúl Lino",
    category: "camas",
    price: 1150,
    image: "/images/camabaul.jpeg",
    short: "Cama con canapé abatible y tapizado en lino natural.",
    description:
      "Descanso y almacenaje en una sola pieza. La Cama Baúl Lino esconde un amplio canapé abatible bajo un tapizado de lino natural de tacto suave, con cabecero envolvente y faldón a juego. El espacio extra que tu dormitorio necesitaba.",
    features: [
      "Canapé abatible con gran capacidad",
      "Tapizado en lino natural",
      "Cabecero envolvente acolchado",
      "Estructura reforzada con pistones de gas",
    ],
    dimensions: "150 × 190 cm (interior)",
    colors: ["Lino natural", "Gris perla", "Topo"],
    badge: "Con almacenaje",
    featured: true,
  },
  {
    slug: "cama-baul-arena",
    name: "Cama Baúl Arena",
    category: "camas",
    price: 1290,
    image: "/images/camabaul.jpeg",
    short: "Formato 160×200 en tono arena con canapé de gran capacidad.",
    description:
      "La Cama Baúl en su formato más amplio y un cálido tono arena. Misma calidad de tapizado y canapé abatible, pensada para dormitorios principales.",
    features: [
      "Canapé abatible de gran capacidad",
      "Tapizado tono arena",
      "Cabecero envolvente acolchado",
      "Pistones de gas de apertura suave",
    ],
    dimensions: "160 × 200 cm (interior)",
    colors: ["Arena", "Lino natural"],
  },
  {
    slug: "mesa-centro-oslo",
    name: "Mesa de Centro Oslo",
    category: "mesas",
    price: 420,
    image: null,
    short: "Mesa de centro en roble claro con líneas escandinavas.",
    description:
      "Sobria y funcional, la mesa Oslo aporta calidez nórdica a tu salón con su tablero de roble claro y patas torneadas. Una base neutra perfecta para combinar con cualquier sofá de la colección.",
    features: ["Roble macizo con acabado natural", "Patas torneadas", "Cantos redondeados"],
    dimensions: "110 × 60 × 40 cm",
    colors: ["Roble natural"],
  },
  {
    slug: "mesa-comedor-nordica",
    name: "Mesa de Comedor Nórdica",
    category: "mesas",
    price: 980,
    image: null,
    short: "Mesa de comedor de roble macizo para seis comensales.",
    description:
      "El centro de las reuniones. Tablero de roble macizo de gran formato sobre patas en ángulo, con espacio cómodo para seis comensales. Diseño atemporal que crece contigo.",
    features: ["Roble macizo certificado", "Capacidad para 6 personas", "Acabado resistente al agua"],
    dimensions: "180 × 90 × 75 cm",
    colors: ["Roble natural", "Roble ahumado"],
    badge: "Roble macizo",
  },
  {
    slug: "mesa-auxiliar-luna",
    name: "Mesa Auxiliar Luna",
    category: "mesas",
    price: 165,
    image: null,
    short: "Mesa auxiliar redonda con tapa metálica satinada.",
    description:
      "Pequeña, versátil e imprescindible. La mesa Luna se desliza junto al sofá o la cama para sostener un libro, una taza o una lámpara. Tapa metálica satinada y base ligera.",
    features: ["Tapa metálica satinada", "Base ligera y estable", "Apilable junto al sofá"],
    dimensions: "Ø 45 × 55 cm",
    colors: ["Champán", "Grafito"],
  },
  {
    slug: "lampara-pie-halo",
    name: "Lámpara de Pie Halo",
    category: "deco",
    price: 240,
    image: null,
    short: "Lámpara de pie de luz cálida regulable y perfil esbelto.",
    description:
      "La Halo baña tu rincón de lectura con una luz cálida y regulable. Su perfil esbelto en metal mate y su difusor textil crean una atmósfera envolvente al caer la tarde.",
    features: ["Luz cálida regulable", "Difusor textil", "Metal mate antihuellas"],
    dimensions: "Altura 165 cm",
    colors: ["Negro mate", "Latón"],
    featured: true,
  },
  {
    slug: "jarron-arena",
    name: "Jarrón Arena",
    category: "deco",
    price: 58,
    image: null,
    short: "Jarrón de cerámica artesanal en acabado arena mate.",
    description:
      "Cerámica artesanal con un acabado arena mate que evoca la calma del Mediterráneo. Solo o en composición, aporta textura natural a cualquier estantería.",
    features: ["Cerámica hecha a mano", "Acabado mate", "Pieza única"],
    dimensions: "Altura 28 cm",
    colors: ["Arena", "Hueso"],
  },
  {
    slug: "espejo-redondo-sol",
    name: "Espejo Redondo Sol",
    category: "deco",
    price: 150,
    image: null,
    short: "Espejo circular con marco fino que amplía la luz.",
    description:
      "Un círculo perfecto que multiplica la luz natural de tu hogar. Marco fino metálico y montaje sencillo para recibidores, baños o salones.",
    features: ["Marco metálico fino", "Cristal de alta claridad", "Montaje incluido"],
    dimensions: "Ø 70 cm",
    colors: ["Negro", "Champán"],
  },
  {
    slug: "manta-bruma",
    name: "Manta de Lana Bruma",
    category: "deco",
    price: 72,
    image: null,
    short: "Manta de lana suave con flecos, tacto cálido y ligero.",
    description:
      "Esa capa final que invita a quedarse. Tejida en mezcla de lana suave con flecos artesanales, la manta Bruma viste tu sofá o tu cama con calidez y textura.",
    features: ["Mezcla de lana suave", "Flecos artesanales", "Ligera y cálida"],
    dimensions: "130 × 170 cm",
    colors: ["Bruma", "Arena", "Antracita"],
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const others = PRODUCTS.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

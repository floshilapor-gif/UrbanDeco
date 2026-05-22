export type CategorySlug =
  | "sillones"
  | "mesas"
  | "deco"
  | "camas"
  | "racks"
  | "jardin";

export interface Category {
  slug: CategorySlug;
  label: string;
  tagline: string;
}

export interface ProductVariant {
  label: string;
  image: string;
  /** Hex colour used for the selector swatch. */
  swatch: string;
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
  /** How the image fills its tile: "contain" (default, studio cut-outs) or "cover" (lifestyle photos). */
  fit?: "cover" | "contain";
  /** Selectable colour/finish variants, each with its own photo. */
  variants?: ProductVariant[];
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  { slug: "sillones", label: "Sillones", tagline: "Sofás y sillones de diseño" },
  { slug: "mesas", label: "Mesas", tagline: "Centro, comedor y auxiliares" },
  { slug: "deco", label: "Deco", tagline: "Iluminación, textiles y accesorios" },
  { slug: "camas", label: "Camas", tagline: "Descanso con estilo urbano" },
  { slug: "racks", label: "Racks TV", tagline: "Racks y paneles para tu televisor" },
  { slug: "jardin", label: "Jardín", tagline: "Sets y muebles para tu exterior" },
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
    slug: "juego-comedor-monaco",
    name: "Juego de Comedor Mónaco",
    category: "mesas",
    price: 480000,
    image: "/images/juego-comedor-azul.jpg",
    fit: "cover",
    short:
      "Mesa redonda con pie de madera y 4 sillas tapizadas. Elegí el color.",
    description:
      "Reuniones con estilo. El juego Mónaco combina una mesa redonda de tapa blanca sobre un pie escultórico de madera con 4 sillas capitoneadas de gran confort. Elegí el color de las sillas que mejor combine con tu ambiente.",
    features: [
      "Mesa redonda + 4 sillas",
      "Tapa blanca y pie de madera",
      "Sillas capitoneadas y tapizadas",
      "Disponible en 3 colores",
    ],
    dimensions: "Mesa Ø 120 cm",
    badge: "3 colores",
    variants: [
      { label: "Azul", image: "/images/juego-comedor-azul.jpg", swatch: "#2f4a6b" },
      { label: "Lino", image: "/images/juego-comedor-lino.jpg", swatch: "#cfc2a8" },
      { label: "Negro", image: "/images/juego-comedor-negro.jpg", swatch: "#1c1c1c" },
    ],
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
  {
    slug: "rack-oslo",
    name: "Rack Panel Oslo",
    category: "racks",
    price: 150000,
    image: "/images/rack-oslo.jpg",
    fit: "contain",
    short: "Panel completo con soporte para TV, estantes y mueble bajo.",
    description:
      "Un centro de entretenimiento integral. El panel Oslo combina un respaldo para colgar tu TV, estantes flotantes y un mueble bajo con puertas y nichos, en un acabado off-white con detalles de roble. Orden y diseño en una sola pieza.",
    features: [
      "Panel con soporte para TV",
      "Estantes y nichos de exhibición",
      "Mueble bajo con puertas",
      "Acabado off-white y roble",
    ],
    dimensions: "200 × 193 × 43 cm",
    colors: ["Off-white y roble"],
    badge: "Panel completo",
  },
  {
    slug: "rack-bariloche",
    name: "Rack Bariloche",
    category: "racks",
    price: 150000,
    image: "/images/rack-bariloche.jpg",
    fit: "cover",
    short: "Rack bajo nórdico en blanco y roble con patas de madera.",
    description:
      "Calidez escandinava para tu living. El rack Bariloche apoya tu TV sobre un mueble de líneas limpias en blanco y roble, con puertas, nichos abiertos y patas de madera inclinadas que le dan ese aire retro tan buscado.",
    features: [
      "Puertas y nichos abiertos",
      "Patas de madera inclinadas",
      "Combinación blanco y roble",
      "Espacio para consola y decodificador",
    ],
    dimensions: "180 × 55 × 40 cm",
    colors: ["Blanco y roble"],
  },
  {
    slug: "rack-recoleta",
    name: "Rack Recoleta",
    category: "racks",
    price: 150000,
    image: "/images/rack-recoleta.jpg",
    fit: "cover",
    short: "Rack blanco laca con detalle de caña y herrajes dorados.",
    description:
      "Elegancia con un guiño clásico. El Recoleta luce un acabado blanco laca con un panel de caña natural y manijas y patas en dorado, ideal para ambientes sofisticados. Incluye panel posterior para enmarcar tu TV.",
    features: [
      "Acabado blanco laca",
      "Detalle de caña natural",
      "Herrajes y patas dorados",
      "Panel posterior incluido",
    ],
    dimensions: "200 × 180 × 40 cm",
    colors: ["Blanco y dorado"],
    badge: "Nuevo",
    featured: true,
  },
  {
    slug: "rack-palermo",
    name: "Rack Palermo",
    category: "racks",
    price: 150000,
    image: "/images/rack-palermo.jpg",
    fit: "cover",
    short: "Rack gris con patas doradas y nicho central iluminado.",
    description:
      "Diseño de autor para tu living. El Palermo combina un cuerpo gris mate con esbeltas patas doradas y un nicho central arqueado con luz LED cálida que realza tus objetos. Puro estilo contemporáneo.",
    features: [
      "Nicho arqueado con luz LED",
      "Patas metálicas doradas",
      "Amplio almacenaje con puertas",
      "Acabado gris mate",
    ],
    dimensions: "200 × 50 × 40 cm",
    colors: ["Gris y dorado"],
  },
  {
    slug: "rack-tribeca",
    name: "Rack Tribeca",
    category: "racks",
    price: 150000,
    image: "/images/rack-tribeca.jpg",
    fit: "cover",
    short: "Rack grafito con frentes ranurados, interior nogal y ruedas.",
    description:
      "Carácter industrial y mucha practicidad. El Tribeca presenta frentes ranurados en grafito con un cálido interior en nogal y ruedas ocultas para moverlo a tu gusto. Estantes abiertos para tu equipo de sonido y consolas.",
    features: [
      "Frentes ranurados grafito",
      "Interior en tono nogal",
      "Ruedas para fácil movimiento",
      "Estantes abiertos para equipos",
    ],
    dimensions: "180 × 50 × 40 cm",
    colors: ["Grafito y nogal"],
  },
  {
    slug: "rack-madero",
    name: "Rack Madero",
    category: "racks",
    price: 150000,
    image: "/images/rack-madero.jpg",
    fit: "cover",
    short: "Rack flotante de roble ranurado con panel y estantes.",
    description:
      "Aire liviano y natural. El Madero es un conjunto suspendido en roble con frentes ranurados, panel posterior para la TV y una columna de estantes para libros y objetos. Al no apoyar en el piso despeja el ambiente y facilita la limpieza.",
    features: [
      "Diseño flotante (suspendido)",
      "Frentes ranurados de roble",
      "Panel posterior para TV",
      "Columna de estantes lateral",
    ],
    dimensions: "200 × 180 × 38 cm",
    colors: ["Roble natural"],
  },
  {
    slug: "set-tulum",
    name: "Set Tulum",
    category: "jardin",
    price: 450000,
    image: "/images/set-tulum.jpg",
    fit: "contain",
    short: "Juego de exterior en cuerda náutica y madera maciza, 5 piezas.",
    description:
      "Un oasis para tu patio o terraza. El set Tulum combina estructura de madera maciza con tejido de cuerda náutica resistente a la intemperie y mullidos cojines blancos. Incluye sofá de tres plazas, dos sillones, mesa de centro redonda y mesa auxiliar.",
    features: [
      "Sofá de 3 plazas + 2 sillones",
      "Mesa de centro y mesa auxiliar",
      "Cuerda náutica resistente a la intemperie",
      "Estructura de madera maciza",
      "Cojines desenfundables",
    ],
    dimensions: "Sofá 200 cm · sillones 80 cm",
    colors: ["Madera y cuerda natural"],
    badge: "5 piezas",
  },
  {
    slug: "set-ibiza",
    name: "Set Ibiza",
    category: "jardin",
    price: 450000,
    image: "/images/set-ibiza.jpg",
    fit: "cover",
    short: "Lounge modular de ratán sintético gris con otomanas y mesa.",
    description:
      "Relax al aire libre. El set Ibiza es un lounge modular de ratán sintético gris para exterior, con almohadones color crema, otomanas que se reconfiguran y una práctica mesa elevable para tu café o tu copa. Ideal para galería, jardín o borde de pileta.",
    features: [
      "Ratán sintético apto exterior",
      "Otomanas reconfigurables",
      "Mesa central elevable",
      "Almohadones mullidos",
      "Resistente al sol y la humedad",
    ],
    dimensions: "Configurable según el espacio",
    colors: ["Gris con cojines crema"],
    badge: "Modular",
  },
  {
    slug: "sillon-hamaca-doble",
    name: "Sillón Hamaca Doble",
    category: "jardin",
    price: 450000,
    image: "/images/sillon-hamaca-doble.jpg",
    fit: "contain",
    short: "Sillón colgante doble de ratán sintético con pie de acero y cojines.",
    description:
      "Dos lugares para mecerte y desconectar. Este sillón hamaca colgante doble combina un tejido de ratán sintético resistente a la intemperie con un robusto pie de acero y mullidos cojines grises. Ideal para tu galería, balcón o jardín.",
    features: [
      "Capacidad para dos personas",
      "Ratán sintético apto para exterior",
      "Pie de acero reforzado",
      "Incluye cojines y almohadones",
      "Resistente al sol y la lluvia",
    ],
    dimensions: "Asiento doble · pie de acero incluido",
    colors: ["Marrón con cojines gris"],
    badge: "Doble",
  },
  {
    slug: "sillon-hamaca-huevo",
    name: "Sillón Hamaca Huevo",
    category: "jardin",
    price: 350000,
    image: "/images/sillon-hamaca-huevo.jpg",
    fit: "contain",
    short: "Sillón colgante individual tipo huevo, en ratán con pie de acero.",
    description:
      "El clásico que nunca falla. Sillón colgante individual con forma de huevo, tejido en ratán sintético resistente a la intemperie, con un cómodo almohadón color crema y pie de acero incluido. Tu rincón favorito para leer o tomar unos mates en la galería, el balcón o el jardín.",
    features: [
      "Diseño individual tipo huevo",
      "Ratán sintético apto para exterior",
      "Pie de acero incluido",
      "Almohadón mullido incluido",
      "Resistente al sol y la lluvia",
    ],
    dimensions: "Individual · pie de acero incluido",
    colors: ["Antracita con cojín crema"],
    badge: "Individual",
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

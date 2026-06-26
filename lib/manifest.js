/* ============================================================================
   MIPIÚ ESPACIOS MÚLTIPLES — Datos editables del sitio
   ----------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitás tocar para cambiar textos, teléfonos,
   servicios, beneficios, pasos, opiniones y preguntas frecuentes.
   Abrilo con el Bloc de notas, editá lo que está entre comillas "asi", guardá
   y recargá la web con Ctrl+F5.

   ⚠️  No borres las comas, las comillas ni las llaves { }. Solo cambiá el texto.
   ============================================================================ */
(function () {
  "use strict";

  window.__WONKA__ = {

    /* ---------- MARCA Y CONTACTO ---------- */
    brand: {
      name: "Mipiú",
      full: "Mipiú Espacios Múltiples y Casita de Mipiú",
      tagline: "Donde el protagonista sos vos y la naturaleza.",
      city: "Córdoba",
      address: "Camino 60 Cuadras km 8.5, X5016 Córdoba, Argentina",
      addressShort: "Camino 60 Cuadras km 8.5",

      phoneDisplay: "351 731-0257",
      whatsapp: "5493517310257",
      phone2Display: "",

      instagram: "@mipiu.espaciosmultiples",
      instagramUrl: "https://www.instagram.com/mipiu.espaciosmultiples/",

      rating: "4.7",
      reviews: "591",

      mapEmbed: "https://www.google.com/maps?q=Camino%2060%20Cuadras%20km%208.5%2C%20C%C3%B3rdoba%2C%20Argentina&output=embed"
    },

    /* ---------- QUIÉNES SOMOS ---------- */
    about: {
      eyebrow: "Quiénes somos",
      heading: "Un multiespacio donde la naturaleza es parte de la fiesta.",
      paragraphs: [
        "Mipiú Espacios Múltiples y la Casita de Mipiú son un salón de eventos pensado para que los chicos jueguen libres y al aire libre, rodeados de árboles. Combinamos parque, pileta, canchas y juegos con un salón climatizado para estar cómodos en cualquier época.",
        "Atendido por su propia gente, con animadores que conocen a cada cumpleañero por su nombre y una cocina casera que las familias recomiendan. Acá el protagonista sos vos."
      ]
    },

    /* ---------- SERVICIOS / ESPACIOS (cards con icono) ----------
       icon: tree | droplet | ball | slide | music | utensils | sun | sparkles */
    spaces: [
      { n: "01", name: "Parque Natural", type: "Exterior", icon: "tree",
        text: "Rodeado de árboles y aire libre. Los chicos corren, exploran y juegan en contacto con la naturaleza." },
      { n: "02", name: "Pileta y Juegos de Agua", type: "Exterior", icon: "droplet",
        text: "En los días de calor, la pileta y los juegos de agua son los preferidos. Frescos, seguros y supervisados." },
      { n: "03", name: "Canchas de Fútbol", type: "Exterior", icon: "ball",
        text: "Fútbol, carreras y juegos al aire libre con espacio de sobra para el picadito del cumple." },
      { n: "04", name: "Toboganes y Trepadores", type: "Exterior", icon: "slide",
        text: "Toboganes, camas elásticas y trepadores para gastar energía sin parar, pensados para cada edad." },
      { n: "05", name: "Salón de Baile", type: "Interior", icon: "music",
        text: "Música, animación y un espacio amplio para que bailen y jueguen grandes y chicos." },
      { n: "06", name: "Salón Comedor", type: "Interior", icon: "utensils",
        text: "Climatizado, con mesas para todos y cocina propia: comida y panificación caseras servidas en mesa." },
      { n: "07", name: "Galería y Aire Libre", type: "Interior/Exterior", icon: "sun",
        text: "Conecta el adentro con el afuera. Sombra y vista al parque para que los grandes disfruten tranquilos." },
      { n: "08", name: "Animación a Domicilio", type: "A domicilio", icon: "sparkles",
        text: "¿No es en Mipiú? Llevamos la diversión a tu casa con nuestro equipo de animadores." }
    ],

    /* ---------- BENEFICIOS (Bento Grid) ----------
       size: "lg" para celda grande, "" para normal. icon: shield|users|chef|snow|car|leaf
       tint: morado | turquesa | naranja | amarillo | verde | celeste */
    benefits: [
      { icon: "leaf",  size: "lg", tint: "verde",   title: "Rodeado de naturaleza",
        text: "Árboles, aire libre y verde de verdad. Un cumple distinto a cualquier salón cerrado.", img: "assets/img/gal-6.webp" },
      { icon: "shield", size: "", tint: "morado",   title: "Espacios seguros",
        text: "Cada juego supervisado y pensado para que los chicos jueguen tranquilos, y vos también." },
      { icon: "users",  size: "", tint: "turquesa", title: "Animadores propios",
        text: "Un equipo que conoce a cada cumpleañero por su nombre y no para de divertir." },
      { icon: "chef",   size: "", tint: "naranja",  title: "Cocina casera",
        text: "Comida y panificación propias, servidas en mesa para chicos y grandes." },
      { icon: "snow",   size: "", tint: "celeste",  title: "Climatizado todo el año",
        text: "Salón con aire acondicionado: llueva o haga calor, la fiesta sigue." },
      { icon: "car",    size: "", tint: "amarillo", title: "Estacionamiento cerrado",
        text: "Predio con estacionamiento propio, cómodo y controlado." }
    ],

    /* ---------- CÓMO FUNCIONA (pasos) ----------
       icon: chat | calendar | check | star */
    steps: [
      { n: "1", icon: "chat",     title: "Escribinos por WhatsApp", text: "Contanos la fecha, la edad y cuántos invitados. Te respondemos al toque." },
      { n: "2", icon: "calendar", title: "Reservá tu fecha",        text: "Confirmamos disponibilidad y bloqueamos el día del cumple." },
      { n: "3", icon: "check",    title: "Coordinamos todo",        text: "Decoración, animación, comida y juegos: nos encargamos nosotros." },
      { n: "4", icon: "star",     title: "Disfrutan a lo grande",   text: "Vos disfrutás y los chicos viven el mejor día, rodeados de naturaleza." }
    ],

    /* ---------- LOS NÚMEROS ---------- */
    stats: [
      { value: "591", suffix: "",  label: "Opiniones en Google" },
      { value: "4.7", suffix: "★", label: "Valoración promedio" },
      { value: "8",   suffix: "+", label: "Espacios y juegos" },
      { value: "",    suffix: "∞", label: "Sonrisas" }
    ],

    /* ---------- OPINIONES ---------- */
    testimonials: [
      { quote: "Un salón infantil ideal para grandes eventos. Tiene pileta y gran variedad de juegos. Excelente atención y ambiente.", author: "Santi Ferreyra", meta: "Local Guide · Google" },
      { quote: "Hermoso lugar. Tiene de todo: salón de baile, comedor, galería, parque con árboles. Toboganes, camas elásticas, canchas. Excelente atención.", author: "Andrea Ferrarese", meta: "Local Guide · Google" },
      { quote: "El equipo de animadores fue impecable. Divirtieron toda la jornada a niños de 3 años. Lindo espacio para los grandes también.", author: "Mariela Ubaldi", meta: "Google" },
      { quote: "Soñamos el cumple de nuestra hija y todo el equipo de Mipiú superó las expectativas. Gracias por la atención, el compromiso y el amor.", author: "Valeria Speranza", meta: "Google" },
      { quote: "Excelente espacio para todo tipo de eventos. Muy buena combinación de interior y exterior. Súper recomendable.", author: "J. Nicolás Aimaretti", meta: "Local Guide · Google" },
      { quote: "Hermoso salón, muy completo y rodeado de naturaleza. Muy linda propuesta para festejar el cumple de los peques.", author: "Andrea Stornini", meta: "Local Guide · Google" }
    ],

    /* ---------- GALERÍA (masonry) ----------
       ratio: tall | wide | square */
    gallery: [
      { img: "assets/img/gal-6.webp", alt: "Parque con árboles, naturaleza en Mipiú", ratio: "tall" },
      { img: "assets/img/space-cancha.webp", alt: "Cancha de fútbol al aire libre", ratio: "wide" },
      { img: "assets/img/gal-2.webp", alt: "Globos de colores en la decoración del cumple", ratio: "square" },
      { img: "assets/img/space-palestra.webp", alt: "Trepadores y juegos de escalada", ratio: "tall" },
      { img: "assets/img/gal-3.webp", alt: "Toboganes y juegos del parque", ratio: "square" },
      { img: "assets/img/space-patio.webp", alt: "Espacios al aire libre rodeados de naturaleza", ratio: "wide" },
      { img: "assets/img/gal-5.webp", alt: "Torta de cumpleaños con velitas", ratio: "square" },
      { img: "assets/img/space-animacion.webp", alt: "Animación y baile en el salón", ratio: "tall" },
      { img: "assets/img/gal-4.webp", alt: "Salón de fiestas infantiles de Mipiú", ratio: "square" },
      { img: "assets/img/space-salon.webp", alt: "Salón comedor climatizado", ratio: "wide" },
      { img: "assets/img/gal-7.webp", alt: "Juegos y trepadores en el parque", ratio: "square" },
      { img: "assets/img/gal-8.webp", alt: "Festejo a lo grande en Mipiú", ratio: "tall" }
    ],

    /* ---------- PREGUNTAS FRECUENTES ---------- */
    faqs: [
      { q: "¿Qué incluye el alquiler del espacio?", a: "Acceso a los espacios (parque, pileta según temporada, canchas, juegos y salón), coordinación y animación. Escribinos por WhatsApp y te contamos los combos disponibles." },
      { q: "¿Hacen animación a domicilio?", a: "Sí. Si tu evento no es en Mipiú, llevamos nuestro equipo de animadores a donde quieras." },
      { q: "¿La pileta y los juegos de agua están siempre disponibles?", a: "Los juegos de agua funcionan en temporada de calor. El resto de los espacios está disponible todo el año." },
      { q: "¿El salón está climatizado?", a: "Sí, el salón comedor tiene aire acondicionado para estar cómodos en cualquier época del año." },
      { q: "¿Tienen estacionamiento?", a: "Sí, contamos con estacionamiento cerrado y controlado dentro del predio." },
      { q: "¿Cómo reservo una fecha?", a: "Escribinos por WhatsApp con la fecha tentativa y la cantidad de invitados, y te confirmamos la disponibilidad en breve." }
    ]
  };
})();

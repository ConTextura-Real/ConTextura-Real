const seasons = Array.from({ length: 10 }, (_, index) => index + 1);

export const spaces = {
  hombre: {
    section: "ejes", eyebrow: "Ejes del espacio", title: "Hombres", seasonTitle: "HOMBRE", image: "/images/hombre.webp", seasonImage: "/images/Hombreyou.webp", headerImage: "/images/hombreheader.webp", deepColor: "#68705A",
    intro: "Un espacio para detenerse, pensar y hablar de lo que se vive: identidad, relaciones, familia, derechos, crecimiento personal y fe, sin imponer una única forma de ser hombre.",
    description: "Conversaciones sobre identidad, vínculos, emociones, responsabilidad y las preguntas que atraviesan la vida de los hombres.",
    topics: ["Identidad", "Vínculos", "Responsabilidad y propósito"],
  },
  mujer: {
    section: "ejes", eyebrow: "Ejes del espacio", title: "Mujer", image: "/images/mujer.webp", seasonImage: "/images/mujeryou.webp", headerImage: "/images/mujerheader.webp", deepColor: "#722F37",
    intro: "Una conversación desde la experiencia femenina y la dignidad de cada persona.",
    description: "Un espacio para mirar identidad, relaciones, trabajo, cuidado y los desafíos reales que atraviesan la vida de las mujeres.",
    topics: ["Identidad y voz", "Relaciones", "Vida cotidiana"],
  },
  abogada: {
    section: "ejes", eyebrow: "Ejes del espacio", title: "Abogada", image: "/images/abogada.webp", seasonImage: "/images/abogadayou.webp", headerImage: "/images/abogadaheader.webp", deepColor: "#3A4654",
    intro: "Una mirada jurídica cercana, clara y humana para las preguntas que atraviesan la vida cotidiana.",
    description: "Un espacio para acercarnos al derecho desde la experiencia profesional, con claridad, respeto y sensibilidad por cada historia.",
    topics: ["Orientación general", "Vida cotidiana", "Derechos y decisiones"],
  },
  derecho: {
    section: "ejes", eyebrow: "Ejes del espacio", title: "Derecho", image: "/images/derecho.webp", seasonImage: "/images/derechoyou.webp", headerImage: "/images/derechoheader.webp", deepColor: "#414B64",
    intro: "Información clara para comprender tus derechos en las situaciones de cada día.",
    description: "Contenido jurídico general, humano y comprensible. No constituye asesoramiento ni representación profesional.",
    topics: ["Tus derechos", "Vida cotidiana", "Información jurídica general"],
  },
  fe: {
    section: "ejes", eyebrow: "Ejes del espacio", title: "Fe", image: "/images/fe.webp", seasonImage: "/images/feyou.webp", headerImage: "/images/feheader.webp", deepColor: "#4A6741",
    intro: "Una mirada de fe para las preguntas y experiencias de la vida real.",
    description: "Reflexiones que conectan los principios cristianos con los vínculos, los desafíos y las decisiones cotidianas.",
    topics: ["Esperanza", "Vida cotidiana", "Reflexión y propósito"],
  },
  jovenes: {
    section: "etapas", eyebrow: "Etapas de la vida", title: "Jóvenes", image: "/images/jovenes.webp", seasonImage: "/images/jovenesyou.webp", headerImage: "/images/jovenesheader.webp", deepColor: "#3D566E",
    intro: "Un espacio para conversar sobre cambios, identidad y la entrada a la sociedad.",
    description: "Contenidos para reconocer lo bueno y lo difícil de esta etapa y acompañar la construcción de identidad, vínculos y propósito.",
    topics: ["Cambios y autoconocimiento", "Amistades", "Decisiones"],
  },
  adultos: {
    section: "etapas", eyebrow: "Etapas de la vida", title: "Adultos", image: "/images/adultos.webp", seasonImage: "/images/adultosyou.webp", headerImage: "/images/adultosheader.webp", deepColor: "#65513B",
    intro: "Conversaciones para la vida adulta, sus vínculos y los proyectos que se construyen día a día.",
    description: "Un espacio sobre familia, trabajo, relaciones, propósito y decisiones cotidianas desde una mirada honesta y humana.",
    topics: ["Familia y vínculos", "Trabajo", "Proyectos de vida"],
  },
  "adultos-mayores": {
    section: "etapas", eyebrow: "Etapas de la vida", title: "Adultos mayores", image: "/images/mayores.webp", seasonImage: "/images/mayoresyou.webp", headerImage: "/images/mayorheader.webp", deepColor: "#6D5546",
    intro: "Un espacio para honrar la experiencia, el legado y los nuevos significados de cada día.",
    description: "Contenidos sobre sabiduría, acompañamiento, esperanza y trascendencia, desde el respeto a cada historia de vida.",
    topics: ["Historias y legado", "Acompañamiento", "Esperanza"],
  },
  ninos: {
    section: "etapas", eyebrow: "Etapas de la vida", title: "Niños", image: "/images/niños.webp", seasonImage: "/images/niñosyou.webp", headerImage: "/images/niñosheader.webp", deepColor: "#496B68",
    intro: "Un espacio para acompañar con ternura el crecimiento, las preguntas y los descubrimientos de la infancia.",
    description: "Contenidos para acompañar a niños y familias con escucha, cuidado y esperanza en cada etapa del crecimiento.",
    topics: ["Crecimiento", "Familia", "Cuidado"],
  },
};

export const seasonTitlesBySpace = {
  ninos: ["¿Por qué me da miedo la oscuridad?", "Mis papás se pelearon y no sé qué sentir", "¿Por qué hay niños que tienen más que yo?", "Me hicieron bullying en el colegio", "¿Dios me escucha cuando oro?", "Mi abuelita se fue al cielo", "No quiero ir al colegio", "¿Por qué tengo que obedecer?", "Tengo un amigo que me trata mal", "¿Qué es ser bueno de verdad?"],
  jovenes: ["No sé quién soy", "Mis papás no me entienden", "¿El sexo es un tabú o una conversación pendiente?", "Me siento solo aunque tengo muchos amigos", "¿Tengo que saber qué quiero ser toda la vida desde los 13?", "Las bebidas energéticas, el alcohol y lo que nadie te dice", "Me está pasando algo y no sé cómo decirlo", "¿Cuáles son mis derechos como joven?", "El amor no debería doler, ¿verdad?", "¿La fe es para los débiles?"],
  adultos: ["Construir una familia hoy: ¿qué ha cambiado y qué sigue igual?", "El trabajo me está consumiendo", "Mi matrimonio está en crisis", "Quiero empezar de nuevo, pero tengo miedo", "La crianza que recibí vs. la que quiero dar", "¿Cómo protejo legalmente lo que he construido?", "La soledad adulta: cuando nadie habla de ella", "Perdonar sin olvidar: ¿es posible?", "¿Quién soy yo fuera de mis roles?", "La fe en los días ordinarios"],
  "adultos-mayores": ["¿Para qué sirvo ahora?", "Mis hijos ya no me necesitan como antes", "¿Qué pasa con mis bienes cuando yo no esté?", "La enfermedad llegó sin avisar", "Tengo 70 años y quiero aprender cosas nuevas", "Mis nietos me hablan de un mundo que no entiendo", "¿Qué pasa cuando uno siente que la vida ya pasó?", "Derechos que tienes como adulto mayor y que nadie te dijo", "El legado que quiero dejar", "Hablar de la muerte sin miedo"],
};

// Catálogo editorial de temporadas. Añadir un objeto a cualquiera de estas
// listas permite ampliar el espacio más allá de las diez temporadas iniciales.
export const catalogSeasonsBySpace = {
  mujer: [
    "Amándonos a nosotras mismas.", "La mujer detrás de las expectativas.", "Relaciones que nos construyen y relaciones que nos desgastan.", "La mujer y sus emociones.", "Mujer, trabajo y propósito.", "Cuando la vida no sale como esperábamos.", "Mujer, familia y decisiones.", "La voz de una mujer.", "Reconstruirnos después de las dificultades.", "La mujer que quiero llegar a ser.",
  ],
  abogada: [
    "Ser mujer y ejercer el Derecho: vocación, desafíos y propósito.", "La abogada detrás de la profesión: ética, valores y responsabilidad.", "Mujeres que abrieron camino en el mundo jurídico.", "La justicia en la vida real: entre la ley y las circunstancias humanas.", "El valor de escuchar antes de juzgar.", "Derecho y empatía: comprender a las personas detrás de los casos.", "Los desafíos de emprender y construir una carrera profesional.", "Cómo comunicar el Derecho para que todos puedan comprenderlo.", "Dilemas éticos y responsabilidad en el ejercicio profesional.", "La huella que queremos dejar como profesionales del Derecho.",
  ],
  derecho: [
    "Conoce tus derechos: lo que toda persona debería saber.", "Derechos y responsabilidades dentro de la familia.", "Mujeres y derechos: igualdad, dignidad y protección jurídica.", "Derechos laborales: contratos, salarios y condiciones de trabajo.", "Violencia y protección: recursos y vías legales de ayuda.", "Derechos de niños, niñas y adolescentes: protección y responsabilidades.", "Derecho de familia: matrimonio, separación, alimentos y cuidado.", "Derechos de las personas mayores y protección de su dignidad.", "Derechos en internet: privacidad, imagen, redes sociales y protección de datos.", "Cómo buscar ayuda jurídica: instituciones, orientación y acceso a la justicia.",
  ],
  fe: [
    "Dios y mi identidad: aprender a reconocer mi valor.", "La fe en medio de las dificultades.", "Orar cuando no encontramos palabras.", "Perdonar sin negar lo que nos dolió.", "La fe en la familia y las relaciones.", "Esperar cuando las respuestas no llegan.", "Tomar decisiones con fe, sabiduría y responsabilidad.", "El descanso del alma: aprender a confiar en Dios.", "La gracia, el arrepentimiento y los nuevos comienzos.", "Vivir con propósito: servir, amar y dejar un legado.",
  ],
};

export const episodes = [
  { slug: "la-voz-que-habita-en-ti", category: "Mujer", space: "mujer", season: 2, number: 5, title: "La voz que habita en ti", image: "/images/mujer.webp", date: "11 de septiembre de 2026", excerpt: "Identidad, palabra propia y la libertad de habitar la propia historia.", description: "Una conversación para reconocer la propia voz y sostenerla con serenidad en medio de las exigencias cotidianas.", quote: "Tu voz no necesita permiso para existir con dignidad.", youtubeUrl: null },
  { slug: "esperanza-en-lo-cotidiano", category: "Fe", space: "fe", season: 1, number: 2, title: "Esperanza en lo cotidiano", image: "/images/fe.webp", date: "4 de septiembre de 2026", excerpt: "Encontrar luz y sentido en los gestos pequeños de cada día.", description: "Una invitación a descubrir la esperanza que acompaña lo ordinario y sostiene los días difíciles.", quote: "La esperanza no niega la herida: camina con nosotros a través de ella.", verse: "La esperanza no defrauda. — Romanos 5:5", youtubeUrl: null },
  { slug: "derechos-que-protegen-la-familia", category: "Derecho", space: "derecho", season: 1, number: 7, title: "Derechos que protegen la familia", image: "/images/derecho.webp", date: "28 de agosto de 2026", excerpt: "Claves generales para comprender derechos en el ámbito familiar.", description: "Información general y accesible para orientarnos mejor ante situaciones habituales de la vida familiar.", quote: "Comprender nuestros derechos nos ayuda a tomar decisiones más conscientes.", youtubeUrl: null },
  { slug: "que-significa-ser-hombre-hoy", category: "Hombre", space: "hombre", season: 1, number: 1, title: "¿Qué significa ser hombre hoy?", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Identidad, masculinidad y las expectativas que la sociedad coloca sobre los hombres.", description: "Una conversación abierta sobre las distintas maneras de vivir la identidad masculina y las expectativas sociales que la acompañan, sin imponer una única forma de ser hombre." },
  { slug: "los-hombres-tambien-necesitan-hablar", category: "Hombre", space: "hombre", season: 1, number: 2, title: "Los hombres también necesitan hablar", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Emociones, vulnerabilidad, comunicación y la posibilidad de pedir ayuda.", description: "Un espacio para hablar de lo que sentimos, de cómo comunicarnos y de pedir apoyo cuando hace falta; reconocer la vulnerabilidad también forma parte de la experiencia humana." },
  { slug: "padre-estar-presente-tambien-es-amar", category: "Hombre", space: "hombre", season: 1, number: 3, title: "Padre: estar presente también es una forma de amar", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Paternidad, presencia, escucha, vínculo y acompañamiento cotidiano.", description: "Una reflexión sobre la paternidad más allá de la responsabilidad económica: el valor de estar, escuchar, educar y acompañar a los hijos en sus distintas etapas." },
  { slug: "cuando-un-hombre-se-equivoca", category: "Hombre", space: "hombre", season: 1, number: 4, title: "Cuando un hombre se equivoca: reconocer, reparar y cambiar", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Responsabilidad personal, consecuencias, disculpas y reparación.", description: "Conversamos sobre asumir las consecuencias de nuestros actos, ofrecer disculpas y reparar cuando sea posible, sin reducir a nadie a sus errores y dejando espacio para aprender y cambiar." },
  { slug: "hombres-y-relaciones-amar-sin-controlar", category: "Hombre", space: "hombre", season: 1, number: 5, title: "Hombres y relaciones: amar sin controlar", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Amor, cuidado, confianza, dependencia, celos y control en los vínculos.", description: "Una conversación sobre los límites entre el cuidado y el control, y sobre la confianza y la dependencia en las relaciones de pareja y familiares, desde una mirada respetuosa y sin juzgar." },
  { slug: "el-peso-de-tener-que-poder-con-todo", category: "Hombre", space: "hombre", season: 1, number: 6, title: "El peso de tener que “poder con todo”", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Trabajo, dinero, familia y la presión de aparentar que todo está bajo control.", description: "Miramos con honestidad las responsabilidades y presiones relacionadas con el trabajo, el dinero y la familia, y lo que puede ocurrir cuando sentimos que debemos sostenerlo todo sin mostrar dificultad." },
  { slug: "hombre-y-derecho-conocer-tus-derechos", category: "Hombre", space: "hombre", season: 1, number: 7, title: "Hombre y Derecho: conocer tus derechos también es responsabilidad", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Derechos, obligaciones y acceso a mecanismos legales en situaciones cotidianas.", description: "Información jurídica general sobre derechos, obligaciones y vías de orientación, explicada con ejemplos sencillos. La información legal se distingue de las reflexiones personales y no sustituye el asesoramiento aplicable a cada caso y jurisdicción." },
  { slug: "que-dice-la-biblia-sobre-los-hombres", category: "Hombre", space: "hombre", season: 1, number: 8, title: "¿Qué dice la Biblia sobre los hombres?", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Personajes bíblicos, decisiones, errores, vínculos y transformación.", description: "Un acercamiento a personajes masculinos de la Biblia a partir de sus decisiones, conflictos, relaciones y procesos de transformación. En cada conversación diferenciaremos lo que expresa el texto bíblico de la reflexión personal de la presentadora." },
  { slug: "herencias-que-no-elegimos", category: "Hombre", space: "hombre", season: 1, number: 9, title: "Herencias que no elegimos: lo que aprendimos de nuestros padres", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Patrones familiares, silencios, creencias y comportamientos entre generaciones.", description: "Una reflexión sobre las formas de relacionarnos, los silencios y las creencias que aprendemos en familia, y sobre cómo reconocer qué queremos conservar o transformar." },
  { slug: "construir-una-vida-con-proposito", category: "Hombre", space: "hombre", season: 1, number: 10, title: "Construir una vida con propósito", image: "/images/hombre.webp", date: "Próximamente", excerpt: "Éxito, trabajo, familia, servicio, responsabilidad y fe.", description: "Cerramos la temporada pensando qué significa construir una vida con propósito entre el trabajo, la familia, el servicio, la responsabilidad y la fe, con una pregunta abierta: ¿qué clase de hombre quiero llegar a ser?" },
];

export const upcomingEpisodes = [
  { slug: "conversaciones-que-sanan", title: "Conversaciones que sanan", description: "Cómo abrir espacio a la escucha en los vínculos cercanos.", date: "Octubre de 2026", image: "/images/oracion.webp" },
  { slug: "el-valor-de-empezar", title: "El valor de empezar", description: "Una mirada serena a los cambios que nos invitan a crecer.", date: "Noviembre de 2026", image: "/images/escribir.webp" },
  { slug: "legado-y-esperanza", title: "Legado y esperanza", description: "Historias que siguen dando fruto con el paso del tiempo.", date: "Diciembre de 2026", image: "/images/mayores.webp" },
];

export function getSpace(section, slug) {
  const space = spaces[slug];
  return space?.section === section ? space : null;
}

export function getEpisode(slug) {
  return episodes.find((episode) => episode.slug === slug);
}

export function getEpisodesForSpace(space) {
  return episodes.filter((episode) => episode.space === space);
}

export function getSeasons() {
  return seasons;
}

export function getSeasonTitles(space) {
  return catalogSeasonsBySpace[space] ?? [];
}

export function getEpisodesForSeason(space, season) {
  return episodes.filter((episode) => episode.space === space && episode.season === season);
}

export function hasYoutubeVideo(episode) {
  if (!episode?.youtubeUrl) return false;
  try {
    const url = new URL(episode.youtubeUrl);
    if (url.hostname !== "youtube.com" && !url.hostname.endsWith(".youtube.com") && url.hostname !== "youtu.be") return false;
    return url.hostname === "youtu.be" ? url.pathname.length > 1 : Boolean(url.searchParams.get("v") || url.pathname.startsWith("/@") || url.pathname.startsWith("/embed/"));
  } catch {
    return false;
  }
}

export function getLatestPublishedEpisodes(limit = 4) {
  const monthIndex = { enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5, julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11 };
  return episodes
    .filter(hasYoutubeVideo)
    .slice()
    .sort((a, b) => {
      const dateValue = (value) => {
        const match = value.match(/^(\d{1,2}) de (\p{L}+) de (\d{4})$/u);
        return match ? new Date(Number(match[3]), monthIndex[match[2].toLowerCase()] ?? 0, Number(match[1])).getTime() : 0;
      };
      return dateValue(b.date) - dateValue(a.date);
    })
    .slice(0, limit);
}

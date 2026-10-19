/**
 * ВСЯ ИНФОРМАЦИЯ САЙТА ХРАНИТСЯ ЗДЕСЬ.
 * Заглушки: [В КВАДРАТНЫХ СКОБКАХ] и всё, что начинается с YOUR_ — на сайте они подсвечены маркером.
 * Замените их на реальные данные: подсветка исчезнет автоматически.
 */
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  genre: string;
  platform: string;
  description: string;
  fullDescription: string;
  highlight: string; // короткая «цитата» проекта
  goal: string;      // [YOUR TEXT HERE] — пока не заполнено
  gameplay: string;  // [YOUR TEXT HERE] — пока не заполнено
  multiplayer: string;
  players: string;
  year: string;
  role: string;
  technologies: string[];
  github: string;
  live: string;
  cover: string;
  screenshots: string[];
  note: string;      // рукописная пометка
  playful?: boolean; // более игривая карточка
  doodle: "ship" | "grid" | "bubble";
  disclaimer?: string;
  howItWorks?: { title: string; flow: string[]; text: string; points: string[] };
}

export const content = {
  seo: {
    title: "Sofa — Independent Game Studio",
    description:
      "Independent game development studio creating playful digital experiences through game design, visual storytelling and creative technology.",
    ogImage: "/images/hero/hero-1.svg",
  },
  company: {
    name: "SofaProd",
    tagline: "Small games. Big ideas.",
    handNote: "PLAY. CREATE. EXPERIMENT.",
    heroLine1: "Small",
    heroScript: "playful",
    heroLine3: "games.",
    heroText:
      "Independent game development studio creating playful digital experiences through game design, visual storytelling and creative technology.",
    aboutTitle: "Who's behind the games?",
    description:
      "We are a small independent game development studio focused on creating interactive experiences that are simple to understand, visually distinctive and genuinely fun to play.\n\nOur projects combine game mechanics, visual design, user experience and creative technology. We enjoy experimenting with familiar ideas and turning them into something with its own personality — from classic board games reimagined for the web to multiplayer experiences and playful AI interactions.\n\nWe believe that a good game does not need to be complicated. Sometimes one strong mechanic, a thoughtful interface and a memorable visual style are enough to create an engaging experience.",
    location: "Kyrgyzstan",
    email: "eaidosova@gmail.com",
    footerNote: "Built with curiosity & too much coffee.",
  },
  hero: {
    images: ["/images/hero/hero-1.jpeg", "/images/hero/hero-2.jpeg", "/images/hero/hero-3.jpeg", "/images/hero/hero-4.jpeg"],
  },
  founder: {
    name: "Erkeaiym Aidosova",
    dateOfBirth: "04 October 2005",
    born: "04.10.2005",
    education: "International Ala-Too University",
    program: "Computer Science — Foundation of Creative Industries",
    role: "Game Designer · Creative Technologist · Computer Science Student",
    focus: "Game Design / Interactive Media / Creative Technology",
    bio:
      "I'm Erkeaiym Aidosova, a Computer Science student at International Ala-Too University, studying in the Foundation of Creative Industries program.\n\nMy work sits between technology and visual creativity. I am interested in game development, interactive experiences, UI/UX and creative coding.\n\nI enjoy taking an idea from a simple concept to a playable prototype — thinking about not only how something works, but also how it feels to use.",
    image: "/images/about/portrait.jpg",
    imageAlt: "Portrait of Erkeaiym Aidosova",
    skills: ["Game Design", "Creative Coding", "Interactive Media", "UI/UX", "Frontend Development", "Prototyping"],
    wordSearchRows: ["GAMEDESIGNX", "VISUALSPLAY", "OCODEXSTORY", "UIPROTOTYPE", "CREATEPLAYX"],
    wordSearchWords: ["GAME DESIGN", "VISUALS", "CODE", "STORY", "UI", "PROTOTYPE", "PLAY", "CREATE"],
  },
  socialLinks: {
    github: "https://github.com/erkeaiymaidosova",
    instagram: "https://www.instagram.com/s1lviss?dlrf=MWJpaDZ6aXRtM2t6cw%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/erkeaiym-undefined-03124a288/",
  },
  services: [
    { title: "Game development", text: "Playable browser games, from a first prototype to a finished build — including multiplayer and AI-powered experiences." },
    { title: "Game design", text: "One strong mechanic, clear rules and a game that is easy to understand within seconds." },
    { title: "UI / UX design", text: "Interfaces and visual styles that give a familiar idea its own personality." },
    { title: "Prototyping", text: "Taking an idea from a simple concept to something you can actually play and test." },
  ],
  process: [
    { title: "Idea", text: "We define the game concept and the core problem." },
    { title: "Prototype", text: "We build a playable prototype and test the core mechanic." },
    { title: "Design", text: "We develop the visual style, UI and interaction." },
    { title: "Development", text: "We implement gameplay and technical systems." },
    { title: "Playtest", text: "We test, iterate and improve." },
    { title: "Ship", text: "We prepare the final build and release." },
  ],
  projects: [
    {
      id: "battleship",
      number: "01",
      title: "Battleship",
      category: "Browser Game",
      genre: "Strategy / Board Game",
      platform: "Web Browser",
      description:
        "A modern browser-based reinterpretation of the classic Battleship game, combining familiar strategic gameplay with a redesigned visual interface.",
      fullDescription:
        "Battleship is a browser-based interpretation of the classic naval strategy game.\n\nThe project focuses on taking a familiar game concept and giving it a more contemporary visual identity. The interface, colors and presentation were redesigned to make the game feel more engaging and visually distinctive while keeping the original rules easy to understand.\n\nThe project was developed as an interactive web experience using HTML, CSS and JavaScript, with an emphasis on game logic, user interaction and visual presentation.\n\nRather than changing the fundamental idea of Battleship, the project explores how interface design and visual styling can transform a familiar game into a new experience.",
      highlight: "A classic game, redesigned for the web.",
      goal: "To practice new knowledge about multiplayer mechanics",
      gameplay: "Classic sea battle rules",
      multiplayer: "",
      players: "2",
      year: "2026",
      role: "Game Design · UI Design · Frontend Development",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/erkeaiymaidosova/seaBattle",
      live: "sea-battle-ochre.vercel.app",
      cover: "/images/projects/battleship/cover.png",
      screenshots: ["/images/projects/battleship/screen-01.png", "/images/projects/battleship/screen-02.png", "/images/projects/battleship/screen-03.png"],
      note: "PLAY IT ↓",
      doodle: "ship",
    },
    {
      id: "color-territory",
      number: "02",
      title: "Color Territory",
      category: "Multiplayer Browser Game",
      genre: "Multiplayer / Casual / Competitive",
      platform: "Web Browser",
      description: "A real-time multiplayer browser game where players compete to claim territory through color.",
      fullDescription:
        "Color Territory is a multiplayer browser game built around a simple competitive idea: claim as much territory as possible before time runs out.\n\nPlayers join the same online game and compete by filling available cells with their assigned color. The game is designed for up to four players, creating a fast and competitive experience where every move matters.\n\nThe project explores the challenges of building a real-time multiplayer experience, including shared game state, player synchronization, timers and online room management.\n\nThe goal was to create a game that is easy to understand within seconds while still creating enough competition to make players want to play again.",
      highlight: "Four players. One board. Take your territory.",
      goal: "To practice new knowledge about multiplayer mechanics",
      gameplay: "Just click to occupy as much territory as u can",
      multiplayer: "Create room or join with password",
      players: "Up to 4",
      year: "2026",
      role: "Game Design · UI/UX · Frontend Development · Multiplayer Logic",
      technologies: ["React", "TypeScript", "Supabase", "Realtime"],
      github: "https://github.com/erkeaiymaidosova/colorTerritory",
      live: "color-territory.vercel.app",
      cover: "/images/projects/color-territory/cover1.png",
      screenshots: ["/images/projects/color-territory/screen-1.png", "/images/projects/color-territory/screen-2.png", "/images/projects/color-territory/screen-3.png"],
      note: "BUILT WITH TOO MUCH COFFEE",
      doodle: "grid",
    },
    {
      id: "spongebob-chatbot",
      number: "03",
      title: "SpongeBob Chatbot",
      category: "AI / Interactive Web Experience",
      genre: "AI Character Chat / Conversational Experience",
      platform: "Web",
      description:
        "An interactive AI character experience where users can have conversations with SpongeBob through a playful Bikini Bottom-inspired interface.",
      fullDescription:
        "SpongeBob Chatbot is an interactive AI character experience designed around natural conversation with SpongeBob.\n\nInstead of relying on a fixed list of predefined replies, the project uses an AI language model to generate responses dynamically. A dedicated system prompt defines the character's personality, tone and style of communication, allowing the chatbot to maintain a recognizable SpongeBob-like conversational personality.\n\nThe application also keeps conversation history within the session, allowing the character to respond with awareness of the previous messages.\n\nThe project combines a colorful underwater-inspired interface with a simple conversational experience, creating a playful interaction between the user and an AI character.\n\nFrom a technical perspective, the project demonstrates the separation of frontend and backend responsibilities. The browser sends messages to a Node.js backend, which communicates with the AI API and returns the generated response to the interface.\n\nThe project also includes loading states, error handling and a deterministic JavaScript Easter egg as an additional playful interaction.",
      highlight: "Talk to a character. See where the conversation goes.",
      goal: "To try to create chat bot",
      gameplay: "Just message whatever u want",
      multiplayer: "",
      players: "1",
      year: "2026",
      role: "Frontend Development · Backend Development · AI Integration · UX Design · Prompt Design",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "OpenRouter API", "LLM"],
      github: "https://github.com/erkeaiymaidosova/spongeBobBot",
      live: "sponge-bob-bot-six.vercel.app",
      cover: "/images/projects/spongebob-chatbot/cover11.png",
      screenshots: ["/images/projects/spongebob-chatbot/screen1.png", "/images/projects/spongebob-chatbot/screen2.png", "/images/projects/spongebob-chatbot/screen3.png"],
      note: "SAY HI ↓",
      playful: true,
      doodle: "bubble",
      disclaimer:
        "An unofficial educational/experimental AI character project inspired by SpongeBob. It is not an official product and is not affiliated with Nickelodeon or the copyright owner.",
      howItWorks: {
        title: "How it works",
        flow: ["User", "Chat interface", "Node.js backend", "OpenRouter / language model", "Generated response", "Chat interface"],
        text: "The frontend sends the user's message to the backend. The backend securely communicates with the AI provider and returns the generated response to the chat interface.",
        points: [
          "System prompt defines the character's personality",
          "Conversation history keeps session context",
          "Responses are generated by an AI model",
          "Loading state while the reply is on its way",
          "Error handling when something goes wrong",
          "A deterministic JavaScript Easter egg",
          "Frontend and backend are separated; the API key stays on the server",
        ],
      },
    },
  ] as Project[],
  // size: portrait | landscape | square
  gallery: [
    { src: "/images/gallery/1.jpeg", alt: "Gallery image 1 (placeholder)", size: "portrait" },
    { src: "/images/gallery/2.jpeg", alt: "Gallery image 2 (placeholder)", size: "landscape" },
    { src: "/images/gallery/3.jpeg", alt: "Gallery image 3 (placeholder)", size: "square" },
    { src: "/images/gallery/4.jpeg", alt: "Gallery image 4 (placeholder)", size: "portrait" },
    { src: "/images/gallery/5.jpeg", alt: "Gallery image 5 (placeholder)", size: "landscape" },
    { src: "/images/gallery/6.jpeg", alt: "Gallery image 6 (placeholder)", size: "square" },
    { src: "/images/gallery/7.jpeg", alt: "Gallery image 7 (placeholder)", size: "portrait" },
    { src: "/images/gallery/8.jpeg", alt: "Gallery image 8 (placeholder)", size: "square" },
    { src: "/images/gallery/9.jpeg", alt: "Gallery image 9 (placeholder)", size: "landscape" },
  ],
  contact: {
    title: "Let's make something playable.",
    projectTypes: ["Browser game", "Multiplayer game", "AI / chatbot experience", "Game design", "UI / UX", "Prototype", "Something else"],
  },
};

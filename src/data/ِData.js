import imageposter from '../../public/img/image.jpg'
import textposter from '../../public/img/text-ai.jpg'
import videoposter from '../../public/img/video-ai.jpg'
import developerposter from '../../public/img/developer-ai.jpg'

export const CategoryCardData = [
  {
    id: 1,
    slug: "image-generation",
    title: "Image Generation",
    tagline: "Turning imagination into visuals with AI",
    shortDescription:
      "Create stunning images, artworks, and concepts from text prompts using AI.",
    longDescription:
      "Image Generation AI focuses on converting natural language prompts into high-quality visuals. These systems analyze textual descriptions, understand artistic styles, and generate images that can be used for creative design, marketing, entertainment, and product visualization. Modern image generation models allow fine control over style, lighting, composition, and mood.",
    keyCapabilities: [
      "Text-to-image generation",
      "Style transfer and artistic control",
      "High-resolution image output",
      "Multiple variations per prompt",
    ],
    useCases: [
      "Concept art for games and movies",
      "Marketing banners and social media visuals",
      "Illustrations for blogs and books",
      "UI mockups and creative inspiration",
    ],
    popularTools: [
      "DALL·E",
      "Midjourney",
      "Stable Diffusion",
      "Leonardo AI",
    ],
    pros: [
      "Speeds up creative workflows",
      "Reduces dependency on manual design",
      "Endless creative possibilities",
    ],
    cons: [
      "Requires good prompt engineering",
      "May produce inconsistent results",
      "Ethical and copyright concerns",
    ],
    futureTrends: [
      "More realistic image generation",
      "Better control over composition",
      "Real-time image creation",
    ],
    image: imageposter,
  },

  {
    id: 2,
    slug: "text-writing",
    title: "Text & Writing",
    tagline: "AI-powered language and communication",
    shortDescription:
      "Generate, improve, and analyze text content using AI models.",
    longDescription:
      "Text & Writing AI focuses on understanding and generating human-like language. These tools help with writing articles, summarizing documents, translating languages, generating code explanations, and improving communication. They are widely used in education, business, content creation, and software development.",
    keyCapabilities: [
      "Text generation and rewriting",
      "Grammar and tone correction",
      "Summarization and translation",
      "Context-aware responses",
    ],
    useCases: [
      "Writing blog posts and articles",
      "Customer support automation",
      "Generating documentation",
      "Language learning assistance",
    ],
    popularTools: [
      "ChatGPT",
      "Claude",
      "Jasper AI",
      "Notion AI",
    ],
    pros: [
      "Saves time on writing tasks",
      "Improves clarity and quality",
      "Supports multiple languages",
    ],
    cons: [
      "May generate inaccurate information",
      "Needs human review",
    ],
    futureTrends: [
      "More factual accuracy",
      "Deeper contextual understanding",
      "Better personalization",
    ],
    image: textposter,
  },

  {
    id: 3,
    slug: "video-audio",
    title: "Video & Audio",
    tagline: "Create multimedia content with AI",
    shortDescription:
      "Generate videos, voiceovers, and music using AI technology.",
    longDescription:
      "Video & Audio AI tools simplify multimedia production by automating editing, generation, and enhancement processes. They allow users to create videos from text, generate realistic voices, enhance audio quality, and compose music with minimal technical knowledge.",
    keyCapabilities: [
      "Text-to-video generation",
      "Voice synthesis",
      "Audio enhancement",
      "Automatic video editing",
    ],
    useCases: [
      "Explainer and marketing videos",
      "Podcast production",
      "Content for social media",
      "E-learning materials",
    ],
    popularTools: [
      "Runway",
      "Pictory",
      "ElevenLabs",
      "Descript",
    ],
    pros: [
      "Reduces production cost",
      "Speeds up content creation",
    ],
    cons: [
      "Limited creative control",
      "Quality varies by tool",
    ],
    futureTrends: [
      "More realistic avatars",
      "Real-time video generation",
    ],
    image: videoposter,
  },

  {
    id: 4,
    slug: "developer-tools",
    title: "Developer Tools",
    tagline: "Build software faster with AI assistance",
    shortDescription:
      "AI-powered tools that help developers code, debug, and automate tasks.",
    longDescription:
      "Developer AI tools assist programmers throughout the software development lifecycle. From writing code and debugging to documentation and testing, these tools improve productivity and reduce repetitive tasks. They are becoming an essential part of modern development workflows.",
    keyCapabilities: [
      "Code generation",
      "Bug detection",
      "Refactoring suggestions",
      "Workflow automation",
    ],
    useCases: [
      "Frontend and backend development",
      "Automated testing",
      "Code reviews",
    ],
    popularTools: [
      "GitHub Copilot",
      "Codeium",
      "Tabnine",
    ],
    pros: [
      "Increases developer productivity",
      "Reduces errors",
    ],
    cons: [
      "May suggest inefficient code",
      "Requires human oversight",
    ],
    futureTrends: [
      "AI-driven architecture decisions",
      "Smarter debugging tools",
    ],
    image: developerposter,
  },
];

export const futureTrendsData = {
  title: "Future Trends in Artificial Intelligence",
  description:
    `Artificial intelligence is evolving at an unprecedented pace. The next generation of AI systems
     will focus on deeper understanding, greater adaptability, and more seamless integration into
     human-centered digital experiences.`,

  trends: [
    {
      id: 1,
      title: "Multimodal Intelligence",
      text:
        `Future AI systems will increasingly combine text, images, audio, and structured data into
         a unified understanding. This shift enables more natural interactions and significantly
         improves contextual awareness across complex tasks.`,
    },
    {
      id: 2,
      title: "Human-in-the-Loop Automation",
      text:
        `Rather than fully autonomous systems, upcoming AI tools will emphasize collaborative
         workflows where humans guide, validate, and refine AI outputs to ensure reliability,
         transparency, and ethical alignment.`,
    },
    {
      id: 3,
      title: "Democratization of AI Tools",
      text:
        `AI technologies are becoming more accessible to non-technical users. Low-code interfaces,
         intuitive design, and cloud-based platforms will empower creators, designers, and
         small teams to leverage advanced AI capabilities.`,
    },
  ],
};





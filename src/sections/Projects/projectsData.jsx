import studyMind from "../../assets/images/studymind.png";
import resumeAI from "../../assets/images/resume-ai.png";

export const projects = [
  {
    id: 1,
    title: "StudyMind AI",
    image: studyMind,
    status: "Completed",

    description:
      "An AI-powered study assistant that allows students to upload PDFs and ask questions using Retrieval-Augmented Generation (RAG).",

    features: [
      "PDF Upload",
      "AI Chat",
      "Semantic Search",
      "LangChain + FAISS",
    ],

    tech: [
      "React",
      "Flask",
      "Python",
      "LangChain",
      "FAISS",
      "PostgreSQL",
    ],

    github: "https://github.com/AshishPG31",

    demo: "#",
  },

  {
    id: 2,

    title: "AI Resume Analyzer",

    image: resumeAI,

    status: "In Progress",

    description:
      "AI-powered resume analyzer that provides ATS score, resume feedback, keyword suggestions and improvement recommendations.",

    features: [
      "ATS Score",
      "Keyword Analysis",
      "Resume Feedback",
      "AI Suggestions",
    ],

    tech: [
      "React",
      "Python",
      "OpenAI",
      "Flask",
    ],

    github: "#",

    demo: "#",
  },
];
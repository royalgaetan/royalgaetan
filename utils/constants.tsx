"use client";
import React from "react";
import { DiAndroid, DiApple } from "react-icons/di";
import {
  experienceType,
  FullProject,
  NavbarElementType,
  ProjectType,
  SkillType,
} from "./type";

export const navbarElementsList: NavbarElementType[] = [
  {
    title: "Home",
    hash: "#home",
  },
  {
    title: "Portfolio",
    hash: "#portfolio",
  },
  {
    title: "About Me",
    hash: "#about",
  },
  {
    title: "Skills",
    hash: "#skills",
  },
  {
    title: "Let's talk?",
    hash: "#contact",
  },
];

export const mainProjects: ProjectType[] = [
  {
    title: "Wesh",
    link: "/wesh",
    accentColor: "#E02F66",
    secondaryColor: "#f3acc2",
    isLinkBlankTarget: false,
    subTitle:
      "Never miss important events like birthdays and meetings with Wesh, the app that keeps you connected",
    coverPath: "/assets/wesh mockup.png",
    previewsType: "mobile",
    previews: [
      "/assets/wesh previews/Home Page v0.2.png",
      "/assets/wesh previews/Story v0.2.png",
      "/assets/wesh previews/Stories Page v0.2.png",
      "/assets/wesh previews/Profile v0.2.png",
    ],
    toolsUsed: [
      {
        iconPath: "/svg/languages logos/flutter.svg",
        darkIconPath: "/svg/languages logos/flutter white.svg",
        title: "Flutter",
        width: 20,
        height: 20,
      },
      {
        iconPath: "/svg/languages logos/firebase.svg",
        darkIconPath: "/svg/languages logos/firebase white.svg",
        title: "Firebase",
        width: 20,
        height: 20,
      },
    ],
  },
  {
    title: "Soul Train",
    link: "https://soultrain.app",
    isLinkBlankTarget: true,
    accentColor: "#C09FF8",
    secondaryColor: "#5F01F8",
    subTitle:
      "Connect with breakers worldwide, join live battles, and showcase your skills",
    coverPath: "/assets/soul train mockup.png",
    previewsType: "mobile",
    previews: [
      "/assets/soul train previews/Soul Train - Discovery Page.png",
      "/assets/soul train previews/Soul Train - Battle Ranking Page.png",
      "/assets/soul train previews/Soul Train - Profile Page.png",
      "/assets/soul train previews/Soul Train - Inbox Page.png",
    ],
    toolsUsed: [
      {
        iconPath: "/svg/languages logos/flutter.svg",
        darkIconPath: "/svg/languages logos/flutter white.svg",
        title: "Flutter",
        width: 20,
        height: 20,
      },
      {
        iconPath: "/svg/languages logos/nodejs.svg",
        darkIconPath: "/svg/languages logos/nodejs white.svg",
        title: "Node.js",
        width: 22,
        height: 22,
      },

      {
        iconPath: "/svg/languages logos/mongodb.svg",
        darkIconPath: "/svg/languages logos/mongodb white.svg",
        title: "Mongo DB",
        width: 24,
        height: 24,
      },
    ],
  },

  {
    title: "Big Agency Travel",
    link: "https://bigagencytravel.com",
    isLinkBlankTarget: true,
    accentColor: "#53BF70",
    secondaryColor: "#0097B2",
    subTitle: " Plan unforgettable trips to Mauritius island",
    coverPath: "/assets/big agency travel mockup.png",
    previewsType: "laptop",
    previews: [
      "/assets/big agency travel previews/Big Agency Travel - Home.png",
      "/assets/big agency travel previews/Big Agency Travel - Ad vid 1 - eng.webm",
    ],
    toolsUsed: [
      {
        iconPath: "/svg/languages logos/wordpress.svg",
        darkIconPath: "/svg/languages logos/wordpress white.svg",
        title: "WordPress",
        width: 25,
        height: 25,
      },
      {
        iconPath: "/svg/languages logos/php.svg",
        darkIconPath: "/svg/languages logos/php white.svg",
        title: "PHP",
        width: 27,
        height: 27,
      },
      {
        iconPath: "/svg/languages logos/sql.svg",
        darkIconPath: "/svg/languages logos/sql white.svg",
        title: "SQL",
        width: 22,
        height: 22,
      },
    ],
  },
];

export const experiencesList: experienceType[] = [
  {
    title: "Flutter engineer",
    year: "2023 — Jan 2024",
    logoPath: "/assets/soul train logo white.png",
    logoHeight: 130,
    logoWidth: 130,
    iconStyle: {
      background: "linear-gradient(to bottom right, #171717, #3F3F46)",
      color: "#fff",
    },
    link: "",
    companyName: "Soul Train",
    content: (
      <div>
        Developed and created the first version of Soul Train app: designed for
        the Breakdance Community
      </div>
    ),
    toolsUsed: [
      {
        iconPath: "/svg/languages logos/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
      },

      {
        iconPath: "/svg/languages logos/mongodb.svg",
        title: "Mongo DB",
        width: 18,
        height: 18,
      },
    ],
  },
  {
    title: "Front-End Developer",
    year: "Jan 2023 — 2024",
    logoPath: "/assets/big agency travel logo.png",
    logoHeight: 150,
    logoWidth: 150,
    iconStyle: {
      background: "linear-gradient(to bottom right, #0891B2, #10B981)",
      color: "#fff",
    },
    link: "",
    companyName: "Big Agency Travel",
    content: (
      <div>
        Created and maintained the Big Agency Travel website designed to
        showcase and promote travel to Mauritius Island
      </div>
    ),
    toolsUsed: [
      {
        iconPath: "/svg/languages logos/wordpress.svg",
        title: "WordPress",
        width: 24,
        height: 24,
      },
      {
        iconPath: "",
        title: "PHP",
        width: 24,
        height: 24,
      },
    ],
  },
  {
    title: "Flutter Developer",
    year: "Jun 2022 — Jan 2023",
    logoPath: "/assets/wesh logo white.png",
    logoHeight: 130,
    logoWidth: 130,
    iconStyle: {
      background: "linear-gradient(to bottom right, #F43F5E, #FDBA74)",
      color: "#fff",
    },
    link: "",
    companyName: "Wesh",
    content: (
      <div>
        Developed and created a comprehensibve social media application with
        events at center
      </div>
    ),
    toolsUsed: [
      {
        iconPath: "/svg/languages logos/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
      },
      {
        iconPath: "/svg/languages logos/firebase.svg",
        title: "Firebase",
        width: 13,
        height: 13,
      },
    ],
  },

  {
    title: "Developer",
    year: "2020 — 2021",
    logoPath: "/assets/ventura logo.png",
    iconStyle: {
      background: "linear-gradient(to bottom right, #5B21B6, #818CF8)",
      color: "#fff",
    },
    logoHeight: 130,
    logoWidth: 130,
    link: "",
    companyName: "Ventura",
    toolsUsed: [
      {
        iconPath: "/svg/languages logos/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
      },
      {
        iconPath: "/svg/languages logos/nextjs.svg",
        title: "Next.js",
        width: 24,
        height: 24,
      },
      {
        iconPath: "/svg/languages logos/mongodb.svg",
        title: "Mongo DB",
        width: 15,
        height: 15,
      },
      {
        iconPath: "/svg/languages logos/php.svg",
        title: "PHP",
        width: 24,
        height: 24,
      },
      {
        iconPath: "",
        title: "etc.",
        width: 24,
        height: 24,
      },
    ],
    content: (
      <div>
        Developed, styled, maintained, and shipped high-quality and custom
        websites and mobile apps for Ventura clients
      </div>
    ),
  },
];

export const skillsList: SkillType[] = [
  {
    title: "Flutter",
    category: "mobile",
    iconPath: "/svg/languages logos/flutter.svg",
    darkIconPath: "/svg/languages logos/flutter white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Dart",
    category: "mobile",
    iconPath: "/svg/languages logos/dart.svg",
    darkIconPath: "/svg/languages logos/dart white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "FlutterFlow",
    category: "mobile",
    iconPath: "/svg/languages logos/flutterflow.svg",
    darkIconPath: "/svg/languages logos/flutterflow white.svg",
    width: 60,
    height: 60,
  },
  {
    title: "React.js",
    category: "frontend",
    iconPath: "/svg/languages logos/reactjs.svg",
    darkIconPath: "/svg/languages logos/reactjs white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Next.js",
    category: "frontend",
    iconPath: "/svg/languages logos/nextjs.svg",
    darkIconPath: "/svg/languages logos/nextjs white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Typescript",
    category: "frontend",
    iconPath: "/svg/languages logos/typescript.svg",
    darkIconPath: "/svg/languages logos/typescript white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Javascript",
    category: "frontend",
    iconPath: "/svg/languages logos/javascript.svg",
    darkIconPath: "/svg/languages logos/javascript white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Tailwind",
    category: "frontend",
    iconPath: "/svg/languages logos/tailwind-css.svg",
    darkIconPath: "/svg/languages logos/tailwind-css white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Framer Motion",
    category: "frontend",
    iconPath: "/svg/languages logos/framer-motion.svg",
    darkIconPath: "/svg/languages logos/framer-motion white.svg",
    width: 40,
    height: 40,
  },
  {
    title: "HTML",
    category: "frontend",
    iconPath: "/svg/languages logos/html.svg",
    darkIconPath: "/svg/languages logos/html white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "CSS",
    category: "frontend",
    iconPath: "/svg/languages logos/css.svg",
    darkIconPath: "/svg/languages logos/css white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Wordpress",
    category: "frontend",
    iconPath: "/svg/languages logos/wordpress.svg",
    darkIconPath: "/svg/languages logos/wordpress white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Prisma",
    category: "database",
    iconPath: "/svg/languages logos/prisma.svg",
    darkIconPath: "/svg/languages logos/prisma white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "MongoDB",
    category: "database",
    iconPath: "/svg/languages logos/mongodb.svg",
    darkIconPath: "/svg/languages logos/mongodb white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "SQL",
    category: "database",
    iconPath: "/svg/languages logos/sql.svg",
    darkIconPath: "/svg/languages logos/sql white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Firebase",
    category: "database",
    iconPath: "/svg/languages logos/firebase.svg",
    darkIconPath: "/svg/languages logos/firebase white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Node.js",
    category: "backend",
    iconPath: "/svg/languages logos/nodejs.svg",
    darkIconPath: "/svg/languages logos/nodejs white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "PHP",
    category: "backend",
    iconPath: "/svg/languages logos/php.svg",
    darkIconPath: "/svg/languages logos/php white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Python",
    category: "backend",
    iconPath: "/svg/languages logos/python.svg",
    darkIconPath: "/svg/languages logos/python white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Flask",
    category: "backend",
    iconPath: "/svg/languages logos/flask.svg",
    darkIconPath: "/svg/languages logos/flask white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Git",
    category: "tools",
    iconPath: "/svg/languages logos/git.svg",
    darkIconPath: "/svg/languages logos/git white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Codemagic",
    category: "tools",
    iconPath: "/svg/languages logos/codemagic.svg",
    darkIconPath: "/svg/languages logos/codemagic white.svg",
    width: 48,
    height: 48,
  },
  {
    title: "Github Actions",
    category: "tools",
    iconPath: "/svg/languages logos/githubactions.svg",
    darkIconPath: "/svg/languages logos/githubactions white.svg",
    width: 46,
    height: 46,
  },
  {
    title: "Jira",
    category: "tools",
    iconPath: "/svg/languages logos/jira.svg",
    darkIconPath: "/svg/languages logos/jira white.svg",
    width: 47,
    height: 47,
  },
];

export const weshProject: FullProject = {
  projectName: "Wesh",
  features: [
    {
      tabName: "Home",
      previewType: "text",
      previewPath: "",
      contentText: [
        {
          type: "logo",
          content: "/assets/wesh logo.png",
        },
        {
          type: "h1",
          content: "Wesh",
        },
        {
          type: "hr",
          content: "",
        },
        {
          type: "p",
          content:
            "Wesh is a social media app that meanly focus on events. The main purpose of Wesh is you to NOT miss any important events such as birthdays 🥳, meetings 💼, parties 🎈, etc.",
        },
        {
          type: "p",
          content:
            "But Wesh goes beyond just reminders. It keeps you engaged with loved ones, friends, and communities, enhancing how you celebrate and connect around these significant events.",
        },
        {
          type: "h3",
          content: "How can you try it? Is it free to use?",
        },
        {
          type: "p",
          content:
            "Absolutely! Wesh is completely free to use, with all features available at no cost. Currently, we have the Android version ready for you to explore. The iOS version is on its way and will be available soon!",
        },
        {
          type: "p",
          content:
            "You can download the Android app via the link below. Alternatively, feel free to explore the app's features through the tabs on this page—no download required! 😊",
        },
        {
          type: "buttons-group",
          content: "",
          group: [
            {
              type: "button-link",
              isLinkTargetBlank: true,
              leadingIcon: <DiAndroid size={"1rem"} color="white" />,
              link: "https://github.com/royalgaetan/wesh/releases/download/v0.2.0/Wesh.0.2.apk",
              content: "Android App",
            },
            {
              type: "button-disabled",
              leadingIcon: <DiApple size={"1.2rem"} color="white" />,
              disabled: true,
              content: "iOS App",
            },
          ],
        },
      ],
    },

    {
      tabName: "Behind the scenes",
      previewType: "text",
      previewPath: "",
      contentText: [
        {
          type: "h3",
          content: "How is it built?",
        },
        {
          type: "p",
          content:
            "Wesh is crafted with passion using Flutter for a seamless mobile experience across Android and iOS, and Firebase powering the backend and database. The journey from concept to the debut version 0.1 took a dedicated 3 months of full-time effort, transforming ideas into reality.",
        },
        {
          type: "h3",
          content: "What problems is it trying to solve?",
        },
        {
          type: "p",
          content:
            "In a world where distractions abound and life's demands often lead us to forget crucial moments—whether it’s quality time with loved ones or attending life-changing events—the challenge was clear.",
        },
        {
          type: "p",
          content:
            "Wesh bridges this gap by reminding you of the events that truly matter while keeping you connected with your loved ones in a dynamic, social-like environment.",
        },
        {
          type: "h3",
          content: "What challenges did you encounter?",
        },
        {
          type: "p",
          content:
            "Creating a social media platform from the ground up is no small feat. It involves navigating the complexities of time management, resource allocation, and audience targeting.",
        },
        {
          type: "p",
          content:
            "Upon releasing the first version, we faced significant hurdles: designing a robust app architecture from the start, crafting a minimalist yet unique design, and accurately estimating development time for each feature—challenges that ultimately took more time than anticipated. But every obstacle was a learning opportunity.",
        },
        {
          type: "h3",
          content: "What did you learn along your journey?",
        },
        {
          type: "p",
          content:
            "Great things take time and dedication. Embarking on this journey has been incredibly rewarding and insightful.",
        },
        {
          type: "p",
          content:
            "We’ve gained invaluable knowledge across various domains: from design and user experience to project architecture, clean code, algorithmic depth, the intricate workings of Android and iOS, and even sales and marketing strategies to effectively reach our audience.",
        },
      ],
    },
    {
      tabName: "Getting Started",
      previewType: "video",
      previewPath: "/assets/wesh previews/Onboarding v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Getting Started",
        },
        {
          type: "p",
          content:
            "Enjoy a smooth start with easy sign-up, a brief intro, and instant access to your homepage",
        },
      ],
    },
    {
      tabName: "Events",
      previewType: "video",
      previewPath: "/assets/wesh previews/Events v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Events",
        },
        {
          type: "p",
          content:
            "Create, edit, view and add reminders to events of all sorts",
        },
      ],
    },
    {
      tabName: "Stories",
      previewType: "video",
      previewPath: "/assets/wesh previews/Stories v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Stories",
        },
        {
          type: "p",
          content:
            "Stories are content that stay on your profile for 24 hours. Useful to share instant moments",
        },
      ],
    },
    {
      tabName: "Forevers",
      previewType: "video",
      previewPath: "/assets/wesh previews/Forevers v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Forevers",
        },
        {
          type: "p",
          content:
            "Create Forevers to save your stories forever (even after their 24h expiration delay)",
        },
      ],
    },
    {
      tabName: "Chats",
      previewType: "video",
      previewPath: "/assets/wesh previews/Chats v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Chats",
        },
        {
          type: "p",
          content:
            "Send real-time messages to your friends and followers including videos, images, voice messages, money, gift, etc.",
        },
      ],
    },

    {
      tabName: "Profile",
      previewType: "video",
      previewPath: "/assets/wesh previews/Profile v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Profile",
        },
        {
          type: "p",
          content:
            "Manage your events, reminders, followers, personal data in one place",
        },
      ],
    },
    {
      tabName: "Notifications",
      previewType: "video",
      previewPath: "/assets/wesh previews/Event Notification v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Notifications",
        },
        {
          type: "p",
          content:
            "Stay ahead! Personalized updates keep you in the loop and ready for what’s next",
        },
      ],
    },
    {
      tabName: "Find what's happening or coming next",
      previewType: "video",
      previewPath: "/assets/wesh previews/Search v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Search",
        },
        {
          type: "p",
          content:
            "From events to people, search and apply powerful filters to find anything and anyone",
        },
      ],
    },
    {
      tabName: "Share & Forward",
      previewType: "video",
      previewPath: "/assets/wesh previews/Forward v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Share & Forward",
        },
        {
          type: "p",
          content:
            "Share to your followers what you've found interesting on internet.",
        },
        {
          type: "p",
          content:
            "And vice-versa: share useful content to people outside of Wesh",
        },
      ],
    },
    {
      tabName: "Special Happy Birthday",
      previewType: "video",
      previewPath: "/assets/wesh previews/Special Happy Birthday v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Happy Birthday",
        },
        {
          type: "p",
          content:
            "Wesh takes events seriously and can't miss your day without a special wish :)",
        },
      ],
    },
    {
      tabName: "Help Center",
      previewType: "video",
      previewPath: "/assets/wesh previews/Help Center v0.2.webm",
      contentText: [
        {
          type: "h3",
          content: "Help Center",
        },
        {
          type: "p",
          content:
            "Get answers and support. The Help Center will assist you with any issues",
        },
      ],
    },
  ],
};

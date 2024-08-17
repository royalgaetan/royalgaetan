"use client";
import React from "react";
import { DiAndroid, DiApple } from "react-icons/di";
import {
  ContentType,
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
    title: "About",
    hash: "#about",
  },
  {
    title: "Portfolio",
    hash: "#portfolio",
  },
  {
    title: "Experience",
    hash: "#experience",
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
    isLinkBlankTarget: false,
    subTitle:
      "Never miss important events like birthdays and meetings with Wesh, the app that keeps you connected",
    coverPath: "/assets/wesh mockup.png",
    toolsUsed: [
      {
        iconPath: "/svg/flutter.svg",
        darkIconPath: "/svg/flutter white.svg",
        title: "Flutter",
        width: 20,
        height: 20,
      },
      {
        iconPath: "/svg/firebase.svg",
        darkIconPath: "/svg/firebase white.svg",
        title: "Firebase",
        width: 20,
        height: 20,
      },
    ],
  },
  {
    title: "Soul Train",
    link: "/soultrain",
    isLinkBlankTarget: false,
    subTitle:
      "Connect with breakers worldwide, join live battles, and showcase your skills",
    coverPath: "/assets/soul train mockup.png",
    toolsUsed: [
      {
        iconPath: "/svg/flutter.svg",
        darkIconPath: "/svg/flutter white.svg",
        title: "Flutter",
        width: 20,
        height: 20,
      },

      {
        iconPath: "/svg/mongodb.svg",
        darkIconPath: "/svg/mongodb white.svg",
        title: "Mongo DB",
        width: 22,
        height: 22,
      },
    ],
  },

  {
    title: "Big Agency Travel",
    link: "https://bigagencytravel.com",
    isLinkBlankTarget: true,
    subTitle: " Plan unforgettable trips to Mauritius island",
    coverPath: "/assets/big agency travel mockup.png",
    toolsUsed: [
      {
        iconPath: "/svg/wordpress.svg",
        darkIconPath: "/svg/wordpress white.svg",
        title: "WordPress",
        width: 25,
        height: 25,
      },
    ],
  },
];

export const otherProjects: ProjectType[] = [
  {
    title: "This portfolio",
    link: "/",
    isLinkBlankTarget: false,
    subTitle: "This entire portfolio is made with NextJS & Tailwind",
    coverPath: "",
    toolsUsed: [
      {
        iconPath: "/svg/nextjs.svg",
        title: "Next.js",
        width: 24,
        height: 24,
      },
      {
        iconPath: "/svg/tailwind-css.svg",
        title: "Tailwind CSS",
        width: 24,
        height: 24,
      },
    ],
  },
  {
    title: "Lakissa.io",
    link: "/",
    isLinkBlankTarget: false,
    subTitle: "(Coming soon) A SEO and SMO toolkit for businesses",
    coverPath: "",
    toolsUsed: [
      {
        iconPath: "/svg/nextjs.svg",
        title: "Next.js",
        width: 24,
        height: 24,
      },
      {
        iconPath: "/svg/tailwind-css.svg",
        title: "Tailwind CSS",
        width: 24,
        height: 24,
      },
      {
        iconPath: "/svg/flask colored.svg",
        title: "Flask",
        width: 26,
        height: 26,
      },
      {
        iconPath: "/svg/prisma colored.svg",
        title: "Prisma",
        width: 17,
        height: 17,
      },
      {
        iconPath: "/svg/mongodb.svg",
        title: "Mongo DB",
        width: 15,
        height: 15,
      },
    ],
  },
  {
    title: "Watch Wot (App Template)",
    link: "/",
    isLinkBlankTarget: true,
    subTitle: "This template serve as a base for Luxury Watches Shop",
    coverPath: "",
    toolsUsed: [
      {
        iconPath: "/svg/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
      },
    ],
  },
  {
    title: "Pastry (App Template)",
    link: "/",
    isLinkBlankTarget: true,
    subTitle: "This template serve as a base for Service Delivery Apps",
    coverPath: "",
    toolsUsed: [
      {
        iconPath: "/svg/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
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
        iconPath: "/svg/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
      },

      {
        iconPath: "/svg/mongodb.svg",
        title: "Mongo DB",
        width: 16,
        height: 16,
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
        iconPath: "/svg/wordpress.svg",
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
        iconPath: "/svg/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
      },
      {
        iconPath: "/svg/firebase.svg",
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
        iconPath: "/svg/flutter.svg",
        title: "Flutter",
        width: 15,
        height: 15,
      },
      {
        iconPath: "/svg/nextjs.svg",
        title: "Next.js",
        width: 24,
        height: 24,
      },
      {
        iconPath: "/svg/mongodb.svg",
        title: "Mongo DB",
        width: 15,
        height: 15,
      },
      {
        iconPath: "",
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

export const aboutMeContent: ContentType[] = [
  {
    type: "",
    content: "",
  },
  {
    type: "p",
    content: "Hi👋 My name is",
  },
  {
    type: "h2",
    content: "Royal GAETAN",
  },
  {
    type: "h3",
    color: "#F31260",
    content: `and I'm a Mobile and Full-Stack Web Developer with over 4 years of experience`,
  },
  {
    type: "hr",
    content: "",
  },
  {
    type: "h3",
    content: "But first of all I would like to tell you my little story :)",
  },
  {
    type: "p",
    content:
      "I started my programming journey at 14, excited by the joy of creating fun projects.",
  },
  {
    type: "p",
    content:
      "But 4 years ago, my journey took a transformative turn. I spent almost three months with business owners in a particular niche and witnessed how web and mobile apps were revolutionizing their operations.",
  },
  {
    type: "p",
    content:
      "These tools boosted their income, reduced daily stress, and even allowed some of them to take a vacation for the first time in their lives (incredible, right?!).",
  },
  {
    type: "p",
    content:
      "This experience changed my entire perspective. I realized that coding wasn't just about building; it was about solving real-world problems and creating possibilities.",
  },

  {
    type: "p",
    content:
      "Since then, I've been on a mission to create awesome apps that add real value to people's lives.",
  },
];

export const skillsList: SkillType[] = [
  {
    title: "Flutter",
    iconPath: "/svg/flutter.svg",
    darkIconPath: "/svg/flutter white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Dart",
    iconPath: "/svg/dart.svg",
    darkIconPath: "/svg/dart white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "React.js",
    iconPath: "/svg/reactjs.svg",
    darkIconPath: "/svg/reactjs white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Next.js",
    iconPath: "/svg/nextjs.svg",
    darkIconPath: "/svg/nextjs white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Typescript",
    iconPath: "/svg/typescript.svg",
    darkIconPath: "/svg/typescript white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Javascript",
    iconPath: "/svg/javascript.svg",
    darkIconPath: "/svg/javascript white.svg",
    width: 50,
    height: 50,
  },

  {
    title: "Prisma",
    iconPath: "/svg/prisma.svg",
    darkIconPath: "/svg/prisma white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "MongoDB",
    iconPath: "/svg/mongodb.svg",
    darkIconPath: "/svg/mongodb white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Python",
    iconPath: "/svg/python.svg",
    darkIconPath: "/svg/python white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Flask",
    iconPath: "/svg/flask.svg",
    darkIconPath: "/svg/flask white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Tailwind",
    iconPath: "/svg/tailwind-css.svg",
    darkIconPath: "/svg/tailwind-css white.svg",
    width: 50,
    height: 50,
  },

  {
    title: "Framer Motion",
    iconPath: "/svg/framer-motion.svg",
    darkIconPath: "/svg/framer-motion white.svg",
    width: 40,
    height: 40,
  },
  {
    title: "Wordpress",
    iconPath: "/svg/wordpress.svg",
    darkIconPath: "/svg/wordpress white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "HTML",
    iconPath: "/svg/html.svg",
    darkIconPath: "/svg/html white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "CSS",
    iconPath: "/svg/css.svg",
    darkIconPath: "/svg/css white.svg",
    width: 50,
    height: 50,
  },
  {
    title: "Git",
    iconPath: "/svg/git.svg",
    darkIconPath: "/svg/git white.svg",
    width: 50,
    height: 50,
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
            "Wesh is a social media app that meanly focus on events. The main purpose of Wesh is you to NOT miss any important events such as birthdays 🎉 meetings 💼 parties 🎈 etc.",
        },
        {
          type: "p",
          content:
            "The app doesn't stop there, it keeps you connected with your loved ones, friends and communities to better celebrate events.",
        },

        {
          type: "h3",
          content: "How to try? is it free of use?",
        },
        {
          type: "p",
          content:
            "Sure, Wesh is free of use, including all features. But unfortunately, as it is still considered in his early stage, only is the Android App Version is available. The iOS version will come soon as well :)",
        },
        {
          type: "p",
          content:
            "You can get it via the link below. Or you can simply go through the tabs in this page to walktrough the app without any download :)",
        },
        {
          type: "buttons-group",
          content: "",
          group: [
            {
              type: "button-link",
              isLinkTargetBlank: true,
              leadingIcon: <DiAndroid size={"1rem"} color="white" />,
              link: "https://drive.google.com/file/d/1JTv8lrK95cwSjifz1WyzYdECRKgccdJq/view?usp=sharing",
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
            "Wesh is mainly built with Flutter for the mobile part (android/iOS) and Firebase for the backend and database. In term of time, it took 3 months (full-time work) to get the 1st version 0.1",
        },
        {
          type: "h3",
          content: "What problems is it trying to solve?",
        },
        {
          type: "p",
          content:
            "Attention span and all life issues, lead to forget even the most important things: spend some quality time with our relatives or simply attend to an event that can change one's entire life: the problem was obvious.",
        },
        {
          type: "p",
          content:
            "Wesh fill this gap by remebering you events that matters, while keeping you connected with your relatives in a social-like space.",
        },
        {
          type: "h3",
          content: "What challenges did you encounter?",
        },
        {
          type: "p",
          content:
            "Building a complete social media from scratch wasn't a simple task. There are many things to take into account such time, ressources, audience target, etc.",
        },
        {
          type: "p",
          content:
            "But after the 1st version released, I could say the important challenges were thinking about the whole app architecture from the beginning, figure out a unique and minimalistic design and under-estimate some features that finally took more than time than required :(",
        },
        {
          type: "h3",
          content: "What did you learn along your journey?",
        },
        {
          type: "p",
          content:
            "Yup! Good things take times. Building and partaking in such adventure is something that worth doing: for sure.",
        },
        {
          type: "p",
          content:
            "The prism of what I've learned goes from design, user experience, code & project architecture, clean code, deep understanding of algorithms, how android/iOS really works as well as Sales & Marketing (how to put your app in front of his audience)",
        },
      ],
    },
    {
      tabName: "Onboarding",
      previewType: "video",
      previewPath: "/assets/mockup2.png",
      contentText: [
        {
          type: "h3",
          content: "Welcome screen",
        },
        {
          type: "p",
          content: "This is the 1st page you land on after you sign up",
        },
      ],
    },
    {
      tabName: "Events",
      previewType: "video",
      previewPath: "/assets/mockup2.png",
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
      previewPath: "/assets/mockup2.png",
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
      previewPath: "/assets/mockup2.png",
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
      previewPath: "/assets/mockup2.png",
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
      previewPath: "/assets/mockup2.png",
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
      tabName: "Find what's happening or coming next",
      previewType: "video",
      previewPath: "/assets/mockup2.png",
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
      tabName: "Forward any content",
      previewType: "video",
      previewPath: "/assets/mockup2.png",
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
      previewPath: "/assets/mockup2.png",
      contentText: [
        {
          type: "h3",
          content: "Happy Birthday",
        },
        {
          type: "p",
          content:
            "Wesh take events seriously and can't miss your day without a special wish :)",
        },
      ],
    },
    {
      tabName: "Help Center",
      previewType: "video",
      previewPath: "/assets/mockup2.png",
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

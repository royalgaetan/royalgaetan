import React from "react";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Please enter your real name",
      required_error: "Name is required!",
    })
    .min(3)
    .max(50),
  email: z
    .string({
      invalid_type_error: "Please enter a correct email!",
      required_error: "Email is required!",
    })
    .email(),
  message: z
    .string({
      invalid_type_error: "Please enter a correct message",
      required_error: "A message is required",
    })
    .min(2)
    .max(2000),
});

export type ContentType = {
  type: string;
  color?: string;
  fontSize?: string;
  centered?: boolean;
  padding?: string;
  margin?: string;
  link?: string;
  leadingIcon?: React.ReactNode;
  isLinkTargetBlank?: boolean;
  disabled?: boolean;
  group?: ContentType[];
  content: string;
};

export type NavbarElementType = {
  title: string;
  hash: string;
};

export type SkillType = {
  title: string;
  category?: "frontend" | "backend" | "mobile" | "database" | "tools";
  iconPath: string;
  darkIconPath?: string;
  width: number;
  height: number;
};

export type ProjectType = {
  title: string;
  link: string;
  isLinkBlankTarget: boolean;
  subTitle: string;
  coverPath: string;
  toolsUsed: SkillType[];
  previews: string[];
  previewsType: "mobile" | "laptop";
  accentColor: string;
  secondaryColor: string;
};

export type experienceType = {
  title: string;
  year: string;
  content: React.ReactNode;
  logoPath: string;
  logoWidth: number;
  logoHeight: number;
  iconStyle: React.CSSProperties;
  companyName: string;
  link: string;
  toolsUsed: SkillType[];
};

export type FullProject = {
  projectName: string;
  features: ProjectFeature[];
};

export type ProjectFeature = {
  tabName: string;
  previewType: "image" | "video" | "text" | "none";
  previewPath: string;
  contentText: ContentType[];
};

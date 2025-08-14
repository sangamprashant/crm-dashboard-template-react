import { ReactNode } from "react";

export interface SideLinksProps {
  title: string;
  link?: string;
  icon?: ReactNode;
  className?: string;
  onPress?: () => void;
}

export type LinkWithUrl = {
  title: string;
  icon: ReactNode;
  link: string;
  subLinks?: never;
};

export type LinkWithSubLinks = {
  title: string;
  icon: ReactNode;
  link?: never;
  subLinks: {
    title: string;
    link: string;
    icon: ReactNode;
  }[];
};

export type LinkItem = LinkWithUrl | LinkWithSubLinks;

export interface SideBarProps {
  children: ReactNode;
}

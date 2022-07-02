export type ProjectStore = {
  id?: string;
  techs: string[];
  stack: string[];
  language: string;
  framework: string[];
  libraries: string[];
  title: string;
  description: string;
  banner: string;
  url: string;
  repo: string;
  createdAt?: Date;
};

export type Project = {
  techs: string[];
  stack: string[];
  language: string;
  framework: string[];
  libraries: string[];
  title: string;
  description: string;
  banner: string;
  url: string;
  repo: string;
};

export type ProjectStore = {
  id?: string;
  techs: string[];
  title: string;
  description: string;
  banner: string;
  url: string;
  repo: string;
  createdAt?: string;
};

export type Project = {
  techs: string[];
  title: string;
  description: string;
  banner: string;
  url: string;
  repo: string;
};

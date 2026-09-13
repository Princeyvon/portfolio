export type Project = {
  eyebrow: string;
  title: string;
  description: string;
  organization: string;
  body: string;
};

export type AIWork = {
  title: string;
  type: string;
  eyebrow?: string;
  description: string;
  href?: string;
  status: string;
  access: string;
  screenshots: string[];
  tools?: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ExperienceSnapshotItem = {
  year: string;
  role: string;
  organization: string;
  location: string;
  details: string;
};

export type ProcessItem = {
  number: string;
  title: string;
  description: string;
};

export type RoleTimelineItem = {
  organization: string;
  period: string;
  location: string;
  title: string;
  description: string;
  tags: string[];
};

export type SkillCategory = {
  title: string;
  skills: string;
};

export type FieldNote = {
  number: string;
  title: string;
  description: string;
  subject: string;
  actionText: string;
};

export type EducationItem = {
  institution: string;
  period: string;
  location: string;
  degree: string;
  gpa: string;
};

export type SelectedGallery = {
  title: string;
  type?: string;
  description?: string;
  href?: string;
  screenshots: string[];
  tools?: string;
};

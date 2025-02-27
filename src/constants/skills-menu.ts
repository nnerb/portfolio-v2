interface SkillsMenuProps {
  name: string;
  status: boolean;
}

export const skillsMenu: SkillsMenuProps[] = [
  { name: 'ALL', status: true },
  { name: 'FRONTEND', status: false },
  { name: 'BACKEND',  status: false },
  { name: 'OTHER', status: false },
]
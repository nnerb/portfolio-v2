export interface ProjectDataProps {
  name: string;
  description: string;
  techStack: string[];
  url: {
    repo: string;
    live: string;
  },
  image: string;
  year: string;
}

export const projectData: ProjectDataProps[] = [
  { 
    name: 'Real-Time Chat App', 
    description: 'Yapster is a real-time chat application built with MERN, TypeScript, and Socket.IO, featuring: AI-generated reply suggestions.', 
    techStack: [
      'React.js', 'TypeScript', 'Tailwind & Daisy UI', 'Zustand',
      'Node.js + Express.js', 'MongoDB + Mongoose', 'Socket.IO'
   ],
    url: { repo: 'https://github.com/nnerb/chat-app', live: 'https://chat-app-vue8.onrender.com/' },
    image: 'images/projects/yapster.png',
    year: '2025'
  },
  { 
    name: 'Abenson Landing Page', 
    description: "Abenson's website landing page built with React, Vite, and Tailwind. Features interactive sliders, and form validation using Zod and React Hook Form.", 
    techStack: [
      'React.js', 'TypeScript', 'Tailwind', 'Zod',
      'React Hook Form'
   ],
    url: { repo: 'https://github.com/nnerb/abenson_landpage', live: 'https://abenson-assessment.vercel.app/' },
    image: 'images/projects/abenson.png',
    year: '2024'
  },
  { 
    name: 'Airbnb Clone', 
    description: 'A full-stack Airbnb clone built using modern web technologies, including Next.js, MongoDB, Prisma, Tailwind, React.js, and NextAuth for authentication.', 
    techStack: [
      'Next.js', 'TypeScript', 'Tailwind', 'MongoDB',
      'Next Auth', 'Prisma'
   ],
    url: { repo: 'https://github.com/nnerb/airbnb_fullstack', live: 'https://booking-app-woad.vercel.app/' },
    image: 'images/projects/airbnb.png',
    year: '2023'
  },
  { 
    name: 'Dashboard UI', 
    description: 'A sleek and responsive admin dashboard built with Next.js, Tailwind, and Chart.js. Features include dynamic data visualization, customer and order management sections, and a modern UI designed.', 
    techStack: [
      'Next.js', 'TypeScript', 'Tailwind', 'Chart.js'
   ],
    url: { repo: 'https://github.com/nnerb/dashboard-nextjs-tailwind', live: 'https://dashboard-nextjs-tailwind.vercel.app/' },
    image: 'images/projects/dashboard.png',
    year: '2023'
  },
  { 
    name: 'An Online Capstone Project Management with Decision Support System (Thesis)', 
    description: '', 
    techStack: [
      'HTML & CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'MariaDB', 'XAMPP'
   ],
    url: { repo: '', live: '' },
    image: '',
    year: '2022'
  },
  { 
    name: 'Todo App', 
    description: '', 
    techStack: [
      'React.js', 'Tailwind'
   ],
    url: { repo: 'https://github.com/nnerb/todo-app', live: 'https://my-todo-app-brenn.vercel.app/' },
    image: '',
    year: '2022'
  },
  { 
    name: 'Synonym Finder', 
    description: '', 
    techStack: [
      'React.js', 'Tailwind', 'API'
   ],
    url: { repo: 'https://github.com/nnerb/todo-app', live: '' },
    image: '',
    year: '2022'
  },
  { 
    name: 'Color Guessing Game', 
    description: '', 
    techStack: ['React.js', 'TypeScript', 'Tailwind'],
    url: { 
      repo: 'https://github.com/nnerb/guessing-game', 
      live: 'https://guessing-game-iota.vercel.app/' 
    },
    image: '',
    year: '2022'
  },
  { 
    name: 'Authentication App with Email Verification', 
    description: '', 
    techStack: [
      'React.js', 'TypeScript', 'Tailwind', 'Zustand',
      'Node.js + Express.js', 'MongoDB + Mongoose',
   ],
    url: { repo: 'https://github.com/nnerb/mern-auth', live: 'https://mern-auth-cv2s.onrender.com/' },
    image: '',
    year: '2025'
  },
  { 
    name: 'Airbnb Clone Front-End', 
    description: '', 
    techStack: ['React.js', 'HTML & CSS'],
    url: { repo: 'https://github.com/nnerb/airbnb-clone', live: '' },
    image: '',
    year: '2022'
  },
  { 
    name: 'Meme Generator', 
    description: '', 
    techStack: ['React.js', 'API', 'HTML & CSS'],
    url: { repo: 'https://github.com/nnerb/meme-generator', live: '' },
    image: '',
    year: '2022'
  },
  { 
    name: 'Messenger Clone', 
    description: '', 
    techStack: [
      'Next.js', 'TypeScript', 'Tailwind', 
      'ShadCN', 'Next Auth', 'Prisma'
   ],
    url: { repo: 'https://github.com/nnerb/messenger-clone', live: 'messenger-clone-ten-delta.vercel.app' },
    image: '',
    year: '2023'
  },
  { 
    name: 'Ecommerce Admin', 
    description: '', 
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'MongoDB', 'Clerk', 'Zustand', 'Stripe'],
    url: { 
      repo: 'https://github.com/nnerb/ecommerce-admin', 
      live: 'https://ecommerce-admin-eight-alpha.vercel.app/' 
    },
    image: '',
    year: '2023'
  },
  { 
    name: 'Ecommerce Store', 
    description: '', 
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    url: { 
      repo: 'https://github.com/nnerb/ecommerce-store', 
      live: 'https://ecommerce-store-khaki-three.vercel.app/' 
    },
    image: '',
    year: '2023'
  },
  { 
    name: 'Van Life', 
    description: '', 
    techStack: ['React.js', 'TypeScript', 'Tailwind', 'MirageJS', 'React Query'],
    url: { 
      repo: 'https://github.com/nnerb/van-life', 
      live: 'https://van-life-wheat.vercel.app/' 
    },
    image: '',
    year: '2024'
  },
]

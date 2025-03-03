import legal_experts from "./legal_experts.jpg";
import about_us from "./about_us.png";
import call_to_action from "./call_to_action.png";
import lawyer_1 from "./lawyer_1.png";
import lawyer_2 from "./lawyer_2.png";
import lawyer_3 from "./lawyer_3.png";
import lawyer_4 from "./lawyer_4.png";
import mining from "./minings.png";
import energy from "./energies.png";
import disputes from "./dispute.png";
import aviation from "./aviations.png";
import Trainings from "./Trainings.png";
import construction from "./constructions.png";
import Logo from "./LEXISCHED.png";
import profile from "./profile_pic.jpg"
import group_profile from "./group_profile.png"
import header from "./Header_img.png"
import banner from "./banners.png"
import lawyer_5 from "./lawyer_5.png"
import lawyer_7 from "./lawyer_7.png"

export const assets = {
  legal_experts,
  about_us,
  call_to_action,
  lawyer_1,
  lawyer_2,
  lawyer_3,
  lawyer_4,
  group_profile,
  Logo,
  profile,
  banner,
  header
};

export const SpecialityData = [
  {
    speciality : 'Aviation',
    image : aviation
  },
  {
    speciality : 'Mining',
    image : mining
  },
  {
    speciality : 'Construction',
    image : construction
  },
  {
    speciality : 'Disputes',
    image : disputes
  },
  {
    speciality : 'Energy',
    image : energy
  },
  {
    speciality : 'Trainings',
    image : Trainings
  },
]

export const lawyers = [
  {
    _id: 'law1',
    name: 'Mr. Richard James',
    image: lawyer_5,
    speciality: 'Aviation Law',
    degree: 'LLB',
    experience: '15 Years',
    about: 'Mr. James specializes in aviation law, handling airline regulations, liability, and airspace agreements.',
    fees: 100,
    address: {
      line1: '15th Avenue, Westminster',
      line2: 'London, UK'
    },
    contact: {
      email: 'richard.james@example.com',
      phone: '+44 1234 567890'
    }
  },
  {
    _id: 'law2',
    name: 'Ms. Emily Larson',
    image: lawyer_2,
    speciality: 'Energy Law',
    degree: 'LLB',
    experience: '12 Years',
    about: 'Ms. Larson advises on energy regulations, renewable energy projects, and oil & gas sector legalities.',
    fees: 120,
    address: {
      line1: '22nd Street, Kensington',
      line2: 'London, UK'
    },
    contact: {
      email: 'emily.larson@example.com',
      phone: '+44 2234 678901'
    }
  },
  {
    _id: 'law3',
    name: 'Ms. Sarah Patel',
    image: lawyer_3,
    speciality: 'Construction Law',
    degree: 'LLB',
    experience: '10 Years',
    about: 'Ms. Patel handles disputes, contract negotiations, and legal aspects of large-scale construction projects.',
    fees: 110,
    address: {
      line1: '30th Street, Soho',
      line2: 'London, UK'
    },
    contact: {
      email: 'sarah.patel@example.com',
      phone: '+44 3234 789012'
    }
  },
  {
    _id: 'law4',
    name: 'Mr. Christopher Lee',
    image: lawyer_7,
    speciality: 'Dispute Resolution',
    degree: 'LLB',
    experience: '14 Years',
    about: 'Mr. Lee specializes in arbitration, mediation, and litigation across various industries.',
    fees: 130,
    address: {
      line1: '45th Street, Mayfair',
      line2: 'London, UK'
    },
    contact: {
      email: 'christopher.lee@example.com',
      phone: '+44 4234 890123'
    }
  },
  {
    _id: 'law5',
    name: 'Mr. Daniel Thompson',
    image: lawyer_5,
    speciality: 'Mining Law',
    degree: 'JD',
    experience: '18 Years',
    about: 'Mr. Thompson is an expert in mining regulations, resource extraction legalities, and environmental compliance.',
    fees: 150,
    address: {
      line1: '8th Road, Belgravia',
      line2: 'London, UK'
    },
    contact: {
      email: 'daniel.thompson@example.com',
      phone: '+44 5234 901234'
    }
  },
  {
    _id: 'law6',
    name: 'Ms. Jessica Wright',
    image: lawyer_2,
    speciality: 'Training Law',
    degree: 'LLM',
    experience: '9 Years',
    about: 'Ms. Wright specializes in corporate training regulations, educational compliance, and certification legalities.',
    fees: 95,
    address: {
      line1: '12 Queen\'s Road, Chelsea',
      line2: 'London, UK'
    },
    contact: {
      email: 'jessica.wright@example.com',
      phone: '+44 6234 012345'
    }
  },
  {
    _id: 'law7',
    name: 'Mr. Victor Chen',
    image: lawyer_3,
    speciality: 'Aviation Law',
    degree: 'LLB',
    experience: '11 Years',
    about: 'Mr. Chen focuses on international aviation agreements, aircraft financing, and regulatory compliance.',
    fees: 110,
    address: {
      line1: '33 Park Lane, Camden',
      line2: 'London, UK'
    },
    contact: {
      email: 'victor.chen@example.com',
      phone: '+44 7234 123456'
    }
  },
  {
    _id: 'law8',
    name: 'Ms. Olivia Baker',
    image: lawyer_7,
    speciality: 'Construction Law',
    degree: 'LLM',
    experience: '13 Years',
    about: 'Ms. Baker handles construction litigation, contract reviews, and regulatory compliance for major developers.',
    fees: 125,
    address: {
      line1: '19 Regent Street, Paddington',
      line2: 'London, UK'
    },
    contact: {
      email: 'olivia.baker@example.com',
      phone: '+44 8234 234567'
    }
  },
  {
    _id: 'law9',
    name: 'Mr. Harrison Mills',
    image: lawyer_5,
    speciality: 'Mining Law',
    degree: 'JD',
    experience: '16 Years',
    about: 'Mr. Mills advises on mineral rights, land acquisition, and compliance with international mining standards.',
    fees: 140,
    address: {
      line1: '7 Victoria Avenue, Notting Hill',
      line2: 'London, UK'
    },
    contact: {
      email: 'harrison.mills@example.com',
      phone: '+44 9234 345678'
    }
  },
  {
    _id: 'law10',
    name: 'Ms. Amanda Cole',
    image: lawyer_2,
    speciality: 'Energy Law',
    degree: 'LLB',
    experience: '14 Years',
    about: 'Ms. Cole specializes in sustainable energy projects, utility regulations, and carbon trading frameworks.',
    fees: 130,
    address: {
      line1: '21 Oxford Street, Shoreditch',
      line2: 'London, UK'
    },
    contact: {
      email: 'amanda.cole@example.com',
      phone: '+44 0235 456789'
    }
  },
  {
    _id: 'law11',
    name: 'Mr. Benjamin Foster',
    image: lawyer_3,
    speciality: 'Training Law',
    degree: 'LLM',
    experience: '8 Years',
    about: 'Mr. Foster navigates the legal aspects of professional training programs, certification standards, and educational compliance.',
    fees: 90,
    address: {
      line1: '55 Abbey Road, Islington',
      line2: 'London, UK'
    },
    contact: {
      email: 'benjamin.foster@example.com',
      phone: '+44 1235 567890'
    }
  },
  {
    _id: 'law12',
    name: 'Ms. Diana Rodriguez',
    image: lawyer_7,
    speciality: 'Dispute Resolution',
    degree: 'JD',
    experience: '17 Years',
    about: 'Ms. Rodriguez excels in complex international arbitration, cross-border disputes, and commercial conflict resolution.',
    fees: 145,
    address: {
      line1: '14 Bond Street, Canary Wharf',
      line2: 'London, UK'
    },
    contact: {
      email: 'diana.rodriguez@example.com',
      phone: '+44 2235 678901'
    }
  },
  {
    _id: 'law13',
    name: 'Mr. Alexander Grant',
    image: lawyer_5,
    speciality: 'Aviation Law',
    degree: 'LLB',
    experience: '19 Years',
    about: 'Mr. Grant handles aviation accident investigations, pilot licensing issues, and airline operational legalities.',
    fees: 160,
    address: {
      line1: '9 Piccadilly, Knightsbridge',
      line2: 'London, UK'
    },
    contact: {
      email: 'alexander.grant@example.com',
      phone: '+44 3235 789012'
    }
  },
  {
    _id: 'law14',
    name: 'Ms. Priya Sharma',
    image: lawyer_2,
    speciality: 'Mining Law',
    degree: 'LLM',
    experience: '12 Years',
    about: 'Ms. Sharma focuses on sustainable mining practices, indigenous land rights, and mining operation compliance.',
    fees: 120,
    address: {
      line1: '27 Baker Street, Marylebone',
      line2: 'London, UK'
    },
    contact: {
      email: 'priya.sharma@example.com',
      phone: '+44 4235 890123'
    }
  },
  {
    _id: 'law15',
    name: 'Mr. Liam Wilson',
    image: lawyer_3,
    speciality: 'Construction Law',
    degree: 'JD',
    experience: '15 Years',
    about: 'Mr. Wilson specializes in construction safety regulations, project financing, and development permit acquisitions.',
    fees: 135,
    address: {
      line1: '42 Fleet Street, Covent Garden',
      line2: 'London, UK'
    },
    contact: {
      email: 'liam.wilson@example.com',
      phone: '+44 5235 901234'
    }
  }
];



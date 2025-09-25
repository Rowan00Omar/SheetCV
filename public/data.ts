export type Language = 'en' | 'ar';

export const cvData = {
  galleryImages: [
    "https://images.unsplash.com/photo-1599493356233-a3b95a8961da?w=800&q=80",
    "https://images.unsplash.com/photo-1517423568346-3b6a2c38e7f8?w=800&q=80",
    "https://images.unsplash.com/photo-1551845156-f57a079237b6?w=800&q=80",
    "https://images.unsplash.com/photo-1626252346593-370c2f6d5ae5?w=800&q=80",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    "https://images.unsplash.com/photo-1542295287-285654a23696?w=800&q=80",
    "https://images.unsplash.com/photo-1598289431512-b970a552d4c2?w=800&q=80",
    "https://images.unsplash.com/photo-1560272564-c83b66b17415?w=800&q=80",
    "https://images.unsplash.com/photo-1551911244-7163d7a6e1a0?w=800&q=80",
    "https://images.unsplash.com/photo-1487466365202-1af0cfc5b44e?w=800&q=80",
    "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80"
  ],
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      career: 'Career',
      skills: 'Skills',
      credentials: 'Credentials',
      documents: 'Documents',
      videos: 'Videos',
      contact: 'Contact',
    },
    motto: "Today We Are Creating Our Tomorrow!",
    hero: {
      name: 'Ahmad Jaber Ashkanani',
      title: 'Educational Teacher - Sports Director - International Lecturer - FIFA Sports Agent',
      location: 'Kuwait',
      phone: '0096599891858',
      email: 'a7made16@gmail.com',
      website: 'https://heydrop.me/9STwYnsW3wPbAE',
      socials: {
          twitter: 'https://twitter.com',
          instagram: 'https://instagram.com',
          facebook: 'https://facebook.com',
          whatsapp: 'https://wa.me/96599891858'
      }
    },
    about: {
      title: 'About Me',
      points: [
        'A professor at the Ministry of Education in the secondary stage - Fine Arts Education.',
        'Owner of Spark Sport Academy.',
        'Director of the national teams at the General Authority for Applied Education and Training for futsal and grass football.',
        'General Manager of Ashkenani Sport Marketing and Management of Accredited Athletes.',
        'Players agent from FIFA in 2023.',
        'Founder of the Ashkenani Family Sports Championships.',
      ],
    },
    skills: {
      title: 'Skills',
      items: [
        'Leadership Development', 'Team Management', 'Player Development', 'Sports Marketing', 'Contract Negotiation', 'Educational Management', 'Game Strategy Planning', 'Effective Communication'
      ]
    },
    credentials: {
      title: 'Credentials',
      qualifications: {
        title: 'Qualifications',
        points: [
          'Educational instructor with 6+ years of experience.',
          "Bachelor's degree in Art Education, with distinction.",
          'Internationally certified lecturer in educational and sports management.',
          'Diploma in Sports Law and Arbitration of its Disputes.',
        ],
      },
      certificates: {
        title: 'Sports Certificates',
        points: [
          'Accredited by Kuwait Football Association, FIFA, and AFC.',
          'Level A, B, C Sports Managers Certificates (2019-2022).',
          'Level One Sports Injuries Certificate.',
          'International Olympic Games Certificate from the Qatari Academy.',
        ],
      },
      training: {
        title: 'Training Courses',
        points: [
          'Diploma in Sports Injuries from the Qatari Sports Academy.',
          'Course on Olympic Culture in Sports Institutions.',
          'Course on Psychological Motivation in Sports.',
          'Course for Professional Managers in the Kuwait Football Association.',
        ],
      },
    },
    career: {
      title: 'Career',
      coachCareer: {
        title: 'Coach & Administrative Career',
        items: [
           {
            year: '2025',
            role: 'Director of Youth Dept. & Blue Academy',
            team: 'Kuwait Football Association',
            image: 'https://images.unsplash.com/photo-1575361204446-27a4b4ab49f7?w=500&q=60',
          },
          {
            year: '2022-2023',
            role: 'Administrative Manager',
            team: 'Kuwaiti National Beach Soccer Team',
            image: 'https://images.unsplash.com/photo-1544304890-63f2b621528b?w=500&q=60',
          },
          {
            year: '2018-2019',
            role: 'Administrator, U-17 & U-20',
            team: 'Sports Solidarity Club',
            image: 'https://images.unsplash.com/photo-1594464433613-7b3750fe3370?w=500&q=60',
          },
          {
            year: '2015-2016',
            role: 'Administrator, Grass Football',
            team: 'The Arab Sports Club',
            image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&q=60',
          },
        ]
      },
       playerCareer: {
        title: 'Player Career',
        items: [
            {
                year: '2006-2013',
                role: 'Handball Goalkeeper',
                team: 'Kazma Sporting Club',
                description: 'Won 3rd place in the Union Cup Championship (bronze medal) with U14, U16, and U17 teams.',
                image: 'https://images.unsplash.com/photo-1553779429-02c3501d4133?w=500&q=60',
            }
        ]
      }
    },
    documents: {
      title: 'Documents',
      file: {
        title: 'Curriculum Vitae (CV)',
        url: '/Ahmad_Ashkanani_CV.pdf',
        view: 'View',
        download: 'Download',
      }
    },
    videos: {
      title: 'Video Gallery',
      items: [
        {
          id: '1',
          title: 'Training Highlights',
          thumbnailUrl: 'https://img.youtube.com/vi/6_pru8U2R_I/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/6_pru8U2R_I'
        },
        {
          id: '2',
          title: 'Game Day Analysis',
          thumbnailUrl: 'https://img.youtube.com/vi/N6-G_3q_K_A/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/N6-G_3q_K_A'
        },
        {
          id: '3',
          title: 'Player Development Drills',
          thumbnailUrl: 'https://img.youtube.com/vi/l6a_l_3432E/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/l6a_l_3432E'
        },
        {
          id: '4',
          title: 'Team Strategy Session',
          thumbnailUrl: 'https://img.youtube.com/vi/s_k5qV2G2ZM/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/s_k5qV2G2ZM'
        },
        {
          id: '5',
          title: 'Individual Coaching',
          thumbnailUrl: 'https://img.youtube.com/vi/z8oGq_y_vLo/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/z8oGq_y_vLo'
        },
        {
          id: '6',
          title: 'Motivational Moments',
          thumbnailUrl: 'https://img.youtube.com/vi/3DbKnk9t-aU/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/3DbKnk9t-aU'
        },
        {
          id: '7',
          title: 'Advanced Soccer Drills',
          thumbnailUrl: 'https://img.youtube.com/vi/rokGy0huYEA/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/rokGy0huYEA'
        },
        {
          id: '8',
          title: 'Youth Team Practice',
          thumbnailUrl: 'https://img.youtube.com/vi/_QonD8V_4-Q/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/_QonD8V_4-Q'
        },
        {
          id: '9',
          title: 'Tactical Breakdown',
          thumbnailUrl: 'https://img.youtube.com/vi/sfgsI2pQ-bY/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/sfgsI2pQ-bY'
        },
        {
          id: '10',
          title: 'Press Conference',
          thumbnailUrl: 'https://img.youtube.com/vi/u-2-m4A8-1M/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/u-2-m4A8-1M'
        }
      ]
    },
    contact: {
      title: 'Contact',
      form: {
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          submit: 'Submit'
      }
    },
  },
  ar: {
    navigation: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      career: 'المسيرة',
      skills: 'المهارات',
      credentials: 'المؤهلات',
      documents: 'المستندات',
      videos: 'الفيديوهات',
      contact: 'تواصل',
    },
    motto: "اليوم نصنع غدنا!",
    hero: {
      name: 'أ/ أحمد جابر أشكناني',
      title: 'معلم تربوي - مدير رياضي - محاضر دولي - وكيل رياضي FIFA',
      location: 'الكويت',
      phone: '٠٠٩٦٥٩٩٨٩١٨٥٨',
      email: 'a7made16@gmail.com',
      website: 'https://heydrop.me/9STwYnsW3wPbAE',
      socials: {
          twitter: 'https://twitter.com',
          instagram: 'https://instagram.com',
          facebook: 'https://facebook.com',
          whatsapp: 'https://wa.me/96599891858'
      }
    },
    about: {
      title: 'نبذة عني',
      points: [
        'أستاذ في وزارة التربية في مرحله الثانوية - التربية الفنية.',
        'صاحب اكاديمية سبارك سبورت.',
        'مدير منتخبات الهيئة العامة لتعليم التطبيقي والتدريب.',
        'مدير عام شركة مكتب أشكناني سبورت للتسويق الرياضي.',
        'وكيل لاعبين من الاتحاد الدولي الفيفا 2023.',
        'مؤسس بطولات عائلة أشكناني للالعاب الرياضية.',
      ],
    },
    skills: {
        title: 'المهارات',
        items: [
          'تطوير القيادة', 'إدارة الفريق', 'تطوير اللاعبين', 'التسويق الرياضي', 'التفاوض على العقود', 'الإدارة التعليمية', 'تخطيط استراتيجيات اللعب', 'التواصل الفعال'
        ]
    },
    credentials: {
        title: 'المؤهلات والشهادات',
        qualifications: {
            title: 'المؤهلات العلمية',
            points: [
                'معلم تربوي بخبرة تزيد عن 6 سنوات.',
                'بكالوريوس تربية فنية بتقدير امتياز.',
                'محاضر دولي معتمد في الإدارة التربوية والرياضية.',
                'دبلوم القانون الرياضي والتحكيم في منازعاته.',
            ],
        },
        certificates: {
            title: 'الشهادات الرياضية',
            points: [
                'معتمدة من الاتحاد الكويتي لكرة القدم، الفيفا، والاتحاد الآسيوي.',
                'شهادات مدراء رياضيين مستوى A, B, C (2019-2022).',
                'شهادة المستوى الأول في الإصابات الرياضية.',
                'شهادة الألعاب الأولمبية الدولية من أكاديمية قطر.',
            ],
        },
        training: {
            title: 'الدورات التدريبية',
            points: [
                'دبلوم إصابات الملاعب من الأكاديمية الرياضية القطرية.',
                'دورة في الثقافة الأولمبية في المؤسسات الرياضية.',
                'دورة في التحفيز النفسي الرياضي.',
                'دورة للمدراء المحترفين في الاتحاد الكويتي لكرة القدم.',
            ],
        },
    },
    career: {
      title: 'المسيرة المهنية',
       coachCareer: {
        title: 'المسيرة التدريبية والإدارية',
        items: [
           {
            year: '2025',
            role: 'مدير إدارة البراعم و اكاديمية الازرق',
            team: 'الاتحاد الكويتي لكره القدم',
            image: 'https://images.unsplash.com/photo-1575361204446-27a4b4ab49f7?w=500&q=60',
          },
          {
            year: '2022-2023',
            role: 'مدير إداري',
            team: 'المنتخب الكويتي لكرة القدم الشاطئية',
            image: 'https://images.unsplash.com/photo-1544304890-63f2b621528b?w=500&q=60',
          },
          {
            year: '2018-2019',
            role: 'إداري، تحت 17 و 20 سنة',
            team: 'نادي التضامن الرياضي',
            image: 'https://images.unsplash.com/photo-1594464433613-7b3750fe3370?w=500&q=60',
          },
          {
            year: '2015-2016',
            role: 'إداري كرة القدم العشبية',
            team: 'النادي العربي الرياضي',
            image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&q=60',
          },
        ]
      },
       playerCareer: {
        title: 'مسيرة اللاعب',
        items: [
            {
                year: '2006-2013',
                role: 'حارس كرة يد',
                team: 'نادي كاظمة الرياضي',
                description: 'فاز بالمركز الثالث في بطولة كأس الاتحاد (الميدالية البرونزية) مع فرق تحت 14 و 16 و 17 سنة.',
                image: 'https://images.unsplash.com/photo-1553779429-02c3501d4133?w=500&q=60',
            }
        ]
      }
    },
     documents: {
      title: 'المستندات',
      file: {
        title: 'السيرة الذاتية (CV)',
        url: '/Ahmad_Ashkanani_CV.pdf',
        view: 'عرض',
        download: 'تحميل',
      }
    },
    videos: {
      title: 'معرض الفيديو',
      items: [
        {
          id: '1',
          title: 'أبرز لقطات التدريب',
          thumbnailUrl: 'https://img.youtube.com/vi/6_pru8U2R_I/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/6_pru8U2R_I'
        },
        {
          id: '2',
          title: 'تحليل يوم المباراة',
          thumbnailUrl: 'https://img.youtube.com/vi/N6-G_3q_K_A/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/N6-G_3q_K_A'
        },
        {
          id: '3',
          title: 'تمارين تطوير اللاعبين',
          thumbnailUrl: 'https://img.youtube.com/vi/l6a_l_3432E/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/l6a_l_3432E'
        },
        {
          id: '4',
          title: 'جلسة استراتيجية الفريق',
          thumbnailUrl: 'https://img.youtube.com/vi/s_k5qV2G2ZM/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/s_k5qV2G2ZM'
        },
        {
          id: '5',
          title: 'تدريب فردي',
          thumbnailUrl: 'https://img.youtube.com/vi/z8oGq_y_vLo/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/z8oGq_y_vLo'
        },
        {
          id: '6',
          title: 'لحظات ملهمة',
          thumbnailUrl: 'https://img.youtube.com/vi/3DbKnk9t-aU/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/3DbKnk9t-aU'
        },
        {
          id: '7',
          title: 'تمارين كرة قدم متقدمة',
          thumbnailUrl: 'https://img.youtube.com/vi/rokGy0huYEA/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/rokGy0huYEA'
        },
        {
          id: '8',
          title: 'تمرين فريق الشباب',
          thumbnailUrl: 'https://img.youtube.com/vi/_QonD8V_4-Q/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/_QonD8V_4-Q'
        },
        {
          id: '9',
          title: 'تحليل تكتيكي',
          thumbnailUrl: 'https://img.youtube.com/vi/sfgsI2pQ-bY/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/sfgsI2pQ-bY'
        },
        {
          id: '10',
          title: 'مؤتمر صحفي',
          thumbnailUrl: 'https://img.youtube.com/vi/u-2-m4A8-1M/hqdefault.jpg',
          videoUrl: 'https://www.youtube.com/embed/u-2-m4A8-1M'
        }
      ]
    },
    contact: {
      title: 'للتواصل',
      form: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          subject: 'الموضوع',
          message: 'الرسالة',
          submit: 'إرسال'
      }
    },
  },
};
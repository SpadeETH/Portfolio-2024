const translations = {
  en: {
    home: {
      header: {
        hover: "Click to view more.",
        job: "Product Designer",
        text1: "Transorm ideas.",
        text2: "Into concrete solutions.",
      },
      p1: {
        title: "Welcome to my portfolio",
        paragraph:
          "As a passionate product designer with 2 years of experience, I specialize in creating intuitive digital experiences. Through my journey from self-learning and university to freelancing, I have honed my skills in designing impactful solutions for various projects.",
      },
      pbottom: {
        p1: {
          title: "Thriving in Collaborative Environments",
          paragraph:
            "I thrive in collaborative environments where designers, developers, and stakeholders unite to innovate and solve challenges. With a background spanning design & development, I bridge gaps and ensure seamless communication across teams. I embrace teamwork for its role in continuous learning and personal growth, aiming to deliver transformative solutions by embracing diverse perspectives.",
        },
        p2: {
          title: "Unveiling Beauty and Solving Challenges",
          paragraph:
            "I believe design is a tool that reveals and enhances the inherent beauty in our world. Beyond aesthetics, it crafts intuitive solutions for digital interfaces and physical products, addressing complex challenges with clarity and empathy. Design plays a crucial role in creating a brighter future by innovating thoughtfully and ensuring our solutions resonate deeply with users.",
        },
      },
    },
    buttonspecial: {
      back: "Back",
      download: "Download CV",
      profile: "About me",
    },
    sendshort: {
      title: "SendShort Product Design",
      subtitle: "The tool that enhances content creator workflow",
      description:
        "I had the opportunity to participate with Sendshort in the complete redesign of their Product / Website. The goal was to make vertical video creation easier using artificial intelligence.",
      title2: "Becoming the reference in the French market",
      description2:
        "We conducted research to identify user pain points and improve the overall experience of the application. Thanks to a user-centered approach, we were able to design a more intuitive and pleasant interface to use.",

      team: [
        { name: "Dylan Williams", role: "(PM)" },
        { name: "Logan Victorien", role: "(Branding)" },
        { name: "Thomas Le Borgne", role: "(UX)" },
        { name: "Arthur Bossuyt", role: "(UX/UI)" },
      ],
      tools: [{ name: "Figma" }, { name: "Webflow" }],
      timeline: "Q1 2023 - Q2 2023",
      disciplines: [{ name: "User Research" }, { name: "Visual Design" }],
      sections: {
        infoCrop: {
          title: "Crop videos to vertical format",
          description:
            "Easily crop your videos into a vertical format to optimize them for social media platforms. Our intuitive interface ensures precision and simplicity in every cut.",
        },
        infoSub: {
          title: "Let IA Subtitle your videos",
          description:
            "Let our AI-powered tool automatically generate accurate subtitles for your videos, enhancing accessibility and engagement. Customize styles and positioning effortlessly.",
        },
        shortline: {
          text: "MVP was good for its first utility, but to scale, we had to reimagine it and make it more attractive.",
        },
        primaryObjective: {
          title: "Primary Objective",
          heading:
            "Understand how visual design improvements can enhance user engagement and satisfaction.",
          description:
            "We tried to identify specific pain points in the current app’s design that hinder usability and discover user preferences for visual aesthetics.",
          image: "/images/sendshort/postit.png",
        },
        uxr: {
          title: "Three main discovery pillars for our approach",
          head: "UX Research",
          pillars: [
            {
              icon: "PersonIcon",
              title: "Global User Experience",
              description: [
                "How can we simplify the user journey and reduce friction points?",
                "What are the common pain points users face while using the app?",
                "How can we improve user satisfaction and engagement?",
              ],
              objective:
                "Enhance the overall user experience by making the app intuitive, efficient, and nice to use.",
            },
            {
              icon: "AssignmentIcon",
              title: "Visual Appeal",
              description: [
                "What elements can enhance the visual appeal of the app?",
                "How can we create a consistent and intuitive interface?",
                "What are the best practices for designing our app’s features?",
              ],
              objective:
                "Improve the visual design of the app to make it more appealing and easy to use.",
            },
            {
              icon: "CachedIcon",
              title: "Feature Usability",
              description: [
                "Are all the features easy to understand and easy to use?",
                "What features might be missing in the current product?",
                "What are the common problems or issues users face while using SendShort?",
              ],
              objective:
                "Ensure the app’s features are robust, intuitive, and meet user needs effectively.",
            },
          ],
        },
        researchMethodology: {
          title: "RESEARCH METHODOLOGY",
          heading: "Qualitative over quantitative",
          description:
            "We had a lot of data from analytics and A/B testing that had been collected since the MVP. We chose to complete it with a short user interview to ensure we had enough information to proceed.",
        },
        keyInsights: {
          title: "KEY INSIGHTS",
          heading: "Too many useless steps & poor visual experience",
          description:
            "One of the main problems we faced was a poor user interface that made people struggle with certain steps. Additionally, we noticed that some unnecessary steps could be removed.",
          pillars: [
            {
              title: "Poor User Interface",
              description:
                "Old interface was made by dev, it was correct, but it was missing something to reach the next step and be more premium.",
            },
            {
              title: "Useless Steps",
              description:
                "Some people were struggling with the number of steps to achieve simple tasks, like during video import.",
            },
            {
              title: "Features Unexplained",
              description:
                "During interviews, we asked people to try to find and explain all the features of SendShort. Some struggled to find it all.",
            },
            {
              title: "Unorganized File Management",
              description:
                "We faced another problem with 2 people interviewed who made more shorts than others (+50 Shorts). There is no system for file organization.",
            },
          ],
        },
        keyInsights2: {
          title: "KEY INSIGHTS",
          heading:
            "The main goal of this redesign was to create a place where videomaker can feel confortable.",
          subheading:
            "Every feature should be clear, explained & easy to use for everyone.",
        },
        uxResearch: {
          analyzingDesign: {
            title: "UX RESEARCH",
            heading: "Analyzing Actual Design",
            description:
              "The current design includes unnecessary steps that complicate the user journey, leading to frustration and inefficiency. Additionally, the poor UI and unclear UX contribute to users getting lost, ultimately hindering their ability to complete tasks effectively.",
          },
          analyzeCompetitors: {
            title: "UX RESEARCH",
            heading: "Analyze All Competitors",
            description:
              "We analyzed competitors to learn from their strengths and weaknesses. This helped us refine our design to offer a more user-friendly experience.",
          },
        },
        uxDesign: {
          draftSessions: {
            title: "UX DESIGN",
            heading: "Draft Sessions",
            description:
              "In the draft sessions, we sketched out initial concepts to refine the user journey and address identified issues. This process allowed us to visualize potential solutions before moving into the design phase.",
          },
          solutionDesigning: {
            title: "UX DESIGN",
            heading: "Solution Designing",
            description:
              "In the solution design phase, we created detailed layouts and interfaces to address the user pain points identified earlier. These designs focused on improving navigation, reducing unnecessary steps, and enhancing the overall user experience.",
          },
          beforeAfter: {
            title: "UX DESIGN",
            heading: "Before / After",
            description:
              "The 'Before/After' comparison highlights the significant improvements in the interface. The redesign focused on a more intuitive workspace, reducing clutter, and creating a visually engaging experience that guides users effortlessly through the creation process.",
          },
        },
        nouveauDepart: {
          title: "Conclusion",
          heading: "A New Beginning for SendShort",
          description:
            "Thanks to a complete overhaul of the product and user experience, SendShort has not only improved user satisfaction but also achieved significant business results.",
          image: "/images/sendshort/avis.png", // Example image path
        },
        resultatsCle: {
          title: "Key Results",
          heading: "Key Results of the SendShort Project",
          description:
            "The SendShort project has generated significant improvements in several key areas, increasing conversion, reducing churn rate, and boosting Monthly Recurring Revenue (MRR).",
          stats: [
            {
              title: "Conversion from free to paid plan",
              old: "3.5%",
              new: "9%",
              description:
                "Conversion increased from 3.5% to 9%, proving the effectiveness of the improved interface in encouraging users to switch to a paid version.",
            },
            {
              title: "Churn rate reduction",
              old: "30%",
              new: "21%",
              description:
                "Churn was reduced from 30% to 21%, demonstrating a significant improvement in user retention following the enhanced user experience.",
            },
            {
              title: "Monthly Revenue Growth",
              new: "+30%",
              description:
                "MRR increased by 30% in three months, indicating that the improvements had a direct impact on profitability.",
            },
          ],
        },
        succes: {
          title: "Success",
          heading: "Update July 2024: Financial Success",
          description:
            "Sendshort was launched in June 2023, and a year later... The success of the redesign directly contributed to the sale of SendShort in July 2024, valued at approximately 1M USD, confirming the relevance of our UX/UI approach.",
          image: "/images/sendshort/milestone.png", // Example image path
        },
        leconsPerspectives: {
          title: "LESSONS & PERSPECTIVES",
          heading: "Lessons Learned and Future Perspectives",
          description: "lorem ipsum dolor sit amet",
          insights: [
            {
              title: "Iteration and Feedback",
              description:
                "The importance of iteration in design allowed me to constantly refine the product based on user feedback.",
              icon: "/images/icons/rota.png", // Example icon path
            },
            {
              title: "Interdisciplinary Collaboration",
              description:
                "I learned to navigate effectively between branding, development, and product management teams for a harmonious result.",
              icon: "/images/icons/collab.png", // Example icon path
            },
          ],
        },
        designGoals: {
          title: "DESIGN GOALS",
          heading:
            "This project confirmed my commitment to creating products that are not only aesthetically pleasing but also intuitive and performant.",
          subheading:
            "As a Product Designer, my goal is always to combine aesthetics, function, and simplicity to offer an optimal user experience.",
        },
      },
      next: {
        title: "View Another Project",
        subtitle:
          "These projects are a glimpse of my work. Additional projects are also available.",
      },
    },
    bitloom: {
      title: "Bitloom Crypto Tracking App",
      subtitle: "A landing page collection from 2022",
      description:
        "With two friends, we embarked on creating a mobile portfolio app addressing specific issues. This app is still under development, and although the product isn't finished yet, I find it interesting to share.",
      title2: "An App for Visionaries",
      description2:
        "We designed this app to meet our needs and bring our vision to life. Our priority is to create a tool that simplifies complexities and resonates with future users.",
      team: [
        { name: "Theo Villano", role: "(PM)" },
        { name: "Guillaume Chalons", role: "(Branding)" },
        { name: "Arthur Bossuyt", role: "(UX/UI)" },
      ],
      tools: [{ name: "Figma" }, { name: "FigJam" }],
      timeline: "Q2 2024 - Ongoing",
      disciplines: [{ name: "Mobile App" }, { name: "UI/UX Design" }],
      sections: {
        trackWallet: {
          title: "Track all your wallet in the same place",
          description:
            "Consolidate all your portfolios in one place. This app allows you to track the performance of your assets in real-time, providing you with a clear and comprehensive view of your investments.",
        },
        optimizeDefi: {
          title: "Optimized for Decentralized Finance tracking",
          description:
            "Optimize the management of your decentralized finances by consolidating your wallets in one place. Create groups to easily track your assets and stay organized, whether it's for your own portfolio or for collaborating with others.",
        },
        shortline: {
          text: "MVP was good for its first utility, but to scale, we had to reimagine it and make it more attractive.",
        },
        primaryObjective: {
          title: "INTRODUCTION",
          heading: "Where does Bitloom idea come from?",
          description1:
            "As a Web 3 Enjoyer we’ve used a lot of different Crypto Tracker to keep an eye and monitoring our wallets.",
          description2:
            "But each one have their own problem with our usage of the tools which led us to the creation of a product that fit our niche needs.",
          descriptionBoldGrey:
            "According to SkyQuest, the global Decentralized Finance Market size was valued at $22 billion in 2022",
          descriptionBold: "and is projected to grow $48.02 billion by 2031",
          description4:
            "It makes it the good timing to build product arround it.",
        },
        uxr: {
          feur: "Interview Niche users",
          title: "Three Main Discovery Pillars for Our Approach",
          pillars: [
            {
              icon: "AutoAwesomeMotion", // Correspond à AccountBalanceWallet
              title: "Multi-Wallet Analysis",
              description:
                "Most users have multiple wallets for different purposes, whether for security or efficiency. We need to incorporate multi-wallet analysis to cater to this need.",
              objective:
                "Facilitate easy management of multiple wallets for the user.",
            },
            {
              icon: "ShapeLine", // Correspond à TrendingUp
              title: "Centralized & Decentralized Integration",
              description:
                "Many trackers do not consider centralized exchanges. We believe it’s crucial to include these exchanges to provide a more comprehensive overview and enhanced service.",
              objective:
                "Ensure better service by integrating centralized exchanges.",
            },
            {
              icon: "GppGood", // Correspond à Layers
              title: "Real-Time Prices",
              description:
                "We want to ensure that token prices are updated in real-time for more accurate tracking, unlike other apps that update prices hourly or daily.",
              objective:
                "Provide accurate, real-time tracking of token prices.",
            },
            {
              icon: "Insights", // Correspond à Tune
              title: "Considering All Cryptocurrencies",
              description:
                "We aim to consider all cryptocurrencies, even those with low market capitalization, by scraping blockchains in real-time, as many of our users invest in low-cap coins.",
              objective:
                "Enable comprehensive tracking, including low-cap cryptocurrencies.",
            },
            {
              icon: "Toll", // Correspond à Assignment
              title: "Ease of Use",
              description:
                "The process of account creation, wallet creation, and organization needs to be fast and efficient. Our tool is designed to provide assistance, not constraints.",
              objective:
                "Make the user experience as simple and efficient as possible.",
            },
            {
              icon: "Restore", // Correspond à Cached
              title: "Back to Basics",
              description:
                "While most tracking apps have become increasingly complex, we aim to stay focused on simplicity to deliver a straightforward experience centered around the core purpose.",
              objective:
                "Maintain a simple interface focused on essential features.",
            },
          ],
        },

        uxresearch: {
          title: "UX RESEARCH",
          heading: "Analyze all competitors",
          description:
            "Considering our goals we tried to compare ourselves to competitors, we want some advanced functionnality while keep everything user friendly, it may looks hard voir impossible but we can achieve this by focusing on what really important.",
        },
        researchMethodology: {
          title: "RESEARCH METHODOLOGY",
          heading: "Interview Niche users",
          description1:
            "We interviewed nearly 30 people from web3 sphere asking them a few question such as :",
          description2: "Name 3 weaknesses of your current tracker?",
          description3:
            "What game-changing features would make you leave your current tracker?",
          description4: "Here are the summarized results:",
        },
        keyInsights: {
          title: "KEY INSIGHTS",
          heading: "Building a Strong Foundation and Avoiding the Superfluous",
          description:
            "As we developed our application, we prioritized customization and adaptation to the specific needs of users, essential elements in a rapidly evolving field.",
          pillars: [
            {
              icon: "OrganizationIcon",
              title: "Intuitive Portfolio Organization",
              description:
                "From the outset, we designed an intuitive portfolio management interface, allowing users to easily structure and navigate between different assets.",
            },
            {
              icon: "PriceIcon",
              title: "Clear and Precise Price Statistics",
              description:
                "We integrated well-organized price information to provide clear and precise data, enabling users to make informed decisions quickly.",
            },
            {
              icon: "DiversityIcon",
              title: "Diverse Support for Wallets and Cryptos",
              description:
                "Our application supports a wide variety of wallets and crypto assets, offering users the flexibility needed to manage a diversified portfolio.",
            },
            {
              icon: "SimplificationIcon",
              title: "User-Focused Simplicity",
              description:
                "We ensured that every feature is straightforward and accessible, eliminating unnecessary steps to make the user experience smooth and enjoyable.",
            },
          ],
        },

        keyInsights2: {
          title: "KEY INSIGHTS",
          heading:
            "The main goal of this app is to empower users to manage their crypto portfolios effortlessly.",
          subheading:
            "Each feature is designed to be intuitive, informative, and tailored to the needs of both novice and experienced investors.",
        },

        uxDesign: {
          draftSessions: {
            title: "UX DESIGN",
            heading: "Draft Sessions",
            description:
              "Wireframes allowed us to explore various structures to optimize the user experience and address identified issues.",
          },
          solutionDesigning: {
            title: "UX DESIGN",
            heading: "Solution Designing",
            description:
              "Through precise iterations, we refined the interface to ensure smooth and intuitive navigation.",
          },
        },
        leconsPerspectives: {
          title: "LESSONS & PERSPECTIVES",
          heading: "Lessons Learned and Future Perspectives",
          description: "lorem ipsum dolor sit amet",
          insights: [
            {
              title: "Iteration and Feedback",
              description:
                "The importance of iteration in design allowed me to constantly refine the product based on user feedback.",
              icon: "/images/icons/rota.png", // Example icon path
            },
            {
              title: "Interdisciplinary Collaboration",
              description:
                "I learned to navigate effectively between branding, development, and product management teams for a harmonious result.",
              icon: "/images/icons/collab.png", // Example icon path
            },
          ],
        },
        designGoals: {
          title: "DESIGN GOALS",
          heading:
            "This project confirmed my commitment to creating products that are not only aesthetically pleasing but also intuitive and performant.",
          subheading:
            "As a Product Designer, my goal is always to combine aesthetics, function, and simplicity to offer an optimal user experience.",
        },
      },
      next: {
        title: "View Another Project",
        subtitle:
          "These projects are a glimpse of my work. Additional projects are also available.",
      },
    },
    landing: {
      sendshort: {
        title: "SendshortAI — Content Creation SaaS",
        subheading: "SENDSHORT",
        description:
          "Sendshort is a tool that allows the creation of subtitled short videos from horizontal format videos using artificial intelligence.",
        link: "https://sendshort.ai/",
        image: "/images/Landings/sendshort.png",
      },
      osmoz: {
        title: "Ösmoz — Marketing Agency",
        subheading: "ÖSMOZ",
        description:
          "Osmoz is a digital communication agency offering digital marketing solutions for businesses.",
        link: "https://www.agence-osmoz.com/",
        image: "/images/Landings/osmoz.png",
      },
      spybox: {
        title: "SpyBox — E-commerce SaaS",
        subheading: "SPYBOX",
        description:
          "Spybox is a service that provides a wide range of tools for e-commerce businesses.",
        link: "https://www.spybox.io/",
        image: "/images/Landings/spybox.png",
      },
      jonathanecom: {
        title: "Jonathan Ecom — E-commerce Training",
        subheading: "JONATHAN ECOM",
        description:
          "Jonathan Ecom is an online trainer for entrepreneurs looking to start in e-commerce.",
        link: "https://www.jo-ecom.io/",
        image: "/images/Landings/joecom.png",
      },
      cawatoes: {
        title: "Cawatoès — Professional Coffee Machine Rental",
        subheading: "CAWATOES",
        description:
          "Cawatoès is a company that rents professional coffee machines to businesses.",
        link: "https://pro.cawatoes.fr/",
        image: "/images/Landings/cawatoes.png",
      },
      fusion: {
        title: "Fusion Group — Asset Management",
        subheading: "FUSION",
        description:
          "Fusion is a company offering risk asset management services for investors.",
        link: "https://www.fusion-groupe.com/",
        image: "/images/Landings/fusion.png",
      },
    },
    Landingheader: {
      title: "Landing Page Collection",
      subtitle: "A landing page collection from 2022",
      description:
        "Explore a curated collection of my landing page projects, where each design blends aesthetics with functionality. From concept to execution, see how I've transformed ideas into engaging digital experiences designed to capture attention and convert visitors into customers.",
      team: [
        { name: "Dylan Williams", role: "(Web Developer)" },
        { name: "Logan Victorien", role: "(Motion Designer)" },
        { name: "Oriane Benatan", role: "(Web Developer)" },
        { name: "Arthur Bossuyt", role: "(Web Designer)" },
      ],
      tools: [{ name: "Figma" }, { name: "Webflow" }],
      timeline: "Q2 2022 - Q4 2023",
      disciplines: [{ name: "Web Design" }, { name: "Web Development" }],
      next: {
        title: "View Another Project",
        subtitle:
          "These projects are a glimpse of my work. Additional projects are also available.",
      },
    },
    projectHolder: {
      projects: [
        {
          tag: "sendshort",
          title: "From MVP to French Market Leader",
          description: "SendshortAI — Website & App Design",
          image: "/images/Projets/miniatures/sendshort.png",
          link: "/projects/sendshort",
        },
        {
          tag: "bitloom",
          title: "Developing a Crypto Portfolio Tracking Application",
          description: "Bitloom — App Design & Branding",
          image: "/images/Projets/miniatures/bitloom.png",
          link: "/projects/bitloom",
        },
        {
          tag: "landing",
          title: "Landing Page Collection",
          description: "A collection of recent landing pages",
          image: "/images/Projets/miniatures/landings.png",
          link: "/projects/landing",
        },
        {
          tag: "gallery",
          title: "Gallery",
          description: "Collection of UI shots",
          image: "/images/Projets/miniatures/other.png",
          link: "/projects/gallery",
        },
      ],
      button: "view project",
    },
    about: {
      header: {
        main: "About me",
        title1: "Redefining solutions with passion.",
        title2: "From Vision to Excellence",
      },
      introduction: {
        paragraph1:
          "Hey, I’m Arthur, a 21-year-old Product Designer from France. I have honed my skills through a blend of self-teaching and formal education, gaining experience both as a freelancer and within various companies. My background spans traditional industries, startups, and even the innovative world of Web3, which has given me a well-rounded understanding of the design field.",
        paragraph2:
          "I'm currently seeking a Product Designer position within a company where I can continue to grow. I am eager to deepen my technical expertise and develop my skills in a collaborative, team-oriented environment.",
      },
      journey: {
        title: "Journey ..So far",
        timeline: [
          {
            year: "2017-2019",
            event1: "Self-Taught Learning",
            grey1:
              "Dove into design and development, mastering the basics through self-guided study and experimentation.", // Separated grey text
          },
          {
            year: "2020",
            event1: "Studied UI/UX @UCA",
            grey1:
              "Pursued studies in UI/UX at UCA, honing my skills and understanding of user-centered design.",
            event2: "Internship @W3Plus",
            grey2:
              "Completed an internship in UI/UX, working on real-world projects and gaining practical experience.",
          },
          {
            year: "2021",
            event1: "Discovered Web3",
            grey1:
              "Explored the world of decentralized technologies and began integrating them into my design approach.",
            event2: "Tried to launch web3 projects",
            grey2:
              "Attempted to launch several projects in the Web3 space, gaining critical insights from the setbacks.",
          },
          {
            year: "2022",
            event1: "Moved to Saguenay, Canada",
            grey1:
              "Relocated to Canada, starting my journey as a freelance Product Designer.",
            event2: "Started Freelance",
            grey2:
              "Took on various freelance projects, focusing on UI/UX design, which helped build a diverse portfolio.", // Empty grey text for this year
          },
          {
            year: "2023",
            event1: "Joined @SeedStudio",
            grey1:
              "Became a part of Seed Studio, where I collaborated with team to deliver innovative design solutions.",
            event2: "Traveled Extensively",
            travels: [
              {
                place: "New York,",
                country: "USA",
              },
              {
                place: "Dubai,",
                country: "UAE",
              },
              {
                place: "Ottawa, Toronto, Montreal,",
                country: "Canada",
              },
              {
                place: "Kuala Lumpur,",
                country: "Malaysia",
              },
            ],
          },
          {
            year: "2024",
            event1: "Return to france",
            grey1:
              "Decided to return to France to explore new opportunities after significant growth abroad.",
            event2: "Left @SeedStudio",
            grey2:
              "Completed my tenure at SeedStudio, contributing to key projects and gaining invaluable experience.",
            event3: "Client Exit 1M$ (sendshort)",
            grey3:
              "Successfully launched a client project that generated over $1 million in revenue.",
            event4: "Looking for my next Challenge !",
          },
        ],
      },
      future: {
        title: "What about... Future?",
        paragraph:
          "I've enjoyed working independently as a freelancer—it's been a real school of life. However, some aspects of freelancing, like finding clients and managing the business side, didn't quite resonate with me. I genuinely enjoy creating and doing the work itself, and I believe that's where my strengths lie.",
        paragraph2:
          "Looking ahead, I see several roles that could be a good fit for me:",
        roles: [
          {
            role: "Product Design",
            description:
              "I'm passionate about product thinking and how the things we create can positively impact people's lives and activities. This role aligns with my interests and skills.",
          },
          {
            role: "Design Engineering",
            description:
              "This is another area I could see myself thriving in. As a product designer, deep coding knowledge isn't always essential except perhaps for working on design systems or some light coding tasks. However, since I enjoy coding in my free time, a Design Engineering role could be something I'd consider pursuing in the future.",
          },
        ],
      },
    },
    gallery: {
      image: {
        1: "/images/Gallery/1.webp",
        2: "/images/Gallery/2.webp",
        3: "/images/Gallery/3.webp",
        4: "/images/Gallery/4.webp",
        5: "/images/Gallery/5.webp",
        6: "/images/Gallery/6.webp",
        7: "/images/Gallery/7.webp",
        8: "/images/Gallery/8.webp",
        9: "/images/Gallery/9.webp",
        10: "/images/Gallery/10.webp",
        11: "/images/Gallery/11.webp",
        12: "/images/Gallery/12.webp",
        13: "/images/Gallery/13.webp",
        14: "/images/Gallery/14.webp",
        15: "/images/Gallery/15.webp",
        16: "/images/Gallery/16.webp",
        17: "/images/Gallery/17.webp",
        18: "/images/Gallery/18.webp",
      },
      next: {
        title: "View Another Project",
        subtitle:
          "These projects are a glimpse of my work. Additional projects are also available.",
      },
      header: {
        toptitle: "Gallery",
        title: "Where UI meets Art",
        subtitle: "Just a collection of design that i've made with love",
      },
    },
  },

  fr: {
    home: {
      header: {
        hover: "Cliquez pour en savoir plus.",
        job: "Product Designer",
        text1: "Transformer les idées.",
        text2: "en solutions concrètes.",
      },
      p1: {
        title: "Bienvenue sur mon portfolio",
        paragraph:
          "Product Designer passionné avec deux ans d'expérience, je me suis spécialisé dans la création d'expériences numériques intuitives. Mon parcours, de l'apprentissage en autodidacte à l'université, puis en tant que freelance, m'a permis de développer des compétences diversifiées.",
      },
      pbottom: {
        p1: {
          title: "Épanouissement dans des environnements collaboratifs",
          paragraph:
            "Je m'épanouis dans des environnements où designers, développeurs et collaborateurs travaillent ensemble pour innover. Grâce à mon expérience en design et développement, je facilite les échanges et veille à une bonne communication entre les équipes. J'apprécie le travail en équipe pour l'apprentissage et l'enrichissement personnel qu'il apporte, avec l'objectif de créer des solutions qui intègrent des perspectives variées.",
        },
        p2: {
          title: "Révéler la beauté et relever les défis",
          paragraph:
            "Pour moi, le design est un outil qui révèle et sublime la beauté du monde qui nous entoure. Au-delà de l'esthétique, il permet de créer des solutions intuitives pour les interfaces digitales et les produits physiques, en apportant des réponses claires et empathiques aux défis complexes. Le design joue un rôle essentiel dans la construction d'un avenir meilleur en innovant de manière réfléchie et en veillant à ce que nos solutions touchent profondément les utilisateurs.",
        },
      },
    },
    buttonspecial: {
      back: "Retour",
      download: "Télecharger CV",
      profile: "À Propos de moi",
    },
    sendshort: {
      title: "Product Design de SendShort",
      subtitle:
        "L'outil qui améliore le flux de travail des créateurs de contenu",
      description:
        "J'ai eu l'opportunité de participer avec Sendshort à la refonte complète de leur produit et de leur site internet. L'objectif était de faciliter la création de vidéos au format vertical en utilisant l'intelligence artificielle.",
      title2: "Devenir la référence du marché français",
      description2:
        "Nous avons mené des recherche afin d'identifier les pain points des utilisateurs et améliorer l'expérience globale de l'application. Grâce à une approche centrée sur l'utilisateur, nous avons pu concevoir une interface plus intuitive et agréable à utiliser.",

      team: [
        { name: "Dylan Williams", role: "(Chef de projet)" },
        { name: "Logan Victorien", role: "(Branding)" },
        { name: "Thomas Le Borgne", role: "(UX)" },
        { name: "Arthur Bossuyt", role: "(UX/UI)" },
      ],
      tools: [{ name: "Figma" }, { name: "Webflow" }],
      timeline: "T1 2023 - T2 2023",
      disciplines: [
        { name: "Recherche utilisateur" },
        { name: "Design visuel" },
      ],
      sections: {
        infoCrop: {
          title: "Recadrer les vidéos au format vertical",
          description:
            "Recadrez facilement vos vidéos au format vertical pour les optimiser pour le format shorts. Grâce à une interface intuitive et simplifiée à chaque découpe.",
        },
        infoSub: {
          title: "Laissez l'IA sous-titrer vos vidéos",
          description:
            "Laissez notre outil IA générer automatiquement des sous-titres précis pour vos vidéos, améliorant ainsi l'accessibilité et l'engagement. Personnalisez les styles et la position en toute simplicité.",
        },
        shortline: {
          text: "Le MVP était bon pour les premières semaines, mais pour évoluer, nous avons dû le réimaginer et le rendre plus attrayant.",
        },
        primaryObjective: {
          title: "Objectif principal",
          heading:
            "Comprendre comment les améliorations du design visuel peuvent accroître l'engagement et la satisfaction des utilisateurs.",
          description:
            "Nous avons essayé d'identifier les points de douleur spécifiques dans le design actuel de l'application qui nuisent à l'utilisabilité et de découvrir les préférences des utilisateurs en matière d'esthétique visuelle.",
          image: "/images/sendshort/postitfr.png",
        },
        uxr: {
          head: "Recherche UX",
          title: "AXES DE DÉCOUVERTE",
          pillars: [
            {
              icon: "PersonIcon",
              title: "Expérience utilisateur globale",
              description: [
                "Comment simplifier le parcours utilisateur et réduire les points de friction ?",
                "Quels sont les points de douleur courants rencontrés par les utilisateurs lors de l'utilisation de l'application ?",
                "Comment améliorer la satisfaction et l'engagement des utilisateurs ?",
              ],
              objective:
                "Améliorer l'expérience utilisateur globale en rendant l'application intuitive, efficace et agréable à utiliser.",
            },
            {
              icon: "AssignmentIcon",
              title: "Attrait visuel amélioré",
              description: [
                "Quels éléments peuvent améliorer l'attrait visuel de l'application ?",
                "Comment créer une interface cohérente et intuitive ?",
                "Quelles sont les meilleures pratiques pour concevoir les fonctionnalités de notre application ?",
              ],
              objective:
                "Améliorer le design visuel de l'application pour la rendre plus attrayante et facile à utiliser.",
            },
            {
              icon: "CachedIcon",
              title: "Utilisabilité des fonctionnalités",
              description: [
                "Toutes les fonctionnalités sont-elles faciles à comprendre et à utiliser ?",
                "Quelles fonctionnalités pourraient manquer dans le produit actuel ?",
                "Quels sont les problèmes ou les difficultés courants rencontrés par les utilisateurs de SendShort ?",
              ],
              objective:
                "S'assurer que les fonctionnalités de l'application sont robustes, intuitives et répondent efficacement aux besoins des utilisateurs.",
            },
          ],
        },
        researchMethodology: {
          title: "MÉTHODOLOGIE DE RECHERCHE",
          heading: "Qualitative plutôt que quantitative",
          description:
            "Nous avions beaucoup de données issues des analyses et des tests A/B accumulés depuis le MVP. Nous avons choisi de les compléter par un court entretien utilisateur pour nous assurer que nous disposions de suffisamment d'informations pour aller de l'avant.",
        },
        keyInsights: {
          title: "INFORMATIONS CLÉS",
          heading: "Trop d'étapes inutiles et une expérience visuelle médiocre",
          description:
            "L'un des principaux problèmes que nous avons rencontrés était une interface utilisateur médiocre qui compliquait certaines étapes pour les utilisateurs. De plus, nous avons constaté que certaines étapes inutiles pouvaient être supprimées.",
          pillars: [
            {
              title: "Interface Utilisateur Médiocre",
              description:
                "L'ancienne interface a été faite par des développeurs, elle était correcte, mais il manquait quelque chose pour atteindre le niveau supérieur et devenir plus premium.",
            },
            {
              title: "Étapes Inutiles",
              description:
                "Certaines personnes avaient du mal avec le nombre d'étapes nécessaires pour accomplir des tâches simples, comme lors de l'importation de vidéos.",
            },
            {
              title: "Fonctionnalités Non Expliquées",
              description:
                "Lors des entretiens, nous avons demandé aux utilisateurs de trouver et d'expliquer toutes les fonctionnalités de SendShort. Certains ont eu du mal à toutes les trouver.",
            },
            {
              title: "Gestion des Fichiers Désorganisée",
              description:
                "Nous avons rencontré un autre problème avec deux personnes interviewées qui ont réalisé plus de courts métrages que les autres (+50 shorts). Il n'y a pas de système d'organisation des fichiers.",
            },
          ],
        },
        keyInsights2: {
          title: "INFORMATIONS CLÉS",
          heading:
            "L'objectif principal de cette refonte était de créer un espace où les vidéastes se sentent à l'aise.",
          subheading:
            "Chaque fonctionnalité doit être claire, expliquée et facile à utiliser pour tout le monde.",
        },
        uxResearch: {
          analyzingDesign: {
            title: "RECHERCHE UX",
            heading: "Analyse du design actuel",
            description:
              "Le design actuel comprenais des étapes inutiles qui compliquaient le parcours utilisateur, entraînant frustration et inefficacité. De plus, l'interface utilisateur médiocre et l'expérience utilisateur confuse contribuent à désorienter les utilisateurs, les empêchant d'accomplir efficacement leurs tâches.",
          },
          analyzeCompetitors: {
            title: "RECHERCHE UX",
            heading: "Analyse de tous les concurrents",
            description:
              "Nous avons analysé les concurrents pour apprendre de leurs forces et faiblesses. Cela nous a aidés à affiner notre design pour offrir une expérience plus conviviale.",
          },
        },
        uxDesign: {
          draftSessions: {
            title: "DESIGN UX",
            heading: "Wireframing",
            description:
              "Grâce aux wireframe, nous avons réfléchi aux concepts initiaux pour affiner le parcours utilisateur et résoudre les problèmes identifiés. Ce processus nous a permis de visualiser des solutions potentielles avant de passer à la phase de conception.",
          },
          solutionDesigning: {
            title: "DESIGN UX",
            heading: "Conception de solutions",
            description:
              "Dans la phase de conception des solutions, nous avons créé des mises en page et des interfaces détaillées pour résoudre les problèmes utilisateurs identifiés précédemment. Ces conceptions visaient à améliorer la navigation, réduire les étapes inutiles et renforcer l'expérience utilisateur globale.",
          },
          beforeAfter: {
            title: "DESIGN UX",
            heading: "Avant / Après",
            description:
              "La comparaison 'Avant/Après' met en évidence les améliorations significatives de l'interface. La refonte s'est concentrée sur un espace de travail plus intuitif, réduisant l'encombrement et créant une expérience visuelle attrayante qui guide les utilisateurs sans effort tout au long du processus de création.",
          },
        },
        nouveauDepart: {
          title: "Conclusion",
          heading: "Un Nouveau Départ pour SendShort",
          description:
            "Grâce à une refonte complète du produit et de l'expérience utilisateur, SendShort a non seulement amélioré la satisfaction des utilisateurs, mais a aussi atteint des résultats commerciaux significatifs.",
          image: "/images/sendshort/avis.png", // Example image path
        },
        resultatsCle: {
          title: "Résultats Clés",
          heading: "Résultats Clés du Projet SendShort",
          description:
            "Le projet SendShort a généré des améliorations significatives dans plusieurs domaines clés, augmentant la conversion, réduisant le taux de churn, et stimulant la croissance du revenu mensuel récurrent (MRR).",
          stats: [
            {
              title: "Conversion de plan gratuit à payant",
              old: "3.5%",
              new: "9%",
              description:
                "La conversion a augmenté de 3,5% à 9%, prouvant l'efficacité de l'interface améliorée pour inciter les utilisateurs à passer à une version payante.",
            },
            {
              title: "Réduction du taux de désabonnement",
              old: "30%",
              new: "21%",
              description:
                "Le churn a été réduit de 30% à 21%, ce qui démontre une amélioration significative de la fidélité des utilisateurs suite à l'amélioration de l'expérience utilisateur.",
            },
            {
              title: "Croissance du CA mensuel",
              new: "+30%",
              description:
                "Le MRR a augmenté de 30% en trois mois, signe que les améliorations ont eu un impact direct sur la rentabilité.",
            },
          ],
        },
        succes: {
          title: "SUCCèS",
          heading: "Update Juillet 2024 : Succès financier",
          description:
            "Sendshort a vu le jour en juin 2023 il y a un an... Le succès de la refonte a directement contribué à la vente de SendShort en juillet 2024, valorisée à ±1M USD, confirmant la pertinence de notre approche UX/UI.",
          image: "/images/sendshort/milestone.png", // Example image path
        },
        leconsPerspectives: {
          title: "LEÇONS PERSPECTIVES",
          heading: "Leçons apprises et perspective d’avenir",
          description: "lorem ipsum dolor sit amet",
          insights: [
            {
              title: "Itération et Feedback",
              description:
                "L'importance de l'itération dans le design m'a permis de constamment affiner le produit en fonction des retours utilisateurs.",
              icon: "/images/icons/rota.png", // Example icon path
            },
            {
              title: "Collaboration Interdisciplinaire",
              description:
                "J'ai appris à naviguer efficacement entre les équipes de branding, développement, et gestion de produit pour un résultat harmonieux.",
              icon: "/images/icons/collab.png", // Example icon path
            },
          ],
        },
        designGoals: {
          title: "GOALS DU DESIGN",
          heading:
            "Ce projet a confirmé mon engagement à créer des produits non seulement esthétiquement plaisants, mais aussi intuitifs et performants.",
          subheading:
            "En tant que Product Designer, mon objectif est toujours de combiner esthétique, fonction et simplicité pour offrir une expérience utilisateur optimale.",
        },
      },
      next: {
        title: "Voir un autre projet",
        subtitle:
          "Ces projets sont un aperçu de mon travail. D'autres réalisations sont également disponibles.",
      },
    },
    bitloom: {
      title: "Application de suivi crypto Bitloom",
      subtitle: "Une collection de pages d'atterrissage de 2022",
      description:
        "Avec deux amis, nous nous sommes lancés dans la création d'une application mobile de portefeuille répondant à des problématiques spécifiques. Cette application est toujours en développement, et bien que le produit ne soit pas encore terminé, je trouve intéressant de le partager.",
      title2: "Une Application pour les visionnaires",
      description2:
        "Nous avons conçu cette application pour répondre à nos besoins et concrétiser notre vision. Notre priorité est de créer un outil qui simplifie les complexités et résonne avec les utilisateurs futurs.",

      team: [
        { name: "Theo Villano", role: "(Chef de projet)" },
        { name: "Guillaume Chalons", role: "(Branding)" },
        { name: "Arthur Bossuyt", role: "(UX/UI)" },
      ],
      tools: [{ name: "Figma" }, { name: "FigJam" }],
      timeline: "T2 2024 - En cours",
      disciplines: [{ name: "Application mobile" }, { name: "Design UI/UX" }],
      sections: {
        trackWallet: {
          title: "Suivez tous vos portefeuilles au même endroit",
          description:
            "Réunissez tous vos portefeuilles en un seul endroit. Cette application vous permet de suivre l’évolution de vos actifs en temps réel, vous offrant une vue claire et complète de vos investissements.",
        },
        optimizeDefi: {
          title: "Optimisé pour le suivi des finances décentralisées",
          description:
            "Optimisez la gestion de vos finances décentralisées en regroupant vos portefeuilles en un seul endroit. Créez des groupes pour suivre facilement vos actifs et rester organisé, que ce soit pour votre propre portefeuille ou pour collaborer avec d'autres.",
        },
        shortline: {
          text: "Le MVP était bon pour sa première utilité, mais pour évoluer, nous avons dû le réimaginer et le rendre plus attrayant.",
        },
        primaryObjective: {
          title: "INTRODUCTION",
          heading: "D'où vient l'idée de Bitloom ?",
          description1:
            "En tant qu'amateurs du Web 3, nous avons utilisé de nombreux trackers crypto différents pour surveiller nos portefeuilles.",
          description2:
            "Cependant, chacun avait ses propres problèmes liés à notre utilisation, ce qui nous a conduits à créer un produit répondant à nos besoins de niche.",
          descriptionBoldGrey:
            "Selon SkyQuest, la taille du marché mondial de la finance décentralisée était estimée à 22 milliards de dollars en 2022",
          descriptionBold:
            "et devrait atteindre 48,02 milliards de dollars d'ici 2031",
          description4:
            "C'est le bon moment pour créer des produits autour de cela.",
        },
        uxr: {
          feur: "Interview Niche users",
          title: "Trois principaux piliers de découverte pour notre approche",
          pillars: [
            {
              icon: "AutoAwesomeMotion", // Correspond à AccountBalanceWallet
              title: "Analyse Multi-Portefeuille",
              description:
                "La plupart des utilisateurs ont plusieurs portefeuilles pour différents usages, que ce soit pour des raisons de sécurité ou d'efficacité. Nous devons donc intégrer une analyse multi-portefeuille.",
              objective:
                "Faciliter la gestion simultanée de plusieurs portefeuilles pour l'utilisateur.",
            },
            {
              icon: "ShapeLine", // Correspond à TrendingUp
              title: "Intégration Centralisée et Décentralisée",
              description:
                "Beaucoup de trackers ne prennent pas en compte les échanges centralisés. Nous pensons qu'il est crucial d'inclure ces échanges pour offrir une vue d'ensemble plus complète et un service amélioré.",
              objective:
                "Assurer une meilleure gestion en intégrant les échanges centralisés.",
            },
            {
              icon: "GppGood", // Correspond à Layers
              title: "Prix en Temps Réel",
              description:
                "Nous voulons nous assurer que les prix de chaque token sont actualisés en temps réel pour un suivi plus précis, contrairement à d'autres applications qui mettent à jour les prix toutes les heures ou quotidiennement.",
              objective:
                "Offrir un suivi précis et en temps réel des prix des tokens.",
            },
            {
              icon: "Insights", // Correspond à Tune
              title: "Considération de Toutes les Cryptomonnaies",
              description:
                "Nous souhaitons prendre en compte toutes les cryptomonnaies, même celles à faible capitalisation, en scrappant les blockchains en temps réel, car c'est ce qui intéresse le plus nos utilisateurs.",
              objective:
                "Permettre un suivi exhaustif, y compris pour les cryptomonnaies à faible capitalisation.",
            },
            {
              icon: "Toll", // Correspond à Assignment
              title: "Facilité d'Utilisation",
              description:
                "Le processus de création de compte, de création de portefeuille et d'organisation doit être rapide et efficace. Notre outil est conçu pour offrir de l'aide, pas des contraintes supplémentaires à nos user.",
              objective:
                "Rendre le processus d'utilisation aussi simple et efficace que possible.",
            },
            {
              icon: "Restore", // Correspond à Cached
              title: "Retour aux Bases",
              description:
                "Alors que la plupart des applications de suivi sont devenues de plus en plus complexes, nous voulons rester concentrés sur l'essentiel pour offrir une expérience simple et centrée sur l'objectif principal.",
              objective:
                "Maintenir une interface simple et centrée sur les fonctionnalités essentielles.",
            },
          ],
        },

        uxresearch: {
          title: "RECHERCHE UX",
          heading: "Analyser tous les concurrents",
          description:
            "Compte tenu de nos objectifs, nous avons essayé de nous comparer aux concurrents. Nous voulons des fonctionnalités avancées tout en gardant tout convivial. Cela peut sembler difficile voire impossible, mais nous pouvons y parvenir en nous concentrant sur ce qui est vraiment important.",
        },
        researchMethodology: {
          title: "MÉTHODOLOGIE DE RECHERCHE",
          heading: "Interview des utilisateurs de niche",
          description1:
            "Nous avons interviewé près de 30 personnes de la sphère Web3 en leur posant quelques questions telles que :",
          description2: "Citez 3 faiblesses de votre tracker actuel ?",
          description3:
            "Quelles fonctionnalités révolutionnaires vous feraient abandonner votre tracker actuel ?",
          description4: "Voici les résultats résumés :",
        },

        keyInsights: {
          title: "INFORMATIONS CLÉS",
          heading: "Construire une base solide et éviter le superflu",
          description:
            "Lors de la création de notre application, nous avons priorisé la personnalisation et l'adaptation aux besoins spécifiques des utilisateurs, des éléments essentiels dans un secteur en constante évolution.",
          pillars: [
            {
              icon: "OrganizationIcon",
              title: "Organisation intuitive des portefeuilles",
              description:
                "Dès le départ, nous avons conçu une interface de gestion des portefeuilles intuitive, permettant aux utilisateurs de structurer et naviguer facilement entre différents actifs.",
            },
            {
              icon: "PriceIcon",
              title: "Statistiques de prix claires et précises",
              description:
                "Nous avons intégré des informations de prix organisées de manière à offrir des données claires et précises, pour que les utilisateurs puissent prendre des décisions éclairées rapidement.",
            },
            {
              icon: "DiversityIcon",
              title: "Support diversifié pour portefeuilles et cryptos",
              description:
                "Notre application prend en charge une grande variété de portefeuilles et d'actifs cryptographiques, offrant aux utilisateurs la flexibilité nécessaire pour gérer un portefeuille diversifié.",
            },
            {
              icon: "SimplificationIcon",
              title: "Simplicité d'utilisation au cœur du design",
              description:
                "Nous avons veillé à ce que chaque fonctionnalité soit directe et accessible, en éliminant les étapes superflues pour rendre l'expérience utilisateur fluide et agréable.",
            },
          ],
        },

        keyInsights2: {
          title: "INFORMATIONS CLÉS",
          heading:
            "L'objectif principal de cette application est de permettre aux utilisateurs de gérer leurs portefeuilles crypto en toute simplicité.",
          subheading:
            "Chaque fonctionnalité est conçue pour être intuitive, informative, et adaptée aux besoins des investisseurs, qu'ils soient novices ou expérimentés.",
        },
        uxDesign: {
          draftSessions: {
            title: "DESIGN UX",
            heading: "Sessions de brouillon",
            description:
              "Les wireframes nous ont permis d'explorer différentes structures pour optimiser l'expérience utilisateur et résoudre les problèmes identifiés.",
          },
          solutionDesigning: {
            title: "DESIGN UX",
            heading: "Conception de solutions",
            description:
              "À travers des itérations précises, nous avons affiné l'interface pour garantir une navigation fluide et intuitive.",
          },
        },
        leconsPerspectives: {
          title: "LEÇONS PERSPECTIVES",
          heading: "Leçons apprises et perspective d’avenir",
          description: "lorem ipsum dolor sit amet",
          insights: [
            {
              title: "Itération et Feedback",
              description:
                "L'itération est au cœur du processus de conception. À chaque étape, les retours des utilisateurs ont été essentiels pour affiner et améliorer Bitloom, garantissant ainsi que le produit final répond parfaitement aux besoins de sa cible.",
              icon: "/images/icons/rota.png", // Example icon path
            },
            {
              title: "Collaboration Interdisciplinaire",
              description:
                "Le succès de Bitloom réside dans une collaboration fluide entre les équipes de design, de développement, et de gestion de produit. Cette synergie a permis de créer une application harmonieuse qui allie fonctionnalité et esthétique.",
              icon: "/images/icons/collab.png", // Example icon path
            },
          ],
        },
        designGoals: {
          title: "GOALS DU DESIGN",
          heading:
            "Le projet Bitloom a renforcé mon engagement à concevoir des produits non seulement esthétiquement agréables, mais aussi intuitifs et performants.",
          subheading:
            "En tant que Designer de Produits, mon objectif est de toujours trouver un équilibre entre l'esthétique, la fonctionnalité, et la simplicité pour offrir une expérience utilisateur optimale, en particulier dans des domaines complexes comme la gestion de portefeuilles crypto.",
        },
      },
      next: {
        title: "Voir un autre projet",
        subtitle:
          "Ces projets sont un aperçu de mon travail. D'autres réalisations sont également disponibles.",
      },
    },
    landing: {
      sendshort: {
        title: "SendshortAI — SaaS Création de contenu",
        subheading: "SENDSHORT",
        description:
          "Sendshort est un outil qui permet la création de vidéo au format short sous-titré depuis une vidéo au format horizontal en utilisant l'intelligence artificielle.",
        link: "https://sendshort.ai/",
        image: "/images/Landings/sendshort.png",
      },
      osmoz: {
        title: "Ösmoz — Agence Marketing",
        subheading: "ÖSMOZ",
        description:
          "Osmoz est une agence de communication digitale qui propose des solutions de marketing digital pour les entreprises.",
        link: "https://www.agence-osmoz.com/",
        image: "/images/Landings/osmoz.png",
      },
      spybox: {
        title: "SpyBox — SaaS E-commerce",
        subheading: "SPYBOX",
        description:
          "Spybox est un service qui regroupe un grand nombre d'outils pour les e-commerçants",
        link: "https://www.spybox.io/",
        image: "/images/Landings/spybox.png",
      },
      jonathanecom: {
        title: "Jonathan Ecom — Formation E-commerce",
        subheading: "JONATHAN ECOM",
        description:
          "Jonathan Ecom est un formateur en ligne pour les entrepreneurs qui souhaitent se lancer dans le e-commerce.",
        link: "https://www.jo-ecom.io/",
        image: "/images/Landings/joecom.png",
      },
      cawatoes: {
        title: "Cawatoès — Location de machines à café Professionnelles",
        subheading: "CAWATOES",
        description:
          "Cawatoès est une entreprise qui loue des machines à café professionnelles pour les entreprises.",
        link: "https://pro.cawatoes.fr/",
        image: "/images/Landings/cawatoes.png",
      },
      fusion: {
        title: "Fusion Groupe — Gestion d'actifs",
        subheading: "FUSION",
        description:
          "Fusion est une entreprise qui propose de la gestion d'actifs à risques pour les investisseurs.",
        link: "https://www.fusion-groupe.com/",
        image: "/images/Landings/fusion.png",
      },
    },
    Landingheader: {
      title: "Collection de landing pages",
      subtitle: "Une collection de landing pages de 2022",
      description:
        "Découvrez une sélection de mes projets de landing pages, où chaque design allie esthétique et efficacité. De la conception à la réalisation, explorez comment j'ai transformé des idées en expériences digitales engageantes, conçues pour capter l'attention et convertir les visiteurs en clients.",
      team: [
        { name: "Dylan Williams", role: "(Développeur Web)" },
        { name: "Logan Victorien", role: "(Designer Motion)" },
        { name: "Oriane Benatan", role: "(Développeur Web)" },
        { name: "Arthur Bossuyt", role: "(Designer Web)" },
      ],
      tools: [{ name: "Figma" }, { name: "Webflow" }],
      timeline: "T2 2022 - T4 2023",
      disciplines: [{ name: "Design Web" }, { name: "Développement Web" }],
      next: {
        title: "Voir un autre projet",
        subtitle:
          "Ces projets sont un aperçu de mon travail. D'autres réalisations sont également disponibles.",
      },
    },
    projectHolder: {
      projects: [
        {
          tag: "sendshort",
          title: "De MVP à leader du marché français",
          description: "SendshortAI — Conception de site Web et d'application",
          image: "/images/Projets/miniatures/sendshort.png",
          link: "/projects/sendshort",
        },
        {
          tag: "bitloom",
          title:
            "Développement d'une application de suivi de portefeuille crypto",
          description: "Bitloom — Conception d'application et branding",
          image: "/images/Projets/miniatures/bitloom.png",
          link: "/projects/bitloom",
        },
        {
          tag: "landing",
          title: "Collection de Landing pages",
          description: "Un collection de landing pages depuis 2022",
          image: "/images/Projets/miniatures/landings.png",
          link: "/projects/landing",
        },
        {
          tag: "gallery",
          title: "Galerie",
          description: "Collection de captures d'écran d'UI",
          image: "/images/Projets/miniatures/other.png",
          link: "/projects/gallery",
        },
      ],
      button: "voir le projet",
    },
    about: {
      header: {
        main: "À propos de moi",
        title1: "Redéfinir les solutions avec passion.",
        title2: "De la vision à l'excellence",
      },
      introduction: {
        paragraph1:
          "Bonjour ! Je m'appelle Arthur, j'ai 21 ans et je suis designer produit en France. J'ai développé mes compétences grâce à un parcours mêlant apprentissage autodidacte et études universitaires. J'ai eu l'occasion de travailler en tant que freelance et au sein d'entreprises variées, que ce soit dans des secteurs traditionnels, des startups, ou encore dans le domaine du Web3. Cette diversité d'expériences m'a permis d'acquérir une solide compréhension de mon métier.",
        paragraph2:
          "Je suis actuellement à la recherche d'un poste de designer produit au sein d'une entreprise, où je pourrais continuer à apprendre, tant sur le plan technique qu'humain, et m'épanouir dans un cadre collaboratif.",
      },
      journey: {
        title: "Parcours ... Jusqu'à présent",
        timeline: [
          {
            year: "2017",
            event1: "Apprentissage Autodidacte",
            grey1:
              "Plongé dans le design et le développement, maîtrisant les bases à travers l'apprentissage autodidacte et l'expérimentation.", // Texte gris séparé
          },
          {
            year: "2020",
            event1: "Études UI/UX @UCA",
            grey1:
              "Poursuivi des études en UI/UX à l'UCA, affinant mes compétences et ma compréhension du design centré sur l'utilisateur.",
            event2: "Stage @W3Plus",
            grey2:
              "Réalisé un stage en UI/UX, travaillant sur des projets concrets et acquérant une expérience pratique.",
          },
          {
            year: "2021",
            event1: "Découverte du Web3",
            grey1:
              "Exploré le monde des technologies décentralisées et commencé à les intégrer dans mon approche du design.",
            event2: "Tentatives de lancement de projets Web3",
            grey2:
              "Essayé de lancer plusieurs projets dans le domaine du Web3, tirant des enseignements critiques des échecs.",
          },
          {
            year: "2022",
            event1: "Déménagement à Saguenay, Canada",
            grey1:
              "Déménagé au Canada, pour suivre une année d'étude et démarrer mon parcours en tant que designer produit freelance.",
            event2: "Début du Freelance",
            grey2:
              "Engagé sur divers projets freelance, principalement axés sur le design UI/UX, ce qui m'a permis de constituer un portfolio diversifié.", // Texte gris vide pour cette année
          },
          {
            year: "2023",
            event1: "Rejoint @SeedStudio",
            grey1:
              "Intégré à Seed Studio, où j'ai collaboré avec une équipe pour fournir des solutions de design innovantes.",
            event2: "Voyages",
            travels: [
              {
                place: "New York,",
                country: "États-Unis",
              },
              {
                place: "Dubaï,",
                country: "Émirats Arabes Unis",
              },
              {
                place: "Ottawa, Toronto, Montréal,",
                country: "Canada",
              },
              {
                place: "Kuala Lumpur,",
                country: "Malaisie",
              },
            ],
          },
          {
            year: "2024",
            event1: "Retour en France",
            grey1:
              "Décidé de revenir en France pour explorer de nouvelles opportunités après une croissance significative à l'étranger.",
            event2: "Départ de @SeedStudio",
            grey2:
              "Terminé mon aventure chez SeedStudio, contribuant à des projets clés et acquérant une expérience inestimable.",
            event3: "Lancement Client à 1M$ (Sendshort)",
            grey3:
              "Lancé avec succès un projet client vendu près d'un million de dollars.",
            event4: "À la recherche de mon prochain défi !",
          },
        ],
      },
      future: {
        title: "Et à propos du... Futur ?",
        paragraph:
          "J'ai apprécié travailler de manière indépendante en tant que freelance cela a été une véritable école de la vie. Cependant, certains aspects du freelancing, comme trouver des clients et gérer le côté business, ne m'ont pas vraiment plu. J'aime vraiment créer et faire le travail lui-même, et je crois que c'est là que résident mes forces.",
        paragraph2:
          "À l'avenir, je vois plusieurs rôles qui pourraient bien me convenir.",
        roles: [
          {
            role: "Conception de Produits",
            description:
              "Je suis passionné par la création de produits et la manière dont cela peut avoir un impact positif sur la vie et les activités des gens. Ce rôle correspond à mes intérêts et compétences.",
          },
          {
            role: "Design Engineer",
            description:
              "C'est un autre domaine dans lequel je pourrais m'épanouir. En tant que product designer, une connaissance approfondie du code n'est pas toujours essentielle sauf peut-être pour travailler sur des design system ou effectuer quelques tâches de code léger. Cependant, comme j'aime coder pendant mon temps libre, un rôle de design engineer pourrait être quelque chose que je considérerais pour l'avenir.",
          },
        ],
      },
    },
    gallery: {
      image: {
        1: "/images/Gallery/1.webp",
        2: "/images/Gallery/2.webp",
        3: "/images/Gallery/3.webp",
        4: "/images/Gallery/4.webp",
        5: "/images/Gallery/5.webp",
        6: "/images/Gallery/6.webp",
        7: "/images/Gallery/7.webp",
        8: "/images/Gallery/8.webp",
        9: "/images/Gallery/9.webp",
        10: "/images/Gallery/10.webp",
        11: "/images/Gallery/11.webp",
        12: "/images/Gallery/12.webp",
        13: "/images/Gallery/13.webp",
        14: "/images/Gallery/14.webp",
        15: "/images/Gallery/15.webp",
        16: "/images/Gallery/16.webp",
        17: "/images/Gallery/17.webp",
        18: "/images/Gallery/18.webp",
      },
      next: {
        title: "Voir un autre projet",
        subtitle:
          "Ces projets sont un aperçu de mon travail. D'autres réalisations sont également disponibles.",
      },
      header: {
        toptitle: "Galerie",
        title: "La où l'UI rencontre l'art",
        subtitle:
          "Juste une collection de design que j'ai fait et que j'apprecie",
      },
    },
  },
};

export default translations;

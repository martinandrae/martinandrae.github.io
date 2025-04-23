// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-continuous-ensemble-weather-forecasting-with-diffusion-models",
        
          title: "Continuous Ensemble Weather Forecasting with Diffusion models",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Continuous-Ensemble-Forecasting/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-presented-our-work-on-probabilistic-weather-forecasting-at-the-large-scale-deep-learning-for-the-earth-system-workshop-in-bonn",
          title: 'I presented our work on probabilistic weather forecasting at the “Large-Scale Deep Learning...',
          description: "",
          section: "News",},{id: "news-continuous-ensemble-weather-forecasting-with-diffusion-models-has-been-accepted-to-iclr-2025",
          title: '“Continuous Ensemble Weather Forecasting with Diffusion models” has been accepted to ICLR 2025!...',
          description: "",
          section: "News",},{id: "news-i-attended-the-generative-modeling-summer-school-statlearn-in-sophia-antipolis-france",
          title: 'I attended the Generative Modeling Summer School / Statlearn in Sophia Antipolis, France....',
          description: "",
          section: "News",},{id: "news-i-m-attending-iclr-2025-in-singapore-let-me-know-if-you-want-to-meet-up",
          title: 'I’m attending ICLR 2025 in Singapore. Let me know if you want to...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%74%69%6E.%61%6E%64%72%61%65@%6C%69%75.%73%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/martinandrae", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/martinandrae", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-3593-5979", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=B0A-wwEAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://liu.se/en/employee/maran77", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

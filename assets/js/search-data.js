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
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "projects-fractalstudio",
          title: 'FractalStudio',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brots/";
            },},{id: "projects-bee-thorax-detection-with-dino",
          title: 'Bee Thorax Detection with DINO',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dino_bee/";
            },},{id: "projects-linear-regression",
          title: 'Linear Regression',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/linreg/";
            },},{id: "projects-uiuc-piano-catalog",
          title: 'UIUC Piano Catalog',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/piano_catalog/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%68%75%61%6E%67%31%30%32%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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

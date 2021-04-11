import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from '@material-ui/icons/Web';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';

const resumeData = {
  profile: {
    Name: "Leamon Lee",
    Title: "Full Stack Engineer",
    Birthday: "1991/05/13",
    Email: "leamon.lee@gmail.com",
    Address: "新北市林口區",
    Phone: "0973 962 968"
  },
  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      displayText: "MyFacebook",
      icon: <FacebookIcon /> 
    },
    Twitter: {
      link: "https://www.twitter.com",
      displayText: "MyTwitter",
      icon: <TwitterIcon /> 
    },
    LinkedIn: {
      link: "https://www.linkedin.com",
      displayText: "MyLinkedIn",
      icon: <LinkedInIcon /> 
    },
    Github: {
      link: "https://www.github.com",
      displayText: "MyGithub",
      icon: <GitHubIcon /> 
    }
  },
  about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
  experiences: [
    {
      title: "Art Director - Facebook Inc",
      duration: "2010 - Present",
      description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
    },
    {
      title: "Senior Designer - Google",
      duration: "2008 - 2010",
      description: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward."
    },
    {
      title: "Junior Designer - Creative Shake",
      duration: "2005 - 2008",
      description: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract."
    }
  ],
  education: [
    {
      title: "Art Director - Facebook Inc",
      duration: "2010 - Present",
      description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
    },
    {
      title: "Senior Designer - Google",
      duration: "2008 - 2010",
      description: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward."
    },
    {
      title: "Junior Designer - Creative Shake",
      duration: "2005 - 2008",
      description: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract."
    }
  ],
  services: [
    {
      title: "Web Dev",
      description: "I have been working on web design for 10 years.",
      icon: <WebIcon />
    },
    {
      title: "Web Dev",
      description: "I have been working on web design for 10 years.",
      icon: <WebIcon />
    },
    {
      title: "Web Dev",
      description: "I have been working on web design for 10 years.",
      icon: <WebIcon />
    }
  ],
  skillSets: [
    {
      title: "Frontend",
      description: [
        "React",
        "JavaScript",
        "Bootstrap",
        "Material UI"
      ]
    },
    {
      title: "Backend",
      description: [
        "Node.js",
        "Python",
        "C#",
        "C++"
      ]
    },
    {
      title: "Databases",
      description: [
        "MS-SQL",
        "MySQL",
        "MongoDB",
        "C++"
      ]
    },
    {
      title: "Source Control",
      description: ["GitHub", "Docker", "K8s"]
    }
  ],
  portfolio: [
    {
      tag: "React",
      image: "https://miro.medium.com/max/800/1*HwW_6fZu8ZH9xU4s1lbqRw.png",
      title: "Project1",
      caption: "This is a short description",
      description: "This is my project for HR-Bank",
      links: [
        {url: "https://google.com.tw", icon: <SearchIcon />},
        {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    },
    {
      tag: "React",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYxtVDT-LIblOrUUWjP0c0w3i2RieyKnlIA&usqp=CAU",
      title: "Project2",
      caption: "This is a short description",
      description: "This is my project for Portfolio",
      links: [
        {url: "https://google.com.tw", icon: <SearchIcon />},
        {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    },
    {
      tag: "AI",
      image: "https://mk0newemarsyscoio7ar.kinstacdn.com/app/uploads/fly-images/39027/real-ai-1110x9999.jpg",
      title: "Project1",
      caption: "This is a short description",
      description: "This is my project for AI",
      links: [
        {url: "https://google.com.tw", icon: <SearchIcon />},
        {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    },
    {
      tag: "Automation Control",
      image: "https://www.ric.com.au/wp-content/uploads/2018/03/automation-control-systems-service-division.jpg",
      title: "Project1",
      caption: "This is a short description",
      description: "This is my project for Automation",
      links: [
        {url: "https://google.com.tw", icon: <SearchIcon />},
        {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    }
  ]
}

export default resumeData;
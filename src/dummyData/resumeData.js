import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from '@material-ui/icons/Web';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

// import LdUnLdSystemVideo from "../../assets/videos/LoadUnloadSystem.mp4";

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
    // Facebook: {
    //   link: "https://www.facebook.com",
    //   displayText: "MyFacebook",
    //   icon: <FacebookIcon /> 
    // },
    // Twitter: {
    //   link: "https://www.twitter.com",
    //   displayText: "MyTwitter",
    //   icon: <TwitterIcon /> 
    // },
    // LinkedIn: {
    //   link: "https://www.linkedin.com",
    //   displayText: "MyLinkedIn",
    //   icon: <LinkedInIcon /> 
    // },
    // Github: {
    //   link: "https://www.github.com",
    //   displayText: "MyGithub",
    //   icon: <GitHubIcon /> 
    // }
  },
  about: `您好，我畢業於臺灣科技大學電機工程系，目前有六年軟體工作經驗，接觸並執行過各種專案，多年的積累與不斷的學習使我成為一個跨領域橫向發展的軟體工程師。

  進入職場後的第一份工作主要利用PLC撰寫各式自動化設備程式: 如雙液點膠機、真空灌注機、電池物流conveyor生產線、16軸Load/Unload機台等。 由於本身對於語言學習有很大的興趣，平常會利用閒暇時間學習其他程式語言及框架知識，並在公司給予機會下， 開始利用C++及C# 撰寫LED分類機，進而學習PC-Based軸卡、IO卡、相機應用及影像辨識等知識。 

  第二份工作負責工業 4.0 智慧工廠專案，依據客戶功能需求，利用 Python 和 JavaScript 撰寫網頁後端程式、蒐集機台各種資料，並完成設備狀態監控、能源監控、品質監控、OEE、 工單管理等功能，這使我對工業 4.0 物聯網有了初步的認識，並培養了撰寫網頁前後端系統、 資料整合處理、資料庫應用、串接 API 等技能。

  目前在工業電腦大廠研華科技擔任 iFactory 高級工程師，主要也是負責智慧工廠專案，例如: 基於雲端平台結合 k8s 技術開發產線戰情室看板、撰寫資料結轉 API、網頁前後端系統、資料倉儲建置、導入爬蟲/RPA 技術做大數據資料蒐集、異質系統串聯及減少公司人力成本等。

  在外語能力方面，雖然已取得TOEIC 900分，平常仍會透過觀看美國影集來練習英文聽力及學習各種生活用語。除此之外，與公司外國同事聊天及討論專案需求也是我練習口語的方法之一。

  「智慧製造」涉及領域甚廣，跨領域整合的人才不多，有幸能從過去工作多個專案中，撰寫各種領域類型的程式，要成為一個頂尖的軟體人才，除了須瞭解多種程式語言及框架之外，還需要各產業應用的相關知識，舉凡檔案操作、網路通訊編程、多線程編程、機器視覺知識、圖像處理知識、運動控制知識、狀態機規劃、自動校正演算法及各種人性化的介面設計等等，這些都需要經過時間和各種專案經驗一點一滴的磨練和養成，未來除了會不斷地要求自己在此領域有所精進之外，也會用最大的熱誠去學習各種相關知識。

我已做好準備，期待為您投入全部心力!`,
  experiences: [
    {
      title: "iFactory高級工程師  - Advantech",
      duration: "2020/03 - Present",
      description: ""
    },
    {
      title: "IIoT軟體工程師 - Pioneer Machinery",
      duration: "2018/06 - 2020/03",
      description: ""
    },
    {
      title: "自動化設備軟體工程師 - Chroma",
      duration: "2014/12 - 2018/06",
      description: ""
    }
  ],
  education: [
    {
      title: "中央大學 - 資管所在職碩班",
      duration: "2021/09 - Present",
      description: ""
    },
    {
      title: "臺灣科技大學 - 電機工程系",
      duration: "2009/09 - 2013/06",
      description: ""
    },
    {
      title: "大安高工 - 自動控制科",
      duration: "2005/09 - 2008/06",
      description: ""
    }
  ],
  services: [
    // {
    //   title: "Web Dev",
    //   description: "I have been working on web design for 10 years.",
    //   icon: <WebIcon />
    // }
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
        "Redis",
        "Elasticsearch",
        "Kafka"
      ]
    },
    {
      title: "Other",
      description: ["Git", "Docker", "K8s", "PLC"]
    }
  ],
  portfolio: [
    {
      tag: "Python",
      image: "https://miro.medium.com/max/800/1*HwW_6fZu8ZH9xU4s1lbqRw.png",
      video: [
        {
          "videoPath": "assets/videos/screwdrive_operation_demo.AVI",
          "title": "operation"
        },
        {
          "videoPath": "assets/videos/screwdrive_software_demo.mp4",
          "title": "software"
        }
      ],
      title: "Electric Screwdriver System",
      caption: "電動螺絲起子即時監控系統",
      description: "本系統採用前後端分離的Web-based架構，並利用Electron整合成桌面應用程式。透過撰寫RS232串列通訊，可以取得每個螺絲的即時/歷史鎖附資訊來確認是否浮鎖、打滑或扭力過大等情況，確保產線一定的生產品質。",
      links: [
        // {url: "https://google.com.tw", icon: <SearchIcon />},
        // {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        // {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    },
    {
      tag: "React",
      image: "https://miro.medium.com/max/1132/1*N0-ikjPv4RUVvS-6KCgLPg.jpeg",
      title: "Movies and TV Series Searching App",
      caption: "即時查詢現今最新流行的電影及電視劇",
      description: "本系統透過串接themoviedb OpenAPI，可以即時查詢現今最新流行的電影及電視劇，並提供平均評分及演員陣容等資訊。",
      links: [
        {url: "https://portfolio-ui-movie-list.netlify.app/", icon: <WebIcon />}
        // {url: "https://google.com.tw", icon: <SearchIcon />},
        // {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        // {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    },
    {
      tag: "AI",
      image: "https://mk0newemarsyscoio7ar.kinstacdn.com/app/uploads/fly-images/39027/real-ai-1110x9999.jpg",
      title: "Image Recognition & Object Detection",
      caption: "AI影像辨識&物件偵測",
      description: "本系統採用前後端分離架構，",
      links: [
        {url: "https://ai-portfolio-ui.netlify.app/", icon: <WebIcon />}
        // {url: "https://google.com.tw", icon: <SearchIcon />},
        // {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        // {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    },
    {
      tag: "Automation Control",
      image: "https://www.ric.com.au/wp-content/uploads/2018/03/automation-control-systems-service-division.jpg",
      // video: "https://www.youtube.com/embed/9YffrCViTVk",
      video: "assets/videos/LoadUnloadSystem.mp4",
      title: "Load Unload System",
      caption: "電池流體產線-多軸運動控制",
      description: "本系統為PLC-based，採用三菱Q系列PLC搭配QD77MS16運動控制模組作多軸移載控制。",
      links: [
        // {url: "https://google.com.tw", icon: <SearchIcon />},
        // {url: "https://youtube.com.tw", icon: <YouTubeIcon />},
        // {url: "https://github.com.tw", icon: <GitHubIcon />},
      ]
    },
    {
      tag: "Automation Control",
      image: "https://www.mpi-corporation.com/wp-content/uploads/2018/11/High-Speed-Die-Sorting_2_.jpg",
      title: "LED Sorting System",
      caption: "LED分類機",
      description: `本系統為PC-based，搭配運動軸卡、IO卡、影像擷取卡等作LED等級分類系統。為了降低程式耦合度，根據功能劃分各種不同模組，其中包含狀態機、晶粒掃描&排序演算 法、影像辨識、運動控制、IO 控制及 shop flow 等，並將其獨立出 dll 檔，以利其他相似專案 也可使用，主程式也可專注在狀態機邏輯撰寫上。此外，為了增加執行效率，狀態機部分採 用多線程工作，並與 UI 線程分離，如此 UI 可專注在畫面更新的部分。
      備註: 影片擷取自，非工作專案。`,
      links: [
        // {url: "/pdf/led-sorter-project.pdf", icon: <PictureAsPdfIcon />}
        {url: "assets/pdfs/led-sorter-project.pdf", icon: <PictureAsPdfIcon />, isPDF: true}
      ]
    },
    {
      tag: "k8s",
      image: "https://advcloudfiles.advantech.com/cms/96040af0-6c85-4b39-8546-75c3dcf4a364/Content/content-image-1562839585341.png",
      title: "Digital Signage System",
      caption: "產線戰情室電子看板",
      description: `本系統基於k8s容器管理技術在私有雲上做部屬，並針對產線需求開發工單管理、品質監控、換線工時、Lead Time等電子看板功能。`,
      links: [
        // {url: "/pdf/led-sorter-project.pdf", icon: <PictureAsPdfIcon />}
        {url: "assets/pdfs/privatecloud-k8s-project.pdf", icon: <PictureAsPdfIcon />, isPDF: true}
      ]
    }
  ]
}

export default resumeData;
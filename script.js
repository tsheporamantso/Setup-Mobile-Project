// Card-1
const title1 = 'Tonic';
const subtitles1 = ['Canopy', 'Back end Dev', '2015'];
const description1 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl1 = './images/Snapshoot Portfolio.svg';
const technologies1 = ['html', 'css', 'javascript'];
const projectData1 = {
  title: title1,
  subtitles: subtitles1,
  description: description1,
  image: imgUrl1,
  technologies: technologies1,
};

// Card-2
const title2 = 'Multi-Post Stories';
const subtitles2 = ['Canopy', 'Back end Dev', '2015'];
const description2 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl2 = './images/Snapshoot Portfolio(2).svg';
const technologies2 = ['html', 'css', 'javascript'];
const projectData2 = {
  title: title2,
  subtitles: subtitles2,
  description: description2,
  image: imgUrl2,
  technologies: technologies2,
};

// Card-3
const title3 = 'Tonic';
const subtitles3 = ['Canopy', 'Back end Dev', '2015'];
const description3 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl3 = './images/Snapshoot Portfolio(3).svg';
const technologies3 = ['html', 'css', 'javascript'];
const projectData3 = {
  title: title3,
  subtitles: subtitles3,
  description: description3,
  image: imgUrl3,
  technologies: technologies3,
};

// Card-4
const title4 = 'Multi-Post Stories';
const subtitles4 = ['Canopy', 'Back end Dev', '2015'];
const description4 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl4 = './images/Snapshoot Portfolio(4).svg';
const technologies4 = ['html', 'css', 'javascript'];
const projectData4 = {
  title: title4,
  subtitles: subtitles4,
  description: description4,
  image: imgUrl4,
  technologies: technologies4,
};

// Array for all data
const ProjectsData = [projectData1, projectData2, projectData3, projectData4];

const cardImg = document.querySelectorAll('.project1');
const titles = document.querySelectorAll('.project-name');
const subtitles = document.querySelectorAll('.client');
const description = document.querySelectorAll('.project-description');
const technologies = document.querySelectorAll('.coding-lang');
const projectDetailsBtn = document.querySelectorAll('.see-project');

const dotImg = './images/Counter.svg';

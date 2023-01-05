const hamburger = document.querySelector('.hamburger');
const desktopNav = document.querySelector('.desktop-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  desktopNav.classList.toggle('active');
});

document.querySelectorAll('.navbar-tools').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    desktopNav.classList.remove('active');
  }));

const body = document.querySelector('body');
const btn = document.querySelector('.see-project');
btn.addEventListener('click', () => {
  const section = document.createElement('div');
  const popup = document.createElement('div');
  section.className = 'mobile-popup';
  popup.className = 'modal';
  popup.innerHTML = `
                <div class="popup-header">
                    <h1 class="card-heading">Tonic</h1>
                    <button data-close-button class="close-btn">&times;</button>
                </div>
                    <div class="title">  
                        <ul class="card-client">
                            <li class="client-name">CANOPY</li>
                            <li>
                                <img class="period-1" src="./images/Counter.svg" alt="period">
                            </li>
                            <li class="duties">Back End Dev</li>
                            <li>
                                <img class="period-2" src="./images/Counter.svg" alt="period">
                            </li>
                            <li class="work-year">2015</li>
                        </ul>
                        <div class="card-img">
                            <img class="project-img" src="./images/Snapshoot Portfolio.svg" alt="project-image">
                        </div>
                        <p class="popup-project-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essent</p>
                        <ul class="coding-lang">
                            <li class="popup-html">
                                <a href="#" class="cl">html</a>
                            </li>
                            <li class="popup-css">
                                <a href="#" class="cl">css</a>
                            </li>
                            <li class="popup-javascript">
                                <a href="#" class="cl">javascript</a>
                            </li>
                        </ul>
                        <hr id="line-pop">
                        <div class="btn-container">
                        <button class="see-live-container-btn">
                            <a id="btn-icon" href="#" class="see-live-btn">See live &nbsp
                                <img src="./images/Icon.svg" alt="see-live-icon">
                            </a>
                        </button>
                        <button class="see-source-container-btn">
                            <a id="btn-icon" href="#" class="see-source-btn">See Source &nbsp
                                <img src="./images/github-icon.svg" alt="see-source-icon">
                            </a>
                        </button>
                        </div>
                        <div id="overlay"></div>
                    </div>    
`;
  section.appendChild(popup);
  body.appendChild(section);
  const close = document.querySelector('.close-btn');

  close.addEventListener('click', () => {
    body.removeChild(section);
  });
});

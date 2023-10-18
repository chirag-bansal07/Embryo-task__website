import './header.css'
function Header(){
    return(
        <header class="header">
        <div class="header__content">
          <div class="header__logo-container">
            <p>BITS <span>Embryo</span></p>
          </div>
          <div class="header__main">
              <ul class="header__link-wrapper">
                <a href="./index.html" class="header__link"> Home </a>
              </ul>
              <ul class="header__link-wrapper">
                <a href="./index.html#about" class="header__link">About </a>
              </ul>
              <ul class="header__link-wrapper">
                <a href="./index.html#Lectures" class="header__link">Lectures</a>
              </ul>
              <ul class="header__link-wrapper">
                <a href="./index.html#Panel" class="header__link"> Panels </a>
              </ul>
              <ul class="header__link-wrapper">
                <a href="./index.html#APOGEE Innovation Challenge" class="header__link"> APOGEE Innovation Challenge </a>
              </ul>
              <ul class="header__link-wrapper">
                <a href="./index.html#Team" class="header__link"> Team </a>
              </ul>
              <ul class="header__link-wrapper">
                <a href="./index.html#Contect" class="header__link"> Contect </a>
              </ul>
          </div>
        </div>
    </header>)
}
export default Header;
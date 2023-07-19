const Header = () => {
    return ( 
        <header className="header">
        <div className="header__inner">
          <div className="logo-block">
            <img className="logo" src="images/logo.svg" alt="logo" />
            <p className="logo__text">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </p>
          </div>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Услуги
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Виджеты
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Интеграции
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Кейсы
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="#">
                  Сертификаты
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__links">
            <a className="phone" href="tel:+755555555">
              +7 555 555-55-55
            </a>
            <ul>
              <li>
                <a href="#">
                  <img src="images/icons/telegram.svg" alt="telegram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/icons/viber.svg" alt="viber" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/icons/whatsapp.svg" alt="whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
     );
}
 
export default Header;
const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="footer__inner">
          <ul className="footer-menu">
            <li className="footer-menu__item">
              <h6 className="footer-menu__title">О компании</h6>
              <a className="footer-menu__link" href="#">
                Партнёрская программа
              </a>
              <a className="footer-menu__link" href="#">
                Вакансии
              </a>
            </li>
            <li className="footer-menu__item">
              <h6 className="footer-menu__title">Меню</h6>
              <a className="footer-menu__link" href="#">
                Расчёт стоимости
              </a>
              <a className="footer-menu__link" href="#">
                Услуги
              </a>
              <a className="footer-menu__link" href="#">
                Виджеты
              </a>
              <a className="footer-menu__link" href="#">
                Интеграции
              </a>
              <a className="footer-menu__link" href="#">
                Наши клиенты
              </a>
            </li>
            <li className="footer-menu__item">
              <a className="footer-menu__link" href="#">
                Кейсы
              </a>
              <a className="footer-menu__link" href="#">
                Благодарственные письма
              </a>
              <a className="footer-menu__link" href="#">
                Сертификаты
              </a>
              <a className="footer-menu__link" href="#">
                Блог на Youtube
              </a>
              <a className="footer-menu__link" href="#">
                Вопрос / Ответ
              </a>
            </li>
          </ul>
          <div className="contacts">
            <h6 className="contacts__title">Контакты</h6>
            <a className="phone footer" href="tel:+75555555">
              +7 555 555-55-55
            </a>
            <div className="footer__links">
              <a href="#">
                <img src="images/icons/telegram.svg" alt="telegram" />
              </a>
              <a href="#">
                <img src="images/icons/viber.svg" alt="viber" />
              </a>
              <a href="#">
                <img src="images/icons/whatsapp.svg" alt="whatsapp" />
              </a>
            </div>
            <a className="adress" href="#">
              Москва, Путевой проезд 3с1, к 902
            </a>
            <p className="rights">©WELBEX 2022. Все права защищены.</p>
            <a className="policy" href="#">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;
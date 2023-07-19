const Content = () => {
    return ( 
        <div className="info">
              <div className="info__inner">
                <div className="tagline-block">
                  <h1 className="tagline-block__title">Зарабатывайте больше</h1>
                  <h1 className="tagline-block__title colorfull">с WELBEX</h1>
                  <p className="tagline-block__text">
                    Развиваем и контролируем продажи за вас
                  </p>
                </div>
                <div className="consult-block">
                  <h3 className="consult-block__title">
                    Вместе с <span>бесплатной консультацией </span>мы дарим:
                  </h3>
                  <div className="advantages">
                    <div className="advantages__item">
                      <h4 className="advantages__item-title">
                        {window.innerWidth > 680 ? " Виджеты" : "SKYPE АУДИТ"}
                      </h4>
                      <p className="advantages__item-text">
                        30 готовых решений
                      </p>
                    </div>
                    <div className="advantages__item">
                      <h4 className="advantages__item-title">
                        {window.innerWidth > 680 ? "Dashboard" : "30 виджетов"}
                      </h4>
                      <p className="advantages__item-text">
                        с показателями вашего бизнеса
                      </p>
                    </div>
                    <div className="advantages__item">
                      <h4 className="advantages__item-title">
                        {window.innerWidth > 680 ? "Skype Аудит" : "Dashboard"}
                      </h4>
                      <p className="advantages__item-text">
                        отдела продаж и CRM системы
                      </p>
                    </div>
                    <div className="advantages__item">
                      <h4 className="advantages__item-title">
                        {window.innerWidth > 680 ? "35 дней" : "Месяц аmoCRM"}
                      </h4>
                      <p className="advantages__item-text">использования CRM</p>
                    </div>
                  </div>
                  <button className="consult__button">
                    <a href="#">Получить консультацию</a>
                  </button>
                </div>
              </div>
            </div>
     );
}
 
export default Content;
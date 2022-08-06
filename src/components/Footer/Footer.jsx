import React from "react";
import clasess from '../Footer/Footer.module.css';

const Footer = () => {

    return (
        <footer>
            <div className={clasess.footer}>
                <div className="container">
                    <div className={clasess.footer__row}>
                        <div className={clasess.footer__top}>
                            <div className={clasess.footer__email}>
                                <p>Почта: <a href="mailto:test@crypro-grizzle.tech">test@crypro-grizzle.tech</a></p>
                            </div>
                            <div className={`${clasess.footer__icons} ${clasess.icon}`}>
                                <div><a><img src="/img/3536661.png" alt="Логотип телеграмма" /></a></div>
                                <div> <a><img src="/img/2111463.png" alt="Логотип инстаграмма" /></a></div>
                                <div> <a><img src="/img/3536424.png" alt="Логотип твитера" /></a></div>
                            </div>
                        </div>
                        <div className={clasess.footer__bottom}>
                            <div className={clasess.footer__descr}>
                                <p>Crypto Grizzly community - сообщество для разбора актуальный тем.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
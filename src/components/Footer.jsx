import React from "react";

const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__email">
                            <p>Почта: <a href="mailto:test@crypro-grizzle.com">test@crypro-grizzle.com</a></p>
                        </div>
                        <div className="footer__descr">
                            <p>Crypto Grizzly community - сообщество для разбора актуальный тем.</p>
                        </div>
                        <div className="footer__icons icons">
                            <div><a><img src="/img/3536661.png" alt="Логотип телеграмма" /></a></div>
                            <div> <a><img src="/img/2111463.png" alt="Логотип инстаграмма" /></a></div>
                            <div> <a><img src="/img/3536424.png" alt="Логотип твитера" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
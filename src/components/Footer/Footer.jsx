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
                                <p>Почта: <a href="mailto:admin@crypto-grizzly.tech">admin@crypto-grizzly.tech</a></p>
                            </div>
                            <div className={`${clasess.footer__icons} ${clasess.icon}`}>
                                <div><a href="https://t.me/+Wg2w6nlnbM9hYWY6" target='_blank'><img src="/img/3536661.png" alt="Логотип телеграмма" /></a></div>
                                <div> <a><img src="/img/2111463.png" alt="Логотип инстаграмма" /></a></div>
                                <div> <a><img src="/img/3536424.png" alt="Логотип твитера" /></a></div>
                            </div>
                        </div>
                        <div className={clasess.footer__bottom}>
                            <div className={clasess.footer__descr}>
                                <p>Crypto Grizzly Community - Ваш поводырь в мире криптовалют.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import React from "react";
import clasess from '../Footer/Footer.module.css';

const Footer = () => {

    return (
        <footer>
            <div className={clasess.footer}>
                <div className="container">
                    <div className={clasess.footer__row}>
                        <div className={clasess.footer__email}>
                            <p>Почта: <a href="mailto:admin@crypto-grizzly.tech">admin@crypto-grizzly.tech</a></p>
                        </div>
                        <div className={clasess.footer__descr}>
                            <p>Crypto Grizzly Community - Ваш поводырь в мире криптовалют.</p>
                        </div>
                        <div className={`${clasess.footer__icons} ${clasess.icon}`}>
                            <span><a href="https://t.me/+Wg2w6nlnbM9hYWY6" target='_blank'><img src="/img/telegram.svg" alt="Логотип телеграмма" /></a></span>
                            <span><a><img src="/img/inst.svg" alt="Логотип инстаграмма" /></a></span>
                            <span><a><img src="/img/twiter.svg" alt="Логотип твитера" /></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
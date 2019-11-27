"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Реклама',
    website: {
        title: 'Размещение на сайте',
        text1: `
      <p>
        🍃<b> Minterscan</b> — это самый популярный эксплорер Minter сети.
        <br>
        Больше {pageviews} просмотров и свыше {visitors} уникальных пользователей в месяц.
      </p>
    `,
        text2: `
      <p>
        Minterscan — это возможность для проектов и команд разработчиков
        рассказать о себе десяткам тысяч пользователей Минтера.
        Обратитесь к аудитории Minter с помощью рекламного блока,
        отображаемого в верхней части сайта.
      </p>
      <p>
        Рекламные материалы отображаются в ротации, доступно 10 слотов.
        Стоимость рекламы на сайте — <b>{websitePrice} MSCAN</b> за 10% слот.
      </p>
    `,
        example: 'Пример размещения',
        requirements: `
      <ul>
        <li>PNG иконка, 48x48 пикселей</li>
        <li>Заголовок, до 20 символов</li>
        <li>Текст, до 100 символов</li>
      </ul>
    `
    },
    telegram: {
        title: 'Публикация в Telegram',
        text1: `
      <p>🍃<b> Minterscan</b> в Telegram — это качественные публикации на актуальные темы.</p>
      <p>
        <a href="https://t.me/minterscan" taget="_blank">Русскоязычный канал</a> —
        это <b>{ruSubscribers}</b> живых подписчиков, охват одного поста ~ <b>{ruCoverage}</b>,
        ERR ~ <b>{ruErr}%</b>.
        Актуальная статистика доступна на
        <a href="https://tgstat.ru/channel/@minterscan" target="_blank">Tgstat.ru</a>
        <br>
        <a href="https://t.me/minterscan_en" taget="_blank">Англоязычный канал</a> —
        это <b>{enSubscribers}</b> живых подписчиков, охват одного поста ~ <b>{enCoverage}</b>,
        ERR ~ <b>{enErr}%</b>.
        Актуальная статистика доступна на
        <a href="https://tgstat.ru/channel/@minterscan_en" target="_blank">Tgstat.ru</a>
      </p>
      <p>
        В большинстве случаев мы редактируем рекламные посты в соответствии с нашим стилем.
        Мы не публикуем репосты, не публикуем сообщения, написанные КАПСОМ и не публикуем
        сообщения, в которых каждый второй символ это эмоджи. Канал читают живые люди, которые
        привыкли к нашему формату и ценят это. Если вас это не устраивает,
        найдите другой канал для рекламы.
      </p>
      <p>
        Стоимость рекламы в
        <a href="https://t.me/minterscan" taget="_blank">русскоязычном канале</a>
        — <b>{ruTelegramPrice} MSCAN</b>.
        Стоимость рекламы в
        <a href="https://t.me/minterscan_en" taget="_blank">англоязычном канале</a>
        — <b>{enTelegramPrice} MSCAN</b>.
      </p>
    `
    },
    disclaimer: `
    <p>
      Мы не рекламируем проекты сомнительного качества и оставляем за собой
      право в отказе от размещения рекламы без объяснения причин.
    </p>
  `,
    contacts: {
        title: 'Контакты',
        text: `
      <p>
        Чтобы разместить рекламу вашего проекта, пожалуйста, свяжитесь с нами через 
        <a href="{urlTelegram}" target="_blank">Telegram бота</a> или 
        <a href="{urlForm}" target="_blank">заполните форму</a>.
      </p>
    `
    }
};
//# sourceMappingURL=ads.js.map
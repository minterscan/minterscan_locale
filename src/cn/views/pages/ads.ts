export default {
  title: 'Advertising',
  website: {
    title: 'Website',
    text1: `
      <p>
        🍃<b> Minterscan</b> is a most popular Minter blockchain explorer.
        <br>
        Over {pageviews} page views and more than {visitors} unique visitors per month.
      </p>
    `,
    text2: `
      <p>
        Advertising on Minterscan is an opportunity for projects and teams
        to reach tens of thousands Minter users through sponsored content.
        Attract Minter audience attention with the unobtrusive ads
        displayed at the top of Minterscan pages.
      </p>
      <p>
        To advertise your project, please
        <a href="{url}">fill the form</a>.
      </p>
      <p>
        Advertising cost is <b>{websitePrice} MSCAN</b> per 10% slot.
        Promotional materials are displayed in rotation,
        from one advertiser no more than 5 slots (50%) of the total number of impressions.
      </p>
    `,
    example: 'Example',
    requirements: `
      <ul>
        <li>PNG icon, 48x48 pixels</li>
        <li>Title, up to 20 symbols</li>
        <li>Text, up to 100 symbols</li>
      </ul>
    `
  },
  telegram: {
    title: 'Telegram',
    text1: `
      <p>🍃<b> Minterscan</b> in Telegram is a quality posts on relevant topics.</p>
      <p>
        <a href="https://t.me/minterscan" taget="_blank">Russian channel</a> —
        <b>{ruSubscribers}</b> real subscribers, post coverage ~ <b>{ruCoverage}</b>, ERR ~ <b>{ruErr}%</b>.
        Actual statistics available on
        <a href="https://tgstat.ru/channel/@minterscan" target="_blank">Tgstat.ru</a>
        <br>
        <a href="https://t.me/minterscan_en" taget="_blank">English channel</a> —
        <b>{enSubscribers}</b> real subscribers, post coverage ~ <b>{enCoverage}</b>, ERR ~ <b>{enErr}%</b>.
        Actual statistics available on
        <a href="https://tgstat.ru/channel/@minterscan_en" target="_blank">Tgstat.ru</a>
      </p>
      <p>
        In most cases, we edit advertising posts in accordance with our style.
        We do not publish reposts, do not publish messages written by CAPS and do not publish
        messages in which every second character is emoji. The channel is read by living people who
        know our format and appreciate it. If this doesn’t suit you,
        find another channel for advertising.
      </p>
      <p>
        Advertising cost in
        <a href="https://t.me/minterscan" taget="_blank">russian channel</a>
        — <b>{ruTelegramPrice} MSCAN</b>.
        Advertising cost in
        <a href="https://t.me/minterscan_en" taget="_blank">english channel</a>
        — <b>{enTelegramPrice} MSCAN</b>.
      </p>
    `
  },
  disclaimer: `
    <p>
      We do not advertise poor quality projects and reserve
      the right to refuse to advertise without giving reasons.
    </p>
  `
}

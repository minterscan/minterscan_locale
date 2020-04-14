export default {
  subtitle: 'Minter голосование за {title}',
  text: `
    <p>Minter сообщество голосует за {title}. Текущий раунд предусматривает только два варианта:</p>
    <ul>
      <li>Отправьте <b>{yes}</b> если вы голосуете ЗА</li>
      <li>Отправьте <b>{no}</b> если вы голосуете ПРОТИВ</li>
    </ul>
  `,
  timesLeft: 'Осталось времени',
  howToVote: 'Как голосовать',
  howToVoteText: `
    Чтобы проголосовать, отправьте любое количество
    BIP на <a href="/address/{address}" target="_blank">этот адрес</a>.
    Вставьте в сообщение к транзакции желаемый вариант.
  `,
  votesFirst: 'ЗА',
  votesSecond: 'ПРОТИВ',
  result: 'Результаты'
}

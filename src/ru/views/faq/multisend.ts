export default {
  title: 'Multisend',
  text0: `
    <p>
      <b>Minter Multisend</b> это удобная утилита для отправки Multisend транзакций с открытым исходным кодом.
      Код был проверен Frontend-разработчиком команды Minter
      <a href="https://github.com/shrpne" target="_blank">Никитой Ейбогом</a> и он не обнаружил
      явных уязвимостей для утечки seed фразы или приватного ключа.
    </p>
  `,
  text1: `
    <p>
      <p class="title is-size-6">Назначение</p>
      Отправка множественных транзакций на разные адреса.
      Например для кешбека, рассылки награды в конкурсах, отправки денег на свои личные кошельки.
    </p>
  `,
  text2: `
    <p>
      <p class="title is-size-6">Возможности утилиты</p>
      <ul>
        <li>Авторизация по seed фразе или  приватному ключу</li>
        <li>Импорт адресов в CSV формате</li>
        <li>Ручной ввод адресов</li>
        <li>Отправка в любых доступных монетах, не только в BIP</li>
        <li>Комиссия за транзакцию в BIP</li>
      </ul>
    </p>
    <p>
      <p class="title is-size-6">Как использовать</p>
      Скачайте архив на свой компьютер, разархивируйте и запустите в браузере файл <b>index.html</b>
    </p>
    <p>
      <p class="title is-size-6">Безопасность при работе с утилитой</p>
      Несмотря на то, что код открыт и выполняет только одну функцию — отправку multisend транзакций.
      И невзирая на то, что код был проанализирован разработчиками Minter.
      При работе с вашим личным кошельком <b>ВСЕГДА</b> нужно соблюдать меры безопасности.
    </p>
    <p>
      <ul>
        <li>Создайте отдельный кошелек для отправки Multisend транзакций</li>
        <li>Держите баланс этого кошелька всегда равным 0 BIP</li>
        <li>Переводите деньги на кошелек непосредственно перед отправкой транзакции</li>
        <li>
          Используйте браузер без установленных расширений.
          Любое расширение, которое требует доступ ко всем вкладкам потенциально может быть опасным.
        </li>
      </ul>
    </p>
  `,
  text3: `
    <p>
      Код открыт. Приглашаем всех разработчиков проанализировать код и сделать свой вывод о его безопасности.
      Если вы нашли ошибку — оформляйте pull request на Github.
    </p>
    <p>
      И да пребудет с вами Сила 🙏
    </p>
  `,
  buttonLabel0: 'Исходный код',
  buttonLabel1: 'Скачать утилиту',
  buttonLabel2: 'Онлайн версия'
}

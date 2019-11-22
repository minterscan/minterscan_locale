export default {
  title: 'Minterscan API',
  disclaimer:
    'API работает в бета режиме, предоставляется как есть, используйте на свой страх и риск',
  text0: `Базовый URL для API:`,
  text1: `<b>GET</b> запрос, возвращает <a href="/faq/address-icons">иконку адреса</a>`,
  text2: `<b>GET</b> запрос, возвращает список всех <a href="/profiles">профилей</a>`,
  text3: `<b>GET</b> запрос, возвращает <a href="/faq/address-metadata">профиль</a>`,
  text4: `<b>GET</b> запрос, возвращает список <a href="/validators">кандидатов</a>`,
  text5: `
    <b>GET</b> запрос, возвращает данные о
    <a href="/validator/Mp03478aae43a1a660573fab0763ae44492cdaf8deffc3fcbcc844acd67dfb2db6">кандидате</a>
  `,
  text6: `
    <b>GET</b> запрос, возвращает список делегаторов
    <a href="/validator/Mp03478aae43a1a660573fab0763ae44492cdaf8deffc3fcbcc844acd67dfb2db6">кандидата</a>.
    Все параметры опциональные:
    <ul>
      <li>count — количество делегаторов</li>
      <li>coin — фильтр делегаторов по монете</li>
      <li>min_limit — фильтр делегаторов по минимальному стейку</li>
      <li>max_limit — фильтр делегаторов по максимальном стейку</li>
      <li>random — перемешать результаты случайным образом</li>
    </ul>
  `
}

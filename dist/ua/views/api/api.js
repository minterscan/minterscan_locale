"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Minterscan API',
    disclaimer: 'API працює в бета режимі, надається як є, використовуйте на свій страх і ризик',
    text0: `Базовий URL для API:`,
    text1: `<b>GET</b> запит, повертає <a href="/faq/address-icons">іконку адреси</a>`,
    text2: `<b>GET</b> запит, повертає список всіх <a href="/profiles">профілів</a>`,
    text3: `<b>GET</b> запит, повертає <a href="/faq/address-metadata">профіль</a>`,
    text4: `<b>GET</b> запит, повертає список <a href="/validators">кандидатів</a>`,
    text5: `
    <b>GET</b> запит, повертає дані про
    <a href="/validator/Mp03478aae43a1a660573fab0763ae44492cdaf8deffc3fcbcc844acd67dfb2db6">кандидата</a>
  `,
    text6: `
    <b>GET</b> запит, повертає список делегаторів
    <a href="/validator/Mp03478aae43a1a660573fab0763ae44492cdaf8deffc3fcbcc844acd67dfb2db6">кандидата</a>.
    Всі параметри опціональні:
    <ul>
      <li>count — кількість делегаторів</li>
      <li>coin — фільтр делегаторів по монеті</li>
      <li>min_limit — фільтр делегаторів по мінімальному стейку</li>
      <li>max_limit — фільтр делегаторів по максимальном стейку</li>
      <li>random — перемішати результати випадковим чином</li>
    </ul>
  `
};
//# sourceMappingURL=api.js.map
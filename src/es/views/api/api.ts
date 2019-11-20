export default {
  title: 'API de Minterscan',
  disclaimer: 'API está en beta, usándola en este estado, úselo bajo su propio riesgo',
  text0: `API base URL:`,
  text1: `<b>GET</b> request, returns <a href="/faq/address-icons">address' icon</a>`,
  text2: `<b>GET</b> request, returns list of <a href="/profiles">profiles</a>`,
  text3: `<b>GET</b> request, returns <a href="/faq/address-metadata">profile</a>`,
  text4: `<b>GET</b> request, returns list of <a href="/validators">candidates</a>`,
  text5: `
    <b>GET</b> request, returns data about
    <a href="/validator/Mp03478aae43a1a660573fab0763ae44492cdaf8deffc3fcbcc844acd67dfb2db6">candidate</a>
  `,
  text6: `
    <b>GET</b> request, returns delegators list of
    <a href="/validator/Mp03478aae43a1a660573fab0763ae44492cdaf8deffc3fcbcc844acd67dfb2db6">candidate</a>.
    All parameters are optional:
    <ul>
      <li>count — count to return</li>
      <li>coin — filter delegators by coin</li>
      <li>min_limit — filter delegators by minimal stake</li>
      <li>max_limit — filter delegators by maximal stake</li>
      <li>random — shuffle results by random</li>
    </ul>
  `
}

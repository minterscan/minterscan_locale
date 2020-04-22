export default {
  title: 'Perfil de Minterscan',
  disclaimer: `
    <p class="title is-size-6">Key Idea</p>
    <p>
      Minterscan offers any user of Minter network ability to fill information about their profile.
      It's possible to set the name of your project or owner's name, icon,
      link to website, describe what your project about
      or what's the reason why you created this wallet.
      All users of Minterscan will see information about your wallet.
      Example of filled and verified wallet —
      <a href="/address/Mxffac2e033de7ae840445bad08caa2eb99de76ef2">our own address</a>.
    </p>
    <p><b>All address data, including metadata, is stored in the blockchain</b></p>
    <p>
      It works with with <a href="/pco">MSCAN coin</a>.
      Data can be updated without limiting the number of times.
      Want to change something? Send a new transaction.<br/>
      Data on a website is updated instantly.
    </p>
  `,
  text1: `
    <p><b>How to update data</b></p>
    1. Open <a href="https://console.minter.network/" target="_blank">Minter console</a>
    or your mobile wallet and paste following address:
  `,
  text2: `
    <p>2. Fill the form and copy value from grey box into "Message" field in console:</p>
  `,
  text3: `Push the button to copy text`,
  text4: `
    <p>3. After this send <b>1 MSCAN</b> to our address.</p>
    If you're already delegated any amount of <b>MSCAN</b> to <b>Zen</b> masternode,
    you can send 0 (only transaction fee will be paid)
  `,
  meta: {
    address: 'Su dirección',
    title: 'Título del proyecto o su nombre real',
    icon: 'URL al icono o foto, archivo JPG / PNG / GIF / WEBP / SVG',
    www: 'URL del sitio web o perfil social, required for verification',
    description: 'Descripción del proyecto o cualquier otra información útil'
  }
}

export default {
  title: 'Validator Rating',
  power: 'Voting power',
  disclaimer: `
    <p class="title is-size-6">Key Idea</p>
    <p>
      Minterscan propose all users of the Minter network to make an honest, transparent rating,
      based on user sympathy.
      Not dependent on how long the validator has been working on the network.
      Newcomers are also can take first place of the ranking if they provide first-class services to their delegates.
      If the delegates are satisfied with the service, it will not be difficult for them to spend one minute to vote.
    </p>
    <p><b>All validator data, including rating, is stored in the blockchain</b></p>
    <p>
      You can vote with <a href="/pco">MSCAN coin</a>.
      If the sender is not a validator's delegator, his vote will not be counted.
      Rating is updated instantly.
      The vote power depends on the total stake of the delegator in masternode at the time of voting:
    </p>
  `,
  text1: `
    <p><b>How to vote</b></p>
    1. Open <a href="https://console.minter.network/" target="_blank">Minter console</a>
    or your mobile wallet and send 1 MSCAN to address:
  `,
  text2: `
    2. "Message" field must be filled with public key of validator you wish to vote for.
    You can find key on <a href="/validators">this page</a>.`,
  table0: `from 100 million BIP`,
  table1: `from 10 million BIP`,
  table2: `from million BIP`,
  table3: `from 100 thousands BIP`,
  table4: `from 10 thousands BIP`,
  table5: `from 1000 to 10000 BIP`,
  table6: `less than 1000 BIP`
}

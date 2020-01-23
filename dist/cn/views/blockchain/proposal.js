"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    subtitle: 'Vote for {title}',
    text: `
    <p>Minter community votes for {title}. Voting round provides only two variants:</p>
    <ul>
      <li>Send <b>{yes}</b> if you vote YES</li>
      <li>Send <b>{no}</b> if you vote NO</li>
    </ul>
  `,
    timesLeft: 'Time left',
    howToVote: 'How to Vote',
    howToVoteText: `
    Send any amount of
    BIP to <a href="/address/{address}" target="_blank">this address</a>.
    Put in message desired vote variant (described in left block).
  `,
    votesFirst: 'YES',
    votesSecond: 'NO',
    result: 'Results'
};
//# sourceMappingURL=proposal.js.map
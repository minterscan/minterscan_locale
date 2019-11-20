"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Minter电子硬币的计算器',
    amountPlaceholder: '数量',
    searchPlaceholder: '电子硬币',
    forExample: '比如',
    error: '错误的数量或者硬币不存在',
    modalTitle: '为什么计算器的数据与真实数据不符',
    modalText0: `
    <p>
      Calculator data will always be inaccurate.
      The actual reward amount may vary up or down:
    </p>

    <ul>
      <li>
        The amount of the rewards depends on the number of delegated coins by all members of the Minter network.
        It is impossible to predict how many coins will be delegated every day.
        Permanent redelegation <b>reduces</b> the actual amount of the reward compared to the ideal result.
      </li>
      <li>
        The amount of the rewards depends on the fees paid by all members of the Minter network.
        Every transaction, every message in a transaction, every coin creation -
        all this requires payment of commission.
        It is impossible to predict how many transactions will be sent every day.
        A transactions' commissions  <b>increases</b> the actual amount of the reward compared to the ideal result.
      </li>
    </ul>
  `
};
//# sourceMappingURL=calc.js.map
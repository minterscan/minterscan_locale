"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Profile Verification',
    labelTrue: 'Profile is verified',
    labelFalse: 'Profile is not verified',
    text0: `
    A verified profile is a proof that the wallet really belongs to the person presented in the profile.
    If you see a profile in which it is written that it belongs to Evgeny Gordeev,
    but there is no green badge that looks like this:
  `,
    text1: `
    then most likely this wallet does not belong to Evgeny.
    If a person or service asks you to send him money and seems to be someone,
    but does not have the status of a verified account - then most likely it is a fraud.
  `,
    text2: `
    To get a verified account, please <a href="/faq/profile">fill information about profile</a> and
    <a href="https://t.me/minterscan_verification_bot" target="_blank">talk with bot</a>
    and we will contact you shortly.
  `,
    text3: `
    <p><b>Important clarification</b></p>
    <p>
    Profile data is updated automatically, the wallet owner can do this at any time using a special
    transactions. You can find detailed manual <a href="/faq/profile">on this page</a>.
    </p>
    <p class="has-text-danger">
      Each time you update a profile, the verification status must be retrieved again.
    </p>
    <p>
      Why? Imagine a simple situation. Someone John Doe received a verified account on Minterscan.
      Then he changes his profile data and set that his name now is Evgeny Gordeev. Problem!
      Now John has a verified account in which it is indicated that it is Evgeny, but he is not Evgeny.
      Therefore, each time the profile data is changed, the verification status will be reset to avoid
      fraud opportunities.
    </p>
  `
};
//# sourceMappingURL=verification.js.map
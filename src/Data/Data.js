import uuid from 'uuid';

const CATEGORIES = [
  {
    id:uuid.v4(),
    title: 'Account Balances',
    href: '#ACCOUNT_BALANCES',
  },
  {
    id:uuid.v4(),
    title: 'Investing on YieldStreet',
    href: '#INVESTING_ON_YIELDSTREET',
  }, 
  {
    id:uuid.v4(),
    title: 'Others',
    href: '#OTHERS',
  }, 
  {
    id:uuid.v4(),
    title: 'Investor Accreditation',
    href: '#INVESTOR_ACCREDITATION',
  }, 
  {
    id:uuid.v4(),
    title: 'My Portfolio',
    href: '#MY_PORTFOLIO',
  }, 
  {
    id:uuid.v4(),
    title: 'Risk Management',
    href: '#RISK_MANAGEMENT',
  }, 
];

const ACCOUNT_BALANCES = [
    {
      id:uuid.v4(),
      title: 'Why do I need to provide a photo ID? Didn’t I already confirm my identity?', 
      description: '<p>In order to hold funds, additional Know Your Customer (KYC) efforts are required, including validating your identity via a government issued photo ID.</p>',
    },
    {
      id:uuid.v4(),
      title: 'Where will my funds be held?', 
      description: '<p>The funds will be held in an account opened in your name at FDIC insured partner, Evolve Bank. Evolve Bank has been in operation since 1925 and holds roughly $450MM in assets.</p>',
    },
    {
      id:uuid.v4(),
      title: 'What type of accounts are these, and specifically are they subject to Reg D rules?', 
      description: '<p>They are considered Demand Deposit Accounts (DDA) which are intended for frequent transactions and are not subject to transaction limits. These accounts are opened in your name, and the custodian of the funds is Evolve Bank, which is an FDIC insured partner. However, please note that individual account and routing numbers are not created for these accounts, as funds are anticipated to flow through your YieldStreet account, rather than through Evolve bank. You may deposit and withdraw funds from your account at any time, and your balance is available at any time by logging into your YieldStreet portfolio. YieldStreet does not have access to your funds in this account balance without your consent.  </p>',
    },
    {
      id:uuid.v4(),
      title: 'What if I prefer receiving deposits directly to my external bank account?', 
      description: '<p>YieldStreet is intending to migrate all investors to this feature in the coming weeks. You will still receive payment notifications whenever funds have been deposited to your YieldStreet account, and you can withdraw funds to your external bank account at any time.</p>',
    },
    {
      id:uuid.v4(),
      title: 'Will this speed up my investing process?', 
      description: '<p>Yes. Now that you can hold a cash balance in your YieldStreet account, you can fund your account at any time to cover your next few investments so you don’t have to worry about timing ACH transfers.</p><p>As you make new investments, your payment and distribution accounts will be automatically set to your YieldStreet account. If your account is funded, these transactions will be virtually instantaneous, whereas ACH transactions can take 1-2 days to settle, meaning you can start to earn interest faster.</p><p>Additionally, you will no longer need to actively select a linked bank account during the investment process, speeding up the process of requesting an allocation in our opportunities.</p>',
    },
];

const INVESTING_ON_YIELDSTREET = [
  {
    id:uuid.v4(),
    title: 'What am I Investing In?', 
    description: '<p>YieldStreet investments are debt based alternative investments. YieldStreet Originators take out a loan for a project or need that is collaterized by an underlying asset the originator has, such as a real estate property or legal settlement.</p><p>Our offerings currently concentrate in three primary alternative asset classes; real estate, litigation finance and commercial finance. You can learn more about each of our asset classes on <a href="https://www.yieldstreet.com/university" target="_blank">YieldStreet University</a>. YieldStreet seeks investment&nbsp;opportunities&nbsp;that provide investors with low correlation to&nbsp;the&nbsp;broader&nbsp;stock market, and target annual yields between 8-20%.</p><p>As originators make principal and interest payments during the term of their loan, distributions are paid out directly to investors in the offering.</p>',
  },
  {
    id:uuid.v4(),
    title: 'How are investments structured?', 
    description: '<p>After an offering closes on YieldStreet, the investor capital goes to a newly-formed Special Purpose Vehicle (SPV). The SPV is a company created with the sole purpose of keeping your investment secure, regardless of the originator or YieldStreet credit risk.</p><p>The ownership of this vehicle is split among all investors in the deal or offering at a basis corresponding to your contribution to the deal. Similarly, when the borrower starts paying interest it&nbsp;is to the investors on a pro-rata basis on an agreed payment frequency.</p><p>For example, if the borrower is raising $100,000 and you invest $10,000 in the offering, you will own 10% of the SPV and the underlying loan. If the loan pays 10% interest per year, you will receive $1,000 in interest for each year that the loan is outstanding.</p>',
  },
  {
    id:uuid.v4(),
    title: 'How much can I invest?', 
    description: '<p>You can invest as little as $5,000 in investments on YieldStreet. There are usually no upper limits on how much you can invest in each investment. However, sometimes borrowers, originators or YieldStreet might apply some restrictions to ensure that many investors are able to participate and get in on attractive opportunities. After all, our mission is to provide access to average investors and not to allow institutional investors to take large allocations in each deal.</p>',
  },
  {
    id:uuid.v4(),
    title: 'How do I make my first investment?', 
    description: '<p>To make your first investment, simply login to the YieldStreet platform, then click the “Invest” button on the individual offering page.</p>',
  },
  {
    id:uuid.v4(),
    title: 'How can I send payment for investments?', 
    description: '<p>You have a few payment options to send payment for your investments. You can authorize YieldStreet to pull money from your bank account electronically via ACH. You may also wire funds directly to YieldStreet.</p>',
  },
  {
    id:uuid.v4(),
    title: 'What should I do if I need compliance approval from my employer to invest?', 
    description: '<p><span>If your investment must&nbsp;receive&nbsp;compliance approval&nbsp;from your employer, YieldStreet&nbsp;will&nbsp;try to</span><span>&nbsp;accommodate your subscription request.&nbsp;</span><span>Once</span><span>&nbsp;you submit an investment, please send an email to&nbsp;</span><a href="mailto:investment@yieldstreet.com" target="_blank" rel="noopener noreferrer">investments@yieldstreet.com</a><wbr><span>&nbsp;to let us know that you are awaiting compliance approval, and we will withhold withdrawing funds&nbsp;</span><b><u>for up to 7 business days</u></b><span>. Once you have been approved,&nbsp;contact our team&nbsp;and we will process your investment. If your compliance approval process takes longer than 7 business days, unfortunately, we will be unable to accommodate your investment.&nbsp;</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'Can I Invest on YieldStreet using my IRA?', 
    description: '<div></div><div>Under certain circumstances you can invest on YieldStreet via a self-directed <span class="il">IRA</span>.</div><div></div><div>Please let a member of the YieldStreet team know the custodian&nbsp;you use, so we can evaluate if we are able to support their requirements.</div><div></div><div>If you do not currently have a self-directed IRA you can explore creating one via options such as <a href="https://map.mtrustcompany.com/vurl/vurl.aspx?r33413f9q7465m22" target="_blank" rel="noopener noreferrer"><span class="il">Millennium</span> </a><span class="il"><a href="https://map.mtrustcompany.com/vurl/vurl.aspx?r33413f9q7465m22" target="_blank" rel="noopener noreferrer">Trust</a>.&nbsp;</span></div><div></div><div>If you already have an existing self-directed <span class="il">IRA</span>, YieldStreet will need to evaluate the custodian’s requirements. If YieldStreet is able to work with your custodian, when you make an investment allocation you need to complete the following steps:</div><div><ol><li>Choose to invest as an entity,</li><li>The name indicated on your investment should read: [Your <span class="il">IRA</span> company] for the benefit of [investor name] – <span class="il">IRA</span> account number. (ie: YieldStreet <span class="il">IRA</span> for the benefit of Milind Mehere – 4567890.)</li><li>Title of signer: Indicate “Owner”</li><li>Ensure bank account set to receive principal and interest payments directs back to your self directed <span class="il">IRA</span></li><li>You will then receive a <span class="il">copy</span> of the subscription agreement with forms to send to your <span class="il">IRA</span> company, you will also need to complete any forms deemed necessary by your <span class="il">IRA</span> company.</li><li>Once all documentation is complete, your <span class="il">IRA</span> company will send your investment allocation directly to YieldStreet</li></ol></div><div><b>What is the tax treatment of payments from or to an <span class="il">IRA</span>?</b></div><div></div><div>When using a self directed <span class="il">IRA</span> to invest, it is important to ensure the bank account set to receive principal and interest payments directs back to your self directed <span class="il">IRA</span>. Ensuring money is sent directly to your <span class="il">IRA</span> will <span>help</span> avoid taxation of the monies. Please consult your tax adviser with questions regarding your personal tax treatment.</div><div></div><div><b>How do payments get redirected back to the <span class="il">IRA</span>?<br></b></div><div></div><div>When you make an investment, you will need to indicate what bank account should receive principal and interest payments. When you complete this step, just ensure your have filled out this information with your self directed <span class="il">IRA</span> account.</div>',
  },
  {
    id:uuid.v4(),
    title: 'Can I invest on YieldStreet using an online brokerage account?', 
    description: '<p>This will vary depending on which brokerage account provider you use. Please contact our investment team directly at investments@yieldstreet.com to discuss further.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Why did the minimum investment change?', 
    description: '<p>YieldStreet currently uses Special Purpose Vehicle (SPV) structure for each investment opportunity. As such, we are subject to legal requirements that limit us to 99 investors per investment offering on the platform. As an offering fills, we may need to increase the required minimum investment.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Can I modify or cancel my investment once it is complete?', 
    description: '<p>Currently completed investments on YieldStreet are not liquid. Once your investment is complete, you cannot&nbsp;modify or cancel your investment for the remaining duration of the offering you have invested in. Your investment is considered complete after we have delivered countersigned investment documents, verified your accreditation status, and&nbsp;received your payment.</p><p>Should you decide to modify or cancel your investment before it is considered complete, we will do whatever we can to help.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Can I get a refund on an investment?', 
    description: '<p>Currently, all completed investments on YieldStreet are not eligible for a refund. In the case of an emergency or extreme financial need, please contact investments@yieldstreet.com.</p>',
  },
  {
    id:uuid.v4(),
    title: 'When will my money be pulled from my account?', 
    description: '<p>If you indicated your preferred method as electronic ACH transfer, your money will be pulled from your account once YieldStreet receives confirmation of your Accredited Investor status.</p><p>If you indicated your preferred method as wire transfer or check, you are responsible to initiate payment to YieldStreet once your accredited investor status is confirmed. Note that an investment is not considered complete until we have received your payment.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Why is my investment pending?', 
    description: '<p>Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds. It may take up to 2 business days for YieldStreet to process your investment request. Your investment will become active 3-5 business days from the date funds are debited from your account.</p>',
  },

];

const OTHERS = [
  {
    id:uuid.v4(),
    title: 'What is a Form D?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-rule506htm.html"><b>Form D</b></a> <span>is used to file a notice of an exempt offering of securities with the Securities and Exchange Commission (SEC). Commission rules require the notice to be filed by issuers of securities claiming an exemption from registration under rule 506 of Regulation D. YieldStreet is relying on the Rule 506(c) exemption from registration, and must therefore file a Form D for each investment offering. </span></p>',
  },
  {
    id:uuid.v4(),
    title: 'What are Blue Sky laws?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-blueskyhtm.html"><b>blue sky</b></a><span> law is a state law in the United States that regulates the offering and sale of securities. </span><span>Securities offerings under Rule 506(c) are deemed to be covered securities under the federal law, which preempts the states from substantively regulating Rule 506 offerings under state securities or blue sky laws. &nbsp;Despite this federal preemption, states may require the filing of a Form D, Consent to Service of Process and the payment of a filing fee. &nbsp;</span></p><p><span>As such, State securities commissioners and regulators are precluded from applying their blue sky laws to offerings of securities that involve general solicitation or general advertisement under Rule 506(c), provided that the issuer complies with the requirements of the exemption and notice filing and fee payment requirements in their state.</span></p><p><span>For each YieldStreet offering, blue sky fees are required to be paid with respect to each notice filing, in each State in which there is a participating Class A investor.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'Why is my investment pending?', 
    description: '<p>Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds. It may take up to 2 business days for YieldStreet to process your investment request. Your investment will become active 3-5 business days from the date funds are debited from your account.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Why is my investment pending?', 
    description: '<p>Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds. It may take up to 2 business days for YieldStreet to process your investment request. Your investment will become active 3-5 business days from the date funds are debited from your account.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Why is my investment pending?', 
    description: '<p>Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds. It may take up to 2 business days for YieldStreet to process your investment request. Your investment will become active 3-5 business days from the date funds are debited from your account.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Why is my investment pending?', 
    description: '<p>Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds. It may take up to 2 business days for YieldStreet to process your investment request. Your investment will become active 3-5 business days from the date funds are debited from your account.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Why is my investment pending?', 
    description: '<p>Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds. It may take up to 2 business days for YieldStreet to process your investment request. Your investment will become active 3-5 business days from the date funds are debited from your account.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Why is my investment pending?', 
    description: '<p>Your investment will be marked pending in your portfolio until YieldStreet receives and clears your funds. It may take up to 2 business days for YieldStreet to process your investment request. Your investment will become active 3-5 business days from the date funds are debited from your account.</p>',
  },
];

const INVESTOR_ACCREDITATION = [
  {
    id:uuid.v4(),
    title: 'What does it mean to be an Accredited Investor?', 
    description: '<p>YieldStreet is Registered Investment Advisor (RIA) and our SPVs rely on <a href="https://www.sec.gov/fast-answers/answers-rule506htm.html">Rule 506(c) exemption to registration</a> as defined by the U.S. Securities and Exchange Commission (SEC), and as such can only accept investment from verified accredited investors. An accredited investor, as defined by the <a href="http://www.sec.gov/answers/accred.htm" target="_new">U.S. Securities and Exchange Commission (SEC)</a>, is one of the following:</p><p>(i) An <strong>individual</strong> who has individual net worth, or joint net worth with a&nbsp;spouse, that exceeds $1 million at the time of investing, excluding the value of the primary residence of such person;<br>(ii) An <strong>individual</strong> with income exceeding $200,000 in each of the <strong>two most recent years</strong> or joint income with a spouse exceeding $300,000 for those years and a reasonable expectation of the same income level in the current year.</p><p>(iii) An <strong>entity</strong> with total assets in excess of $5,000,000<br>(iv) An <strong>entity</strong> where all equity holders are accredited investors, individually. </p><p>(v) A bank, insurance company, investment company, broker/dealer, Business Development Company or a Small Business Investment Company that meets accreditation requirements put forward by the SEC.</p><p><strong>What if I am not an Accredited Investor?</strong><br>Our mission is to make quality investment options available to all investors, and we are working on opening the YieldStreet platform to everyone. In the meantime, feel free to visit <a href="www.yieldstreet.com/university" target="_new">YieldStreet University</a> or <a href="www.yieldstreet.com/blog" target="_new">Blog</a> to learn more about becoming a better investor.</p>',
  },
  {
    id:uuid.v4(),
    title: 'What are Blue Sky laws?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-blueskyhtm.html"><b>blue sky</b></a><span> law is a state law in the United States that regulates the offering and sale of securities. </span><span>Securities offerings under Rule 506(c) are deemed to be covered securities under the federal law, which preempts the states from substantively regulating Rule 506 offerings under state securities or blue sky laws. &nbsp;Despite this federal preemption, states may require the filing of a Form D, Consent to Service of Process and the payment of a filing fee. &nbsp;</span></p><p><span>As such, State securities commissioners and regulators are precluded from applying their blue sky laws to offerings of securities that involve general solicitation or general advertisement under Rule 506(c), provided that the issuer complies with the requirements of the exemption and notice filing and fee payment requirements in their state.</span></p><p><span>For each YieldStreet offering, blue sky fees are required to be paid with respect to each notice filing, in each State in which there is a participating Class A investor.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'What are Blue Sky laws?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-blueskyhtm.html"><b>blue sky</b></a><span> law is a state law in the United States that regulates the offering and sale of securities. </span><span>Securities offerings under Rule 506(c) are deemed to be covered securities under the federal law, which preempts the states from substantively regulating Rule 506 offerings under state securities or blue sky laws. &nbsp;Despite this federal preemption, states may require the filing of a Form D, Consent to Service of Process and the payment of a filing fee. &nbsp;</span></p><p><span>As such, State securities commissioners and regulators are precluded from applying their blue sky laws to offerings of securities that involve general solicitation or general advertisement under Rule 506(c), provided that the issuer complies with the requirements of the exemption and notice filing and fee payment requirements in their state.</span></p><p><span>For each YieldStreet offering, blue sky fees are required to be paid with respect to each notice filing, in each State in which there is a participating Class A investor.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'What are Blue Sky laws?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-blueskyhtm.html"><b>blue sky</b></a><span> law is a state law in the United States that regulates the offering and sale of securities. </span><span>Securities offerings under Rule 506(c) are deemed to be covered securities under the federal law, which preempts the states from substantively regulating Rule 506 offerings under state securities or blue sky laws. &nbsp;Despite this federal preemption, states may require the filing of a Form D, Consent to Service of Process and the payment of a filing fee. &nbsp;</span></p><p><span>As such, State securities commissioners and regulators are precluded from applying their blue sky laws to offerings of securities that involve general solicitation or general advertisement under Rule 506(c), provided that the issuer complies with the requirements of the exemption and notice filing and fee payment requirements in their state.</span></p><p><span>For each YieldStreet offering, blue sky fees are required to be paid with respect to each notice filing, in each State in which there is a participating Class A investor.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'What are Blue Sky laws?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-blueskyhtm.html"><b>blue sky</b></a><span> law is a state law in the United States that regulates the offering and sale of securities. </span><span>Securities offerings under Rule 506(c) are deemed to be covered securities under the federal law, which preempts the states from substantively regulating Rule 506 offerings under state securities or blue sky laws. &nbsp;Despite this federal preemption, states may require the filing of a Form D, Consent to Service of Process and the payment of a filing fee. &nbsp;</span></p><p><span>As such, State securities commissioners and regulators are precluded from applying their blue sky laws to offerings of securities that involve general solicitation or general advertisement under Rule 506(c), provided that the issuer complies with the requirements of the exemption and notice filing and fee payment requirements in their state.</span></p><p><span>For each YieldStreet offering, blue sky fees are required to be paid with respect to each notice filing, in each State in which there is a participating Class A investor.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'What are Blue Sky laws?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-blueskyhtm.html"><b>blue sky</b></a><span> law is a state law in the United States that regulates the offering and sale of securities. </span><span>Securities offerings under Rule 506(c) are deemed to be covered securities under the federal law, which preempts the states from substantively regulating Rule 506 offerings under state securities or blue sky laws. &nbsp;Despite this federal preemption, states may require the filing of a Form D, Consent to Service of Process and the payment of a filing fee. &nbsp;</span></p><p><span>As such, State securities commissioners and regulators are precluded from applying their blue sky laws to offerings of securities that involve general solicitation or general advertisement under Rule 506(c), provided that the issuer complies with the requirements of the exemption and notice filing and fee payment requirements in their state.</span></p><p><span>For each YieldStreet offering, blue sky fees are required to be paid with respect to each notice filing, in each State in which there is a participating Class A investor.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'What are Blue Sky laws?', 
    description: '<p><span>A </span><a href="https://www.sec.gov/fast-answers/answers-blueskyhtm.html"><b>blue sky</b></a><span> law is a state law in the United States that regulates the offering and sale of securities. </span><span>Securities offerings under Rule 506(c) are deemed to be covered securities under the federal law, which preempts the states from substantively regulating Rule 506 offerings under state securities or blue sky laws. &nbsp;Despite this federal preemption, states may require the filing of a Form D, Consent to Service of Process and the payment of a filing fee. &nbsp;</span></p><p><span>As such, State securities commissioners and regulators are precluded from applying their blue sky laws to offerings of securities that involve general solicitation or general advertisement under Rule 506(c), provided that the issuer complies with the requirements of the exemption and notice filing and fee payment requirements in their state.</span></p><p><span>For each YieldStreet offering, blue sky fees are required to be paid with respect to each notice filing, in each State in which there is a participating Class A investor.</span></p>',
  },
];

const MY_PORTFOLIO = [
  {
    id:uuid.v4(),
    title: 'What is a prefunded offering?', 
    description: '<p dir="ltr">When you invest in a prefunded offering, you will <strong>begin to earn interest immediately</strong> after your investment is complete and marked Active within your Portfolio.</p>    <p dir="ltr">Most of the opportunities you see on YieldStreet will be prefunded, which means YieldStreet has put forward the full loan amount on our balance sheet to the originator at the start date of the offering, and&nbsp;the YieldStreet balance decreases as investors make individual investment allocations in the offering.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Do all cases in a litigation portfolio need to settle for me to recover my principal?', 
    description: '<p><span>Not necessarily. Our originators maintain an equity interest in the portfolio,which creates a potential ‘buffer’ for investors. The size of the buffer may vary, but generally investors are paid first as cash from settlements comes in, and could receive all principal and target interest before all cases in the portfolio come to a conclusion.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'Do all cases in a litigation portfolio need to settle for me to recover my principal?', 
    description: '<p><span>Not necessarily. Our originators maintain an equity interest in the portfolio,which creates a potential ‘buffer’ for investors. The size of the buffer may vary, but generally investors are paid first as cash from settlements comes in, and could receive all principal and target interest before all cases in the portfolio come to a conclusion.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'Do all cases in a litigation portfolio need to settle for me to recover my principal?', 
    description: '<p><span>Not necessarily. Our originators maintain an equity interest in the portfolio,which creates a potential ‘buffer’ for investors. The size of the buffer may vary, but generally investors are paid first as cash from settlements comes in, and could receive all principal and target interest before all cases in the portfolio come to a conclusion.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'Do all cases in a litigation portfolio need to settle for me to recover my principal?', 
    description: '<p><span>Not necessarily. Our originators maintain an equity interest in the portfolio,which creates a potential ‘buffer’ for investors. The size of the buffer may vary, but generally investors are paid first as cash from settlements comes in, and could receive all principal and target interest before all cases in the portfolio come to a conclusion.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'Do all cases in a litigation portfolio need to settle for me to recover my principal?', 
    description: '<p><span>Not necessarily. Our originators maintain an equity interest in the portfolio,which creates a potential ‘buffer’ for investors. The size of the buffer may vary, but generally investors are paid first as cash from settlements comes in, and could receive all principal and target interest before all cases in the portfolio come to a conclusion.</span></p>',
  },
  {
    id:uuid.v4(),
    title: 'Do all cases in a litigation portfolio need to settle for me to recover my principal?', 
    description: '<p><span>Not necessarily. Our originators maintain an equity interest in the portfolio,which creates a potential ‘buffer’ for investors. The size of the buffer may vary, but generally investors are paid first as cash from settlements comes in, and could receive all principal and target interest before all cases in the portfolio come to a conclusion.</span></p>',
  },
];

const RISK_MANAGEMENT = [
  {
    id:uuid.v4(),
    title: 'Do these investments have risk?', 
    description: '<p>Like any investments, loans listed on YieldStreet carry investment&nbsp;risk, which should be evaluated&nbsp;on a case-by-case basis. We strive to list investments on YieldStreet that are backed by strong <a class="tooltip-item" href="https://www.yieldstreet.com/university/collateral" target="_blank" rel="noopener noreferrer">collateral</a> and&nbsp;provide&nbsp;attractive returns. Usually, the investments are uncorrelated to the overall market.</p><p>Moreover, YieldStreet™ works to assess investment risk by having a&nbsp;stringent process for vetting our borrowers and originators, and we make each deal transparent to our investors. In most cases, our investors have a position, which means they get their money back first before other debtors are paid back by the borrower.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Who are typical YieldStreet borrowers?', 
    description: '<p>Typical YieldStreet&nbsp;borrowers are small to medium businesses and individuals who are underserved by traditional banks and financial institutions.</p><p>Historically, these borrowers have not been able to secure bank financing, as nontraditional asset classes are generally turned down by regular banks and institutions. However, these loan borrowers are not necessarily riskier applicants because traditional banks turn them down. For example, consider the case of a freshly-signed NBA player with a poor personal credit score but a guaranteed multimillion-dollar player contract. Regardless of the worth of his contract, the player would get turned down by a bank due to his credit profile (including low FICO score).</p><p>Even if some of our typical borrowers can get traditional bank approvals for loans, there are other reasons they prefer to utilize YieldStreet. Because of the same reasons banks may turn down a loan, the loan applications&nbsp;they do accept come with a high for the borrower. Furthermore, some borrowers are frustrated by the paperwork requirements and approval process, which can take months.</p><p>While these individuals and companies may not fit into the traditional “credit box” required by traditional banks the loans often have strong (up to 7x the investment amount) and the companies have a diversified customer and supplier base, strong market share, a high degree of diversified recurring revenue and strong management teams.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Who are typical YieldStreet borrowers?', 
    description: '<p>Typical YieldStreet&nbsp;borrowers are small to medium businesses and individuals who are underserved by traditional banks and financial institutions.</p><p>Historically, these borrowers have not been able to secure bank financing, as nontraditional asset classes are generally turned down by regular banks and institutions. However, these loan borrowers are not necessarily riskier applicants because traditional banks turn them down. For example, consider the case of a freshly-signed NBA player with a poor personal credit score but a guaranteed multimillion-dollar player contract. Regardless of the worth of his contract, the player would get turned down by a bank due to his credit profile (including low FICO score).</p><p>Even if some of our typical borrowers can get traditional bank approvals for loans, there are other reasons they prefer to utilize YieldStreet. Because of the same reasons banks may turn down a loan, the loan applications&nbsp;they do accept come with a high for the borrower. Furthermore, some borrowers are frustrated by the paperwork requirements and approval process, which can take months.</p><p>While these individuals and companies may not fit into the traditional “credit box” required by traditional banks the loans often have strong (up to 7x the investment amount) and the companies have a diversified customer and supplier base, strong market share, a high degree of diversified recurring revenue and strong management teams.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Who are typical YieldStreet borrowers?', 
    description: '<p>Typical YieldStreet&nbsp;borrowers are small to medium businesses and individuals who are underserved by traditional banks and financial institutions.</p><p>Historically, these borrowers have not been able to secure bank financing, as nontraditional asset classes are generally turned down by regular banks and institutions. However, these loan borrowers are not necessarily riskier applicants because traditional banks turn them down. For example, consider the case of a freshly-signed NBA player with a poor personal credit score but a guaranteed multimillion-dollar player contract. Regardless of the worth of his contract, the player would get turned down by a bank due to his credit profile (including low FICO score).</p><p>Even if some of our typical borrowers can get traditional bank approvals for loans, there are other reasons they prefer to utilize YieldStreet. Because of the same reasons banks may turn down a loan, the loan applications&nbsp;they do accept come with a high for the borrower. Furthermore, some borrowers are frustrated by the paperwork requirements and approval process, which can take months.</p><p>While these individuals and companies may not fit into the traditional “credit box” required by traditional banks the loans often have strong (up to 7x the investment amount) and the companies have a diversified customer and supplier base, strong market share, a high degree of diversified recurring revenue and strong management teams.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Who are typical YieldStreet borrowers?', 
    description: '<p>Typical YieldStreet&nbsp;borrowers are small to medium businesses and individuals who are underserved by traditional banks and financial institutions.</p><p>Historically, these borrowers have not been able to secure bank financing, as nontraditional asset classes are generally turned down by regular banks and institutions. However, these loan borrowers are not necessarily riskier applicants because traditional banks turn them down. For example, consider the case of a freshly-signed NBA player with a poor personal credit score but a guaranteed multimillion-dollar player contract. Regardless of the worth of his contract, the player would get turned down by a bank due to his credit profile (including low FICO score).</p><p>Even if some of our typical borrowers can get traditional bank approvals for loans, there are other reasons they prefer to utilize YieldStreet. Because of the same reasons banks may turn down a loan, the loan applications&nbsp;they do accept come with a high for the borrower. Furthermore, some borrowers are frustrated by the paperwork requirements and approval process, which can take months.</p><p>While these individuals and companies may not fit into the traditional “credit box” required by traditional banks the loans often have strong (up to 7x the investment amount) and the companies have a diversified customer and supplier base, strong market share, a high degree of diversified recurring revenue and strong management teams.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Who are typical YieldStreet borrowers?', 
    description: '<p>Typical YieldStreet&nbsp;borrowers are small to medium businesses and individuals who are underserved by traditional banks and financial institutions.</p><p>Historically, these borrowers have not been able to secure bank financing, as nontraditional asset classes are generally turned down by regular banks and institutions. However, these loan borrowers are not necessarily riskier applicants because traditional banks turn them down. For example, consider the case of a freshly-signed NBA player with a poor personal credit score but a guaranteed multimillion-dollar player contract. Regardless of the worth of his contract, the player would get turned down by a bank due to his credit profile (including low FICO score).</p><p>Even if some of our typical borrowers can get traditional bank approvals for loans, there are other reasons they prefer to utilize YieldStreet. Because of the same reasons banks may turn down a loan, the loan applications&nbsp;they do accept come with a high for the borrower. Furthermore, some borrowers are frustrated by the paperwork requirements and approval process, which can take months.</p><p>While these individuals and companies may not fit into the traditional “credit box” required by traditional banks the loans often have strong (up to 7x the investment amount) and the companies have a diversified customer and supplier base, strong market share, a high degree of diversified recurring revenue and strong management teams.</p>',
  },
  {
    id:uuid.v4(),
    title: 'Who are typical YieldStreet borrowers?', 
    description: '<p>Typical YieldStreet&nbsp;borrowers are small to medium businesses and individuals who are underserved by traditional banks and financial institutions.</p><p>Historically, these borrowers have not been able to secure bank financing, as nontraditional asset classes are generally turned down by regular banks and institutions. However, these loan borrowers are not necessarily riskier applicants because traditional banks turn them down. For example, consider the case of a freshly-signed NBA player with a poor personal credit score but a guaranteed multimillion-dollar player contract. Regardless of the worth of his contract, the player would get turned down by a bank due to his credit profile (including low FICO score).</p><p>Even if some of our typical borrowers can get traditional bank approvals for loans, there are other reasons they prefer to utilize YieldStreet. Because of the same reasons banks may turn down a loan, the loan applications&nbsp;they do accept come with a high for the borrower. Furthermore, some borrowers are frustrated by the paperwork requirements and approval process, which can take months.</p><p>While these individuals and companies may not fit into the traditional “credit box” required by traditional banks the loans often have strong (up to 7x the investment amount) and the companies have a diversified customer and supplier base, strong market share, a high degree of diversified recurring revenue and strong management teams.</p>',
  },
];

export { 
    CATEGORIES,
    ACCOUNT_BALANCES,
    INVESTING_ON_YIELDSTREET,
    OTHERS,
    INVESTOR_ACCREDITATION,
    MY_PORTFOLIO,
    RISK_MANAGEMENT,
}
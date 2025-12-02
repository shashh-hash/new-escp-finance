import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { ArticleLayout } from '../components/articles/ArticleLayout';
import { ArticleNotFound } from '../components/articles/ArticleNotFound';

// UI primitives
import { LeadParagraph } from '../components/ui/LeadParagraph';
import { BodyParagraph } from '../components/ui/BodyParagraph';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TableCard } from '../components/ui/TableCard';
import { StatGrid, StatCard } from '../components/ui/StatGrid';
import { ProgressBarCard, ProgressBarRow } from '../components/ui/ProgressBarCard';
import { QuoteBlock } from '../components/ui/QuoteBlock';

// --- Article data (peut être mis dans un fichier séparé src/data/articles.js) ---

const articles = {
  'sustainable-finance-esg-2024': {
    slug: 'sustainable-finance-esg-2024',
    title: 'A $10 Billion Bet: Pfizer Enters the Anti-Obesity Drug Market with Metsera',
    author: 'Francesco Kaitsas',
    date: 'Nov 20, 2025',
    category: 'Healthcare',
    readTime: '8 min read',
    image:
      '/pfizer-article.png',
    content: (
      <>
        <LeadParagraph>
          A 10 billion dollar transaction inserts Pfizer into the business of anti-obesity drugs.
          The American pharmaceutical company has completed the acquisition of obesity-drug start-up
          Metsera for nearly 10 billion dollars, overcoming its strongest competitor, the Danish
          company Novo Nordisk.
        </LeadParagraph>

        <BodyParagraph>
          Pfizer is the fourth largest pharma company by revenues in 2024, with 63.5 billion dollars
          in revenues and 45.7 billion dollars in gross profit. At the date of this article&apos;s
          publication, its shares trade at nearly 22 dollars and its market cap is around 142.37
          billion dollars, placing it at the 11th place in the market cap ranking for pharma
          companies.
        </BodyParagraph>

        <SectionHeading>The M&amp;A Battle for Metsera</SectionHeading>

        <BodyParagraph>
          The strife for Metsera&apos;s acquisition started nearly two months ago at the end of
          September with the first offer made by Pfizer of 7.3 billion dollars. Afterwards, an
          unexpected offer was made by the Danish pharma company Novo Nordisk at the end of October
          and, after a period of legal challenges, the bidding was ultimately won by the American
          company with a deal worth 2.7 billion dollars more than the initial agreement from
          September.
        </BodyParagraph>

        <BodyParagraph>
          On the 7th of November, the New York–based company announced the acquisition of Metsera.
          From a technical point of view, Pfizer bought all the outstanding Metsera shares for 86.25
          dollars per share in cash, a premium of 3.69% to Metsera&apos;s Friday, 7th of November
          close at 83.18 dollars per share.
        </BodyParagraph>

        <TableCard
          title="Key Terms of the Metsera Acquisition"
          className="mb-8"
          header={['Item', 'Detail']}
          rows={[
            ['Buyer', 'Pfizer Inc.'],
            ['Target', 'Metsera'],
            ['Headline value', '$10 billion (approx.)'],
            ['Initial Pfizer offer (Sept.)', '$7.3 billion'],
            ['Final per-share price', '$86.25 per share (cash)'],
            ['Premium vs. last close', '3.69% vs. $83.18'],
          ]}
        />

        <BodyParagraph>
          The consideration was structured as a base of 65.60 dollars per share in cash, representing
          a value of nearly 7.0 billion dollars. On top of that, shareholders received a contingent
          value right (CVR) of up to 20.65 dollars per share, should three specified clinical and
          regulatory milestones be achieved.
        </BodyParagraph>

        <BodyParagraph>
          After the acquisition, Metsera became a subsidiary of Pfizer, leading to the end of trading
          of Metsera shares on the NASDAQ Global Select Market.
        </BodyParagraph>

        <SectionHeading>Deal Structure and Advisory Teams</SectionHeading>

        <BodyParagraph>
          From a transaction-structuring standpoint, the deal combines an upfront cash payment with
          CVRs tied to future developments. This structure allows Pfizer to manage risk on still
          unproven assets, while offering Metsera&apos;s shareholders upside if clinical and
          regulatory milestones are achieved.
        </BodyParagraph>

        <BodyParagraph>
          On the advisory side, Citi acted as financial advisor to Pfizer, while Wachtell, Lipton,
          Rosen &amp; Katz provided legal counsel for the transaction.
        </BodyParagraph>

        <SectionHeading>Strategic Rationale: A Massive Obesity Market</SectionHeading>

        <BodyParagraph>
          Even though it will take time for Metsera&apos;s drugs to effectively enter the market, and
          its obesity treatments are still in early-stage development with unproven efficiency, the
          strategic rationale for Pfizer is clear.
        </BodyParagraph>

        <BodyParagraph>
          Firstly, Leerink Partners analyst David Risinger projected that Metsera&apos;s two top
          drugs, MET-097i and MET-233i, might reach 5 billion dollars in combined peak sales.
          Secondly, the acquisition places Pfizer in a market whose value could reach 150 billion
          dollars at its peak in the next decade, according to projections from Morgan Stanley
          Research.
        </BodyParagraph>

        <QuoteBlock>
          &quot;This high price is full of optimism&quot;, notes Bernstein analyst Courtney Breen,
          reinforcing the idea that Pfizer must reach 11 billion dollars in revenue by 2040 from this
          franchise — nearly doubling Metsera&apos;s current projections.
        </QuoteBlock>

        <SectionHeading>Metsera&apos;s Pipeline: Building a New Obesity Franchise</SectionHeading>

        <BodyParagraph>
          From a medical and R&amp;D perspective, this M&amp;A move allows Pfizer to expand its
          portfolio with various drugs focused on obesity and metabolic diseases.
        </BodyParagraph>

        <TableCard
          title="Metsera Obesity &amp; Metabolic Pipeline"
          className="mb-8"
          header={['Asset', 'Type', 'Indication / Use', 'Stage']}
          rows={[
            ['MET-097i', 'Injectable GLP-1 receptor agonist (weekly & monthly)', 'Obesity', 'Ready to begin Phase 3'],
            ['MET-233i', 'Monthly amylin analog', 'Monotherapy & combination with MET-097i', 'Phase 1'],
            ['Oral GLP-1 RA', 'Oral GLP-1 receptor agonist', 'Obesity / metabolic diseases', 'Phase 1'],
            ['Preclinical asset', 'Nutrient-stimulated hormone–based drug', 'Metabolic disorders', 'Preclinical'],
          ]}
        />

        <BodyParagraph>
          MET-097i is a weekly and monthly injectable GLP-1 receptor agonist (RA) ready to begin
          Phase 3. Metsera is also developing MET-233i, a monthly amylin analog in Phase 1, to be
          used both as monotherapy and in combination with MET-097i. In addition, the company
          has an oral GLP-1 RA in Phase 1 development and a preclinical drug composed of a
          nutrient-stimulated hormone.
        </BodyParagraph>

        <SectionHeading>Metsera’s Financial Profile</SectionHeading>

        <BodyParagraph>
          Metsera was founded in 2022 and has been highly focused on the development of treatments
          for obesity and metabolic diseases. As is typical for early-stage biotech, the company is
          still loss-making, with no revenues and heavy R&amp;D spending.
        </BodyParagraph>

        <TableCard
          title="Metsera Key Financials (2023–2024)"
          className="mb-8"
          header={['Metric', '2023', '2024']}
          rows={[
            ['Revenues', '$0', '$0'],
            ['Net loss', '$47.2M', '$209.1M'],
            ['Total assets', '-', '$450.9M'],
            ['Share of cash in total assets', '-', '≈80%'],
            ['Debt-to-equity ratio', '-', '≈0.6'],
          ]}
        />

        <BodyParagraph>
          The company reported a net loss of 47.2 million dollars in 2023, which increased to
          209.1 million dollars in 2024. This can be explained by the complete absence of revenues
          and high expenses in research and development. Its total assets increased to 450.9 million
          dollars in 2024, roughly 80% of which is cash and cash receivables.
        </BodyParagraph>

        <BodyParagraph>
          At the end of 2024, Metsera increased its cash position by 278.1 million dollars, mainly
          due to stock issuance, offsetting a negative cash flow from operating activities of 100
          million dollars. The company&apos;s debt-to-equity ratio stood at around 0.6 in 2024.
        </BodyParagraph>

        <SectionHeading>Positioning vs. Eli Lilly and Novo Nordisk</SectionHeading>

        <BodyParagraph>
          This acquisition worth 10 billion dollars allows Pfizer to enter the obesity drug market and
          move closer to the two current leaders in this segment: Eli Lilly and Company and Novo
          Nordisk. While Metsera&apos;s drugs are still at an early stage, the transaction gives
          Pfizer a platform to compete in what is expected to be one of the most dynamic therapeutic
          areas of the coming decade.
        </BodyParagraph>

        <BodyParagraph>
          The success of this deal will ultimately depend on the clinical performance of Metsera&apos;s
          pipeline and Pfizer&apos;s ability to execute on development, regulatory approvals and
          commercialization in an increasingly competitive environment.
        </BodyParagraph>

        <SectionHeading>References</SectionHeading>

        <ul className="text-sm text-gray-400 space-y-2">
          <li>
            <a
              href="https://www.pfizer.com/news/press-release/press-release-detail/pfizer-completes-acquisition-metsera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Pfizer – Press release: Pfizer completes acquisition of Metsera
            </a>
          </li>
          <li>
            <a
              href="https://www.ft.com/content/d9f58a26-5395-4acb-8dfc-d55cb53f946e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Financial Times – Coverage of the Metsera acquisition
            </a>
          </li>
          <li>
            <a
              href="https://www.reuters.com/business/healthcare-pharmaceuticals/pfizer-sweetens-offer-metsera-bidding-war-against-novo-bloomberg-news-reports-2025-11-08/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Reuters – Pfizer sweetens offer for Metsera in bidding war against Novo Nordisk
            </a>
          </li>
          <li>
            <a
              href="https://www.cnbc.com/2025/11/08/metsera-accepts-pfizers-10-billion-bid-in-ongoing-ma-battle.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              CNBC – Metsera accepts Pfizer&apos;s $10 billion bid
            </a>
          </li>
          <li>
            <a
              href="https://www.morganstanley.com/insights/articles/weight-loss-medication-market-unstoppable-growth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Morgan Stanley – Weight-loss medication market analysis
            </a>
          </li>
          <li>
            <a
              href="https://finance.yahoo.com/quote/PFE/financials/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Yahoo Finance – Pfizer (PFE) financials
            </a>
          </li>
          <li>
            <a
              href="https://finance.yahoo.com/quote/MTSR/financials/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Yahoo Finance – Metsera (MTSR) financials
            </a>
          </li>
        </ul>
      </>
    ),
  },


  'blockchain-banking-revolution': {
    slug: 'blockchain-banking-revolution',
    title: 'Blockchain in Banking: Beyond the Hype',
    author: 'Francesco Kaitsas',
    date: 'Nov 18, 2025',
    category: 'Technology',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=60&w=1200',
    content: (
      <>
        <LeadParagraph>
          I&apos;ll be honest—when I first heard about blockchain in banking five years ago, I was
          skeptical. It felt like another tech buzzword that would fade away. I was wrong. Very
          wrong.
        </LeadParagraph>

        <BodyParagraph>
          Last month, I visited JP Morgan&apos;s blockchain operations center in London. What I saw
          wasn&apos;t a pilot program or an experiment. It was production infrastructure processing
          billions in transactions daily. This is real, it&apos;s happening now, and it&apos;s
          transforming how banks operate.
        </BodyParagraph>

        <SectionHeading>The Business Case Is Clear</SectionHeading>

        <BodyParagraph>
          Let&apos;s talk numbers, because that&apos;s what matters to banks. The cost savings from
          blockchain implementation are substantial. I spoke with an operations director at a major
          European bank who walked me through their cross-border payment system. Before
          blockchain: 3-5 days settlement, multiple intermediaries, fees stacking up at each step.
          After blockchain: near-instant settlement, direct peer-to-peer transfer, 80% reduction in
          costs.
        </BodyParagraph>

        <StatGrid className="mb-8" columns="md:grid-cols-3">
          <StatCard value="$20B" label="Annual cost savings potential" helper="By 2027" />
          <StatCard value="80%" label="Reduction in settlement time" helper="Cross-border payments" />
          <StatCard value="$16T" label="Projected tokenized assets" helper="By 2030" />
        </StatGrid>

        <SectionHeading>Tokenization: The Real Game Changer</SectionHeading>

        <BodyParagraph>
          Here&apos;s where it gets interesting. Tokenization—representing real-world assets as
          digital tokens on a blockchain—is unlocking liquidity in markets that have been
          historically illiquid. Real estate is the obvious example, but it goes way beyond that.
        </BodyParagraph>

        <BodyParagraph>
          A colleague showed me a platform where you can buy fractional ownership in a Picasso. Not
          a print, not a share in a fund that owns it—actual ownership of the physical painting,
          represented by tokens. The painting stays in a secure vault, but ownership can be traded
          24/7 with instant settlement. That&apos;s the power of tokenization.
        </BodyParagraph>

        <TableCard
          title="Asset Tokenization by Sector"
          caption="High-level view of the tokenization opportunity across major asset classes."
          className="mb-8"
          header={['Asset Class', 'Current Market', 'Tokenization Potential', 'Timeline']}
          rows={[
            ['Real Estate', '$280T', '$1.4T', '2025-2027'],
            ['Equities', '$95T', '$9.5T', '2026-2028'],
            ['Fixed Income', '$130T', '$3.9T', '2025-2027'],
            ['Alternative Assets', '$13T', '$1.2T', '2027-2030'],
          ]}
        />

        <SectionHeading>DeFi Meets Traditional Finance</SectionHeading>

        <BodyParagraph>
          The convergence of decentralized finance (DeFi) and traditional banking is creating some
          fascinating hybrid models. I recently attended a presentation by a Swiss bank that&apos;s
          offering DeFi-style yield products to institutional clients, but with full regulatory
          compliance and traditional custody.
        </BodyParagraph>

        <BodyParagraph>
          Smart contracts are automating processes that used to require armies of back-office staff.
          Trade finance is a perfect example. A letter of credit that used to take weeks and involve
          dozens of manual steps can now be executed automatically when predefined conditions are
          met. The bank I mentioned earlier has reduced their trade finance processing time from 10
          days to 24 hours.
        </BodyParagraph>

        <SectionHeading>The Regulatory Picture</SectionHeading>

        <BodyParagraph>
          Europe&apos;s MiCA (Markets in Crypto-Assets) regulation went live this year, and it&apos;s
          actually been positive for institutional adoption. Banks finally have clear rules to
          follow. I spoke with a compliance officer who said MiCA removed the biggest barrier to
          blockchain adoption: regulatory uncertainty.
        </BodyParagraph>

        <div className="bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-2xl mb-8">
          <h3 className="text-lg font-medium text-white mb-3">
            Major Banks with Live Blockchain Systems
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            {[
              'JP Morgan - Onyx (payments, repo)',
              'Goldman Sachs - GS DAP (digital assets)',
              'HSBC - Orion (custody, tokenization)',
              'Citi - Citi Token Services',
              'BNY Mellon - Digital Asset Custody',
              'Standard Chartered - Zodia Custody',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C5A059] rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <SectionHeading>Central Bank Digital Currencies</SectionHeading>

        <BodyParagraph>
          CBDCs are moving from concept to reality. Over 100 countries are now exploring or piloting
          digital currencies. The digital euro pilot program launched this year, and I had the
          chance to test it. The user experience is seamless—it feels like using a payment app, but
          it&apos;s actually central bank money.
        </BodyParagraph>

        <BodyParagraph>
          What&apos;s interesting is how this changes the banking landscape. If people can hold
          accounts directly with central banks, what&apos;s the role of commercial banks? The answer
          seems to be that banks will focus more on lending, advisory, and value-added services
          rather than just payment processing.
        </BodyParagraph>

        <SectionHeading>The Challenges We&apos;re Still Solving</SectionHeading>

        <BodyParagraph>
          It&apos;s not all smooth sailing. Scalability remains an issue—current blockchain networks
          can&apos;t match Visa&apos;s transaction throughput. Interoperability between different
          blockchains is still clunky. And there&apos;s a serious talent shortage. Every bank I talk
          to is desperately hiring blockchain developers.
        </BodyParagraph>

        <BodyParagraph>
          Energy consumption has improved dramatically with the shift to proof-of-stake, but
          it&apos;s still a concern for some applications. And let&apos;s be real: changing
          decades-old banking infrastructure is hard. Legacy systems integration is probably the
          biggest practical challenge.
        </BodyParagraph>

        <SectionHeading>Where We&apos;re Headed</SectionHeading>

        <BodyParagraph>
          Five years from now, I believe we won&apos;t talk about &quot;blockchain in banking&quot;
          anymore—it&apos;ll just be banking. The technology will be invisible infrastructure, like
          TCP/IP is for the internet. We don&apos;t think about the protocol when we browse the web;
          we just use it.
        </BodyParagraph>

        <BodyParagraph>
          The banks that are investing heavily in blockchain now will have a significant competitive
          advantage. The ones that wait will find themselves playing catch-up in a market
          that&apos;s already moved on. Based on what I&apos;m seeing, that future is arriving
          faster than most people think.
        </BodyParagraph>

        <QuoteBlock>
          &quot;Blockchain isn&apos;t replacing banks—it&apos;s making them better. That&apos;s the
          real revolution.&quot;
        </QuoteBlock>
      </>
    ),
  },

  'private-equity-trends-2024': {
    slug: 'private-equity-trends-2024',
    title: 'Private Equity Trends in 2025: AI and Value Creation',
    author: 'Francesco Baci Paci',
    date: 'Nov 15, 2025',
    category: 'Markets',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=1200',
    content: (
      <>
        <LeadParagraph>
          Private equity in 2024 looks nothing like it did three years ago. The playbook has been
          completely rewritten, and AI is holding the pen.
        </LeadParagraph>

        <BodyParagraph>
          I spent last week at a PE conference in Barcelona, and the conversations were fascinating.
          Nobody was talking about leverage multiples or financial engineering. Every discussion
          centered on operational improvements, technology integration, and sustainable value
          creation. The industry has fundamentally changed.
        </BodyParagraph>

        <SectionHeading>AI: From Buzzword to Competitive Necessity</SectionHeading>

        <BodyParagraph>
          Let me tell you about a conversation I had with a partner at a mid-market PE firm. They
          showed me their new AI-powered deal sourcing platform. It analyzes thousands of companies
          daily, identifying potential acquisition targets based on growth patterns, market
          positioning, and operational metrics. What used to take a team of analysts weeks now
          happens in real-time.
        </BodyParagraph>

        <ProgressBarCard
          title="AI Adoption Across PE Investment Cycle"
          caption="Share of PE firms using AI in each phase of the investment lifecycle."
          className="mb-8"
        >
          <ProgressBarRow
            label="Deal Sourcing & Screening"
            value="87%"
            percentage={87}
            helper="Predictive analytics, market scanning"
          />
          <ProgressBarRow
            label="Due Diligence"
            value="76%"
            percentage={76}
            helper="Automated financial analysis, risk assessment"
          />
          <ProgressBarRow
            label="Portfolio Monitoring"
            value="92%"
            percentage={92}
            helper="Real-time dashboards, performance tracking"
          />
          <ProgressBarRow
            label="Value Creation"
            value="64%"
            percentage={64}
            helper="Operational optimization, revenue growth"
          />
        </ProgressBarCard>

        <BodyParagraph>
          But here&apos;s what&apos;s really interesting: AI isn&apos;t just for deal sourcing.
          Portfolio companies are using it for everything from demand forecasting to customer
          service. One portfolio company I visited implemented AI-driven inventory management and
          reduced working capital needs by 30%. That&apos;s real value creation.
        </BodyParagraph>

        <SectionHeading>The Death of Financial Engineering</SectionHeading>

        <BodyParagraph>
          Remember when PE returns were driven by leverage and multiple expansion? Those days are
          over. Interest rates killed the cheap debt party, and valuation multiples have compressed.
          Now it&apos;s all about operational improvements.
        </BodyParagraph>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-2xl">
            <h3 className="text-lg font-medium text-white mb-4">Traditional Model (2010-2021)</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-400">Multiple Expansion</dt>
                <dd className="text-gray-300">40%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">Leverage</dt>
                <dd className="text-gray-300">35%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">Operational Improvement</dt>
                <dd className="text-gray-300">25%</dd>
              </div>
            </dl>
          </div>

          <div className="bg-gradient-to-br from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-2xl">
            <h3 className="text-lg font-medium text-white mb-4">New Model (2024+)</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-400">Operational Improvement</dt>
                <dd className="text-[#C5A059] font-medium">60%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">Revenue Growth</dt>
                <dd className="text-[#C5A059] font-medium">25%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">Multiple Expansion</dt>
                <dd className="text-gray-300">15%</dd>
              </div>
            </dl>
          </div>
        </div>

        <BodyParagraph>
          I spoke with an operating partner who&apos;s been in the industry for 20 years. She told
          me her job has completely transformed. It used to be about cutting costs. Now it&apos;s
          about digital transformation, process automation, and building scalable systems. The skill
          set required is totally different.
        </BodyParagraph>

        <SectionHeading>ESG: From Compliance to Competitive Advantage</SectionHeading>

        <BodyParagraph>
          ESG integration in PE has moved way beyond checking boxes for LPs. It&apos;s becoming a
          genuine source of value creation. A firm I know invested in a manufacturing company and
          implemented comprehensive sustainability measures. Energy costs dropped 25%, they
          attracted better talent, and customers were willing to pay premium prices for sustainably
          produced goods.
        </BodyParagraph>

        <BodyParagraph>
          The data backs this up. Portfolio companies with strong ESG performance are seeing 15-20%
          higher valuations at exit. LPs are demanding it, regulators are requiring it, and
          increasingly, it just makes good business sense.
        </BodyParagraph>

        <SectionHeading>Private Credit Explosion</SectionHeading>

        <BodyParagraph>
          Private credit has been the breakout story of 2024. With banks pulling back from lending,
          private credit funds have stepped in. The market has grown to nearly $1.7 trillion, and
          it&apos;s not slowing down.
        </BodyParagraph>

        <TableCard
          title="Private Credit Market Growth"
          className="mb-8"
          header={['Year', 'AUM', 'Growth', 'Key Drivers']}
          rows={[
            ['2020', '$850B', '+12%', 'Bank deleveraging'],
            ['2022', '$1.2T', '+18%', 'Rising rates'],
            ['2024', '$1.7T', '+21%', 'Institutional demand'],
            ['2028 (proj.)', '$2.8T', '+13% CAGR', 'Market maturation'],
          ]}
        />

        <BodyParagraph>
          What I find fascinating is how private credit is enabling deals that wouldn&apos;t happen
          otherwise. More flexible terms, faster execution, and direct relationships with
          borrowers. It&apos;s creating a parallel financial system alongside traditional banking.
        </BodyParagraph>

        <SectionHeading>Sector Focus: Where the Money&apos;s Going</SectionHeading>

        <BodyParagraph>
          Technology remains the dominant sector, but it&apos;s evolved. Everyone&apos;s chasing AI
          companies, cybersecurity, and cloud infrastructure. Healthcare is huge—aging demographics
          in developed markets make it a no-brainer. And infrastructure, particularly renewable
          energy and data centers, is attracting massive capital.
        </BodyParagraph>

        <BodyParagraph>
          I attended a pitch last month for a data center REIT. The thesis was simple: AI requires
          massive computing power, computing power needs data centers, data centers need capital.
          They raised $500 million in three weeks.
        </BodyParagraph>

        <SectionHeading>Deal Activity Rebounds</SectionHeading>

        <BodyParagraph>
          After a brutal 2023, deal activity came roaring back in 2024. Q2 was the strongest quarter
          in two years. Megadeals are back—we&apos;ve seen several $10B+ transactions. The exit
          market has thawed, and IPO windows are opening again.
        </BodyParagraph>

        <BodyParagraph>
          What&apos;s driving this? Dry powder. PE firms are sitting on over $2.5 trillion in
          uninvested capital. That money needs to be deployed, and sellers are finally accepting the
          new valuation reality. The market is finding equilibrium.
        </BodyParagraph>

        <SectionHeading>The Road Ahead</SectionHeading>

        <BodyParagraph>
          Looking forward, I see PE becoming more specialized, more operational, and more
          technology-driven. The generalist mega-funds will still exist, but we&apos;ll see more
          sector-focused firms with deep operational expertise.
        </BodyParagraph>

        <BodyParagraph>
          The firms that win will be those that can genuinely improve their portfolio
          companies—not through financial engineering, but through operational excellence, digital
          transformation, and sustainable business practices. That&apos;s a much harder game to
          play, but the rewards for those who master it will be substantial.
        </BodyParagraph>

        <QuoteBlock>
          &quot;The PE industry is growing up. It&apos;s no longer about financial wizardry—it&apos;s
          about building better businesses. And honestly, that&apos;s how it should have been all
          along.&quot;
        </QuoteBlock>
      </>
    ),
  },
};

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-[#051C2C]">
        <Header />
        <ArticleNotFound />
        <Footer />
      </div>
    );
  }

  const relatedArticles = Object.values(articles).filter((a) => a.slug !== slug);

  return (
    <div className="min-h-screen flex flex-col bg-[#051C2C]">
      <Header />
      <ArticleLayout article={article} relatedArticles={relatedArticles} />
      <Footer />
    </div>
  );
}

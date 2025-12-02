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
    series: 'Market Momentum | Week 47',
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
            The American Pharmaceutical company Pfizer had completed the acquisition of the obesity 
            drugs start-up Metsera for nearly 10 billion dollars overcoming its strongest competitor 
            the Danish company Novo Nordisk. Pfizer is the fourth Pharma Company for revenues in 2024,
            with 63.5 billion dollars in revenues and 45.7 billion dollars in gross profit in 2024. 
            At the date of this Article publication, its shares have a value of nearly 22 dollars and 
            its market cap is 142.37 billion dollars placing it at the 11th place in market cap ranking
            for Pharma companies.
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
            This amount was composed of a base of 65.60 dollars per share in cash, that represented a value
            of nearly 7.0 billion dollars. To this amount, they could add a contingent value right (CVR), 
            a contractual right should certain future events or milestones be met, of up to 20.65 dollars 
            per share if they were to achieve three specified clinical and regulatory milestones. 
          </BodyParagraph>

          <BodyParagraph>
            After the acquisition Metsera became a subsidiary of Pfizer causing an end to the trading of Metsera 
            shares on the NASDAQ Global Select Market. 
          </BodyParagraph>

          <SectionHeading>Metsera&apos;s Pipeline: Building a New Obesity Franchise</SectionHeading>

          <BodyParagraph>
            From a medical point of view, this M&A movement allowed Pfizer to expand its portfolio with various drugs.
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
            The first is MET-097i, a weekly and monthly injectable GLP-1 receptor agonist (RA) ready 
            to begin Phase 3 research phase. Then Metsera is also developing a Phase 1 drug MET-233i, 
            a monthly amylin analog, to be used both in monotherapy and in combination with the previous
            cited drug. Finally, they have an oral GLP-1 RA still in Phase 1 development and a preclinical 
            drug composed by a nutrient-stimulated hormone. Citi for the financial part and Wachtell, Lipton, 
            Rosen & Katz for the legal one advised Pfizer for this transaction.
          </BodyParagraph>

          <SectionHeading>Strategic Rationale: A Massive Obesity Market</SectionHeading>

          <BodyParagraph>
            Even though it will take some time for Metsera drugs to enter effectively into the market 
            and its obesity treatments still are in an early-stage development, confirming its unproven 
            efficiency, many are the reasons for this acquisition. 
          </BodyParagraph>

          <BodyParagraph>
            Firstly, Leerink Partners analyst David Risinger projected that Metsera’s two top drugs, 
            MET-097i and MET-233i might reach $5 billion in combined peak sales. Secondly, they will put 
            Pfizer into a market whose value will reach 150 billion dollars at its peak in the next decade in 
            accordance with projections of a Morgan Stanley Research. Nevertheless, Courtney Breen, a Bernstein 
            analyst, stated that this high price was full of optimism, reinforcing the fact that Pfizer must 
            reach 11 billion dollars in revenue by 2040, nearly doubling Metsera’s current projections.
          </BodyParagraph>

          <SectionHeading>Metsera’s Financial Profile</SectionHeading>

          <BodyParagraph>
            Concerning the acquired start-up, the Metsera Company was founded in 2022 and it has always been 
            highly focused in development of treatment for obesity and metabolic diseases. 
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
            Its financial statements of the past two years showed a net loss of 47.2 million dollars 
            in 2023 that increased to 209.1 million dollars in 2024. This can be explained by the 
            completely absence of revenues and an high expense in Research and Development. Its total 
            assets increased to 450.9 million in 2024, whose 80% is Cash and Cash Receivables.
          </BodyParagraph>

          <BodyParagraph>
          Moreover, its debt to equity ratio was nearly 0.6 for 2024. At the end of 2024, they increase
          cash amount of 278.1 million caused mainly by stock issuance due to the negative cash from 
          operating activity of 100 million dollars.
          </BodyParagraph>

          <BodyParagraph>
            In conclusion, this acquisition worth 10 billion dollars allows Pfizer to enter the obesity 
            drug market getting closer to two leader Pharma companies in this market, Eli Lilly and Company 
            and Novo Nordisk.
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
    series: 'Market Momentum | Week 47',
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
    series: 'Market Momentum | Week 47',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=1200',
    content: (
      <>
  <LeadParagraph>
    A 10 billion dollar transaction insert Pfizer in the business of Anti-Obesity drugs
  </LeadParagraph>

  <BodyParagraph>
    The American Pharmaceutical company Pfizer had completed the acquisition of the obesity drugs
    start-up Metsera for nearly 10 billion dollars overcoming its strongest competitor the Danish
    company Novo Nordisk. Pfizer is the fourth Pharma Company for revenues in 2024, with 63.5
    billion dollars in revenues and 45.7 billion dollars in gross profit in 2024. At the date of
    this Article publication, its shares have a value of nearly 22 dollars and its market cap is
    142.37 billion dollars placing it at the 11th place in market cap ranking for Pharma companies.
  </BodyParagraph>

  <SectionHeading>The M&amp;A Battle for Metsera</SectionHeading>

  <BodyParagraph>
    This strife for Metsera acquisition started nearly two months ago at the end of September with
    the first offer made by Pfizer of 7.3 billion dollars. Afterward, an unexpected offer was
    performed by the Danish Pharma company at the end of October and after a period of legal
    challenges the bidding was won by the American company with a deal worth 2.7 billion dollars
    more than the previous agreement from September. On the 7th of November, the New-York based
    company announced the acquisition of Metsera. From a technical point of view, Pfizer bought all
    the outstanding Metsera shares for 86.25 dollars per share in cash. This price was a premium of
    3.69% to Metsera’s Friday, the 7th of November, close that was 83.18 dollars per share. This
    amount was composed of a base of 65.60 dollars per share in cash, that represented a value of
    nearly 7.0 billion dollars. To this amount, they could add a contingent value right (CVR), a
    contractual right should certain future events or milestones be met, of up to 20.65 dollars per
    share if they were to achieve three specified clinical and regulatory milestones. After the
    acquisition Metsera became a subsidiary of Pfizer causing an end to the trading of Metsera
    shares on the NASDAQ Global Select Market.
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
      ['Base price', '$65.60'],
      ['Contingent value price (CVR)', 'Up to $20.65'],
    ]}
  />

  <SectionHeading>Metsera&apos;s Pipeline</SectionHeading>

  <BodyParagraph>
    From a medical point of view, this M&amp;A movement allowed Pfizer to expand its portfolio with
    various drugs. The first is MET-097i, a weekly and monthly injectable GLP-1 receptor agonist
    (RA) ready to begin Phase 3 research phase. Then Metsera is also developing a Phase 1 drug
    MET-233i, a monthly amylin analog, to be used both in monotherapy and in combination with the
    previous cited drug. Finally, they have an oral GLP-1 RA still in Phase 1 development and a
    preclinical drug composed by a nutrient-stimulated hormone. Citi for the financial part and
    Wachtell, Lipton, Rosen &amp; Katz for the legal one advised Pfizer for this transaction.
  </BodyParagraph>

  <TableCard
    title="Metsera Obesity &amp; Metabolic Pipeline"
    className="mb-8"
    header={['Asset', 'Type', 'Indication / Use', 'Stage']}
    rows={[
      [
        'MET-097i',
        'Injectable GLP-1 receptor agonist (weekly & monthly)',
        'Obesity',
        'Ready to begin Phase 3',
      ],
      [
        'MET-233i',
        'Monthly amylin analog',
        'Monotherapy & combination with MET-097i',
        'Phase 1',
      ],
      ['Oral GLP-1 RA', 'Oral GLP-1 receptor agonist', 'Obesity / metabolic diseases', 'Phase 1'],
      [
        'Preclinical asset',
        'Nutrient-stimulated hormone–based drug',
        'Metabolic disorders',
        'Preclinical',
      ],
    ]}
  />

  <SectionHeading>Strategic Rationale</SectionHeading>

  <BodyParagraph>
    Even though it will take some time for Metsera drugs to enter effectively into the market and
    its obesity treatments still are in an early-stage development, confirming its unproven
    efficiency, many are the reasons for this acquisition. Firstly, Leerink Partners analyst David
    Risinger projected that Metsera’s two top drugs, MET-097i and MET-233i might reach $5 billion in
    combined peak sales. Secondly, they will put Pfizer into a market whose value will reach 150
    billion dollars at its peak in the next decade in accordance with projections of a Morgan Stanley
    Research. Nevertheless, Courtney Breen, a Bernstein analyst, stated that this high price was full
    of optimism, reinforcing the fact that Pfizer must reach 11 billion dollars in revenue by 2040,
    nearly doubling Metsera’s current projections.
  </BodyParagraph>

  <SectionHeading>Metsera’s Financial Profile</SectionHeading>

  <BodyParagraph>
    Concerning the acquired start-up, the Metsera Company was founded in 2022 and it has always been
    highly focused in development of treatment for obesity and metabolic diseases. Its financial
    statements of the past two years showed a net loss of 47.2 million dollars in 2023 that
    increased to 209.1 million dollars in 2024. This can be explained by the completely absence of
    revenues and an high expense in Research and Development. Its total assets increased to 450.9
    million in 2024, whose 80% is Cash and Cash Receivables. Moreover, its debt to equity ratio was
    nearly 0.6 for 2024. At the end of 2024, they increase cash amount of 278.1 million caused mainly
    by stock issuance due to the negative cash from operating activity of 100 million dollars.
  </BodyParagraph>

  <TableCard
    title="Metsera Key Financials (2023–2024)"
    className="mb-8"
    header={['Metric', '2023', '2024']}
    rows={[
      ['Net loss', '$47.2M', '$209.1M'],
      ['Total assets', '-', '$450.9M'],
      ['Share of cash in total assets', '-', '≈80%'],
      ['Debt-to-equity ratio', '-', '≈0.6'],
    ]}
  />

  <BodyParagraph>
    In conclusion, this acquisition worth 10 billion dollars allows Pfizer to enter the obesity drug
    market getting closer to two leader Pharma companies in this market, Eli Lilly and Company and
    Novo Nordisk.
  </BodyParagraph>

  <BodyParagraph>Written by Francesco Kaitsas</BodyParagraph>

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

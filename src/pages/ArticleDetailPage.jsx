import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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


import { articles as siteArticles } from '../data/siteData';

// Article content mapping
const articleContents = {
  'bending-spoons-eventbrite-2025': (
    <>
      {/* Title + lead section */}
      <SectionHeading>
        BENDING SPOONS BETS BIG ON LIVE EVENTS WITH $500 MILLION EVENTBRITE DEAL
      </SectionHeading>
      <BodyParagraph>
        Italy’s Bending Spoons is making another major move on the global tech stage with a plan to acquire
        Eventbrite in an all-cash transaction, which is valued at roughly $500 million. Under the terms of the
        definitive agreement, Eventbrite shareholders will receive $4.50 in cash per share, representing an 82%
        premium over the company’s 60-day volume-weighted average share price as of 1 December 2025. Once
        completed, a closing currently expected in the first half of 2026, subject to shareholder and regulatory
        approvals, the deal will take Eventbrite private and mark the end of its life as a listed company.
      </BodyParagraph>

      {/* Key figures for the deal */}
      <StatGrid className="mb-8" columns="md:grid-cols-3">
        <StatCard value="$500M" label="Deal value" helper="All-cash transaction" />
        <StatCard value="$4.50" label="Per-share offer" helper="Cash per share" />
        <StatCard value="82%" label="Premium" helper="Over 60-day VWAP" />
      </StatGrid>

      <TableCard
        title="Key Metrics and Portfolio Highlights"
        className="mb-8"
        header={['Item', 'Detail']}
        rows={[
          ['Transaction value', '$500 million (all cash)'],
          ['Per-share price', '$4.50'],
          ['Premium over 60-day VWAP', '82%'],
          ['Countries served by Eventbrite', '≈180'],
          ['Paid tickets in 2024', '83+ million'],
          ['Events in 2024', '4.7+ million'],
          ['Bending Spoons equity round', '$710 million (2025)'],
          ['Bending Spoons valuation', '$11 billion pre-money'],
          ['Vimeo acquisition', '≈$1.38 billion (all cash)'],
          ['AOL acquisition', '≈$1.4–1.5 billion (reported)'],
        ]}
      />

      <SectionHeading>Eventbrite&apos;s Role in the Experience Economy</SectionHeading>
      <BodyParagraph>
        Eventbrite is one of the best-known brands in the so-called experience economy. Founded in 2006 by
        Julia Hartz, Kevin Hartz and Renaud Visage, it has grown into a global events marketplace serving
        creators and attendees in nearly 180 countries. In 2024, the platform distributed more than 83 million
        paid tickets across over 4.7 million events, ranging from concerts and festivals to local workshops and
        community meetups. Despite this scale, revenue growth has largely stalled in recent years, leaving
        Eventbrite in a position where a new owner with fresh capital and a more aggressive product strategy
        could meaningfully change its trajectory.
      </BodyParagraph>

      <SectionHeading>Bending Spoons&apos; Acquisition Model and Portfolio</SectionHeading>
      <BodyParagraph>
        For Bending Spoons, Eventbrite is the latest addition to a rapidly expanding portfolio of mature
        digital platforms. In the past few years, the Milan-based company has announced or completed
        acquisitions of Vimeo (approximately $1.38 billion in an all-cash deal), AOL (in a transaction reported
        around $1.4–1.5 billion), and Brightcove, alongside earlier deals involving Evernote, WeTransfer,
        Meetup, komoot, Harvest, Remini, StreamYard and others. This acquisition spree has been supported by a
        recent $710 million equity round at an $11 billion pre-money valuation, giving Bending Spoons the
        financial firepower to continue buying and overhauling established software brands rather than
        building everything from scratch.
      </BodyParagraph>

      <SectionHeading>A &quot;Product-Led Private Equity&quot; Playbook</SectionHeading>
      <BodyParagraph>
        The company’s model has often been compared to a form of “product-led private equity”. Instead of
        taking early-stage bets, Bending Spoons targets mature platforms with large user bases but
        underexploited economics, aiming to revive growth through deep changes in product, pricing and
        operations. Official communications describe a playbook focused on upgrading core technology,
        redesigning user interfaces, accelerating feature releases and re-architecting organisations for higher
        long-term performance, while keeping portfolio companies under ownership for the foreseeable future
        rather than flipping them quickly.
      </BodyParagraph>

      <SectionHeading>Product Roadmap for Eventbrite</SectionHeading>
      <BodyParagraph>
        In the case of Eventbrite, management teams from both sides have already outlined an initial roadmap.
        Bending Spoons CEO Luca Ferrari has highlighted several priorities to be explored after the closing:
        building a dedicated messaging feature so organisers and attendees can communicate more effectively;
        introducing AI-powered tools to make event creation faster and less intimidating; improving search and
        discovery to help users find the right events more easily; and developing a secondary ticket
        marketplace in a more structured and transparent way. Additional areas of focus include stronger
        protections against event-related fraud and enhanced marketing analytics capabilities, giving creators
        better insight into ticket sales and audience engagement.
      </BodyParagraph>

      <SectionHeading>Competitive Landscape and Market Positioning</SectionHeading>
      <BodyParagraph>
        From a competitive perspective, the deal positions Bending Spoons more squarely in the global ticketing
        and live events space, where players such as Ticketmaster and newer platforms like Dice already have a
        strong presence. Eventbrite’s distinctive role has historically been to “democratise” event creation,
        making it easier for smaller organisers and independent creators to sell tickets without relying on
        large ticketing firms. If Bending Spoons can successfully deliver on its product plans without
        alienating this base, for instance through overly aggressive pricing changes, the combination of
        Eventbrite’s reach and its own product and AI capabilities could strengthen Eventbrite’s position in
        small-to-mid-sized events and niche communities.
      </BodyParagraph>

      <SectionHeading>Risks and Execution Challenges</SectionHeading>
      <BodyParagraph>
        The acquisition is not without risks. Integrating yet another sizeable platform into an already
        crowded portfolio raises execution questions, particularly as Bending Spoons is still in the process
        of absorbing Vimeo and AOL. Eventbrite itself has faced challenges, including periods of flat revenue
        growth and pressure to improve profitability, which will not disappear overnight simply because
        ownership changes. The deal must also navigate shareholder and regulatory approvals, and any delays or
        market volatility could affect sentiment around the transaction. Some commentators have also noted that
        Bending Spoons has, in other acquisitions, paired its product investments with restructuring efforts
        and changes to monetisation, moves that can be unpopular with parts of the user base even if they
        improve financial metrics over time.
      </BodyParagraph>

      <SectionHeading>Implications for Shareholders and European Tech</SectionHeading>
      <BodyParagraph>
        Nonetheless, the 82% premium embedded in the $4.50 offer suggests that many shareholders may view the
        proposal as an attractive exit from a stock that has struggled to regain its former market enthusiasm.
        For Bending Spoons, the price implies a relatively modest revenue multiple compared with high-growth
        software peers, reflecting a focus on margin expansion and operational turnaround rather than on paying
        for future hyper-growth. For the broader European tech ecosystem, the transaction is another signal
        that large-scale, product-centric acquirers can emerge from Europe, not just the United States, and can
        play a central role in reshaping global digital infrastructure.
      </BodyParagraph>

      <SectionHeading>A High-Stakes Test for Bending Spoons&apos; Playbook</SectionHeading>
      <BodyParagraph>
        If the integration is successful, this acquisition could become a reference case for how a European
        scale-up can use patient capital and aggressive product execution to revitalise a key player in the
        live events industry. If it fails, it will serve as a reminder of how difficult it is to turn around
        complex, two-sided marketplaces at scale. For now, what is clear is that Bending Spoons is doubling
        down on its belief that the future of live experiences will be built on software, and that owning the
        platforms behind those experiences is a bet worth $500 million.
      </BodyParagraph>

      <SectionHeading>References</SectionHeading>
      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a
            href="https://investor.eventbrite.com/press-releases/press-releases-details/2025/Eventbrite-Enters-into-Definitive-Agreement-to-Be-Acquired-by-Bending-Spoons-for-Roughly-500-Million-to-Accelerate-Eventbrites-Next-Phase-of-Growth/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Eventbrite - Eventbrite Enters into Definitive Agreement to Be Acquired by Bending Spoons for
            Roughly $500 Million to Accelerate Eventbrite’s Next Phase of Growth
          </a>
        </li>
        <li>
          <a
            href="https://www.eu-startups.com/2025/12/italys-trailblazer-bending-spoons-adds-eventbrite-to-portfolio-in-e430-million-all-cash-acquisition/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            EU-Startups - Italy’s Bending Spoons adds Eventbrite to portfolio in €430 million all-cash
            acquisition
          </a>
        </li>
        <li>
          <a
            href="https://techfundingnews.com/bending-spoons-to-acquire-events-platform-eventbrite-in-500m-deal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Tech Funding News - Bending Spoons to acquire events platform Eventbrite in $500M deal
          </a>
        </li>
        <li>
          <a
            href="https://it.investing.com/news/stock-market-news/bending-spoons-acquista-eventbrite-per-500-million--in-operazione-cash-3120808"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Investing.com (IT) - Bending Spoons acquista Eventbrite per $500 million in operazione cash
          </a>
        </li>
        <li>
          <a
            href="https://www.startupbusiness.it/en/710-million-dollar-round-for-bending-spoons/148161/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Startupbusiness - $710 million round for Bending Spoons
          </a>
        </li>
        <li>
          <a
            href="https://www.businesswire.com/news/home/20251030216227/en/Bending-Spoons-Raises-%24710M-for-Continued-Investment-and-Growth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Business Wire - Bending Spoons Raises $710M for Continued Investment and Growth
          </a>
        </li>
        <li>
          <a
            href="https://www.theverge.com/news/775701/vimeo-bending-spoons-acquisition"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            The Verge - Vimeo to be acquired by Bending Spoons
          </a>
        </li>
        <li>
          <a
            href="https://www.wsj.com/business/media/internet-pioneer-aol-to-be-acquired-by-tech-company-bending-spoons-8b0200ba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            The Wall Street Journal - Internet Pioneer AOL to Be Acquired by Tech Company Bending Spoons
          </a>
        </li>
      </ul>
    </>
  ),

  'tether-sp-downgrade-2025': (
    <>
      {/* Original text, unchanged */}
      <LeadParagraph>
        S&amp;P DOWNGRADES TETHER’S ASSETS TO LOWEST LEVEL
      </LeadParagraph>

      <SectionHeading>A Critical Moment for the World’s Largest Stablecoin</SectionHeading>
      <BodyParagraph>
        S&amp;P Global Ratings has downgraded the reserves backing Tether’s stablecoin USDT to its
        lowest assessment level, raising new concerns about the stability of the world’s largest
        digital dollar token.
      </BodyParagraph>
      <BodyParagraph>
        Tether issues USDT, a cryptocurrency designed to stay equal in value to the U.S. dollar
        through a mechanism known as a “peg”, which means that one USDT should always be
        redeemable for one dollar.
      </BodyParagraph>
      <BodyParagraph>
        With around $184 billion outstanding, USDT plays a central role in the global crypto
        ecosystem, particularly in emerging markets where access to real dollars is limited. The
        downgrade represents a crucial moment in how traditional financial institutions assess the
        risks behind Tether’s reserve structure.
      </BodyParagraph>

      <SectionHeading>Rising Risk Exposure and Transparency Gaps</SectionHeading>
      <BodyParagraph>
        S&amp;P lowered its rating from 4 (constrained) to 5 (weak), citing two main issues: a
        rising share of high-risk assets in Tether’s reserves and persistent gaps in transparency.
      </BodyParagraph>
      <BodyParagraph>
        According to the agency, assets such as bitcoin, gold, secured loans and corporate bonds
        accounted for 24% of Tether’s reserves at the end of September, compared with 17% a year
        earlier. Bitcoin alone represents 5.6% while Tether’s surplus reserves amount to only 3.9%.
      </BodyParagraph>
      <BodyParagraph>
        S&amp;P warned that if bitcoin or other volatile assets fall sharply, the reserves could
        temporarily become insufficient to fully back all USDT in circulation, making it harder to
        maintain the “peg”. The rating agency also noted that Tether provides little information
        about the reliability of the banks and custodians holding its reserves and offers few
        details on how it values its more complex investments.
      </BodyParagraph>
      <BodyParagraph>
        Despite these concerns, most of Tether’s reserves remain in high-quality assets such as
        U.S. Treasuries and cash equivalents which currently make up around 77% of the total. S&amp;P
        acknowledged that USDT has shown strong stability during major stress events, including
        crypto market crashes and exchange failures.
      </BodyParagraph>
      <BodyParagraph>
        However, the agency stated that the growing share of higher-risk assets makes USDT more
        vulnerable to market swings, and the downgrade comes at a time when the crypto sector is
        already under pressure, with bitcoin down roughly 30% since early October. Analysts added
        that worries about Tether’s reserves have increased uncertainty in the market, as further
        declines in bitcoin could weaken the value of the assets backing the stablecoin.
      </BodyParagraph>

      <SectionHeading>Tether Pushes Back Against S&amp;P’s Framework</SectionHeading>
      <BodyParagraph>
        Tether strongly disagreed with S&amp;P’s assessment, saying that the agency uses a
        traditional finance framework that does not reflect how digital assets operate. The company
        pointed to its history of maintaining stability through market turbulence and highlighted
        its real-time reserve reporting and quarterly attestations by BDO Italy.
      </BodyParagraph>
      <BodyParagraph>
        That said, Tether still does not provide full independent audits, which remains a key
        concern for analysts and regulators.
      </BodyParagraph>
      <BodyParagraph>
        Paolo Ardoino, Tether’s CEO, criticized the downgrade even more directly, writing that the
        company “wears your loathing with pride”. He argued that legacy credit-rating models are
        outdated and that Tether’s “overcapitalized” structure challenges traditional finance,
        although analysts noted that these statements did not address the specific transparency
        gaps raised by S&amp;P.
      </BodyParagraph>
      <QuoteBlock>
        « Paolo Ardoino, Tether’s CEO, criticized the downgrade even more directly, writing that
        the company “wears your loathing with pride”. »
      </QuoteBlock>
      <SectionHeading>Expansion Risks and a New U.S. Regulatory Landscape</SectionHeading>
      <BodyParagraph>
        Additional questions have emerged regarding Tether’s expansion into other sectors such as
        energy, data, finance and education. S&amp;P said it is unclear whether these operations
        are financially separate from the stablecoin business, which may introduce additional risks
        compared with more regulated competitors like Circle, the issuer of USDC.
      </BodyParagraph>
      <BodyParagraph>
        Regulation is also tightening in the U.S. through the new GENIUS Act, which requires
        stablecoins to be backed entirely by short-dated U.S. Treasuries and other liquid assets.
      </BodyParagraph>
      <BodyParagraph>
        This framework aligns more closely with the reserve structure of other issuers, while
        Tether continues to hold secured loans (still 8% of reserves, or over $14 billion,
        according to BDO Italy) despite earlier promises to eliminate them.
      </BodyParagraph>

      <SectionHeading>Growing Scrutiny on the USDT Model</SectionHeading>
      <BodyParagraph>
        In conclusion, S&amp;P’s downgrade highlights mounting concerns over the clarity and
        stability of the reserves backing USDT. Tether insists on its resilience, yet its growing
        exposure to volatile assets raises questions that remain unanswered. As the stablecoin
        industry matures, only time will tell whether USDT’s model can withstand increasing
        scrutiny and shifting market conditions.
      </BodyParagraph>

      {/* Stats based solely on numbers already present in the text */}
      <StatGrid className="mb-8" columns="md:grid-cols-3">
        <StatCard value="$184B" label="USDT outstanding" helper="Approximate supply" />
        <StatCard value="24%" label="High-risk assets" helper="BTC, gold, loans, bonds" />
        <StatCard value="77%" label="Treasuries & cash equivalents" helper="Share of reserves" />
      </StatGrid>

      <TableCard
        title="Reserve Composition & Key Indicators"
        className="mb-8"
        header={['Item', 'Detail']}
        rows={[
          ['Previous S&P rating', '4 (constrained)'],
          ['New S&P rating', '5 (weak)'],
          ['High-risk assets (BTC, gold, loans, bonds)', '24% of reserves'],
          ['Share one year earlier', '17% of reserves'],
          ['Bitcoin share', '5.6% of reserves'],
          ['Surplus reserves', '3.9%'],
          ['Safe assets (U.S. Treasuries + cash equivalents)', '≈77% of reserves'],
          ['Secured loans', '8% of reserves (≈$14B)'],
        ]}
      />


      <BodyParagraph>
        Written by Francesco Baci Paci and Giovanni Ciccarello
      </BodyParagraph>

      <SectionHeading>References</SectionHeading>

      <ul className="text-sm text-gray-400 space-y-2">
        <li>
          <a
            href="https://www.ft.com/content/974926ba-d295-4679-a4ed-7846b7f4242e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Financial Times – Coverage of Tether S&P Downgrade
          </a>
        </li>
        <li>
          <a
            href="https://www.idnfinancials.com/news/59149/bitcoin-exposure-rises-sp-downgrades-usdt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            IDN Financials – Bitcoin exposure rises, S&P downgrades USDT
          </a>
        </li>
        <li>
          <a
            href="https://www.reuters.com/business/finance/tethers-stablecoin-downgraded-weak-sp-assessment-2025-11-26/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Reuters – Tether's stablecoin downgraded to 'weak' S&P assessment
          </a>
        </li>
        <li>
          <a
            href="https://finance.yahoo.com/news/p-downgrades-tether-lowest-rating-221830375.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] hover:underline"
          >
            Yahoo Finance – S&P downgrades Tether to lowest rating
          </a>
        </li>
      </ul>
    </>
  ),

  'sustainable-finance-esg-2024': (
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
          ['Contingent value price (CVR)', 'Up to $20.65']
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
};


export default function ArticleDetailPage() {
  const { slug } = useParams();

  // Find metadata from siteData
  const metadata = siteArticles.find(a => a.slug === slug);
  const Content = articleContents[slug];

  if (!metadata || !Content) {
    return (
      <div className="min-h-screen flex flex-col bg-[#051C2C]">
        <Header />
        <ArticleNotFound />
        <Footer />
      </div>
    );
  }

  // Merge metadata with content
  const article = {
    ...metadata,
    content: Content
  };

  const relatedArticles = siteArticles.filter((a) => a.slug !== slug);

  const siteUrlRaw = import.meta.env.VITE_SITE_URL || window.location.origin;
  const siteUrl = siteUrlRaw.trim().replace(/\/+$/, '');
  const canonicalUrl = `${siteUrl}/articles/${slug}`;
  const imageUrl = `${siteUrl}${article.image}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#051C2C]">
      <Helmet>
        <title>{article.title} | ESCP Finance Society</title>
        <meta name="description" content={article.excerpt} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={article.title} />
        <meta property="twitter:description" content={article.excerpt} />
        <meta property="twitter:image" content={imageUrl} />
      </Helmet>

      <Header />
      <ArticleLayout article={article} relatedArticles={relatedArticles} />
      <Footer />
    </div>
  );
}

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

// Shared data across the site for consistency

// Articles data
export const articles = [
    {
        title: "S&P Downgrades Tether’s Assets to Lowest Level",
        excerpt:
            "S&P lowers its assessment of USDT’s reserves amid rising exposure to volatile assets and ongoing transparency concerns.",
        category: "Crypto & Stablecoins",
        series: "Market Momentum | Week 2",
        author: "Francesco Baci Paci & Giovanni Ciccarello",
        date: "Dec 5, 2025",
        image: "/Article-Cover-Website-SP500.webp",
        slug: "tether-sp-downgrade-2025"
    },
    {
        title: "A $10 Billion Bet: Pfizer Enters the Anti-Obesity Drug Market",
        excerpt: "Pfizer acquires Metsera for nearly $10 billion, entering the booming anti-obesity drug market and challenging industry leaders.",
        category: "Healthcare",
        series: "Market Momentum | Week 1",
        author: "Francesco Kaitsas",
        date: "Nov 28, 2025",
        image: "/pfizer-article.png",
        slug: "sustainable-finance-esg-2024"
    }
];

// News data
export const newsItems = [
    {
        title: "ECB Raises Interest Rates to Combat Inflation",
        source: "Financial Times",
        date: "Nov 22, 2025",
        category: "Central Banking",
        excerpt: "The European Central Bank announced a 25 basis point rate hike, bringing the key interest rate to 4.75%.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=600",
        url: "https://www.ft.com"
    },
    {
        title: "Tech Stocks Rally on AI Optimism",
        source: "Bloomberg",
        date: "Nov 21, 2025",
        category: "Markets",
        excerpt: "Major technology indices surged as investors bet on continued AI-driven growth in the sector.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=600",
        url: "https://www.bloomberg.com"
    },
    {
        title: "Private Equity Firms Eye European Opportunities",
        source: "Reuters",
        date: "Nov 20, 2025",
        category: "Private Equity",
        excerpt: "Major PE firms are increasing their focus on European mid-market companies amid favorable valuations.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=600",
        url: "https://www.reuters.com"
    }
];

// Team data - Leadership only for homepage
export const leadershipTeam = [
    { name: "Lorenzo Sargiani", role: "Founder & President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" },
    { name: "Ines Desmaretz", role: "Vice President", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=300" },
    { name: "Daria Iannuzzi", role: "Vice President", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=60&w=300" }
];

// Full team data for About page
export const teamSections = [
    {
        name: "Leadership",
        members: [
            { name: "Lorenzo Sargiani", role: "Founder & President", img: "/team/president.jpg" },
            { name: "Ines Desmaretz", role: "Vice President", img: "/team/ines-desmaretz.jpg" },
            { name: "Daria Iannuzzi", role: "Vice President", img: "/team/daria-iannuzzi.jpg" },
            { name: "Martina Proietti Silvestri", role: "Board Member", img: "/team/martina-proietti-silvestri.jpg" },
            { name: "Christos Gerontopoulos", role: "Board Member", img: "/team/christos-gerontopoulos.jpg" },
            { name: "Lucas Thai", role: "Board Member", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=300" },
            { name: "Alex Toumasson", role: "Board Member", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=300" }
        ]
    },
    {
        name: "HR",
        members: [
            { name: "Edoardo Cerrano", role: "Head of HR", img: "/team/edoardo-cerrano.jpg" },
            { name: "Alessandra Boarolo", role: "HR Associate", img: "/team/alessandra-boarolo.jpg" },
            { name: "Tommaso Donati", role: "HR Associate", img: "/team/tommaso-donati.jpg" },
            { name: "Rodolfo Barberis", role: "HR Associate", img: "/team/rodolfo-barberis.jpg" },
            { name: "Emanuele Ferrara", role: "HR Associate", img: "/team/emanuele-ferrara.jpg" }
        ]
    },
    {
        name: "Strategy",
        members: [
            { name: "Flavio Antonuzzo", role: "Head of Strategy", img: "/team/flavio-antonuzzo.png" },
            { name: "Tommaso Girani", role: "Head of Strategy", img: "/team/tommaso-girani.png" },
            { name: "Carlo Giulio Rizzuto", role: "Strategy Associate", img: "/team/carlo-giulio-rizzuto.jpg" }
        ]
    },
    {
        name: "Articles",
        members: [
            { name: "Luca Citton", role: "Head of Articles", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=60&w=300" },
            { name: "Francesco Kaitsas", role: "Head of Articles", img: "/team/francesco-kaitsas.jpg" },
            { name: "Francesco Baci Paci", role: "Articles Associate", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=300" },
            { name: "Federico Furioso", role: "Articles Associate", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=300" },
            { name: "Giovanni Ciccarello", role: "Articles Associate", img: "/team/giovanni-ciccarello.jpg" },
            { name: "Giorgio Gheorghis Tsingros", role: "Articles Associate", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" }
        ]
    },
    {
        name: "Research",
        members: [
            { name: "Adriano Cogorno", role: "Head of Research", img: "/team/adriano-cogorno.jpg" },
            { name: "Giuseppe Mansueto", role: "Head of Research", img: "/team/giuseppe-mansueto.png" },
            { name: "Giorgio D'Innocenzo", role: "Research Associate", img: "/team/giorgio-dinnocenzo.jpg" },
            { name: "Davide Biselli", role: "Research Associate", img: "/team/davide-biselli.jpg" },
            { name: "Frederic Wessling Melonari", role: "Research Associate", img: "/team/frederic-wessling-melonari.jpg" },
            { name: "Federico Tempestini", role: "Research Associate", img: "/team/federico-tempestini.jpg" }
        ]
    },
    {
        name: "Events",
        members: [
            { name: "Daria Iannuzzi", role: "Head of Events", img: "/team/daria-iannuzzi.jpg" },
            { name: "Martina Proietti Silvestri", role: "Head of Events", img: "/team/martina-proietti-silvestri.jpg" },
            { name: "Armand Vahé Francesco Gaidc", role: "Events Associate", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" }
        ]
    },
    {
        name: "Marketing",
        members: [
            { name: "Valentina Petrini", role: "Head of Marketing", img: "/team/valentina-petrini.jpg" },
            { name: "Alessio Penzo", role: "Marketing Associate", img: "/team/alessio-penzo.jpg" }
        ]
    },
    {
        name: "Instagram",
        members: [
            { name: "Beatrice Pelini", role: "Head of Instagram", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=300" },
            { name: "Camilla Barra", role: "Instagram Associate", img: "/team/camilla-barra.jpg" },
            { name: "Federico Valente", role: "Instagram Associate", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" }
        ]
    },
    {
        name: "LinkedIn",
        members: [
            { name: "Marina Meucci", role: "Head of LinkedIn", img: "/team/marina-meucci.png" },
            { name: "Giulio Bonifacio", role: "LinkedIn Associate", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=300" },
            { name: "Francesco Maria Liaci", role: "LinkedIn Associate", img: "/team/francesco-maria-liaci.jpg" }
        ]
    },
    {
        name: "Tech",
        members: [
            { name: "Shashank Tripathi", role: "Head of Tech", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=60&w=300" },
            { name: "Augustin Mons", role: "Tech Associate", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=300" },
            { name: "Jingyi Wang", role: "Tech Associate", img: "/team/jingyi-wang.jpg" }
        ]
    }
];

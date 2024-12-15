const config = {
    app: {
        name: "EzGo",
        logo: "/ezgo.png",
        tagline: "Your ultimate fall prevention solution",
    },
    navLinks: [
        { text: "Home", href: "#" },
        { text: "Features", href: "#features" },
        { text: "Pricing", href: "#pricing" },
        { text: "SWOC", href: "#swoc" },
        { text: "Timeline", href: "#timeline" }
    ],
    hero: {
        heading: "Welcome to EzGo",
        description: "Your ultimate fall prevention solution.",
        buttonText: "Learn More",
    },
    solution: {
        heading: "Proposed Solution",
        description: "EzGo is a wearable vest that monitors the Centre of Gravity (COG) using sensors and AI to prevent falls. ",
        features: [
            "Voice alerts to users.",
            "Emergency notifications to caregivers.",
            "Dashboard integration for data.",
            "Automatic airbag inflation within a second."
        ]
    },
    highlights: {
        heading: "Key Highlights of the Solution",
        cards: [
            {
                title: "Fast Processing",
                description: "Immediate feedback and response from the device.",
                icon: "/fast-processing.png",
            },
            {
                title: "Fall Detection",
                description: "AI predicts falls when COG exceeds the base of support.",
                icon: "/fall-detection.png",
            },
            {
                title: "Universal Design",
                description: "Accessible and comfortable for all genders and locations.",
                icon: "/universal-design.png",
            },
        ]
    },
    novelty: {
        heading: "Novelty/Unique Value Proposition",
        points: [
            "Sensors strategically placed for accurate results.",
            "Cost-effective and ready for large-scale production.",
            "Comfortable and stylish design for everyday use."
        ],
    },
    market: {
        heading: "Market Opportunity",
        points: [
            "Market Size and Growth - CAGR of 6.0% from 2022-32",
            "Market Trends and Shifts",
            "Market Competitiveness",
            "Market Segmentation",
            "Market Monetization Strategy"
        ]
    },
    businessModel: {
        heading: "Proposed Business Model",
        revenue: [
            "Direct product sales",
            "Subscription-based services for dashboard and premium features"
        ],
        salesChannels: [
            "Doctors and hospitals",
            "Old-age homes",
            "Insurance partnerships",
            "Government agencies",
            "Medical institutions and distributors"
        ]
    },
    features: {
        heading: "Key Features",
        cards: [
            {
                title: "Fall Detection",
                description: "AI predicts falls when COG exceeds the base of support.",
                icon: "/fall-detection.png",
            },
            {
                title: "Fast Processing",
                description: "Immediate feedback and response from the device.",
                icon: "/fast-processing.png",
            },
            {
                title: "Universal Design",
                description: "Accessible and comfortable for all genders and locations.",
                icon: "/universal-design.png",
            },
        ],
    },
    pricing: {
        heading: "Pricing",
        cards: [
            {
                title: "Basic",
                price: "₹5,000",
                features: ["Voice Alert", "Track Location", "Dashboard (1 month)"],
                buttonText: "Buy Now",
            },
            {
                title: "Pro",
                price: "₹8,000",
                features: ["Voice Alert", "Track Location", "Dashboard (3 month)", "Airbag (Head & Hip)"],
                buttonText: "Buy Now",
            },
            {
                title: "Elite",
                price: "₹10,000",
                features: ["Customizable Voice Alert", "Track Location", "Dashboard (6 month)", "Airbag (Full Body)", "ECG monitoring"],
                buttonText: "Buy Now",
            },
        ],
    },
    timeline: {
        heading: "Product Development Timeline",
        points: [
            "Hardware Development, Testing & Validation",
            "Initial product testing & certifications",
            "Manufacturing & Production",
            "Launching & Marketing"
        ]
    },
    swoc: {
        heading: "SWOC Analysis",
        strengths: [
            "Low cost of production",
            "Real-Time instant decision making (ML model)",
            "Adaptable & customizable (ML model)",
            "Works immediately on powering-on",
            "Social benefits"
        ],
        weaknesses: [
            "Miniaturization of device",
            "Dependency on Accurate Calibration",
            "Battery Life and Charging",
            "Integration with existing hardware systems"
        ],
        opportunities: [
            "Growing Aging Population",
            "Not exclusive to aged-demographic",
            "Healthcare Partnerships",
            "Market Expansion",
            "Airbag protection",
            "Government and Insurance Support"
        ],
        challenges: [
            "Competition",
            "Clinical Validation",
            "Regulatory Hurdles",
            "Privacy and Security Concerns",
            "Market Adoption Resistance"
        ],
        backgroundImage: "/swoc-bg.png"
    },
    competition: {
        heading: "Competitive Analysis",
        tableData: {
            headers: ["Criteria", "EzGo", "Competitor 1", "Competitor 2", "Competitor 3"],
            rows: [
                ["Price", "₹40,000", "₹84,655", "₹38,975", "₹44,705"],
                ["Weight of the device", "800gms", "1.13 kgs", "1.3 kgs", "450 gms"],
                ["Comfort", "Ergonomically Designed", "Good", "Good", "Good"],
                ["Accessibility", "Universally accessible", "Cannot be made accessible", "Cannot be made accessible", "Can be accessible"],
            ],
        },
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} EzGo. All rights reserved.`,
    },
};

export default config;
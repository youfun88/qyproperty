const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://qyproperty.com/#organization",
  name: "QY Property",
  legalName: "QY LLC",
  alternateName: "Quality Life, Yours",
  description:
    "Cross-border real estate investment advisory helping Taiwanese families invest in San Diego, California residential properties. End-to-end services: strategy, acquisition, renovation, and property management. QY LLC is also developing software apps to help landlords manage their properties.",
  url: "https://qyproperty.com",
  logo: "https://qyproperty.com/icon.svg",
  image: "https://qyproperty.com/apple-icon.png",
  email: "yufan@qyproperty.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3600 Torrey View Ct",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92130",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.926,
    longitude: -117.236,
  },
  areaServed: [
    {
      "@type": "City",
      name: "San Diego",
      containedInPlace: { "@type": "State", name: "California" },
    },
  ],
  knowsLanguage: ["en", "zh-Hant"],
  knowsAbout: [
    "Cross-border real estate investment",
    "San Diego residential real estate",
    "Taiwan to United States property investment",
    "FIRPTA compliance",
    "U.S. entity structuring (LLC and Trust)",
    "Rental property management",
    "Real estate tax advisory",
  ],
  serviceType: [
    "Real Estate Investment Advisory",
    "Cross-Border Real Estate",
    "Property Management",
    "Property Acquisition",
    "Renovation Services",
    "Tax Advisory",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "SoftwareApplication",
      name: "QY Landlord Property Management Apps",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "QY LLC's new product line of software apps that help landlords and property owners manage their properties — tracking tenants and leases, organizing rent and expenses, scheduling maintenance, and keeping documents in one place.",
    },
  },
  slogan: "Quality Life, Yours.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://qyproperty.com/#website",
  name: "QY Property — Quality Life, Yours",
  url: "https://qyproperty.com",
  inLanguage: ["en", "zh-Hant"],
  publisher: { "@id": "https://qyproperty.com/#organization" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can Taiwanese investors buy property in the United States?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taiwanese investors can purchase U.S. real estate through proper entity structuring (typically an LLC or Trust), obtaining an ITIN, and working with cross-border advisors. QY Property provides end-to-end support including legal entity setup, FIRPTA compliance, and remote transaction management.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average rental yield for San Diego residential properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "San Diego residential properties typically yield 5.8% or higher in net rental income, depending on the neighborhood and property type. Areas near UCSD and the biotech corridor tend to perform especially well.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy a property in San Diego for my child studying in the U.S.?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this is one of the most popular strategies among Taiwanese clients. Parents purchase a property near their child's university, rent it out for income until the child enrolls, and then provide housing during their studies. This generates rental income, builds equity, and eliminates dormitory costs.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to visit San Diego to purchase a property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. QY Property manages the entire process remotely, including virtual property tours, remote closing via notarized documents, and ongoing property management. Many clients complete their investment without traveling to the U.S.",
      },
    },
    {
      "@type": "Question",
      name: "What taxes do Taiwanese investors pay on U.S. rental income?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taiwanese investors are subject to U.S. federal and California state income tax on rental income. With proper entity structuring and tax planning, effective tax rates can be optimized. Key considerations include FIRPTA withholding on sale, depreciation benefits, and U.S.-Taiwan tax treaty implications.",
      },
    },
    {
      "@type": "Question",
      name: "Why is San Diego a good market for real estate investment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "San Diego offers top-tier universities (UCSD), a booming biotech and defense sector, year-round mild climate, constrained housing supply, and strong population growth. These factors drive consistent property appreciation (~7.2% annually) and extremely high rental demand.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "RealEstateAgent",
    name: "QY Property",
  },
  name: "Cross-Border Real Estate Investment Advisory",
  description:
    "End-to-end real estate investment services for Taiwanese investors purchasing residential properties in San Diego, California. Includes investment strategy, property sourcing, legal and tax advisory, acquisition support, renovation, and property management.",
  areaServed: "San Diego, California, USA",
  audience: {
    "@type": "Audience",
    audienceType: "Taiwanese real estate investors",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    availableLanguage: ["English", "Traditional Chinese"],
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

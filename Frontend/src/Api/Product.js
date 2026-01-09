const products = [
  {
    _id: "66a1f1a1a1a1a1a1a1a1a1a1",
    creator: {
      _id: "65u123",
      username: "MiniDev",
      role: "member",
    },
    seller: {
      _id: "65u123",
      username: "MiniDev",
    },

    title:
      "PRISON CORE ⚡ [1.13 - 1.21.X] ⭐ #1 PRISON CORE ⭐ All-in-One ⭐15 Plugins in 1⭐",
    slug: "minecraft-survival-server-setup",
    description:
      "A complete Minecraft survival server setup with permissions, economy, ranks, and optimized performance.",
    shortDescription:
      "INFINITE ENCHANTS ✨ MINES ✨ AUTOSELL ✨CURRENCIES ✨ RANKS ✨ REBIRTHS ✨ MUTLIPLIERS ✨ BOMBS ✨REWARDS",
    category: "Minecraft",
    subCategory: "Server Setups",
    price: 15,
    currency: "USD",
    isFree: false,
    thumbnail: "https://builtbybit.com/attachments/chatcolor-gui-png.879341/?preset=cardr1",
    gallery: [
      "https://example.com/screenshots/xprison-mines.jpg",
      "https://example.com/screenshots/xprison-enchants.jpg",
      "https://example.com/screenshots/xprison-ranks.jpg",
    ],
    tags: ["minecraft", "server", "survival", "setup"],
    versions: [{ _id: "v1", version: "2025.4.1.13", fileSize: "120MB" }],

    dependencies: [
      {
        name: "Vault",
        required: true,
        note: "For economy features",
        url: "https://dev.bukkit.org/projects/vault",
      },
      {
        name: "WorldGuard",
        required: true,
        note: "For mine regions protection",
        url: "https://enginehub.org/worldguard/",
      },
      {
        name: "WorldEdit",
        required: false,
        note: "Optional - only for faster mine setup",
        url: "https://enginehub.org/worldedit/",
      },
      {
        name: "PlaceholderAPI",
        required: false,
        note: "Highly recommended for placeholders",
        url: "https://www.spigotmc.org/resources/placeholderapi.6245/",
      },
      {
        name: "Helper Library",
        required: false,
        note: "Included in some distributions",
        url: null,
      },
    ],

    changelog: [
      {
        version: "2025.4.1.13",
        date: "December 2025",
        changes: [
          "Added full Minecraft 1.21.x support",
          "Improved mine bomb particles and effects",
          "Fixed rebirth multiplier duplication bug",
          "Optimized auto-sell and token calculations",
          "Multiple internal fixes and performance improvements",
        ],
        reactions: {
          "❤️": 12,
          "🚀": 8,
          "👍": 5,
          "😮": 3,
        },
      },
      {
        version: "2025.3.9",
        date: "August 2025",
        changes: [
          "Minor bug fixes",
          "Updated for latest Paper builds",
          "Enhanced custom enchant system",
        ],
        reactions: {
          "👍": 15,
          "❤️": 7,
          "😂": 2,
        },
      },
      {
        version: "2025.1.8",
        date: "July 2025",
        changes: [
          "WorldEdit is NO longer required!",
          "Fixed laser beam particles on older versions",
          "GUI performance improvements",
        ],
        reactions: {
          "🚀": 22,
          "❤️": 18,
          "😮": 10,
          "👍": 6,
        },
      },
    ],
    versionsHistory: [
      {
        version: "2025.4.1.13",
        date: "Friday at 4:33 PM",
        downloads: 4,
      },
      {
        version: "2025.4.1.13",
        date: "Tuesday at 9:45 PM",
        downloads: 4,
      },
      {
        version: "2025.4.1.12",
        date: "Dec 13, 2025",
        downloads: 7,
      },
      {
        version: "2025.4.1.12",
        date: "Dec 10, 2025",
        downloads: 4,
      },
      {
        version: "2025.4.1.11",
        date: "Dec 9, 2025",
        downloads: 4,
      },
      {
        version: "2025.4.1.11",
        date: "Dec 7, 2025",
        downloads: 2,
      },
    ],

    faqs: [
      {
        question: "Is this compatible with Paper?",
        answer: "Yes, fully compatible with Paper & Spigot.",
      },
    ],
  

    requirements: ["Java 17", "4GB RAM minimum"],

    downloadPermissions: {
      roles: ["member"],
    },

    purchaseRequired: true,
    status: "draft",
    stats: {
      views: 1240,
      downloads: 340,
      purchases: 210,
      rating: 4.6,
      reviews: 5,
    },

    approvedBy: {
      _id: "admin1",
      username: "AdminUser",
    },
    approvedStatus:"approved",
    reactions: {
      "❤️": 12,
      "🚀": 8,
      "👍": 5,
      "😮": 3,
    },

    approvedAt: "2025-08-01T10:30:00.000Z",

    createdAt: "2025-07-25T12:00:00.000Z",
    updatedAt: "2025-08-01T10:30:00.000Z",

    reviews: [
      {
        _id: "rev001",
        user: {
          _id: "user7890",
          username: "ProMinerX",
        },
        rating: 5,
        title: "Absolute Game Changer!",
        comment:
          "This is hands down the best prison core I've ever used. Everything works flawlessly on 1.21, bombs and multipliers are insane. Worth every penny!",
        createdAt: "2025-12-18T14:22:00.000Z",
        helpful: 24,
      },
      {
        _id: "rev002",
        user: {
          _id: "user4567",
          username: "ServerBoss99",
        },
        rating: 5,
        title: "Feature-packed and well supported",
        comment:
          "All-in-one solution that saved me hours of setup. Developer responds quickly on Discord. Highly configurable and stable.",
        createdAt: "2025-12-10T09:15:00.000Z",
        helpful: 18,
      },
      {
        _id: "rev003",
        user: {
          _id: "user2345",
          username: "EnchantMaster",
        },
        rating: 4,
        title: "Great, but needs minor tweaks",
        comment:
          "Infinite enchants are amazing, but had small issues with auto-sell on high player count. Fixed after update though. Overall solid 4.5/5",
        createdAt: "2025-11-28T19:40:00.000Z",
        helpful: 12,
      },
      {
        _id: "rev004",
        user: {
          _id: "user8901",
          username: "NewOwner2025",
        },
        rating: 5,
        title: "Perfect for new prison servers",
        comment:
          "As a beginner, this made setting up my prison server super easy. Documentation is clear and features are top-tier.",
        createdAt: "2025-11-15T11:05:00.000Z",
        helpful: 15,
      },
      {
        _id: "rev005",
        user: {
          _id: "user3456",
          username: "OldSchoolMC",
        },
        rating: 4,
        title: "Good on newer versions",
        comment:
          "Runs perfectly on 1.21, but some particle effects glitch on 1.18. Still, updates are frequent and dev is active.",
        createdAt: "2025-10-20T16:30:00.000Z",
        helpful: 7,
      },
    ],
  },
  {
    _id: "66a1f1a1a1a1a1a1a1a1a1a1",
    creator: {
      _id: "65u123",
      username: "MiniDev",
      role: "member",
    },
    seller: {
      _id: "65u123",
      username: "MiniDev",
    },

    title:
      "PRISON CORE ⚡ [1.13 - 1.21.X] ⭐ #1 PRISON CORE ⭐ All-in-One ⭐15 Plugins in 1⭐",
    slug: "minecraft-survival-server-setup",
    description:
      "A complete Minecraft survival server setup with permissions, economy, ranks, and optimized performance.",
    shortDescription:
      "INFINITE ENCHANTS ✨ MINES ✨ AUTOSELL ✨CURRENCIES ✨ RANKS ✨ REBIRTHS ✨ MUTLIPLIERS ✨ BOMBS ✨REWARDS",
    category: "Minecraft",
    subCategory: "Server Setups",
    price: 15,
    currency: "USD",
    isFree: false,
    thumbnail: "https://builtbybit.com/attachments/chatcolor-gui-png.879341/?preset=cardr1",
    gallery: [
      "https://example.com/screenshots/xprison-mines.jpg",
      "https://example.com/screenshots/xprison-enchants.jpg",
      "https://example.com/screenshots/xprison-ranks.jpg",
    ],
    tags: ["minecraft", "server", "survival", "setup"],
    versions: [{ _id: "v1", version: "2025.4.1.13", fileSize: "120MB" }],

    dependencies: [
      {
        name: "Vault",
        required: true,
        note: "For economy features",
        url: "https://dev.bukkit.org/projects/vault",
      },
      {
        name: "WorldGuard",
        required: true,
        note: "For mine regions protection",
        url: "https://enginehub.org/worldguard/",
      },
      {
        name: "WorldEdit",
        required: false,
        note: "Optional - only for faster mine setup",
        url: "https://enginehub.org/worldedit/",
      },
      {
        name: "PlaceholderAPI",
        required: false,
        note: "Highly recommended for placeholders",
        url: "https://www.spigotmc.org/resources/placeholderapi.6245/",
      },
      {
        name: "Helper Library",
        required: false,
        note: "Included in some distributions",
        url: null,
      },
    ],
    
    changelog: [
      {
        version: "2025.4.1.13",
        date: "December 2025",
        changes: [
          "Added full Minecraft 1.21.x support",
          "Improved mine bomb particles and effects",
          "Fixed rebirth multiplier duplication bug",
          "Optimized auto-sell and token calculations",
          "Multiple internal fixes and performance improvements",
        ],
        reactions: {
          "❤️": 12,
          "🚀": 8,
          "👍": 5,
          "😮": 3,
        },
      },
      {
        version: "2025.3.9",
        date: "August 2025",
        changes: [
          "Minor bug fixes",
          "Updated for latest Paper builds",
          "Enhanced custom enchant system",
        ],
        reactions: {
          "👍": 15,
          "❤️": 7,
          "😂": 2,
        },
      },
      {
        version: "2025.1.8",
        date: "July 2025",
        changes: [
          "WorldEdit is NO longer required!",
          "Fixed laser beam particles on older versions",
          "GUI performance improvements",
        ],
        reactions: {
          "🚀": 22,
          "❤️": 18,
          "😮": 10,
          "👍": 6,
        },
      },
    ],
    versionsHistory: [
      {
        version: "2025.4.1.13",
        date: "Friday at 4:33 PM",
        downloads: 4,
      },
      {
        version: "2025.4.1.13",
        date: "Tuesday at 9:45 PM",
        downloads: 4,
      },
      {
        version: "2025.4.1.12",
        date: "Dec 13, 2025",
        downloads: 7,
      },
      {
        version: "2025.4.1.12",
        date: "Dec 10, 2025",
        downloads: 4,
      },
      {
        version: "2025.4.1.11",
        date: "Dec 9, 2025",
        downloads: 4,
      },
      {
        version: "2025.4.1.11",
        date: "Dec 7, 2025",
        downloads: 2,
      },
    ],

    faqs: [
      {
        question: "Is this compatible with Paper?",
        answer: "Yes, fully compatible with Paper & Spigot.",
      },
    ],
  

    requirements: ["Java 17", "4GB RAM minimum"],

    downloadPermissions: {
      roles: ["member"],
    },

    purchaseRequired: true,
    status: "published",
    stats: {
      views: 1240,
      downloads: 340,
      purchases: 210,
      rating: 4.6,
      reviews: 5,
    },
    approvedStatus:"approved",
    approvedBy: {
      _id: "admin1",
      username: "AdminUser",
    },
    reactions: {
      "❤️": 12,
      "🚀": 8,
      "👍": 5,
      "😮": 3,
    },

    approvedAt: "2025-08-01T10:30:00.000Z",

    createdAt: "2025-07-25T12:00:00.000Z",
    updatedAt: "2025-08-01T10:30:00.000Z",

    reviews: [
      
    ],
  },
  
  
];

export default products;

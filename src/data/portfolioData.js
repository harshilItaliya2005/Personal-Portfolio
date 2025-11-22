export const portfolioData = {
    personalInfo: {
        name: "Harshil Italiya",
        title: "Senior Android Developer",
        tagline: "Crafting exceptional mobile experiences with Kotlin & Jetpack Compose",
        email: "italiyaharshil78@gmail.com",
        phone: "+91 93289 40845",
        location: "Surat, India",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        resume: "/Harshil_Italiya_Resume.pdf",
        avatar: "/images/avatar.jpg"
    },
    stats: [
        { value: "50K+", label: "App Downloads", icon: "📱" },
        { value: "15+", label: "Projects Completed", icon: "🚀" },
        { value: "3+", label: "Years Experience", icon: "💼" },
        { value: "4.8", label: "Play Store Rating", icon: "⭐" }
    ],
    about: {
        description: "I'm a passionate Android developer with over 3 years of experience building robust, scalable, and user-friendly mobile applications. I specialize in modern Android development with Kotlin, Jetpack Compose, and clean architecture patterns.",
        highlights: [
            "Expert in Kotlin & Java development",
            "Proficient with Jetpack Compose & modern UI",
            "Experience with CI/CD pipelines",
            "Strong focus on performance optimization",
            "Agile methodology practitioner"
        ]
    },

    skills: {
        programming: ["Kotlin", "Java", "C", "C++", "Jetpack Compose"],
        android: ["Android SDK", "Jetpack Compose", "Room", "Retrofit", "Dagger/Hilt", "Coroutines", "Flow"],
        tools: ["Android Studio", "Git", "Firebase", "Figma", "Gradle", "CI/CD"],
        architectures: ["MVVM", "MVI", "Clean Architecture", "Repository Pattern"]
    },

    projects: [
        {
            id: 1,
            title: "E-Commerce Mobile App",
            description: "A full-featured e-commerce app with product listings, cart, and payment integration",
            technologies: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "Stripe SDK"],
            features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"],
            playStoreLink: "https://play.google.com/store/apps/details?id=com.yourapp",
            githubLink: "https://github.com/yourusername/ecommerce-app",
            image: "/images/project1.jpg"
        },
        {
            id: 2,
            title: "Weather Forecast App",
            description: "Real-time weather forecasting app with location-based services",
            technologies: ["Kotlin", "MVVM", "Retrofit", "Room", "WorkManager"],
            features: ["Current Weather", "7-Day Forecast", "Location Services", "Offline Support"],
            playStoreLink: "https://play.google.com/store/apps/details?id=com.weatherapp",
            githubLink: "https://github.com/yourusername/weather-app",
            image: "/images/project2.jpg"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Productivity app for task management with reminders and categories",
            technologies: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Material You"],
            features: ["Task Creation", "Reminders", "Categories", "Dark Theme", "Backup & Sync"],
            playStoreLink: "https://play.google.com/store/apps/details?id=com.taskapp",
            githubLink: "https://github.com/yourusername/task-manager",
            image: "/images/project3.jpg"
        }
    ],

    experience: [
        {
            id: 1,
            company: "Tech Company",
            position: "Senior Android Developer",
            period: "2022 - Present",
            description: [
                "Led development of multiple Android applications with 1M+ downloads",
                "Implemented modern Android architecture patterns (MVVM, Clean Architecture)",
                "Mentored junior developers and conducted code reviews"
            ]
        },
        {
            id: 2,
            company: "Startup Inc",
            position: "Android Developer",
            period: "2020 - 2022",
            description: [
                "Developed and maintained company's flagship Android application",
                "Integrated third-party APIs and SDKs",
                "Improved app performance by 40% through optimization"
            ]
        }
    ]
};
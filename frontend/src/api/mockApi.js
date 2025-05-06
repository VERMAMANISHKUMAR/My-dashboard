export const fetchCompanyData = async () => {
          try {
            // Simulating webpage data extraction for 20 companies
            return [
              {
                companyName: "TechCorp Inc.",
                description: "Leading provider of innovative tech solutions",
                numberOfSales: 1800,
                revenueLastMonth: 82000,
                revenueLastYear: 950000
              },
              {
                companyName: "InnoVate Solutions",
                description: "Pioneering AI-driven analytics",
                numberOfSales: 1200,
                revenueLastMonth: 65000,
                revenueLastYear: 780000
              },
              {
                companyName: "CloudPeak Technologies",
                description: "Scalable cloud infrastructure services",
                numberOfSales: 2000,
                revenueLastMonth: 90000,
                revenueLastYear: 1100000
              },
              {
                companyName: "DataWave Systems",
                description: "Big data processing experts",
                numberOfSales: 1500,
                revenueLastMonth: 70000,
                revenueLastYear: 850000
              },
              {
                companyName: "CyberGuard Solutions",
                description: "Advanced cybersecurity platforms",
                numberOfSales: 900,
                revenueLastMonth: 50000,
                revenueLastYear: 600000
              },
              {
                companyName: "GreenTech Innovations",
                description: "Sustainable tech for a better future",
                numberOfSales: 1100,
                revenueLastMonth: 60000,
                revenueLastYear: 720000
              },
              {
                companyName: "SmartFlow Analytics",
                description: "Real-time data insights",
                numberOfSales: 1700,
                revenueLastMonth: 78000,
                revenueLastYear: 920000
              },
              {
                companyName: "NextGen Robotics",
                description: "Automation and robotics pioneer",
                numberOfSales: 1300,
                revenueLastMonth: 67000,
                revenueLastYear: 800000
              },
              {
                companyName: "Quantum Dynamics",
                description: "Quantum computing research",
                numberOfSales: 800,
                revenueLastMonth: 45000,
                revenueLastYear: 550000
              },
              {
                companyName: "BioTech Labs",
                description: "Biotechnology advancements",
                numberOfSales: 1400,
                revenueLastMonth: 72000,
                revenueLastYear: 870000
              },
              {
                companyName: "SkyNet Communications",
                description: "High-speed connectivity solutions",
                numberOfSales: 1600,
                revenueLastMonth: 75000,
                revenueLastYear: 900000
              },
              {
                companyName: "EnergyCore Systems",
                description: "Renewable energy tech",
                numberOfSales: 1000,
                revenueLastMonth: 55000,
                revenueLastYear: 660000
              },
              {
                companyName: "Visionary Software",
                description: "Cutting-edge software development",
                numberOfSales: 1900,
                revenueLastMonth: 85000,
                revenueLastYear: 1000000
              },
              {
                companyName: "SecurePath Technologies",
                description: "Secure data transmission",
                numberOfSales: 950,
                revenueLastMonth: 52000,
                revenueLastYear: 620000
              },
              {
                companyName: "IntelliSynth AI",
                description: "Synthetic AI for automation",
                numberOfSales: 1250,
                revenueLastMonth: 68000,
                revenueLastYear: 810000
              },
              {
                companyName: "OrbitTech Solutions",
                description: "Satellite communication systems",
                numberOfSales: 1750,
                revenueLastMonth: 79000,
                revenueLastYear: 930000
              },
              {
                companyName: "NanoTech Industries",
                description: "Nanotechnology innovations",
                numberOfSales: 850,
                revenueLastMonth: 47000,
                revenueLastYear: 570000
              },
              {
                companyName: "HealthSync Solutions",
                description: "Healthcare IT integration",
                numberOfSales: 1350,
                revenueLastMonth: 71000,
                revenueLastYear: 860000
              },
              {
                companyName: "EcoSmart Technologies",
                description: "Eco-friendly tech solutions",
                numberOfSales: 1150,
                revenueLastMonth: 63000,
                revenueLastYear: 750000
              },
              {
                companyName: "FutureProof Systems",
                description: "Forward-thinking tech platforms",
                numberOfSales: 1450,
                revenueLastMonth: 74000,
                revenueLastYear: 880000
              }
            ];
          } catch (error) {
            throw new Error("Failed to fetch company data");
          }
        };
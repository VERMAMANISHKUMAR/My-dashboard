export const fetchCompanyData = async () => {
          try {
            // Simulating webpage data extraction
            return {
              companyName: "TechCorp Inc.",
              description: "Leading provider of innovative tech solutions",
              numberOfSales: 1800,
              revenueLastMonth: 82000,
              revenueLastYear: 950000
            };
          // eslint-disable-next-line no-unreachable
          } catch (error) {
            throw new Error("Failed to fetch company data");
          }
        };
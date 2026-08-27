/**
 * Bell Laboratories iQ case study copy.
 * Body text must remain exactly as provided in the Bell PDFs.
 * Use **double asterisks** for bold spans that appear in the PDF.
 */

export const bellAttribution = {
  logoSrc: "/images/logos/bell-laboratories.jpg",
  logoAlt: "Bell Laboratories, Inc.",
  sensingLogoSrc: "/images/logos/bell-sensing.png",
  sensingLogoAlt: "Bell Sensing Technologies",
  iqLogoSrc: "/images/logos/iq-mark.png?v=3",
  iqLogoAlt: "iQ",
  poweredBySrc: "/images/logos/iq-powered-by-bst.png",
  poweredByAlt: "Powered by Bell Sensing Technologies",
  framing:
    "Bell Laboratories is a Wisconsin-based manufacturer that specializes in rodent-control products used by Driftless Area Pest Control and other professional pest-control companies. These case studies feature Bell’s iQ smart rodent-monitoring system. Bell has given Driftless Area Pest Control permission to share them here; the full studies are provided as PDF so the original copy stays intact.",
};

export type CaseStudyChart = {
  title: string;
  /** Path for chart image extracted from the Bell PDF. Add when assets are shared. */
  imageSrc?: string;
  imageAlt: string;
};

export type CaseStudy = {
  slug: string;
  category: string;
  /** Title text after the iQ logo (PDF places the iQ mark before this). */
  title: string;
  abstract: string;
  introduction: string[];
  technologyOverview: string[];
  objectivesLead: string[];
  objectives: string[];
  methodsLead: string[];
  devices: string[];
  methodsClosing: string[];
  outdoorControl: string[];
  indoorControl: string[];
  analysis: string[];
  customerBenefits: string[];
  conclusions: string[];
  conclusionClosing: string[];
  learnMoreBefore: string;
  learnMoreAfter: string;
  outdoorChart: CaseStudyChart;
  indoorChart: CaseStudyChart;
  pdfHref: string;
  pdfLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "commercial-buildings",
    category: "Commercial Buildings",
    title: "Products Improve Rodent Control\nat Commercial Accounts",
    abstract:
      "This three-year study at a 600,000 sq. ft. commercial account sought to confirm the effectiveness of iQ products. Notably, the study aimed to identify how much iQ products improve pest management professional (PMP) efficiency and efficacy in reducing rodent populations at commericial accounts. Over the course of the study, outdoor rodent activity was reduced by 50% and indoor rodent activity was reduced by 75%. The study confirmed the use of iQ products reduced service time by 78%. iQ data showed technicians when and where rodents were traveling, allowing them to perform proactive rodent control. It also gave technicians more time to focus on other integrated pest management (IPM) tasks and allowed them to reduce rodenticide usage.",
    introduction: [
      "Pest management professionals are calling for advanced rodent control solutions. iQ traps and bait stations contain rodent sensing technology, empowering technicians to efficiently monitor and service their accounts.",
      "A study was conducted from May 2021 to August 2024 to verify that iQ traps and bait stations improve PMP efficiency and efficacy at commercial accounts.",
    ],
    technologyOverview: [
      "Each iQ device contains an integrated Bluetooth sensor that collects rodent activity data each time a rodent enters the station or is caught by a trap. This gives technicians the exact time and location of rodent activity, helping them efficiently tailor their pest management plan.",
      "The Bluetooth sensor allows technicians to verify rodent activity from up to 100 ft. away, saving them time and energy from checking empty traps and hard-to-reach devices.",
      "After each service visit, rodent activity data is automatically uploaded to the free Bell Sensing portal and converted into easy-to-read reports. PMPs can take advantage of this data to proactively target infestations where it matters most. Historical data also makes showing customers the value of professional service easier than ever.",
    ],
    objectivesLead: [
      "The objective of this study was to evaluate the efficacy of iQ’s wireless rodent sensing technology at a large-scale account. By deploying devices at the account, the study seeks to:",
    ],
    objectives: [
      "Identify how much iQ devices improve service time at the account compared to traditional rodent control products.",
      "Assess the effectiveness of iQ products at reducing rodent through the use of data.",
      "Collect rodent activity data and identify population trends to provide proactive, targeted control",
    ],
    methodsLead: ["During the study period, the account was set with the following iQ devices:"],
    devices: [
      "**53 Express iQ** bait stations",
      "**175 24/7 iQ** multiple-catch mouse traps",
    ],
    methodsClosing: [
      "The site was a 600,000 sq. ft. manufacturing facility in a suburban area in southwestern Wisconsin. It was serviced bi-weekly a total of 85 times.",
    ],
    outdoorControl: [
      "Express iQ bait stations containing bromethalin rodenticide were placed around the facility’s exterior. Each station contained a bromethalin rodenticide block. From May 2021 to April 2022, there were 2,934 rodent activity events. From May 2022 to April 2023, there were 2,054 events. From May 2023 to April 2024, there were 1,488 events.",
      "After the first year, there were 880 fewer events, which is a 31% reduction in rodent activity from the previous year. The second year, there were 566 fewer events compared to the year prior, which is a 28% reduction in rodent activity.",
      "In total, there was a 50% reduction in rodent activity.",
      "Additionally, the max number of events in a single day in 2021 was 85. In 2024, the maximum number of events in a single day was 45. The maximum outdoor events yearly decreased by 45%.",
    ],
    indoorControl: [
      "24/7 iQ multiple-catch traps were placed in the facility’s interior near entry points and along shelving. From May 2021 to April 2022, there were 24 captures. From May 2022 to April 2023, there were 5 captures. From May 2023 to December 2023, there were 6 captures.",
      "From January 2024 to August 2024, there were no captures.",
      "In total, there was a 75% reduction in indoor rodent activity.",
    ],
    analysis: [
      "Service time was reduced by **78%**. When the account was set with traditional traps and bait stations, service took **4.5 hours**. With iQ, service times were reduced to an average of **1 hour**.",
      "Technicians stated iQ improved their job satisfaction because service didn't require PMPs to check empty traps and bait stations, making service less tedious. This efficiency also gave them more time to communicate with customers and perform other duties like inspection and exclusion.",
      "iQ's rodent activity data enabled better bait station placement. It also reduced rodenticide use because techicians only placed rodenticide when data justified it.",
      "The improvement in outdoor control led to a drastic improvement in interior control. Notably, there were no indoor captures in 2024.",
    ],
    customerBenefits: [
      "**Brand protection.** Preventing infestations protects the customer's products, and their reputation, from being damaged.",
      "**Lower risk.** With a major reduction in rodent activity, there is a lower risk of property damage as well as a lower risk of rodents spreading disease, injuring workers, or causing product recalls.",
      "**Reduced cost.** Because rodent populations are proactively targeted, infestations are knocked down before they spread. This leads to fewer callbacks.",
      "**Transparency.** Because customers can have access to after visit summaries, they see exactly when and how technicians are protecting their property. They also can see historical data showing how rodent infestations have been brought under control.",
      "**Easier audits.** Customers more easily passed audits with access to quarterly and annual reports of rodent activity and pest control service.",
      "**Less stress.** Rodent activity data provides proof that service is working. This gives customers peace of mind that their inventory and employees are safe.",
      "**Fewer disruptions.** Because technicians only need to service devices with verified activity, there are minimal business disruptions.",
      "**Responsible application.** iQ products allow technicians to use non-toxic baits to monitor rodent activity, switching to rodenticides when there is proven activity. This reduces overall rodenticide use.",
    ],
    conclusions: [
      "iQ improves rodent control at commercial accounts.",
      "iQ reduced service time by 78%, giving technicians more time to perform inspection and exclusion.",
      "iQ data also enables effective and proactive control, resulting in a more robust IPM program.",
    ],
    conclusionClosing: [
      "The managing pest control company easily integrated iQ products into its workflow, which allowed them to drastically reduce rodent activity at the account. iQ’s data-driven service enabled technicians to target key areas, leading to proactive rodent control to quickly get the account under control.",
    ],
    learnMoreBefore: "To learn more about how",
    learnMoreAfter:
      "can revolutionize rodent control at your accounts.\ncontact your Bell representative or visit",
    outdoorChart: {
      title: "Outdoor Rodent Activity Events by Year",
      imageSrc: "/images/case-studies/commercial-outdoor-chart.png?v=1",
      imageAlt: "Outdoor rodent activity events by year chart from the Bell commercial case study",
    },
    indoorChart: {
      title: "Indoor Rodent Activity Events by Year",
      imageSrc: "/images/case-studies/commercial-indoor-chart.png?v=1",
      imageAlt: "Indoor rodent activity events by year chart from the Bell commercial case study",
    },
    pdfHref: "/literature/iq-casestudy-commercial.pdf",
    pdfLabel: "Download Commercial Buildings Case Study PDF",
    imageSrc: "/images/case-study-commercial.png",
    imageAlt: "Automated conveyor lines moving crates inside a commercial facility",
  },
  {
    slug: "food-production",
    category: "Food Production",
    title: "Improves Pest Control at\nFood Production Facilities",
    abstract:
      "This four-year study at a food production account sought to confirm the effectiveness of iQ products. Notably, the study aimed to identify how much iQ products improve pest management professional (PMP) efficiency and efficacy in reducing rodent populations at food production accounts. Over the course of the study, outdoor rodent activity was reduced by 60% and indoor rodent activity was reduced by 87%. The study confirmed the use of iQ products reduced service time by 66%. iQ data showed technicians when and where rodents were traveling, allowing them to perform proactive rodent control. It also gave technicians more time to focus on other integrated pest management (IPM) tasks and allowed them to reduce rodenticide usage.",
    introduction: [
      "Pest management professionals are calling for advanced rodent control solutions. iQ traps and bait stations contain wireless rodent sensing technology, empowering technicians to efficiently monitor and service their accounts.",
      "A study was conducted from May 2020 – April 2024 to verify that iQ traps and bait stations improve PMP efficiency and efficacy at reducing rodent populations at food production accounts. There was significant rodent pressure on the facility’s exterior.",
    ],
    technologyOverview: [
      "Each iQ device contains an integrated Bluetooth sensor that collects rodent activity data each time a rodent enters the station or is caught by a trap. This gives technicians the exact time and location of rodent activity, helping them efficiently tailor their pest management plan.",
      "The Bluetooth sensor allows technicians to verify rodent activity from up to 100 ft. away, saving them time and energy from checking empty traps and hard-to-reach devices.",
      "After each service visit, rodent activity data is automatically uploaded to the free Bell Sensing portal and converted into easy-to-read reports. PMPs can take advantage of this data to proactively target infestations where it matters most. Historical data also makes showing customers the value of professional service easier than ever.",
    ],
    objectivesLead: [
      "The objective of this study was to evaluate the efficacy of iQ’s wireless rodent sensing technology at food production accounts. By deploying devices at the account, the study seeks to:",
    ],
    objectives: [
      "Identify how much iQ devices improve service time at the account compared to traditional rodent control products.",
      "Assess the effectiveness of iQ products at reducing rodent populations.",
      "Collect rodent activity data and identify population trends to provide proactive, targeted control",
    ],
    methodsLead: ["During the study period, the account was set with the following iQ devices:"],
    devices: [
      "**51 Express iQ** bait stations",
      "**81 24/7 iQ** multiple-catch indoors",
    ],
    methodsClosing: [
      "The account was a 30,000 sq. ft. food production facility in an urban area in central California. The account was serviced weekly for four years, for a total of 224 services.",
    ],
    outdoorControl: [
      "Express iQ bait stations containing cholecalciferol rodenticide were placed around the facility’s exterior. From May 2020 to April 2021, there were 2,787 rodent activity events. From May 2021 to April 2022, there were 1,735 events. From May 2022 to April 2023, there were 1,071 events. From May 2023 to April 2024, there were 1,240 events.",
      "After the first year of iQ usage, there were 1,052 fewer events, which is a 38% reduction in rodent activity from the first year. The second year, there were 664 fewer events than the previous year, which is a 38% decrease in activity. The third year of service had 169 more events than the previous year, which was a 16% increase in activity. However, this is still 56% decrease from the first year.",
    ],
    indoorControl: [
      "24/7 iQ multiple-catch traps were placed in the facility’s interior near entry points and along shelving. In 2020, there were 8 total captures. In 2021, there was 1 capture. In 2022, there was 1 capture. In 2023, there were no captures. In 2024, there were 2 captures.",
      "After iQ service, indoor rodent activity decreased by 87% on average.",
    ],
    analysis: [
      "Service time was reduced by 66%. When the account was set with traditional traps and bait stations, service took **3 hours**. With iQ, service time was reduced to an average of **1 hour**.",
      "iQ rodent activity data enabled better bait station placed. After one year of iQ service, rodent activity was reduced by 60% on average for the next 3 years.",
      "The drastic improvement in outdoor control led to a significant improvement in indoor control. Notably, there were no indoor captures in 2023, with an average of one capture per year after the first year.",
    ],
    customerBenefits: [
      "**Brand protection.** Preventing infestations protects the customer's products, and their reputation, from being damaged.",
      "**Lower risk.** With a major reduction in rodent activity, there is a lower risk of property damage as well as a lower risk of rodents spreading disease, injuring workers, or causing product recalls.",
      "**Reduced cost.** Because rodent populations are proactively targeted, infestations are knocked down before they spread. This leads to fewer callbacks.",
      "**Transparency.** Because customers can have access to after visit summaries, they see exactly when and how technicians are protecting their property. They also can see historical data showing how rodent infestations have been brought under control.",
      "**Easier audits.** Customers more easily passed audits with access to quarterly and annual reports of rodent activity and pest control service.",
      "**Less stress.** Rodent activity data provides proof that service is working. This gives customers peace of mind that their inventory and employees are safe.",
      "**Fewer disruptions.** Because technicians only need to service devices with verified activity, there are minimal business disruptions.",
      "**Responsible application.** iQ products allow technicians to use non-toxic baits to monitor rodent activity, switching to rodenticides when there is proven activity. This reduces overall rodenticide use.",
    ],
    conclusions: [
      "iQ improves rodent control at food production accounts. Rodent activity was reduced by 60% on average.",
      "iQ reduced service time by 66%, giving technicians more time to perform inspection and exclusion.",
      "iQ data enables effective and proactive control, resulting in a more robust IPM.",
    ],
    conclusionClosing: [
      "The managing pest control company easily integrated iQ products into its workflow, which allowed them to drastically reduce rodent activity at the account. iQ’s data-driven service enabled technicians to target key areas, leading to proactive rodent control to quickly get the account under control.",
    ],
    learnMoreBefore: "To learn more about how",
    learnMoreAfter:
      "can revolutionize rodent control at your accounts.\ncontact your Bell representative or visit",
    outdoorChart: {
      title: "Outdoor Rodent Activity Events by Year",
      imageSrc: "/images/case-studies/food-production-outdoor-chart.png?v=4",
      imageAlt: "Outdoor rodent activity events by year chart from the Bell food production case study",
    },
    indoorChart: {
      title: "Indoor Rodent Activity Events by Year",
      imageSrc: "/images/case-studies/food-production-indoor-chart.png",
      imageAlt: "Indoor rodent activity events by year chart from the Bell food production case study",
    },
    pdfHref: "/literature/iq-casestudy-food-production.pdf",
    pdfLabel: "Download Food Production Case Study PDF",
    imageSrc: "/images/case-study-food-production.png",
    imageAlt: "Apples moving along a food production packaging line",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/** Strip ** markers for plain-text uses (meta, cards). */
export function plainCaseStudyText(value: string): string {
  return value.replace(/\*\*/g, "");
}

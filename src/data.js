const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Breast Cancer Survival Dashboard",
    description: "An interactive Tableau dashboard analyzing breast cancer survival data to uncover trends and patterns.",
    image: `${base}breast_cancer.png`,
    tags: ["Tableau", "Data Analytics", "Healthcare"],
    github: "https://github.com/rachiittt/BREAST_CANCER-DASHBOARD-",
    live: "https://public.tableau.com/app/profile/rachit.singh5076/viz/BREASTCANCERSURVIVALDASHBOARD_17773966228100/Dashboard1"
  },
  {
    name: "Diabetic Readmission Analysis",
    description: "A data-driven analysis using Tableau to identify factors contributing to diabetic readmission rates.",
    image: `${base}diabetic_readmission.png`,
    tags: ["Tableau", "Healthcare", "Data Analytics"],
    github: "https://github.com/rachiittt/DiabeticCare",
    live: "https://public.tableau.com/app/profile/rachit.singh5076/viz/DIABETICDASHBOARD_17774048631690/Dashboard1"
  },
  {
    name: "DVA Data Analysis Project",
    description: "A comprehensive Excel-based spreadsheet analysis for data visualization and insights generation.",
    image: `${base}dva_project.png`,
    tags: ["Excel", "Data Analytics", "Spreadsheet"],
    github: "https://github.com/rachiittt/DVA_PROJECT",
    live: "https://docs.google.com/spreadsheets/d/1JcB8eCtTuL3GYYFdindeoh_ewq_-l-Wnyu5n0E1-67o/edit?gid=200731376#gid=200731376"
  },
]

export default projects

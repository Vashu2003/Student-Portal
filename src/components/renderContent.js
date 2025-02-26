import Dashboard from "./Dashboard";
import Courses from "./Courses";
import ResultSection from "./ResultSection";
import Assignments from "./Assignments";

export const renderContent = (activeTab, personalInfo) => {
  switch (activeTab) {
    case "Dashboard":
      return <Dashboard personalInfo={personalInfo} />;
    case "Courses":
      return <Courses />;
    case "Results":
      return <ResultSection />;
    case "Assignments":
      return <Assignments />;
    default:
      return <Dashboard personalInfo={personalInfo} />;
  }
};
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardContent from "../../components/Dashboard/DashboardContent";
import { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [openNewProject, setOpenNewProject] = useState(false);
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const [activeField, setActiveField] = useState(1);
  const [projectReady, setProjectReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [currentProject, setCurrentProject] = useState(null);

  const handleBack = () => {
    if (activeField > 1 && !projectReady) {
      setActiveField(activeField - 1);
    }

    if (projectReady) {
      setActiveField(4);
      setProjectReady(false);
    }
  };

  const handleNext = () => {
    if (activeField <= 3 && activeField >= 1) {
      setActiveField(activeField + 1);
    }
  };

  const handleSkip = () => {
    setProjectReady(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Your project is getting ready");
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/create-new-project",
        {
          fieldOne,
          fieldTwo,
          fieldThree,
          fieldFour,
        }
      );

      if (data.success) {
        setLoadingMessage("Project has been generated successfully");
        setCurrentProject(data.result);
        setActiveField(1);
        setFieldOne("");
        setFieldTwo("");
        setFieldThree("");
        setFieldFour("");
        setOpenNewProject(false);
        
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          background: `url("/images/bg-1.jpg") rgba(0,0,0,0.4)`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundOrigin: "border-box",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
        }}
        className="max-h-screen h-screen w-full overflow-y-hidden"
      >
        <div className="w-full flex items-center">
          <div className="w-1/4 bg-green-300 h-screen hidden 800px:block md:block lg:block xl:block">
            <Sidebar />
          </div>
          <div className="w-full 800px:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4 h-screen">
            <DashboardContent
              activeField={activeField}
              handleBack={handleBack}
              handleNext={handleNext}
              openNewProject={openNewProject}
              setOpenNewProject={setOpenNewProject}
              fieldOne={fieldOne}
              setFieldOne={setFieldOne}
              fieldTwo={fieldTwo}
              setFieldTwo={setFieldTwo}
              fieldThree={fieldThree}
              setFieldThree={setFieldThree}
              fieldFour={fieldFour}
              setFieldFour={setFieldFour}
              projectReady={projectReady}
              setProjectReady={setProjectReady}
              handleSkip={handleSkip}
              handleSubmit={handleSubmit}
              loading={loading}
              loadingMessage={loadingMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

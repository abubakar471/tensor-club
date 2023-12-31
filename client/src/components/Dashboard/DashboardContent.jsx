import { Button, IconButton, Modal } from "@mui/material";
import AuthNavbar from "../Navbar/AuthNavbar";
import { ArrowDownward } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import InputGroup from "../InputGroup/InputGroup";
import ProjectSummary from "../ProjectSummary/ProjectSummary";

const DashboardContent = ({
  openNewProject,
  setOpenNewProject,
  activeField,
  handleBack,
  handleNext,
  fieldOne,
  setFieldOne,
  fieldTwo,
  setFieldTwo,
  fieldThree,
  setFieldThree,
  fieldFour,
  setFieldFour,
  projectReady,
  setProjectReady,
  handleSkip,
  handleSubmit,
  loading,
  loadingMessage,
}) => {
  return (
    <div className="w-full ">
      <AuthNavbar
        openNewProject={openNewProject}
        setOpenNewProject={setOpenNewProject}
        activeField={activeField}
        fieldOne={fieldOne}
        setFieldOne={setFieldOne}
        fieldTwo={fieldTwo}
        setFieldTwo={setFieldTwo}
        fieldThree={fieldThree}
        setFieldThree={setFieldThree}
        fieldFour={fieldFour}
        setFieldFour={setFieldFour}
        setProjectReady={setProjectReady}
      />

      <div className="  h-screen px-0 800px:px-4 md:px-4 lg:px-4 xl:px-4 flex flex-col">
        <div className="opacity-70 h-[80%] w-full bg-gradient-to-b from-[#001336] to-[#071838]">
          {/* all genereated contents are going to be in here */}
        </div>

        <hr className="my-2" />

        <div className="h-[20%] bg-gradient-to-b from-[#001336] to-[#071838]">
          <div className="px-2">
            <div>
              <h1 className="text-white my-2 text-sm font-mono">
                # output files
              </h1>
            </div>
            <button className="p-2 rounded-full flex items-center text-white bg-gradient-to-b from-[#204a88] to-gray-500">
              <ArrowDownward className="text-blue-300 font-extrabold" />{" "}
              Download
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={openNewProject}
        onClose={() => setOpenNewProject(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="h-screen flex items-center justify-center"
      >
        <div className="bg-[#0B143A] text-[#333] w-[400px] 800px:w-[600px] md:w-[600px] lg:w-[600px] xl:w-[600px] h-[350px] relative">
          <div className="flex flex-col items-center justify-center w-full h-full px-8">
            {!projectReady && (
              <InputGroup
                activeField={activeField}
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
              />
            )}

            {projectReady && (
              <ProjectSummary
                fieldOne={fieldOne}
                fieldTwo={fieldTwo}
                fieldThree={fieldThree}
                fieldFour={fieldFour}
                activeField={activeField}
                handleSubmit={handleSubmit}
                loading={loading}
                loadingMessage={loadingMessage}
              />
            )}

            {!projectReady && (
              <div className="my-4">
                <h1 className="text-pink-700 font-semibold">{activeField}/4</h1>
              </div>
            )}

            <div className="w-full flex items-center justify-evenly">
              {!loading && (
                <Button
                  disabled={loading}
                  onClick={() => handleBack()}
                  variant="contained"
                  className={`disabled:!bg-gay-500 p-2 !bg-gray-600 text-white`}
                >
                  Back
                </Button>
              )}
              {activeField <= 3 && activeField >= 1 && (
                <Button
                  onClick={() => handleNext()}
                  variant="contained"
                  className={`disabled:!bg-pink-950 p-2 !bg-pink-600 text-white`}
                >
                  Next
                </Button>
              )}

              {activeField === 4 &&
                !projectReady &&
                !loading &&
                (fieldFour.length > 0 ? (
                  <Button
                    onClick={() => handleSkip()}
                    variant="contained"
                    className="p-2 !bg-pink-600 text-white"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleSkip()}
                    variant="contained"
                    className="p-2 !bg-pink-600 text-white"
                  >
                    Skip
                  </Button>
                ))}

              {projectReady && !loading && (
                <Button
                  disabled={loading}
                  onClick={handleSubmit}
                  variant="contained"
                  className="p-2 !bg-blue-500 text-white"
                >
                  Generate
                </Button>
              )}
            </div>
          </div>
          <div className="absolute top-2 right-2">
            <IconButton>
              <CancelIcon
                className="text-pink-500"
                onClick={() => {
                  setOpenNewProject(!openNewProject);
                }}
              />
            </IconButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardContent;

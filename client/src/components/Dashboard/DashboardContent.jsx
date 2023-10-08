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
  activeMobileSidebar,
  setActiveMobileSidebar,
}) => {
  return (
    <div className="w-full ">
      <div>
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
          activeMobileSidebar={activeMobileSidebar}
          setActiveMobileSidebar={setActiveMobileSidebar}
        />
      </div>

      <div className="  h-screen px-0 800px:px-4 md:px-4 lg:px-4 xl:px-4 flex flex-col">
        <div className="h-[70%] 800px:h-[80%] md:h-[80%] lg:h-[80%] xl:h-[80%]  overflow-y-auto w-full bg-gradient-to-b from-[#001336] to-[#071838] cats p-4">
          <div className="text-white text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et earum
            veritatis magni explicabo ipsa nam minus, odit obcaecati molestias
            eos totam beatae fugiat delectus exercitationem fugit doloremque
            consequatur! Officia, nostrum?
            <br />
            <br />
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#001336] to-[#071838] w-full"> 
          <hr className="my-2" />
        </div>

        <div className="h-[30%] 800px:h-[20%] md:h-[20%] lg:h-[20%] xl:h-[20%] bg-gradient-to-b from-[#001336] to-[#071838]">
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

            <div className="absolute bottom-24 800px:bottom-6 md:bottom-6 lg:bottom-6 xl:bottom-6 right-2">
              <img
                src="/images/robot.gif"
                alt="robot"
                loading="lazy"
                className="w-[90px] h-[90px] object-contain"
              />
            </div>
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
            <IconButton
              onClick={() => {
                setOpenNewProject(!openNewProject);
              }}
            >
              <CancelIcon className="text-pink-500" />
            </IconButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DashboardContent;

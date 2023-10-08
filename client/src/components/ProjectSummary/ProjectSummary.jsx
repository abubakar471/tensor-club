import { CircularProgress } from "@mui/material";

const ProjectSummary = ({
  activeField,
  fieldOne,
  fieldTwo,
  fieldThree,
  fieldFour,
  handleSubmit,
  loading,
  loadingMessage,
}) => {
  return (
    <>
      {loading? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl mb-8">{loadingMessage}</h2>
          <div>
            <CircularProgress />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full text-white mb-8">
          <div className="mb-4">
            <h1 className="text-2xl text-center">Your project's summary</h1>
          </div>

          <div>
            <h3 className="text-lg">Field One : {fieldOne}</h3>
            <h3 className="text-lg">Field Two : {fieldTwo}</h3>
            <h3 className="text-lg">Field Three : {fieldThree}</h3>
            <h3 className="text-lg">Field Four : {fieldFour}</h3>
          </div>
        </form>
      )}
    </>
  );
};

export default ProjectSummary;

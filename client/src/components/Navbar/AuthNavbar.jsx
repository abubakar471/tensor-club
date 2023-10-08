import { Button } from "@mui/material";

const AuthNavbar = ({
  openNewProject,
  setOpenNewProject,
  activeField,
  fieldOne,
  setFieldOne,
  fieldTwo,
  setFieldTwo,
  fieldThree,
  setFieldThree,
  fieldFour,
  setFieldFour,
  setProjectReady,
}) => {
  return (
    <div className="bg-[#001336] w-full min-h-[50px]">
      <div className="flex items-center justify-between 800px:justify-end md:justify-end lg:justify-end xl:justify-end">
        <div className="mx-2 block 800px:hidden md:hidden lg:hidden xl:hidden">
          <img src="/images/logo.png" alt="logo" className="w-[160px]" />
        </div>
        <div className="flex items-center justify-end p-4">
          <div className="mx-2">
            <Button
              onClick={() => {
                // setFieldOne("");
                // setFieldTwo("");
                // setFieldThree("");
                // setFieldFour("");
                setProjectReady(false);
                setOpenNewProject(!openNewProject);
              }}
              variant="contained"
              className="bg-[#ca4684fb] text-white !text-[10px] 800px:!text-[14px] 
            md:!text-[14px] lg:!text-[14px] xl:!text-[14px]"
            >
              New Project
            </Button>
          </div>

          {/* user button */}
          <div className="w-[50px] h-[50px] rounded-full bg-orange-500 text-white flex items-center justify-center">
            AB
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;

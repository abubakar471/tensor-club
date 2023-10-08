import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const Sidebar = () => {
  return (
    // shadow-[#819ae0]
    <div className="bg-gradient-to-b from-[#001336] via-[#2a0635] to-[#071838] shadow-[#c269a7] shadow-xl w-full h-full p-4">
      <Link href="/" className="w-full">
        <img
          src="/images/logo2.png"
          className="w-[200px] h-auto"
          alt="logo"
          loading="lazy"
        />
      </Link>

      <div className="my-8 relative">
        <input
          type="text"
          placeholder="search"
          className="indent-6 
            w-full p-1 text-white rounded-full bg-[#131212] focus:outline-none"
          style={{
            boxShadow: "0 .125px 2px rgba(145,154,145)",
          }}
        />
        <ManageSearchIcon className="absolute top-1 right-2 text-[#da288ad5]" />
      </div>
    </div>
  );
};

export default Sidebar;

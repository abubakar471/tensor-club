import {
  ChatBubbleOutlineTwoTone
} from "@mui/icons-material";

const SidebarRecentCard = () => {
  return (
    <div className="w-full flex items-center gap-x-2 my-4 cursor-pointer
     hover:bg-gradient-to-r hover:from-blue-900 
     transition-all duration-300 ease-in-out p-2">
      <ChatBubbleOutlineTwoTone className="text-white" />
      <h1 className="text-gray-300">Metaphor project</h1>
    </div>
  );
};

export default SidebarRecentCard;
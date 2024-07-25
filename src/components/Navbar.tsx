import ShoppingPopover from "@/components/shopping/ShoppingPopover";

const Navbar = () => {
  return (
    <div className="p-4 bg-white shadow-sm rounded-lg flex w-full justify-between items-center">
      <ShoppingPopover />
    </div>
  );
};

export default Navbar;

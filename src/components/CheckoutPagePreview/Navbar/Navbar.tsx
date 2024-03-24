import Header from "./Header/Header";
import Stepper from "./Stepper/Stepper";

function Navbar() {

  return (
    <div className="w-full flex justify-center pt-6 mb-10">
      <div className="justify-center items-center flex-col max-w-[1280px] flex-1 px-8">
        <Header />
        <Stepper />
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import AddNotes1 from "../../assets/pincode/add_notes_1.png";
import AddNotes2 from "../../assets/pincode/add_notes_2.png";
import AddNotes2Mobile from "../../assets/pincode/add_notes_2_mobile.png";

const AddNotesBanner = () => {
  return (
    <div className="-mx-6 mt-8 flex flex-col justify-center bg-transparentPincodeYellow px-6 lg:flex-row lg:justify-between">
      <div className="flex w-full justify-center lg:ml-16 lg:block xl:ml-20">
        <img src={AddNotes1} alt="" className="max-w-[300px]" />
      </div>
      <div className="xl:max-w-[500px]: hidden max-w-[400px] py-20 lg:block">
        <img src={AddNotes2} alt="" />
      </div>
      <div className="max-w-[316px] pb-6 pt-4 lg:hidden">
        <img src={AddNotes2Mobile} alt="" />
      </div>
    </div>
  );
};

export default AddNotesBanner;

import React from "react";
import AddNotes1 from "../../assets/pincode/add_notes_1.png";
import AddNotes2 from "../../assets/pincode/add_notes_2.png";
import AddNotes2Mobile from "../../assets/pincode/add_notes_2_mobile.png";

const AddNotesBanner = () => {
  return (
    <div className="-mx-6 mt-8 flex flex-col justify-center bg-transparentPincodeYellow px-6 lg:flex-row lg:justify-between lg:space-x-10">
      <div className="flex w-full justify-center lg:ml-10 lg:block xl:ml-20">
        <img
          src={AddNotes1}
          alt=""
          className="max-w-[300px] lg:max-w-[400px]"
        />
      </div>
      <div className="hidden max-w-[400px] py-20 lg:block xl:max-w-[650px]">
        <img src={AddNotes2} alt="" />
      </div>
      <div className="max-w-[316px] pb-6 pt-8 lg:hidden">
        <img src={AddNotes2Mobile} alt="" />
      </div>
    </div>
  );
};

export default AddNotesBanner;

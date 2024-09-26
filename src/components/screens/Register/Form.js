import React, { useContext, useState } from "react";
import sidepic from "../../../assets/side.webp";
import { PlacesContext } from "../../../utils/Context";
import axios from "axios";
import { TbLoader3 } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import { nanoid } from "nanoid";
const Form = () => {
  const { handlePlaces } = useContext(PlacesContext);
  const [form, setForm] = useState({
    id: nanoid(),
    name: "",
    description: "",
    location: "",
    open_hour: "",
    close_hour: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState(false);

  const presetKey = "dpnntkvv";
  const cloudName = "dw990fqft";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading((prev) => !prev);
    setTimeout(() => {
      handlePlaces(form);
      setForm({
        id: nanoid(),
        name: "",
        description: "",
        location: "",
        open_hour: "",
        close_hour: "",
        image: "",
      });
      document.getElementById("pic").value = "";
      setIsLoading((prev) => !prev);
    }, 1000);

    // url = res.data.secure_url;

    // setForm({ ...form, image: res.data.secure_url });
    // console.log(form);
    // setForm((prev) => {
    //   return { ...prev, image: res };
    // });
    // handlePlaces(form);
    // setIsLoading(false);
    // setForm({
    //   name: "",
    //   description: "",
    //   location: "",
    //   open_hour: "",
    //   close_hour: "",
    //   image: null,
  };

  const handleImage = (event) => {
    console.log(event.target.files[0]);
    setImageURL(event.target.files[0]);
    console.log(imageURL);
    setLoadingImage(true);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", imageURL);
    formData.append("upload_preset", presetKey);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => {
        setImageURL(res.data.secure_url);
        setUploading(false);
        setError(false);

        setForm((prev) => {
          return { ...prev, image: imageURL };
        });
        setTimeout(() => {
          setLoadingImage(false);
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        setUploading(false);
        setIsLoading(false);
        setError(true);
      });
  };

  return (
    <>
      <h2 className="md:text-2xl text-center my-5 md:my-16 font-semibold text-[#3ccf91]">
        Register a new tourist attraction
      </h2>
      <div className=" mx-5 md:mx-20 flex mb-10 justify-center md:gap-20">
        <img
          src={sidepic}
          alt="contact-side-pic"
          className="rounded-3xl hidden lg:block md:w-2/5"
        />

        <form
          className="md:border md:w-2/5 rounded-3xl p-5 md:p-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-sm md:text-lg text-gray-500">
            Provide the details of the new tourist attraction you would like to
            showcase
          </h2>
          <div className="input flex flex-col space-y-5 my-5">
            <input
              type="text"
              placeholder="Name of place"
              className="border p-1 text-sm md:text-base md:p-3"
              onChange={handleChange}
              name="name"
              value={form.name}
              required
            />
            <input
              type="location"
              placeholder="Location"
              className="border p-1 text-sm md:text-base md:p-3"
              onChange={handleChange}
              name="location"
              value={form.location}
              required
            />
            <div className="hour flex flex-row gap-10 justify-between">
              <div className="open-hour flex flex-col gap-2 w-1/2">
                <label htmlFor="open-hour" className="text-sm text-gray-500">
                  Opening Hour
                </label>
                <input
                  type="time"
                  className="border p-1 text-sm md:text-base md:p-3"
                  onChange={handleChange}
                  name="open_hour"
                  value={form.open_hour}
                  required
                />
              </div>
              <div className="close-hour flex flex-col gap-2 w-1/2">
                <label htmlFor="close-hour" className="text-sm text-gray-500">
                  Close Hour
                </label>
                <input
                  type="time"
                  className="border p-1 text-sm md:text-base md:p-3"
                  onChange={handleChange}
                  name="close_hour"
                  value={form.close_hour}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-end">
              <div className="upload flex flex-col gap-3">
                {" "}
                <label htmlFor="pic" className="text-sm md:text-base">
                  Upload a picture of the tourist site
                </label>
                <input
                  type="file"
                  required
                  name="image"
                  id="pic"
                  onChange={handleImage}
                  className="text-sm md:text-base"
                />
              </div>
              <div className="confirm">
                {loadingImage ? (
                  uploading ? (
                    <TbLoader3 size={22} className="animate-spin" />
                  ) : error ? (
                    <RxCrossCircled size={22} color="red" />
                  ) : (
                    <GiConfirmed size={22} color="green" />
                  )
                ) : (
                  ""
                )}
              </div>
            </div>

            <textarea
              className="border p-1 text-sm md:text-base md:p-3"
              placeholder="Description"
              onChange={handleChange}
              name="description"
              value={form.description}
              required
            ></textarea>
          </div>
          <button className="border w-full p-2 rounded-xl text-white bg-[#3ccf91] text-sm md:text-base flex items-center justify-center gap-5">
            {isLoading ? "Submitting" : "Submit"}
            {isLoading ? <TbLoader3 size={25} className="animate-spin" /> : ""}
          </button>
        </form>
      </div>
    </>
  );
};

//Zormor is a software company that would be amongst the top software industry in a few years to come
export default Form;

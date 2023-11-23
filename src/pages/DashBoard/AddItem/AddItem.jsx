import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // now send data to database by axiosSecure;

      const menuRes = await axiosSecure.post("/menu", menuItem);
    //   console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success popup
        Swal.fire({
          position: "top",
          icon: "success",
          title: "successfully added menuItem",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
    // console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        subHeading={"---What is new?---"}
        heading="ADD AN ITEM"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="md:flex gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-success w-full "
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              className="textarea textarea-success"
              {...register("recipe")}
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose File</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button type="submit" className="btn btn-warning">
            <FaUtensils></FaUtensils>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;

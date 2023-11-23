
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const UpdateItem = () => {

    const menu = useLoaderData();
    console.log(menu)

    return (
        <div>
            <SectionTitle subHeading={'---update your product---'} heading={'UPDATE ITEM'}></SectionTitle>
        </div>
    );
};

export default UpdateItem;
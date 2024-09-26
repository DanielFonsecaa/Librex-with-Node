import { useParams } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();
  return <div>Edit book {id}</div>;
};

export default EditForm;

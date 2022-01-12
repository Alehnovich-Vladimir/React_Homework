import { useParams } from "react-router-dom";
import './index.css';

const Figure = () => {

    const params = useParams();
    
    const style = {
      backgroundColor: params.colors,
      borderRadius: params.types === "circle" ? `10rem` : 0,
    };
  
    return (
      <>
        <div className={params.types} style={style}>
          {params.types}
        </div>
      </>
    );
};
  
export default Figure;
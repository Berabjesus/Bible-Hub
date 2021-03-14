import React from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RotateSpinner } from "react-spinners-kit";
import sidebarCss from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassages } from "../../actions/passagesAction";

const Sidebar = ({ id }) => {
  const [slide, setSlide] = React.useState("slideRight");
  const [contentState, setContentState] = React.useState("d-flex");
  const [arrowState, setArrowState] = React.useState(faArrowLeft);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.passage);
  console.log(data);

  React.useEffect(() => {
    dispatch(fetchPassages(id))
  }, []);
  const handleToggle = () => {
    if (slide === "slideRight") {
      setSlide("slideLeft");
      setContentState("d-none");
      setArrowState(faArrowRight);
    } else {
      setSlide("slideRight");
      setArrowState(faArrowLeft);
      setTimeout(() => {
        setContentState("d-flex");
      }, 300);
    }
  };
  return (
    <aside className={`row d-flex pb-5 ${sidebarCss.aside} ${sidebarCss[slide]}`}>
      <div className={`flex-column text-white col-9 ${sidebarCss.passage} ${contentState}`}>
        <h6 className="mx-auto mb-1 pb-1 border-bottom w-100 text-center">{id} Books</h6>

        {
          data.loading ? (
            <span className={`${sidebarCss.centered}`}>
              <RotateSpinner size={60} color="white" loading={true} />
            </span>
          ) : 
          data.error.length > 0 ? (
            <span className={`text-white centered`}>
              <h3>Error fetching data, Try again later</h3>
            </span>
          ) : 
          (
          data.passages.books && data.passages.books.map((item) => {
            return <button key={`${id}-${item.passage}`} className={`${sidebarCss.button}`}>{item.passage} </button>;
          })
          )
        }
      </div>
      <div
        className={`flex-column text-white text-center border-left border-light px-1 ${contentState}`}
      >
        <small className="mx-auto">Ch</small>
      </div>
      <button
        className={` align-self-center ${sidebarCss.toggle}`}
        onClick={handleToggle}
      >
        <FontAwesomeIcon
          icon={arrowState}
          style={{ color: "White", fontSize: "15px" }}
        />
      </button>
    </aside>
  );
};

export default Sidebar;

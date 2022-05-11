import React, { useRef, useEffect } from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MsgIcon from "@material-ui/icons/SpeakerNotes";
import PropTypes from "prop-types";

import "./ItemPlanHoy.css";

const ItemPlanHoy = ({ colorSquare, calls, msgs, title }) => {
  // Validaciones
  if (colorSquare == null)
    colorSquare =
      "-webkit-linear-gradient(left, rgba(147, 195, 240, 1) 0%, rgba(9, 79, 153, 1) 100%)";
  if (calls == null) calls = 0;
  if (msgs == null) msgs = 0;
  if (title == null) title = "";

  // Referencias a elementos
  const refSquare = useRef();
  // Objeto de estilo para el número
  const styleNumber = {
    background: colorSquare,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  useEffect(() => {
    refSquare.current.style.background = colorSquare;
    // eslint-disable-next-line
  }, [colorSquare]);
  return (
    <div className="inline-top-div card-page container-item-plan-hoy">
      <div ref={refSquare} className="sqare-number">
        <div className="circle-sqare-number"></div>
        <p style={styleNumber} className="number-square-number">
          {calls + msgs}
        </p>
      </div>
      <div className="text-item-plan-hoy">
        <p>{title}</p>
        <table>
          <tbody>
            <tr>
              <td>
                <PhoneIcon fontSize="small" />
              </td>
              <td>{calls}</td>
            </tr>
            <tr>
              <td>
                <MsgIcon fontSize="small" />
              </td>
              <td>{msgs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

//validación de types
ItemPlanHoy.propTypes = {
  colorSquare: PropTypes.string,
  calls: PropTypes.number.isRequired,
  msgs: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ItemPlanHoy;

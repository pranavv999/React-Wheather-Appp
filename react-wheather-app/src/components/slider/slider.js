import React from "react";
import './slider.css'

const Slider = (props) => {
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);

  React.useEffect(() => {
    const interVal = setInterval(() => {
      setCurrentItemIndex((val) =>
        val + 1 === props.data.length ? 0 : val + 1
      );
    }, props.delay);

    return () => clearInterval(interVal);
  }, []);
  return <h1 className="slider-title">{props.data[currentItemIndex]}</h1>;
};

Slider.defaultProps = {
  delay: 3000,
  data : []
};

export default Slider;

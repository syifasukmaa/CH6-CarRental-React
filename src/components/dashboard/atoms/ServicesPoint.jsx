import React from 'react';

export default function ServicesPoint(props) {
  const { pointText } = props;
  return (
    <p>
      <span>
        <img
          src="/assets/icon/checklis.svg"
          alt="icon"
        />
      </span>
      {pointText}
    </p>
  );
}

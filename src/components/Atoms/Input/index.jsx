import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { chooseVariantInput } from "@/utils/chooseVariant";
import "./_.module.scss";

function Input({ type, variant, ...anotherProps }) {
  const className = classNames(
    `p-3 rounded block bg-gray-dark outline-0 ${chooseVariantInput(variant)}`,
  );
  const typeFinal = type || variant;
  const input = (
    <input
      className={className}
      type={typeFinal}
      data-testid="input"
      {...anotherProps}
    />
  );

  return (
    <>
      {type === "checkbox" ? (
        <div className="checkmark-container">
          {input}
          <span className="checkmark"></span>
        </div>
      ) : (
        <input
          className={className}
          type={variant}
          data-testid="input"
          {...anotherProps}
        />
      )}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

export { Input };

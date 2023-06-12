import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { chooseVariantButton } from "@/utils/chooseVariant";

function Button({
  children,
  variant,
  className: classNameLocal,
  ...anotherProps
}) {
  const className = classNames(
    `p-3 rounded flex items-center gap-2 ${chooseVariantButton(variant)}`,
    classNameLocal,
  );

  return (
    <button className={className} {...anotherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export { Button };

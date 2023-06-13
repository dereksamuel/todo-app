import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { chooseVariantText } from "@/utils/chooseVariant";

function Text({ variant, children, className: classNameLocal }) {
  const className = classNames(
    `block ${chooseVariantText(variant)}`,
    classNameLocal,
  );

  return variant === "title" ? (
    <h1 data-testid="title" className={className}>
      {children}
    </h1>
  ) : variant === "subtitle" ? (
    <h2 data-testid="subtitle" className={className}>
      {children}
    </h2>
  ) : variant === "subtitle-filter" ? (
    <h3 data-testid="subtitle-filter" className={className}>
      {children}
    </h3>
  ) : variant === "small" ? (
    <small data-testid="small" className={className}>
      {children}
    </small>
  ) : (
    <p data-testid="p" className={className}>
      {children}
    </p>
  );
}

Text.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export { Text };

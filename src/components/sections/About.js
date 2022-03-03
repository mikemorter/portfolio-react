import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplits = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "About",
    paragraph:
      "Creativity is what drives me. Whether it is music, videography, or software development, I try to bring a creative aspect to everything. This is why I have a passion for software development. There are so many ways to express your creativity and expertise. Within all of my endeavors, I have been able to learn how to work with a team. Teamwork is essential to make things happen, and I thrive in a team environment. If you are looking to add a full-stack software engineer to your team, please reach out to me.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            id="about"
          />
        </div>
      </div>
    </section>
  );
};

FeaturesSplits.propTypes = propTypes;
FeaturesSplits.defaultProps = defaultProps;

export default FeaturesSplits;

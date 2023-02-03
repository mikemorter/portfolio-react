import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
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

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Projects",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            id="portfolio"
          />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  JavaScript | React | Ruby
                </div>
                <h3 className="mt-0 mb-12">My Right Horse</h3>
                <p className="m-0">
                  My Right Horse is an amazing organization that allows people to adopt horses.
                  I was able to create the ability for users to make adopter accounts and favorite
                  their favorite horses. This allows users to have a better experience and helps
                  horses to be adoped quicker.{" "}
                  <a href="https://www.myrighthorse.org/">
                    here
                  </a>
                  .
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/MRH.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                  href="https://www.myrighthorse.org/"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  JavaScript | React | Ruby
                </div>
                <h3 className="mt-0 mb-12">Homer Energy</h3>
                <p className="m-0">
                  Homer Energy is a wonderful company that helps to make hybrid power systems
                  technically optimal and maximally cost-effective. I was able to create the ability
                  to add, delete, and update modules on the admin and user user side. This solved
                  many bugs and allowed the company the ability to be flexible and customer focused.
                  You can find a link to the website{" "}
                  <a href="https://www.homerenergy.com/">
                    here
                  </a>
                  .
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/homer-energy.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  JavaScript | React | Express
                </div>
                <h3 className="mt-0 mb-12">GameTree</h3>
                <p className="m-0">
                  Gametree is an application that links gamers. One of the features that I
                  implimented was the ability to login with discord. This application is accesible
                  thorugh an application called Overwolf as well as the web and it required multiple
                  implementations. You can find the applciation{" "}
                  <a href="https://gametree.me/app/">
                    here
                  </a>
                  .
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/gametree.png")}
                  alt="Features split 01"
                  tag="a"
                  width={528}
                  height={396}
                  href="https://gametree.me/app/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;

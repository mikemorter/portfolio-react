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
                  React App
                </div>
                <h3 className="mt-0 mb-12">Decoder Ring</h3>
                <p className="m-0">
                  This application showcases the tests and algorithms that I
                  wrote for a surprise birthday party for a friend who loves
                  escape rooms. I was able to write three different ciphers for
                  the escape room. Try it out{" "}
                  <a href="https://mikemorter.github.io/Project_Decoder_Ring_1/">
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
                  src={require("./../../assets/images/DecoderRing1.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                  href="https://mikemorter.github.io/Project_Decoder_Ring_1/"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  React App
                </div>
                <h3 className="mt-0 mb-12">Pomodoro Timer</h3>
                <p className="m-0">
                  The Pomodor Timer is an app where users can create times for
                  focusing and times for breaks. Based on the Pomodoro
                  Technique, users are able to assign certain time lengths for
                  both the focus period and the break period. You can check out
                  the deployed app{" "}
                  <a href="https://pomodoro-timer-beige-chi.vercel.app/">
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
                  src={require("./../../assets/images/PomTimer.png")}
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
                  React App
                </div>
                <h3 className="mt-0 mb-12">Restaurant Reservation System</h3>
                <p className="m-0">
                  This application was made for my capstone project for Thinkful
                  Flex Software Engineering course. It is a reservation system
                  and table manager to be used to track reservations as well as
                  seat reservations to tables while updating their progress. The
                  entire application was made to meet various user stories that
                  the Thinkful course defined. The project's base code and
                  assignments can be viewed on its GitHub repository{" "}
                  <a href="https://github.com/mikemorter/restaurantreservation">
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
                  src={require("./../../assets/images/DashboardRest.png")}
                  alt="Features split 01"
                  tag="a"
                  width={528}
                  height={396}
                  href="https://github.com/mikemorter/restaurantreservation"
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

import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: (
      <Translate id="homepage.features.smell-of-bread.title"/>
    ),
    Svg: require("/img/landing_kenyer.svg").default,
    description: (
      <>
        <Translate id="homepage.features.smell-of-bread.text.part1"/>{" "}
        <code>
          <Translate id="homepage.features.smell-of-bread.text.part2"/>
        </code>
        <Translate id="homepage.features.smell-of-bread.text.part3"/>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.ingredients.title"/>
    ),
    Svg: require("/img/landing_hozzavalok.svg").default,
    description: (
      <>
        <Translate id="homepage.features.ingredients.text1"/>{" "}
        <code>
          <Translate id="homepage.features.ingredients.text2"/>
        </code>
        <Translate id="homepage.features.ingredients.text3"/>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.engineer.title"/>
    ),
    Svg: require("/img/landing_metrics.svg").default,
    description: (
      <>
        <Translate id="homepage.features.engineer.text1"/>{" "}
        <code>
          <Translate id="homepage.features.engineer.csipetnyi"/>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.mokkaas"/>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.egykis"/>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.neemi"/>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.puupos"/>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.ek"/>
        </code>
        ?{" "}
        <Translate id="homepage.features.engineer.text2"/>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.hobby.title"/>
    ),
    Svg: require("/img/landing_hobby.svg").default,
    description: (
      <Translate id="homepage.features.hobby.text"/>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.sourdough.title"/>
    ),
    Svg: require("/img/landing_kovasz.svg").default,
    description: (
      <>
        <strong>A)</strong>{" "}
        <Translate id="homepage.features.sourdough.text1"/>
        <br />
        <strong>B)</strong>{" "}
        <Translate id="homepage.features.sourdough.text2"/>
        <br />
        <strong>
          <a
            href="docs/sourdough"
          >
            <Translate id="homepage.features.sourdough.text3"/>
          </a>
        </strong>
      </>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.tools.title"/>
      ),
    Svg: require("/img/landing_tools.svg").default,
    description: (
      <>
        <Translate id="homepage.features.tools.text1"/>
        <br />
        <Translate id="homepage.features.tools.text2"/>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({
      message: "Imádom a friss kenyeret, és te?",
      id: "homepage.features.smell-of-bread.title",
    }),
    Svg: require("/img/landing_kenyer.svg").default,
    description: (
      <>
        <Translate id="homepage.features.smell-of-bread.text.part1">
          Elalélsz a friss kenyér illatától? Nyitásra jársz a pékségbe, hogy
          forrón haraphasd a reggeli frissen sült 🍞🥐🥖? Hedonista vagy, vagy
          csak szeretsz jókat zabálni? Gyerekkorodban kiflivel a szádban
          rohangáltál miközben anyád próbálta feladni rád a kabátot az oviba
          menet? Apád folyton azt szajkózta, hogy
        </Translate>{" "}
        <code>
          <Translate id="homepage.features.smell-of-bread.text.part2">
            "Előbb fogyjon el a száraz, addig ne kezdjétek meg a frisset!"
          </Translate>
        </code>
        <Translate id="homepage.features.smell-of-bread.text.part3">
          ? Ha tehetnéd minden nap csakis frissen sült pékárut reggeliznél?
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Hozzávalók, lássuk csak!",
      id: "homepage.features.ingredients.title",
    }),
    Svg: require("/img/landing_hozzavalok.svg").default,
    description: (
      <>
        <Translate id="homepage.features.ingredients.text1">
          Mi a rák az a ..., mégis honnan vegyek ...? Előfordult, hogy
          belekezdtél egy receptbe, de a hozzávalók 1/10-e volt csak a spájzban,
          a feléről meg azt sem tudtad mi fán terem? Kerested az élesztőt a
          boltban, majd fél óra bóklászás után megkérdeztél egy eladót és azt
          mondta, hogy
        </Translate>{" "}
        <code>
          <Translate id="homepage.features.ingredients.text2">
            "soha nem is volt"
          </Translate>
        </code>
        <Translate id="homepage.features.ingredients.text3">
          ?! Maximum 3-4 alapanyagból szeretnél valami finomat sütni?
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Netán mérnöki vénával vagy megáldva?",
      id: "homepage.features.engineer.title",
    }),
    Svg: require("/img/landing_metrics.svg").default,
    description: (
      <>
        <Translate id="homepage.features.engineer.text1">
          Algoritmus alapján sütöd a palacsintát? Falra tudnál mászni a
          következő mértékegységektől:
        </Translate>{" "}
        <code>
          <Translate id="homepage.features.engineer.csipetnyi">
            csipetnyi
          </Translate>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.mokkaas">
            mokkáskanál
          </Translate>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.egykis">egy kis</Translate>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.neemi">némi</Translate>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.puupos">púpos</Translate>
        </code>
        ,{" "}
        <code>
          <Translate id="homepage.features.engineer.ek">ek</Translate>
        </code>
        ?{" "}
        <Translate id="homepage.features.engineer.text2">
          Esetleg már próbálkoztál sütéssel, de nem tudod értelmezni SI-ben az
          imént felsorolt mértékegységeket? Folyton azon merengsz sütés/főzés
          közben, hogy vajon szabványos méretű-e az evőkanál, amivel az imént
          kimérted a sót?
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Új hobbit keresel? Épp midlife krízisben vagy?",
      id: "homepage.features.hobby.title",
    }),
    Svg: require("/img/landing_hobby.svg").default,
    description: (
      <Translate id="homepage.features.hobby.text">
        Kipróbálnál valami új dolgot, de nem akarsz rá százezreket költeni és
        utálsz futni? Nem tudod hogy üsd el hasznosan a végtelen szabadidődet? A
        gondoskodás a középső neved? Imádsz vendégül látni másokat? Szeretnél
        egy igénytelen háziállatot? Érdekel a mikrobiológia? Ha az előző
        kérdések bármelyikével tudtál azonosulni, akkor jó helyen jársz! 😜
      </Translate>
    ),
  },
  {
    title: translate({
      message: "Tegyük fel hogy érdekel... de mégis honnan vegyek kovászt?",
      id: "homepage.features.sourdough.title",
    }),
    Svg: require("/img/landing_kovasz.svg").default,
    description: (
      <>
        <strong>A)</strong>{" "}
        <Translate id="homepage.features.sourdough.text1">
          Kérj valakitől. Ha nincs az ismerőseid között házipék, akkor próbálj
          meg kunyizni a legközelebbi pékségből, már 1 kanálnyi (20g) elég a
          kezdéshez. Ha nem tudnak adni, akkor az nem is igazi pékség!
        </Translate>
        <br />
        <strong>B)</strong>{" "}
        <Translate id="homepage.features.sourdough.text2">
          Csinálj magadnak! Kicsit macerás, eltart pár napig, de nem vészes.
          Csak víz kell hozzá meg a liszt.
        </Translate>
        <br />
        <strong>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/search?q=kov%C3%A1sz+k%C3%A9sz%C3%ADt%C3%A9se"
          >
            <Translate id="homepage.features.sourdough.text3">
              A google a barátod!
            </Translate>
          </a>
        </strong>
      </>
    ),
  },
  {
    title: translate({
      message: "Na jó, vágjunk bele! Kell valami Specialwerkzeug?",
      id: "homepage.features.tools.title",
    }),
    Svg: require("/img/landing_tools.svg").default,
    description: (
      <>
        <Translate id="homepage.features.tools.text1">
          ✅Fedeles dagasztó/kelesztőtál | ✅Konyharuhák | ✅Penge, vagy éles
          kés | ❌Szakajtó?! (Ha nincs, jó a ronggyal bélelt tésztaszűrő tál
          vagy bármilyen edény. A lényeg, hogy nedvszívó legyen!) | ✅Végül de
          nem utolsó sorban egy jó- kenyérvágó kés, illetve étvágy! 😉
        </Translate>
        <br />
        <Translate id="homepage.features.tools.text2">
          Megvan minden? Adjunk enni a kovásznak és hajrá!
        </Translate>
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

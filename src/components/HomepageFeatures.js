import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Imádom a friss kenyeret, és te?',
    Svg: require('../../static/img/landing_kenyer.svg').default,
    description: (
      <>
        Elalélsz a friss kenyér illatától?
        Nyitásra jársz a pékségbe, hogy forrón haraphasd a reggeli frissen sült 🍞🥐🥖?
        Hedonista vagy, vagy csak szeretsz jókat zabálni? Gyerekkorodban kiflivel a szádban rohangáltál miközben anyád próbálta feladni rád a kabátot az oviba menet?
        Apád folyton azt szajkózta, hogy <code>"Előbb fogyjon el a száraz, addig ne kezdjétek meg a frisset!"</code>?
        Ha tehetnéd minden nap csakis frissen sült pékárut reggeliznél?
      </>
    ),
  },
  {
    title: 'Hozzávalók, lássuk csak!',
    Svg: require('../../static/img/landing_hozzavalok.svg').default,
    description: (
      <>
        Mi a rák az a ..., mégis honnan vegyek ...?
        Előfordult, hogy belekezdtél egy receptbe, de a hozzávalók 1/10-e volt csak a spejzban, a feléről meg azt sem tudtad mi fán terem?
        Kerested az élesztőt a boltban, majd fél óra bóklászás után megkérdeztél egy eladót és azt mondta, hogy  <code>"soha nem is volt"</code>?!
        Maximum 3-4 alapanyagból szeretnél valami finomat sütni?
      </>
    ),
  },
  {
    title: 'Netán mérnöki vénával vagy megáldva?',
    Svg: require('../../static/img/landing_metrics.svg').default,
    description: (
      <>
        Algoritmus alapján sütöd a palacsintát? Falra tudnál mászni a következő mértékegységektől: <code>csipetnyi</code>, <code>mokkáskanál</code>, <code>egy kis</code>, <code>némi</code>, <code>púpos</code>, <code>ek</code>?
        Esetleg már próbálkoztál sütéssel, de nem tudod értelemzi SI-ben az imént felsorolt mértékegységeket?
        Folyton azon merengsz sütés/főzés közben, hogy vajon szabványos méretű-e az evőkanál amivel az imént kimérted a sót?
      </>
    ),
  },
  {
    title: 'Új hobbit keresel? Épp mid-life krízisben vagy?',
    Svg: require('../../static/img/landing_hobby.svg').default,
    description: (
      <>
        Kipróbálnál valami új dolgot, de nem akarsz rá százezreket költeni és utálsz futni?
        Nem tudod hogy üsd el hasznosan a végtelen szabadídődet?
        A gondoskodás a középső neved? Imádsz vendégül látni másokat?
        Szeretnél egy igénytelen háziállatot? Érdekel a mikrobiológia?
        Ha az előző kérdések bármelyikével tudtál azonosulni, akkor jó helyen jársz! 😜
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
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

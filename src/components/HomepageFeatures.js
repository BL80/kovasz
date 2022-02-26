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
        Előfordult, hogy belekezdtél egy receptbe, de a hozzávalók 1/10-e volt csak a spájzban, a feléről meg azt sem tudtad mi fán terem?
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
        Esetleg már próbálkoztál sütéssel, de nem tudod értelmezni SI-ben az imént felsorolt mértékegységeket?
        Folyton azon merengsz sütés/főzés közben, hogy vajon szabványos méretű-e az evőkanál, amivel az imént kimérted a sót?
      </>
    ),
  },
  {
    title: 'Új hobbit keresel? Épp midlife krízisben vagy?',
    Svg: require('../../static/img/landing_hobby.svg').default,
    description: (
      <>
        Kipróbálnál valami új dolgot, de nem akarsz rá százezreket költeni és utálsz futni?
        Nem tudod hogy üsd el hasznosan a végtelen szabadidődet?
        A gondoskodás a középső neved? Imádsz vendégül látni másokat?
        Szeretnél egy igénytelen háziállatot? Érdekel a mikrobiológia?
        Ha az előző kérdések bármelyikével tudtál azonosulni, akkor jó helyen jársz! 😜
      </>
    ),
  },
  {
    title: 'Tegyük fel hogy érdekel... de mégis honnan vegyek kovászt?',
    Svg: require('../../static/img/landing_kovasz.svg').default,
    description: (
      <>
        <strong>A)</strong> Kérj valakitől. Ha nincs az ismerőseid között házipék, akkor próbálj meg kunyizni a legközelebbi pékségből, már 1 kanálnyi (20g) elég a kezdéshez. Ha nem tudnak adni, akkor az nem is igazi pékség!<br />
        <strong>B)</strong> Csinálj magadnak! Kicsit macerás, eltart pár napig, de nem vészes. Csak víz kell hozzá meg a liszt.<br />
        <strong><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=kov%C3%A1sz+k%C3%A9sz%C3%ADt%C3%A9se">A google a barátod!</a></strong>
      </>
    ),
  },
  {
    title: 'Na jó, vágjunk bele! Kell valami Specialwerkzeug?',
    Svg: require('../../static/img/landing_tools.svg').default,
    description: (
      <>
        ✅Fedeles dagasztó/kelesztőtál | ✅Konyharuhák | ✅Penge, vagy éles kés | 
        ❌Szakajtó?! (Ha nincs, jó a ronggyal bélelt tésztaszűrő tál vagy bármilyen edény. A lényeg, hogy nedvszívó legyen!) | 
        ✅Végül de nem utolsó sorban egy jó- kenyérvágó kés, illetve étvágy! 😉<br/>
        Megvan minden? Adjunk enni a kovásznak és hajrá!
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

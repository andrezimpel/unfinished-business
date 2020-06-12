import React from "react";

import Container from '../container';
import TextRender from '../text/renderer';

import styles from './index.module.scss';

const text = `Der finale Buzzer ertönt, Spieler liegen sich in den Armen, Fans strömen aufs Parkett und feiern ihre Mannschaft, ihre Aufstiegshelden. So ähnlich hatten wir uns das Finale unserer Dokumentation über die Saison der NINERS Chemnitz gewünscht.

Wir haben die Mannschaft begleitet, in dieser einen Saison, die den Traum von Erstligabasketball in Chemnitz wahr werden lassen sollte. Vom Trainingsauftakt, über die Hauptrunde bis hin zum plötzlichen Saisonabbruch durch die weltweite Corona-Pandemie. Wie erlebten die Spieler und Verantwortlichen diese Ausnahmesituation. Und was bleibt von einer Saison, in der man zwar sein Ziel erreicht hat, sich aber nicht wirklich darüber freuen kann. All das und noch vieles mehr beleuchtet UNFINISHED BUSINESS.

Der Film wird voraussichtlich im Herbst 2020 veröffentlicht. Bis dahin: stay tuned.

\\- Thomas Höppner
&nbsp;&nbsp;VideoVision GmbH`;

const Statement = () => {
  return (
    <div className={styles.statement}>
      <Container>
        <TextRender text={text}/>
      </Container>
    </div>
  )
};

export default Statement;

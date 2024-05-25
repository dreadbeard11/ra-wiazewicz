import Container from "@/app/_components/container";
// import { ThemeSwitch } from "@/app/_components/ThemeSwitch";
import { Intro } from "@/app/_components/intro";
import ThemeSwitch from "@/app/_components/ThemeSwitch";

export default function Index() {

  return (
    <main>
      <Container>
        <div className="space-y-8">
          <ThemeSwitch />
        <Intro />
     

<div>
<h2 className="text-2xl">Korrespondenzsprachen</h2>

deutsch, englisch, französisch, niederländisch
</div>
<div>
<h2 className="text-2xl">Anschrift</h2>

Stubenrauchstr. 70
12161 Berlin Friedenau
Tel: 030 44049982
Mobil: 0172 3905208
Email: ra@wiazewicz.de
  
</div>
<div>
        
Information nach dem Telemediengesetz

Umsatzsteuernummer: 210838591
</div>
<div>
Herr Wiazewicz ist Mitglied der Rechtsanwaltskammer Berlin und in Berlin zugelassen; Postulationsfähig vor allen Amts,-Land und Oberlandesgerichten/Kammergericht.

Die Berufshaftpflichtversicherung von Rechtsanwalt Wiazewicz (Versicherungs-Nr. 03.053.5511 50) besteht bei der Gothaer Versicherungsbank VVaG, Gothaer Allee 1, 50969 Köln.
</div>
<div>
Es gelten die folgenden berufsrechtlichen Regelungen:
        <ul>
<li>(a) Bundesrechtsanwaltsordnung (BRAO)</li>
<li>(b) Rechtsanwaltsvergütungsgesetz (RVG)</li>
<li>(c) Berufsordnung (BerufsO)</li>
<li>(e) Berufsregeln der Rechtsanwälte der Europäischen Gemeinschaft
(einsehbar auf dieser Homepage :www.brak.de)
      </li>  </ul>
  </div>      
Aufsichtsbehörde im Sinne des § 6 TDG ist die Rechtsanwaltskammer Berlin.

Haftungsauschluss

Die Informationen auf diesen Internetseiten wurden nach bestem Wissen zusammengestellt. Sie dienen der allgemeinen Information. Die hier gegebenen Informationen stellen keine rechtliche Beratung dar. Eine Haftung aufgrund der hier gegebenen allgemeinen Hinweise ist daher ausgeschlossen.

Als Service für den Benutzer enthalten diese Seiten außerdem Verweise (Links) zu Internetseiten anderer Anbieter. Auf die Gestaltung und die Inhalte der gelinkten Seiten habe ich keinen Einfluss. Ich übernehme keinerlei Gewähr oder Haftung für den Inhalt, die Aktualität, Korrektheit, Vollständigkeit, Qualität oder Quelle der auf diesen Seiten dargebotenen Informationen oder davon heruntergeladener Dateien. Ich bin in keiner Weise verantwortlich für die Internetseiten Dritter und distanziere mich von deren Inhalten ausdrücklich.
</div>
      </Container>
    </main>
  );
}

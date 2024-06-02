import Container from "@/app/_components/container";
// import { ThemeSwitch } from "@/app/_components/ThemeSwitch";
import { Intro } from "@/app/_components/intro";
// import ThemeSwitch from "@/app/_components/ThemeSwitch";

import { PhoneIcon, DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Index() {

  return (
    <main>
      <Container>
        <div className="space-y-18">
          
<div>
<h2>
Tätigkeitsbereiche</h2>
<ul>
  <li>Arbeitsrecht</li>
   <li> Ausländerrecht</li>
  <li> Asylrecht</li>
    <li>Familienrecht</li>
   <li> Kitarecht</li>
   <li> Mietrecht</li>
    <li>Strafverteidigung</li>
</ul>
</div>
     

<div>
<h2>Korrespondenzsprachen</h2>

deutsch, englisch, französisch, niederländisch
</div>
<div>
<h2>Anschrift</h2>
<div>Stubenrauchstr. 70</div>
<div>12161 Berlin Friedenau</div>
  <div className="space-x-8 flex flex-row">

<div><PhoneIcon className="w-4 inline" />Tel: 030 44049982 </div>
<div><DevicePhoneMobileIcon className="w-4 inline" />Mobil: 0172 3905208 </div>
<div><EnvelopeIcon className="w-4 inline" />Email: ra@wiazewicz.de </div>
  </div>
</div>
          <div className="space-y-8">

        
<h2>Information nach dem Telemediengesetz</h2>
<div>
<div className=" text-sm">Umsatzsteuernummer:</div>
  <div className="text-2xl font-mono">210838591</div>
</div>
<div>
Herr Wiazewicz ist Mitglied der Rechtsanwaltskammer Berlin und in Berlin zugelassen; Postulationsfähig vor allen Amts,-Land und Oberlandesgerichten/Kammergericht.
</div>
<div>
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
          <div>
Aufsichtsbehörde im Sinne des § 6 TDG ist die Rechtsanwaltskammer Berlin.
 </div>    
 </div>    
          <div>
     <h2>
Haftungsauschluss
       </h2>
Die Informationen auf diesen Internetseiten wurden nach bestem Wissen zusammengestellt. Sie dienen der allgemeinen Information. Die hier gegebenen Informationen stellen keine rechtliche Beratung dar. Eine Haftung aufgrund der hier gegebenen allgemeinen Hinweise ist daher ausgeschlossen.

Als Service für den Benutzer enthalten diese Seiten außerdem Verweise (Links) zu Internetseiten anderer Anbieter. Auf die Gestaltung und die Inhalte der gelinkten Seiten habe ich keinen Einfluss. Ich übernehme keinerlei Gewähr oder Haftung für den Inhalt, die Aktualität, Korrektheit, Vollständigkeit, Qualität oder Quelle der auf diesen Seiten dargebotenen Informationen oder davon heruntergeladener Dateien. Ich bin in keiner Weise verantwortlich für die Internetseiten Dritter und distanziere mich von deren Inhalten ausdrücklich. 
    </div>
</div>
      </Container>
    </main>
  );
}

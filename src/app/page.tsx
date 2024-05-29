import Container from "@/app/_components/container";
// import { ThemeSwitch } from "@/app/_components/ThemeSwitch";
import { Intro } from "@/app/_components/intro";
// import ThemeSwitch from "@/app/_components/ThemeSwitch";

import { PhoneIcon, DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Index() {

  return (
    <main>
      <Container>
        <div className="space-y-8">
          
<div>
<h2 className="text-2xl">
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
<h2 className="text-2xl">Korrespondenzsprachen</h2>

deutsch, englisch, französisch, niederländisch
</div>
<div>
<h2 className="text-2xl">Anschrift</h2>
<div>Stubenrauchstr. 70</div>
<div>12161 Berlin Friedenau</div>
<div><PhoneIcon className="h-4 w-4 inline" />Tel: 030 44049982 </div>
<div><DevicePhoneMobileIcon className="h-4 w-4 inline" />Mobil: 0172 3905208 </div>
<div><EnvelopeIcon className="h-4 w-4 inline" />Email: ra@wiazewicz.de </div>
  
</div>
<div className="border rounded-sm border-current p-4">
        
<h2 className="font-bold text-sm">Information nach dem Telemediengesetz</h2>

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
Aufsichtsbehörde im Sinne des § 6 TDG ist die Rechtsanwaltskammer Berlin.

</div>
      </Container>
    </main>
  );
}

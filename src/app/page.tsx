import Container from "@/app/_components/container";
// import { ThemeSwitch } from "@/app/_components/ThemeSwitch";
import { Intro } from "@/app/_components/intro";
// import ThemeSwitch from "@/app/_components/ThemeSwitch";

export default function Index() {

  return (
    <main>
      <Container>
        <div className="space-y-8">
          
        <Intro />
     

<div>
<h2 className="text-2xl">Korrespondenzsprachen</h2>

deutsch, englisch, französisch, niederländisch
</div>
<div>
<h2 className="text-2xl">Anschrift</h2>
<div>Stubenrauchstr. 70</div>
<div>12161 Berlin Friedenau</div>
<div>Tel: 030 44049982 </div>
<div>Mobil: 0172 3905208 </div>
<div>Email: ra@wiazewicz.de </div>
  
</div>
<div className="border border-2 rounded-xl border-current bg-[#00f1] p-4">
        
<h2 className="font-bold text-sm">Information nach dem Telemediengesetz</h2>

<div className=" text-sm">Umsatzsteuernummer:</div>
  <div className="text-2xl font-mono">210838591</div>
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

</div>
      </Container>
    </main>
  );
}

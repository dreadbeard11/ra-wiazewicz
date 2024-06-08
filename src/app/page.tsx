
import Container from "@/app/_components/container";

import {
  PhoneIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";

import { Map } from "@/app/_components/Map";

export default function Index() {
  return (
    <main>
      <Container>
        <div className="space-y-16 max-w-[1200px] leading-relaxed text-lg ">
          <div>
            <h2>Tätigkeitsbereiche</h2>
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

            <div className="max-w-[600px]">
              <Map />
            </div>
            <div>Stubenrauchstr. 70</div>
            <div>12161 Berlin Friedenau</div>

            <div className="space-y-2 sm:space-y-0 sm:space-x-16 sm:flex sm:flex-row pt-8">
              <div className="space-x-2 flex flex-row items-center">
                <div className="flex flex-row items-center">
                  <div className="mr-1 w-6 h-6 flex items-center justify-center rounded-full bg-base-content text-base-100">
                 <PhoneIcon className="w-4 h-4"/>
                  </div>
                  Tel:
                </div>
                <div>030 44049982 </div>
              </div>

             <div className="space-x-2 flex flex-row items-center">
                <div className="flex flex-row items-center">
                  <div className="mr-1 w-6 h-6 flex items-center justify-center rounded-full bg-base-content text-base-100">
                  <DevicePhoneMobileIcon className="w-4 h-4"/>
                </div>
                  Mobil:
                </div>
                <div>0172 3905208 </div>
              </div>

               <div className="space-x-2 flex flex-row items-center">
                <div className=" flex flex-row items-center">
                <div className="mr-1 w-6 h-6 flex items-center justify-center rounded-full bg-base-content text-base-100">
                  <EnvelopeIcon className="w-4 h-4" />
                </div>
                  Email:
                </div>
                <div>ra@wiazewicz.de </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2>Information nach dem Telemediengesetz</h2>
            
              <div className=" ">Umsatzsteuernummer: 210838591</div>
              
            
            <p>
              Herr Wiazewicz ist Mitglied der Rechtsanwaltskammer Berlin und in
              Berlin zugelassen; Postulationsfähig vor allen Amts,-Land und
              Oberlandesgerichten/Kammergericht.
            </p>
            <p>
              Die Berufshaftpflichtversicherung von Rechtsanwalt Wiazewicz
              (Versicherungs-Nr. 03.053.5511 50) besteht bei der Gothaer
              Versicherungsbank VVaG, Gothaer Allee 1, 50969 Köln.
            </p>
            <div>
              Es gelten die folgenden berufsrechtlichen Regelungen:
              <ul>
                <li>(a) Bundesrechtsanwaltsordnung (BRAO)</li>
                <li>(b) Rechtsanwaltsvergütungsgesetz (RVG)</li>
                <li>(c) Berufsordnung (BerufsO)</li>
                <li>
                  (e) Berufsregeln der Rechtsanwälte der Europäischen
                  Gemeinschaft (einsehbar auf dieser Homepage: www.brak.de)
                </li>{" "}
              </ul>
            </div>
            <p>
              Aufsichtsbehörde im Sinne des § 6 TDG ist die Rechtsanwaltskammer
              Berlin.
            </p>
          </div>
          <div className="border-t border-current md:border-none pt-8 pb-40">
            <h2 className="pb-4">Haftungsauschluss</h2>
            <p className="text-sm leading-relaxed">
            Die Informationen auf diesen Internetseiten wurden nach bestem
            Wissen zusammengestellt. Sie dienen der allgemeinen Information. Die
            hier gegebenen Informationen stellen keine rechtliche Beratung dar.
            Eine Haftung aufgrund der hier gegebenen allgemeinen Hinweise ist
            daher ausgeschlossen. Als Service für den Benutzer enthalten diese
            Seiten außerdem Verweise (Links) zu Internetseiten anderer Anbieter.
            Auf die Gestaltung und die Inhalte der gelinkten Seiten habe ich
            keinen Einfluss. Ich übernehme keinerlei Gewähr oder Haftung für den
            Inhalt, die Aktualität, Korrektheit, Vollständigkeit, Qualität oder
            Quelle der auf diesen Seiten dargebotenen Informationen oder davon
            heruntergeladener Dateien. Ich bin in keiner Weise verantwortlich
            für die Internetseiten Dritter und distanziere mich von deren
            Inhalten ausdrücklich.
              </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

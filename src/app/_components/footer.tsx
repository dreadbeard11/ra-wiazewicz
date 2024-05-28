import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Haftungsauschluss
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
     

Die Informationen auf diesen Internetseiten wurden nach bestem Wissen zusammengestellt. Sie dienen der allgemeinen Information. Die hier gegebenen Informationen stellen keine rechtliche Beratung dar. Eine Haftung aufgrund der hier gegebenen allgemeinen Hinweise ist daher ausgeschlossen.

Als Service für den Benutzer enthalten diese Seiten außerdem Verweise (Links) zu Internetseiten anderer Anbieter. Auf die Gestaltung und die Inhalte der gelinkten Seiten habe ich keinen Einfluss. Ich übernehme keinerlei Gewähr oder Haftung für den Inhalt, die Aktualität, Korrektheit, Vollständigkeit, Qualität oder Quelle der auf diesen Seiten dargebotenen Informationen oder davon heruntergeladener Dateien. Ich bin in keiner Weise verantwortlich für die Internetseiten Dritter und distanziere mich von deren Inhalten ausdrücklich.
</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

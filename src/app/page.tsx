import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";


export default function Index() {


  // const content = await markdownToHtml(heroPost.title || "");

  return (
    <main>
      <Container>
        <Intro />
     

      </Container>
    </main>
  );
}

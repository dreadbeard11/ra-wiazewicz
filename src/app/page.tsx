import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";

/*
/////////


import { PostHeader } from "@/app/_components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        
        <article className="mb-32">
         
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

////////
*/

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  // const content = await markdownToHtml(heroPost.title || "");

  return (
    <main>
      <Container>
        <Intro />
     
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      
      </Container>
    </main>
  );
}

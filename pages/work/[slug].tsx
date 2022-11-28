import { InferGetStaticPropsType } from "next";

import Container from "components/Container";
import { allWorks } from "contentlayer/generated";

import { useMDXComponent } from "next-contentlayer/hooks";


const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <div>
        <h1>{post.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allWorks.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params } ) => {
  const post = allWorks.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;


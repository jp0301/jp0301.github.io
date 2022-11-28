import Container from "components/Container";
import { allDailies } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import Image from 'next/image';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container>
      <div>
        <h1>{post.title}</h1>
        <Image src={post.thumbnailUrl} alt="thumbnail" width={1000} height={500} objectFit="cover"/>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allDailies.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allDailies.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;


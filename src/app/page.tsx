import { getAllPosts } from '@/data/posts';
import { HomeContainer } from '@/containers/HomeContainer';

export default async function Home() {
  const { data: posts } = await getAllPosts();

  return <HomeContainer posts={posts} />;
}

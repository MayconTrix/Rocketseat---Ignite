import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  created_at: string;
  title: string;
  body: string;
  createdAt: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}
export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );

        console.log(response.data);

        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </PostsListContainer>
    </>
  );
}

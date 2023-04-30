import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SearchBar from '@/components/SearchBar';

const Home: NextPage = () => {
  return (<>
  <p>Hello, CT3A!</p>
  <SearchBar />
  </>)
}

export default Home;
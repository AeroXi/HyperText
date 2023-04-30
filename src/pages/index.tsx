import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SearchBar from '@/components/SearchBar';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Wand2 } from 'lucide-react';

const Home: NextPage = () => {
  return (<>
    <div className="container mx-auto">
      <div className="mt-20 mb-8 flex justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      HyperText
    </h1>
      </div>
      <div className="mb-8 flex justify-center">
        
        <div className="">
        <SearchBar />
        </div>

      </div>
      <div className="flex justify-center items-center space-x-4">
        <Textarea className="w-1/3 h-48 border border-gray-300 rounded p-2" placeholder="左侧文本区域"></Textarea>
        <Button className="w-12 h-12 bg-blue-500 rounded-full text-white font-bold"><Wand2 /></Button>
        <Textarea className="w-1/3 h-48 border border-gray-300 rounded p-2" placeholder="右侧文本区域"></Textarea>
      </div>
    </div>

  </>)
}

export default Home;
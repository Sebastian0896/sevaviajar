
import Volver from '@/components/VolverComponente';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { marked } from 'marked';
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({ params }) {
  const {slug} = await(params);
  const post = getPostBySlug(await slug);
  console.log("Aqui", slug)

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-6 post">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
        </header>
      {/* Public Date */}
      <div className='py-4 flex md:justify-end'>
        <small className="text-gray-500">Publicado: <span className='text-gray-700'>{post.date}</span></small>
        
      </div>        
        {/* Content */}
        <article className="prose prose-lg max-w-none text-gray-700 mb-6">
          <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
        </article>

        {/* Back Button */}
        <div className="mt-6">
          <Volver volver="Blog"/>
        </div>
      </div>
    </div>
  
  );
}

  {/* <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <small className="text-gray-500">{post.date}</small>
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
  </article> */}
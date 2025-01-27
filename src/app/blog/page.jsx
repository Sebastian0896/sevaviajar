import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

const POSTS_PER_PAGE = 3; // Número de posts por página

export default async function Blog({ searchParams }) {
  // Obtener la página actual desde los parámetros de búsqueda
  const {page} = await searchParams
  const currentPage = parseInt( page || '1', 10); // Aquí usamos "page" directamente
  //console.log( page )
  // Obtener todos los posts
  const posts = getAllPosts();

  // Calcular la paginación
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  console.log(totalPages)

  return (
    <div className="container mx-auto p-4">
      {/* Grid de posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <div
            key={post.slug}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            <p className="text-gray-700 mt-4">{post.excerpt}</p>
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-between mt-8">
        {currentPage > 1 ? (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="text-blue-600 hover:underline"
          >
            Anterior
          </Link>
        ) : (
          <span className="text-gray-400 cursor-not-allowed">Anterior</span>
        )}
        {currentPage < totalPages ? (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="text-blue-600 hover:underline"
          >
            Siguiente
          </Link>
        ) : (
          <span className="text-gray-400 cursor-not-allowed">Siguiente</span>
        )}
      </div>
    </div>
  );
}

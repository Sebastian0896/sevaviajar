import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');
console.log(process.cwd())
// Obtener todos los posts
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
//console.log(postsDirectory)
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ''); // Eliminar extensión
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });
}

// Obtener contenido de un post
export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

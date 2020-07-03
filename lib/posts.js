import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

// postsディレクトリまでのパスを変数に格納する。
const postsDir = path.join(process.cwd(), "posts")

export function getSortedPostsData() {
  // パスを辿って、postsディレクトリ内のファイル名を収集する。
  const fileNames = fs.readdirSync(postsDir)

  const allPostsData = fileNames.map(fn => {
    // 拡張子を取り去ったファイル名をidに格納する。
    const id = fn.replace(/\.md$/, "")
    // 該当ファイルのパスを変数に格納する。
    const fullPath = path.join(postsDir, fn)
    // パスを辿って、該当ファイルの中身を変数か格納する。
    const fileContents = fs.readFileSync(fullPath, "utf8")
    // gray-matterを使って、ファイルの内容をよしなに変更する。
    const matterResult = matter(fileContents)
    // id（titleとdate）と中身を返す。
    return { id, ...matterResult.data } 
  })
  // idのdateプロパティを参照して表示順を決定する。
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir)
  return fileNames.map(fn => {
    return {
      params: {
        id: fn.replace(/\.md$/, "")
      }
    }
  })
}

// // ファイルシステムの代わりに外部APIエンドポイントからの投稿データを取得します。
// // ただし、どうやって作動させるのか？　名前がコンフリクトしてるのに？
// export async function getAllPostIds() {
//   const res = await fetch("..")
//   const posts = await res.json()
//   return posts.map(post => {
//     return {
//       params: {
//         id: post.id
//       }
//     }
//   })
// }


export async function getPostData(id) {
  const fullPath = path.join(postsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  // gray-matterを使って投稿のメタデータ部分をパースする。
  const matterResult = matter(fileContents)
  // remarkを使ってMDをHTMLに変換する
  // 関数getPostDataにasyncキーワードを追加したのは、
  // remarkにawaitを使用する必要があるから。
  // つまり、pages/posts/[id].jsのgetStaticPropsを
  // 更新して、getPostDataを呼び出すときに
  // awaitを使用する必要があるため。
  const processContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processContent.toString()
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
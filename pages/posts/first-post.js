import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FisrtPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Here is First Post!</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
      <h3>基本構造</h3>
      <p>
      ストラトキャスターの基本構造は、同じフェンダー社のテレキャスターを発展させたものといえる。従来のギターはボディとネックをニカワなどで接着して製造されていたが、テレキャスターは両者を木ねじで結合するという大胆な設計になっており（ボルトオンネック）、大量生産を可能にした。ボディは木取りや木目の関係で切り出した木材を接着したもの[1]を成形しており、内部に共鳴部（空洞部分）が無い構造である（ソリッドボディ）。ボディに共鳴部がないため、大音量で演奏してもハウリングを起こしづらい。ボディとネックは角度を持たずに接合されており、ヘッドとネックも角度をもたずに成形されている。
      <br />
      ストラトキャスターはそれらテレキャスターの構造をほぼそのまま受け継いだ上で、さらに簡略化が図られていた。具体的には、ピックアップやボリュームやスイッチといった電装部品を樹脂製のピックガードにまとめて取り付け、これをボディ表面に木ねじで固定するという方式の採用である[2]。そのため、ジャック（ボディに固定）を除けば、電装部品すべてをピックガードとともにポン付けできるようになった。この簡略化のお陰でボディやネックの加工と電装部品の配線をそれぞれ別工程にすることが可能になり、後年のコンポーネント・ギター（ボディやネックや電装品などを、純正以外のものと交換して作られた改造ギター）登場への道を開くことにもなった。
      <br />
      ストラトキャスターはテレキャスターと同様、本来はカントリー・ミュージックなどで使用することを想定して設計された。シンクロナイズド・トレモロ（後段で解説）も、カントリーやハワイアンで多用されるスティール・ギターのスライド奏法に近いサウンドを出すのが、本来の目的であった[注 1]。
      </p>
    </Layout>
  ) 
}
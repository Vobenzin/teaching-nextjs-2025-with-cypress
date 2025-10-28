import { getDb } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const db = getDb();

  const albums = await db
    .selectFrom("albums")
    .innerJoin("authors", "albums.author_id", "authors.id")
    .select([
      "albums.id",
      "albums.name",
      "albums.release_date",
      "authors.name as author_name",
      "authors.id as author_id",
    ])
    .execute();

  return (
  <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header>
          <p className="text-4xl font-bold" data-cy="title">Spotify</p>
        </header>
        
        <div className="grid grid-cols-2 gap-4" data-cy="albumCardsDiv">
          {albums.map((album) => (
            <div key={album.id} className="card w-64 bg-base-100 shadow-sm" data-cy="albumCard">
              <div className="card-body" data-cy="albumCardBody">
                <span className="badge badge-xs badge-warning" data-cy="albumCardPopSticker">Pop</span>
                <h2 className="text-3xl font-bold" data-cy="albumCardTitle">{album.name}</h2>

                <p>ID: {album.id}</p>

                <p data-cy="albumCardPrice">PRICE: 3$</p>
                <p>
                  Author:{" "}
                  <Link href={`/author/${album.author_id}`} data-cy={`AlbumCardAuthorLink${album.id}`}>
                    {album.author_name}
                  </Link>
                </p>
                <p>
                  Release Date: {new Date(album.release_date).toDateString()}
                </p>
                <div className="mt-6" data-cy="AlbumCardDetailLinkDiv">
                  <Link
                    className="btn btn-primary btn-block"
                    data-cy={`AlbumCardDetailLink${album.id}`}
                    href={`/album/${album.id}`}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  </>
  );
}

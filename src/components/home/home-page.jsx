import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data &&
      data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`}>
          <div className="card">
            <Image width={300} height={300} alt={ev.title} src={ev.image} />{" "}
            <div className="content">
              <h2>{ev.title}</h2> <p>{ev.description}</p>
            </div>
          </div>
        </Link>
      ))}
  </div>
);

import { env } from "next.config";
import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
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
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data &&
        data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`}>
            <div className="card">
              <Image width={300} height={300} alt={ev.title} src={ev.image} />{" "}
              <h2>{ev.title}</h2>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default AllEvents;

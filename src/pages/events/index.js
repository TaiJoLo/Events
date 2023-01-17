import AllEvents from "@/components/events/events-page";

const EventsPageIndex = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPageIndex;

export async function getStaticProps() {
  const { events_categories } = await import("../../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featureEvents = await getFeaturedEvents();

  return {
    props: {
      events: featureEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;

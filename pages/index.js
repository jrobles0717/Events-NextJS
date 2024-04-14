import EventList from "../components/events/event-list";
import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
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

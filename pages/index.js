import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEET_UPS = [
  {
    id: "m1",
    image:
      "https://www.thoughtco.com/thmb/s-sGgR7zQSq2tZlZMlD7uuY81Gk=/7360x4912/filters:fill(auto,1)/happy-red-panda-171399380-5b574325c9e77c005b690b41.jpg",
    title: "Red Panda",
    address: "asia",
    description: "this is meetup",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg",
    title: "Orca",
    address: "antartica",
    description: "this is meetup",
  },
];
function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEET_UPS}></MeetupList>
    </Layout>
  );
}
export default HomePage;

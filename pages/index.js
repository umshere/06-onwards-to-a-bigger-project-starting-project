import Layout from "../components/layout/Layout";
import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

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
function HomePage(props) {
  return (
    <Fragment>
        <Head>
            <title>
                React meetup
            </title>
            <meta
            name='description'
            content="Just Practicing">
            </meta>
        </Head>
    <MeetupList meetups={props.meetups}></MeetupList>;

    </Fragment>

  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Mangu123:Mangu123@cluster0.68wz6.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetsupCollection = db.collection("meetups");
  const meetUps = await meetsupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetUps.map((meetup) => ({
        id: meetup._id.toString(),
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}


// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//           meetups: DUMMY_MEET_UPS,
//         }
//       };

// }
export default HomePage;

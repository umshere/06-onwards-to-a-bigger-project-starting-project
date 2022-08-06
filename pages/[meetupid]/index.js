import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="add a new metup" content={props.meetupData.description}></meta>
      </Head>
      <MeetUpDetail
        address={props.meetupData.address}
        title={props.meetupData.title}
        description={props.meetupData.description}
        image={props.meetupData.image}
      ></MeetUpDetail>
    </Fragment>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Mangu123:Mangu123@cluster0.68wz6.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetsupCollection = db.collection("meetups");
  const meetUps = await meetsupCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetUps.map((meetup) => ({
      params: {
        meetupid: meetup._id.toString(),
      },
    })),
    // paths: [
    //   {
    //     params: {
    //       meetupid: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupid: "m2",
    //     },
    //   },
    // ],
  };
}
export async function getStaticProps(context) {
  const meetUpID = context.params.meetupid;

  const client = await MongoClient.connect(
    "mongodb+srv://Mangu123:Mangu123@cluster0.68wz6.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetsupCollection = db.collection("meetups");
  const selectedMeetUp = await meetsupCollection.findOne({
    _id: ObjectId(meetUpID),
  });
  client.close();

  console.log(meetUpID);
  return {
    props: {
      meetupData: {
        id: selectedMeetUp._id.toString(),
        title: selectedMeetUp.title,
        address: selectedMeetUp.address,
        image: selectedMeetUp.image,
        description: selectedMeetUp.description,
      },
    },
  };
}
export default MeetupDetails;

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// .com/new-meetup
function NewMeetupPage() {
  function addMeetUpHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>;
}

export default NewMeetupPage;

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// .com/new-meetup
function NewMeetupPage() {
  async function addMeetUpHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers:{
        'Content-type': 'application/json'
      }
    });
    const data  = await response.json();

    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>;
}

export default NewMeetupPage;

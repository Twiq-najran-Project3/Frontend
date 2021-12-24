import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Event.module.css";
import { Card, Container, Row, Col } from "react-bootstrap";
export default function Events({ data }) {
  return (
    <div>
      <Container>
        <Row sm={2}>
          <Col>
            <Card className={styles.card1}>
              <h2>{data.eventName}</h2>
              <img src={data.images}></img>
              <hr />
              <Card.Body>
                <Card.Title>city:{data.city}</Card.Title>
                <Card.Title>Price:{data.price}</Card.Title>
                <Card.Title>Event Description:</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <button className={styles.btn}>Book Now</button>
          </Col>
        </Row>

        <Row sm={2}>
          <Col>
            <Card className={styles.card1}>
              <h2>Terms & Conditions</h2>
              <hr />
              <Card.Body>
                <p>
                  The holder of this ticket abides by these terms and conditions
                  when issuing, using, or attempting to use the ticket. *
                  Tickets are non-cancellable, refundable, or switched Allowed
                  age to attend this event +12 * In purchasing this ticket, you
                  agree to abide by all the terms and conditions and adhere to
                  any other responsible terms and conditions or restrictions
                  provided by the organizer before or during the event.
                </p>
                <ul>
                  <li>
                    {" "}
                    In the event of a cancellation, postponement, or change of
                    the date of the event:
                  </li>
                  <li>
                    The ticket value will be refunded as a balance in the
                    electronic wallet with the service provider.
                  </li>
                  <li>
                    The customer has the right to use the credit to purchase a
                    new ticket for the same event or any other event provided by
                    the service provider.
                  </li>
                  <li> Credits must be used during the season only.</li>
                  <li>
                    The ticket must be added to the Tawakkalna application to be
                    able to enter.
                  </li>
                  <li>
                    The ticket holder is solely responsible for checking the
                    date, time, location, and the age restriction of the event.
                    Early arrival is recommended, and the organizer shall have
                    the right to refuse any late entries and the ticket holder
                    shall not have the right to claim for the reimbursement of
                    the ticket price or any compensation whatsoever.
                  </li>
                  <li>
                    {" "}
                    All tickets holders and their belongings may be subject to
                    search when entering the venue. Prohibited and dangerous
                    items will be confiscated. Any item which the organizer or
                    venue security personnel consider as security risk or that
                    may be used to damage the venue or interfere with the event
                    will be confiscated.
                  </li>
                  <li>backpacks are not allowed</li>
                  <li> All prices include VAT.</li>
                  <li>
                    {" "}
                    No professional cameras and video recorders are permitted at
                    the venue.
                  </li>
                  <li>
                    {" "}
                    The ticket holder consents to photographs, video, sound
                    recordings of ticket holder be captured and used in printed
                    and electronics media, including the internet as an attendee
                    at the venue.
                  </li>
                  <li>Reselling the ticket is strictly prohibited.</li>
                  <li>
                    The organizer has the right to remove whoever commits an act
                    that, in the opinion of the organizer, is considered to be
                    contra
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <h1>
              {data.price}
          </h1>
          <h3>
              {data.city}
          </h3> */}
    </div>
  );
}
export async function getServerSideProps({ params }) {
  console.log(params.eventsId);
  const res = await fetch(
    `http://localhost:5000/event/getEvent/${params.eventsId}`
  );

  console.log(res);
  const data = await res.json();

  return {
    props: { data },
  };
}

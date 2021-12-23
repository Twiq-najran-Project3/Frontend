export default function Events({data}){
  return(


      <div>
          <h1>
              {data.eventName}
          </h1>
          <h3>
              {data.city}
          </h3>
      </div>
  )
}
export async function getServerSideProps({params}){
  console.log(params.eventsId);
  const res = await fetch(`http://localhost:5000/event/getEvent/${params.eventsId}`)

  console.log(res)
  const data = await res.json()

  return{
      props:{data},
  }
}
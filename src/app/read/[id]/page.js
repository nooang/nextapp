export default async function Read(props) {
  const response = await fetch(`${[process.env.NEXT_PUBLIC_API_URL]}topics/${props.params.id}`, {cache : 'no-store'});
  const topic = await response.json();
  return(
    <>
      <h2>{topic.title}</h2>
      {topic.body}ㅋㅋ
    </>
  )
}
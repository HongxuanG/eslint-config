interface PropsType {
  name: string
}
const Helloworld = (props: PropsType) => {
  const { name } = props
  return <div>123123{name}</div>
}
export default Helloworld

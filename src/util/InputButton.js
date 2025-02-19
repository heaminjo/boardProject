export default function InputButton(props) {
  const { value, changeEvt } = props;
  return <input type="submit" onClick={changeEvt} value={value} />;
}

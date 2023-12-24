import './protfoliolist.scss'
const protfoliolist = ({title,active,setSelected,id}) => {
  return (
    <li className={active ? "protfoliolist active" : "protfoliolist"}
    onClick={()=>setSelected(id)}>
      {title}
    </li>
  );
};
export default protfoliolist
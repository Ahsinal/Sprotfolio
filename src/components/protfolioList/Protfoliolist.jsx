import './protfoliolist.scss'
const protfoliolist = ({title,active,setSelected}) => {
  return (
    <li className={active ? "protfoliolist active" : "protfoliolist"}>
      {title}
    </li>
  );
};
export default protfoliolist
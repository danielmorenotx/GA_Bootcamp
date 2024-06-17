const List = (props) => {
    return (
      <li>
        <a href={props.href}>{props.name}</a>
      </li>
    );
  };
  
  export default List;
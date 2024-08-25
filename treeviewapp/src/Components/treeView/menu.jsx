import MenuItem from "./menuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
}

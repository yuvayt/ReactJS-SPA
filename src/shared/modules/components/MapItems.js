import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Typographyz from "./Typographyz";

const MapItems = ({ items }) => {
  return items.map((items) => (
    <Link key={items.name} to={items.link}>
      <Button>
        <Typographyz text={items.name} />
      </Button>
    </Link>
  ));
};

export default MapItems;

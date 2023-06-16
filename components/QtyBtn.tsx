import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Button from "@mui/material/Button";

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Button
        size="small"
        color="error"
        variant="contained"
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? <TrashIcon className="w-4" /> : "-"}
      </Button>
      <p>{props.qty}</p>
      <Button
        color="primary"
        variant="contained"
        onClick={props.onIncrease}
        size="small"
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;

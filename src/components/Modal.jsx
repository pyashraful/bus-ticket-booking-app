import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 4, 3),
    borderRadius: 4,
    maxWidth: 400,
  },
  text: {
    textAlign: "center",
  },
}));

export default function ModalComponent({ open, setOpen }) {
  function handleClose() {
    setOpen(false);
  }

  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Zoom in={open}>
        <div className={classes.paper}>
          <p className={classes.text}>You cannot select more than 4 seats</p>
        </div>
      </Zoom>
    </Modal>
  );
}

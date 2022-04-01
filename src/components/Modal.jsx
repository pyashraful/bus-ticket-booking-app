import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalComponent({ open }) {
  const classes = useStyles();
  return (
    <Modal open={open} className={classes.modal}>
      <Fade in={open}>
        <div className={classes.paper}>
          <h2>h1</h2>
        </div>
      </Fade>
    </Modal>
  );
}

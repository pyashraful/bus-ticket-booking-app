import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    // outline: "none",
    // // "&:focus": {
    // //   outline: "none",
    // // },

    // "&:active": {
    //   outline: "none",
    // },
    // "&:focus": {
    //   outline: "none",
    // },
  },
  paper: {
    position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // width: 400,
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
    <Modal
      open={open}
      onClose={handleClose}
      // disableAutoFocus={true}
      className={classes.modal}
    >
      <Zoom in={open}>
        <div className={classes.paper}>
          <p className={classes.text}>You cannot select more than 4 seats</p>
        </div>
      </Zoom>
    </Modal>
  );
}

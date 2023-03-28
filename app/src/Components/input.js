import { makeStyles } from "@material-ui/core/styles";

const InputField = ({onChange,placeholder,value}) => {
  const classes = useStyles();
  return (
    <input
      style={{
        borderColor:"#D7D7DA",
      }}
      className={classes.root}
      required={true}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputField;

const useStyles = makeStyles({
  root: {
    fontStyle: "normal",
    fontSize: "16px",
    color: "#505062",
    borderStyle: "solid",
    display: "flex",
    width: "calc(100% - 34px)",
    height: "30px",
    padding: "9px 6px",
    borderWidth: "1px",
    margin: "12px",
    marginTop: "30px",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF !important",
    "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active": {
      WebkitBoxShadow: "0 0 0 30px #FAFAFA inset !important",
      boxShadow: "0 0 0 30px #FAFAFA inset !important",
    },
  },
});
import "./styles.css";
import { useForm } from "react-hook-form";
import ReactHookForm from "./form/ReactHookForm";
import { Button, Box } from "@mui/material";
import { Container } from "@material-ui/core";

const defaultValues = {
  name: "",
  email: "abc@xyz.com",
  address: "",
  country: { value: "", label: "" },
  state: { value: "", label: "" }
};

export default function App() {
  const { handleSubmit, reset, control, watch, resetField } = useForm({
    defaultValues
  });

  const onResetFormData = () => {
    reset(defaultValues);
  };
  return (
    <div>
      <div className="App">
        <h1>Hello!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px"
          }}
        >
          <p>React hook form with</p>
          <h2>Controller</h2>
        </div>
      </div>
      <Container maxWidth="sm">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="form"
        >
          <ReactHookForm
            watch={watch}
            control={control}
            resetField={resetField}
          />
          <Box
            my={2}
            sx={{ display: "flex", justifyContent: "center", gap: "8px" }}
          >
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button type="button" variant="outlined" onClick={onResetFormData}>
              Reset
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}

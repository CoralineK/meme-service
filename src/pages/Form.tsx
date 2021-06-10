import { TextField, Button, makeStyles, createStyles } from "@material-ui/core";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import { MemeType } from "../types";
import { useHistory } from "react-router-dom";
import { postMeme } from "../API";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 100px;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ec4c4c;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      width: "400px",
      marginTop: "30px",
    },
    button: {
      color: "#ec4c4c",
      borderColor: "#ec4c4c",
      marginTop: "30px",
    },
  })
);

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  url: Yup.string().required("Required"),
});

export default function AddMemeForm() {
  const id: string = uuid();
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container>
      <Title>Add new meme</Title>
      <Formik
        initialValues={{
          id: id,
          name: "",
          url: "",
          upvote: 0,
          downvote: 0,
          hot: false,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values: MemeType) => {
          postMeme(values);
          history.push("regular");
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="Name"
                name="name"
                onChange={handleChange}
                value={values.name}
                className={classes.input}
              />
              {errors.name && touched.name ? (
                <Error>{errors.name}</Error>
              ) : null}
            </div>
            <div>
              <TextField
                label="Image URL"
                name="url"
                onChange={handleChange}
                value={values.url}
                className={classes.input}
              />
              {errors.url && touched.url ? <Error>{errors.url}</Error> : null}
            </div>
            <Button type="submit" variant="outlined" className={classes.button}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

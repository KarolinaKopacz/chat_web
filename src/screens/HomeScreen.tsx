import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { NICK_NAME_STORAGE } from '../const/localStorageConst';

const HomeScreen = () => {
  const [validated, setIsValidated] = useState(false);
  const [userNick, setUserNick] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setIsValidated(true);

      return;
    }
    if (form.checkValidity() === true) {
      console.log('userNick', userNick);
      localStorage.setItem(NICK_NAME_STORAGE, JSON.stringify(userNick));
      navigate('/chat');
      setIsValidated(true);

      return;
    }
  };

  return (
    <div style={styles.form}>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formNick">
          <Form.Label style={styles.text}>Nick</Form.Label>
          <Form.Control
            type="text"
            required
            onChange={(event) => setUserNick(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Open the Chat
        </Button>
      </Form>
    </div>
  );
};

type styleType = 'form' | 'text';

const styles = {
  form: {
    width: '50%',
    margin: '80px auto',
  },
  text: {
    textAlign: 'left',
    width: '100%',
  },
} as Record<styleType, React.CSSProperties>;

export default HomeScreen;

// import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';
import InputWithForwardRef from './components/InputWithForwardRef';
import Button from './components/Button';
// import Container from './components/Container';
import { useRef } from 'react';

function App() {
  const customForm = useRef<FormHandle>(null);
  // const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    // Replace type casting (type assertion) by type guard
    // const extractedData = data as { name: string; age: string };
    // console.log(extractedData);

    if (
      !data ||
      typeof data !== 'object' ||
      !('name' in data) ||
      !('age' in data)
    ) {
      return;
    }

    // at this point, TypeScript knows that data MUST BE an object
    // with a name and age property
    // otherwise, the previous if statement would have returned
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <InputWithForwardRef type='text' label='Name' id='name' />
        <InputWithForwardRef type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      {/* <p>
        <Button href='https://google.com'>A Link</Button>
      </p> */}
      {/* <p>
        <Button el='button'>A Button</Button>
      </p>
      <p>
        <Button el='anchor' href='https://google.com'>
          A Link
        </Button>
      </p> */}
      {/* <Container as={Button} onClick={() => {}} type='button'>
        Click Me
      </Container>
      <InputWithForwardRef label='Test' id='test' ref={input} /> */}
    </main>
  );
}

export default App;

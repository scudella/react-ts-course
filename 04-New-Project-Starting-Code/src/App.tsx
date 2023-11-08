import Input from './components/Input';
import InputWithForwardRef from './components/InputWithForwardRef';
import Button from './components/Button';
import Container from './components/Container';
import { useRef } from 'react';

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p>
      {/* <p>
        <Button el='button'>A Button</Button>
      </p>
      <p>
        <Button el='anchor' href='https://google.com'>
          A Link
        </Button>
      </p> */}
      <Container as={Button} onClick={() => {}} type='button'>
        Click Me
      </Container>
      <InputWithForwardRef label='Test' id='test' ref={input} />
    </main>
  );
}

export default App;

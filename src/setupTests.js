import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const originalConsoleError = console.error;
console.error = (message) => {
  if (/Warning/.test(message)) return;
  originalConsoleError(message);
};

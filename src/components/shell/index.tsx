import { AppShell, Header } from '@mantine/core';
import './index.less';
import { Nav } from '../navbar';
import { Chatbox } from '../chatbox';
import { useGlobalStore } from '../../composerables/state';
import classNames from 'classnames';

const Shell = () => {
  const special = useGlobalStore(state => state.special);
  return (
   <div> <button>123123</button></div>
  );
}


export default  Shell;
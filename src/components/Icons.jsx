import Icon from '@ant-design/icons';
import { ReactComponent as leaf } from '../assets/icons/leaf.svg';
import { ReactComponent as gitee } from '../assets/icons/gitee.svg';
import { ReactComponent as bilibili } from '../assets/icons/bilibili.svg';

function LeafFilled(props) {
  return <Icon component={leaf} {...props} />;
}

function GiteeFilled(props) {
  return <Icon component={gitee} {...props} />;
}

function BilibiliFilled(props) {
  return <Icon component={bilibili} {...props} />;
}

export { LeafFilled, GiteeFilled, BilibiliFilled };
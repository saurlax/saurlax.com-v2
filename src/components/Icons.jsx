import Icon from '@ant-design/icons';
import { ReactComponent as saurlax } from '../assets/icons/saurlax.svg';
import { ReactComponent as gitee } from '../assets/icons/gitee.svg';
import { ReactComponent as bilibili } from '../assets/icons/bilibili.svg';
import { ReactComponent as leaf } from '../assets/icons/leaf.svg';

function SaurlaxFilled(props) {
  return <Icon component={saurlax} {...props} />;
}

function GiteeFilled(props) {
  return <Icon component={gitee} {...props} />;
}

function BilibiliFilled(props) {
  return <Icon component={bilibili} {...props} />;
}

function LeafFilled(props) {
  return <Icon component={leaf} {...props} />;
}

export { SaurlaxFilled, GiteeFilled, BilibiliFilled, LeafFilled };
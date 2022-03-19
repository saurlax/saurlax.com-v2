import Icon from '@ant-design/icons'
import saurlax from '../public/assets/icons/saurlax.svg'
import bilibili from '../public/assets/icons/bilibili.svg'
import gitee from '../public/assets/icons/gitee.svg'
import leaf from '../public/assets/icons/leaf.svg'

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
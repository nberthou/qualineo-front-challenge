import { PageHeader } from 'antd'

const Header = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#D4D4D4',
  }

  return <PageHeader title="JO 2020" backIcon={false} style={styles} />
}

export default Header


import type { NextPage } from 'next'
import { MenuScreen } from '../../screens/Menu'


export default function Product(props) {
  console.log('rodou aqui', props)

  return (
    <MenuScreen />
  )
}

export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log('rodou aqui também')

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}
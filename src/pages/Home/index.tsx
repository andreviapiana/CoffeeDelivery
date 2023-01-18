import { Description } from './components/Description'
import { Menu } from './components/Menu'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Description />
      <Menu />
    </HomeContainer>
  )
}

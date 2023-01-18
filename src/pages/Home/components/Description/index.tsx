import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  BenefitsContent,
  DescriptionContainer,
  DescriptionContent,
  Icons,
  TitleContent,
} from './styles'
import coffeeBanner from '../../../../assets/coffee-banner.png'

export function Description() {
  return (
    <DescriptionContainer>
      <DescriptionContent>
        <div>
          <TitleContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContent>

          <BenefitsContent>
            <Icons>
              <div className="iconWrapper yellow-dark">
                <ShoppingCart size={18} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </Icons>
            <Icons>
              <div className="iconWrapper gray">
                <Package size={18} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Icons>
            <Icons>
              <div className="iconWrapper yellow">
                <Timer size={18} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Icons>
            <Icons>
              <div className="iconWrapper purple">
                <Coffee size={18} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </Icons>
          </BenefitsContent>
        </div>

        <img
          src={coffeeBanner}
          alt="Imagem de um copo de café em meio a grãos de café soltos"
        />
      </DescriptionContent>
    </DescriptionContainer>
  )
}

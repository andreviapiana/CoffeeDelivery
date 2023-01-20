import { MapPinLine } from 'phosphor-react'
import {
  AddressContainer,
  CardTitle,
  FormContainer,
  FormTitle,
  Input,
  InputsContainer,
} from './styles'

export function AddressForm() {
  return (
    <AddressContainer>
      <CardTitle>
        <p>Complete seu pedido</p>
      </CardTitle>
      <FormContainer>
        <FormTitle>
          <div className="iconWrapper">
            <MapPinLine size={22} />
          </div>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormTitle>
        <InputsContainer>
          <Input placeholder="CEP" type="text" className="cep" />
          <Input placeholder="Rua" type="text" className="street" />
          <Input placeholder="Número" type="text" className="number" />
          <Input placeholder="Complemento" type="text" className="complement" />
          <Input placeholder="Bairro" type="text" className="district" />
          <Input placeholder="Cidade" type="text" className="city" />
          <Input id="uf" list="state" type="text" placeholder="UF" />
          <datalist id="state">
            <option value="AC" />
            <option value="AL" />
            <option value="AP" />
            <option value="AM" />
            <option value="BA" />
            <option value="CE" />
            <option value="DF" />
            <option value="ES" />
            <option value="GO" />
            <option value="MA" />
            <option value="MT" />
            <option value="MS" />
            <option value="MG" />
            <option value="PA" />
            <option value="PB" />
            <option value="PR" />
            <option value="PE" />
            <option value="PI" />
            <option value="RJ" />
            <option value="RN" />
            <option value="RS" />
            <option value="RO" />
            <option value="RR" />
            <option value="SC" />
            <option value="SP" />
            <option value="SE" />
            <option value="TO" />
          </datalist>
        </InputsContainer>
      </FormContainer>
    </AddressContainer>
  )
}
